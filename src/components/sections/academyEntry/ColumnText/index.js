import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const ColumnText = ({ heading, paragraph }) => {
  return (
    <section className={styles.wrapper}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
    </section>
  );
};
export default ColumnText;
