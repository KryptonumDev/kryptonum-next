import ReadingTime from "@/atoms/ReadingTime";
import Img from "@/utils/Img";
import { removeMarkdown } from "@/utils/functions";
import Link from "next/link";
import styles from "./styles.module.scss";

const BlogEntry = ({ data, smallEntry }) => {
  return (
    <div
      className={`entry${smallEntry ? " smallEntry" : ""} ${styles.wrapper}`}
    >
      <Img
        data={data.img}
        className={styles.img}
        width={230}
        height={230}
        quality="100"
      />
      <Link
        href={`/pl/blog/${data.slug.current}`}
        className={styles.link}
        aria-label={removeMarkdown(data.title)}
      ></Link>
      <h3 className={styles.title}>{removeMarkdown(data.title)}</h3>
      <p className={styles.subtitle}>{removeMarkdown(data.subtitle)}</p>
      <Link
        href={`/pl/zespol/${data.author[0].slug.current}`}
        className={styles.author}
      >
        <Img
          data={data.author[0].img}
          className={`personBorder`}
          height={48}
          width={48}
        />
        <span>{data.author[0].name}</span>
      </Link>
      <div className={styles.categories}>
        {data.categories.slice(0, 3).map((category, i) => (
          <Link href={`/pl/blog/kategoria/${category.slug.current}`} key={i}>
            {category.name}
          </Link>
        ))}
      </div>
      <ReadingTime content={data.contentRaw} />
      <span className={styles.createdAt}>{data._createdAt}</span>
    </div>
  );
};

export default BlogEntry;
