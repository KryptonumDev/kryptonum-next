import { Star } from "@/components/atoms/Icons";
import Markdown from "@/utils/markdown";
import styles from './styles.module.scss';

const FaqWhy = ({
  data: {
    heading,
    paragraph,
    list,
    summary,
    additionalStyles
  }
}) => {
  return (
    <section className={`${styles.answer} ${additionalStyles}`}>
      <div className={styles.copy}>
        <Markdown className={styles.heading}>{heading}</Markdown>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </div>
      <ul className={styles.list}>
        {list.map((item, i) => (
          <li key={i}>
            <Star />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Markdown className={styles.summary}>{summary}</Markdown>
    </section>
  );
}
export default FaqWhy;