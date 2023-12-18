import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

const LargeList = ({ isHeading, title, list, paragraph, paragraph2 }) => {
  return (
    <section className={styles.section}>
      {isHeading ? (
        <DecorativeHeading type="h3" className={`${styles.title} ${styles.heading}`}>
          {title}
        </DecorativeHeading>
      ) : (
        <Markdown className={`${styles.title} ${styles.titleParagraph}`}>{title}</Markdown>
      )}
      <ul className={styles.wrapper}>
        {list.map((item, i) => (
          <li className={styles.item} key={i}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {paragraph2 ? (
        <div className={styles.copy}>
          <Markdown className={styles.paragraph}>{paragraph}</Markdown>
          <Markdown className={styles.paragraph2}>{paragraph2}</Markdown>
        </div>
      ) : (
        <Markdown className={`${styles.paragraph} ${styles.singleParagraph}`}>{paragraph}</Markdown>
      )}
    </section>
  );
};
export default LargeList;
