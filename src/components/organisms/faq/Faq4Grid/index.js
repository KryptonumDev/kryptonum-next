import Button from "@/atoms/Button";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const Faq4Grid = ({ data: { heading, paragraph, secondParagraph, subheading, cta, additionalStyles } }) => {
  return (
    <section className={`${styles.answer} ${additionalStyles}`}>
      <Markdown className={styles.heading}>{heading}</Markdown>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      <Markdown className={styles.subheading}>{subheading}</Markdown>
      <div className={styles.secondParagraph}>
        <Markdown>{secondParagraph}</Markdown>
        {cta?.text && <Button data={cta} className={styles.cta} />}
      </div>
    </section>
  );
};
export default Faq4Grid;
