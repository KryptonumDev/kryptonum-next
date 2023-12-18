import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

const Creativity = ({ data: { creativity_Heading, creativity_Paragraph, creativity_SecondParagraph } }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{creativity_Heading}</DecorativeHeading>
      <p>{creativity_Paragraph}</p>
      <Markdown>{creativity_SecondParagraph}</Markdown>
    </section>
  );
};

export default Creativity;
