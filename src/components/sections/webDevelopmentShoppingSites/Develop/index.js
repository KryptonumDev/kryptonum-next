import Markdown from '@/utils/markdown';
import styles from './styles.module.scss';

const Develop = ({
  data: {
    develop_Paragraph1,
    develop_Paragraph2,
    develop_Paragraph3,
    develop_Paragraph4,
  }
}) => {
  return (
    <section className={styles.section}>
      <Markdown className={styles.paragraph1}>{develop_Paragraph1}</Markdown>
      <Markdown className={styles.paragraph2}>{develop_Paragraph2}</Markdown>
      <Markdown className={styles.paragraph3}>{develop_Paragraph3}</Markdown>
      <Markdown className={styles.paragraph4}>{develop_Paragraph4}</Markdown>
    </section>
  );
}
export default Develop;