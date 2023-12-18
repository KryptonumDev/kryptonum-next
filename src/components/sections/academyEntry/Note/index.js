import { Error } from "@/components/atoms/Icons";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const Note = ({ heading, paragraph, attention }) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown components={{ p: "h3" }}>{heading}</Markdown>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.attention}>
        <Error />
        <Markdown>{attention}</Markdown>
      </div>
    </section>
  );
};

export default Note;
