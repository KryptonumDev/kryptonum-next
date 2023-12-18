import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

const FaqInfo = ({
  data: {
    paragraph,
    firstHeading,
    firstList,
    secondHeading,
    secondList,
    thirdHeading,
    thirdList,
    summary,
    additionalStyles,
  },
}) => {
  return (
    <section className={`${styles.answer} ${additionalStyles}`}>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      <DecorativeHeading type="h3">{firstHeading}</DecorativeHeading>
      <ul className={styles.list}>
        {firstList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <DecorativeHeading type="h3">{secondHeading}</DecorativeHeading>
      <ul className={styles.list}>
        {secondList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <DecorativeHeading type="h3">{thirdHeading}</DecorativeHeading>
      <ul className={styles.list}>
        {thirdList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <Markdown className={styles.summary}>{summary}</Markdown>
    </section>
  );
};
export default FaqInfo;
