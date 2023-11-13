import Link from "next/link";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from './styles.module.scss';

const categoryUrl = 'kategoria/';

const Categories = ({ 
  categories,
  categorySlug,
currentSlug 
}) => {
  const fullSlug = categorySlug + categoryUrl;
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">Co Cię **interesuje**?</DecorativeHeading>
      <div className={styles.categories}>
        {categories.map((category, i) => (
          <Link
            className={styles.active}
            href={category.slug.current == currentSlug ? categorySlug : `${fullSlug}${category.slug.current}`}
            key={i}
          >{category.name}</Link>
        ))}
      </div>
    </section>
  );
}
export default Categories