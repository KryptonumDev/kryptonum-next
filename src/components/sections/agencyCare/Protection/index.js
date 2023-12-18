import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const Protection = ({
  data: { protection_Heading, protection_Paragraph, protection_Paragraph2, protection_Paragraph3, protection_List },
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{protection_Heading}</DecorativeHeading>
      <Markdown className={styles.paragraph}>{protection_Paragraph}</Markdown>
      <Markdown className={styles.paragraph2}>{protection_Paragraph2}</Markdown>
      <Markdown className={styles.paragraph3}>{protection_Paragraph3}</Markdown>
      <ul className={styles.wrapper}>
        {protection_List.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
export default Protection;
