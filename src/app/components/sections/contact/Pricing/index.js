import Markdown from "@/utils/markdown";
import styles from './styles.module.scss';
import Button from "@/app/components/atoms/Button";

const Pricing = ({
  data: {
    pricing_Paragraph,
    pricing_Paragraph2,
    pricing_Cta,
  }
}) => {
  return (
    <section className={styles.section}>
      <Markdown className={styles.paragraph}>{pricing_Paragraph}</Markdown>
      <div>
        <Markdown className={styles.paragraph2}>{pricing_Paragraph2}</Markdown>
        <Button data={pricing_Cta} className={styles.cta}/>
      </div>
    </section>
  );
}
export default Pricing;