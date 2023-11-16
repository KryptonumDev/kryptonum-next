import Markdown from "@/utils/markdown";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from './styles.module.scss'

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
      {annotation && (
        <Markdown className={styles.annotation}>{annotation}</Markdown>
      )}
    </section>
  );
}
export default Tiles;