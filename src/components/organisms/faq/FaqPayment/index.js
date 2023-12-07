import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/utils/markdown";
import styles from './styles.module.scss';

const FaqPayment = ({
  data: {
    heading,
    paragraph,
    secondParagraph,
    thirdParagraph,
    text,
    list,
    additionalStyles
  }
}) => {
  return (
    <section className={`${styles.answer} ${additionalStyles}`}>
      <DecorativeHeading type="h3" className={styles.heading} decoration={false}>{heading}</DecorativeHeading>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      <Markdown className={styles.secondParagraph}>{secondParagraph}</Markdown>
      <Markdown className={styles.thirdParagraph}>{thirdParagraph}</Markdown>
      <p className={styles.text}>{text}</p>
      <ul className={styles.list}>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
export default FaqPayment