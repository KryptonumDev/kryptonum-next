import Button from "@/components/atoms/Button";
import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

const Pricing = ({ data: { pricing_Paragraph, pricing_Paragraph2, pricing_Cta } }) => {
  return (
    <section className={styles.section}>
      <Markdown className={styles.paragraph}>{pricing_Paragraph}</Markdown>
      <div>
        <Markdown className={styles.paragraph2}>{pricing_Paragraph2}</Markdown>
        <Button data={pricing_Cta} className={styles.cta} />
      </div>
    </section>
  );
};
export default Pricing;
