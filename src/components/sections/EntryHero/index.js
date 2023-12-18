import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import { formatDateToPolishLocale } from "@/utils/functions";
import Link from "next/link";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const EntryHero = ({ title, subtitle, categories, categorySlug, _createdAt, img, author }) => {
  return (
    <section className={`${styles.wrapper} hero`}>
      <header className={author ? styles.hasAuthor : ""}>
        <DecorativeHeading>{title}</DecorativeHeading>
        <Markdown className={styles.subtitle}>{subtitle}</Markdown>
        {author && (
          <Link href={`/pl/zespol/${author[0].slug.current}`} className={styles.author}>
            <Img data={author[0].img} className={`personBorder ${styles.authorImg}`} sizes="64px" />
            <span>{author[0].name}</span>
          </Link>
        )}
        <div className={styles.categories}>
          {categories.map((category, i) => (
            <Link key={i} href={`${categorySlug}${category.slug.current}`}>
              {category.name}
            </Link>
          ))}
        </div>
        <p className={styles.createdAt}>{formatDateToPolishLocale(_createdAt)}</p>
      </header>
      <Img data={img} className={styles.img} priority={true} sizes="(max-width: 1199px) 100vw, 40vw" />
    </section>
  );
};
export default EntryHero;
