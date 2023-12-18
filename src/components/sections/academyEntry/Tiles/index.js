import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const Tiles = ({ heading, list, annotation }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ul className={styles.wrapper}>
        {list.map((item, i) => (
          <li key={i}>
            <Markdown>{item}</Markdown>
          </li>
        ))}
      </ul>
      {annotation && <Markdown className={styles.annotation}>{annotation}</Markdown>}
    </section>
  );
};
export default Tiles;
