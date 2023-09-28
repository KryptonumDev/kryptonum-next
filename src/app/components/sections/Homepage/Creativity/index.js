import React from "react";
import ReactMarkdown from "react-markdown";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from './styles.module.scss';


const Creativity = ({
  data: {
    creativity_Heading,
    creativity_Paragraph,
    creativity_SecondParagraph,
  }
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{creativity_Heading}</DecorativeHeading>
      <p>{creativity_Paragraph}</p>
      <ReactMarkdown>{creativity_SecondParagraph}</ReactMarkdown>
    </section>
  );
}
 
export default Creativity;