import Markdown from '@/utils/markdown';
import styles from './styles.module.scss';
import Button from '@/atoms/Button';

const Faq4Grid = ({
  data: {
    heading,
    paragraph,
    secondParagraph,
    subheading,
    cta,
    additionalStyles
  }
}) => {
  return (
    <section className={`${styles.answer} ${additionalStyles}`}>
      <Markdown className={styles.heading}>{heading}</Markdown>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      <Markdown className={styles.subheading}>{subheading}</Markdown>
      <div className={styles.secondParagraph}>
        <Markdown>{secondParagraph}</Markdown>
        {cta?.text && (
          <Button theme={cta.theme} to={cta.href} className={styles.cta}>{cta.text}</Button>
        )}
      </div>
    </section>
  );
}
export default Faq4Grid