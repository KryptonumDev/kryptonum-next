import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const KeyElements = ({ heading, list }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ol className={styles.wrapper}>
        {list.map((item, i) => (
          <li className={styles.item} key={i}>
            <Markdown>{item}</Markdown>
          </li>
        ))}
      </ol>
    </section>
  );
};
export default KeyElements;
