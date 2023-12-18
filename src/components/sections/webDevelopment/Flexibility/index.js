import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const Flexibility = ({
  data: { flexibility_Heading, flexibility_Claim, flexibility_Paragraph, flexibility_SecondParagraph, flexibility_Cta },
}) => {
  return (
    <section className={styles.wrapper}>
      <DecorativeHeading type="h2">{flexibility_Heading}</DecorativeHeading>
      <Markdown className={styles.claim}>{flexibility_Claim}</Markdown>
      <Markdown className={styles.paragraph}>{flexibility_Paragraph}</Markdown>
      <Markdown className={styles.secondParagraph}>{flexibility_SecondParagraph}</Markdown>
      <div className={`${styles.ctaWrapper} ctaWrapper`}>
        {flexibility_Cta.map((cta, i) => (
          <Button data={cta} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Flexibility;
