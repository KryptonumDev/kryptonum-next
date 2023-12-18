import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

const Bio = ({ data }) => {
  return (
    <section className={styles.section}>
      <Markdown>{data}</Markdown>
    </section>
  );
};
export default Bio;
