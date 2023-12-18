import Markdown from "@/components/atoms/Markdown";
import DecorativeHeading from "../../../atoms/DecorativeHeading";
import { Star } from "../../../atoms/Icons";
import MasonryList from "../../MasonryList";
import styles from "./styles.module.scss";

const UxAudit = ({ data: { heading, headline, paragraph, paragraph2, listHeading, list, ux } }) => {
  const { title, question, answer, when, whenList } = ux ? ux : {};
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      {headline && <Markdown className={styles.headline}>{headline}</Markdown>}
      {ux && <Markdown className={styles.title}>{title}</Markdown>}
      <div className={styles.column}>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Markdown className={styles.paragraph2}>{paragraph2}</Markdown>
      </div>
      {ux && (
        <>
          <div className={styles.column}>
            <Markdown className={styles.question}>{question}</Markdown>
            <Markdown className={styles.answer}>{answer}</Markdown>
          </div>
          <div className={styles.column}>
            <Markdown className={styles.when}>{when}</Markdown>
            <ul className={styles.whenList}>
              {whenList.map((item, i) => (
                <li key={i}>
                  <Star />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <MasonryList heading={listHeading} list={list} />
    </section>
  );
};
export default UxAudit;
