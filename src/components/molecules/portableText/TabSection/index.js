import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

const TabSection = ({ blocks }) => {
  return (
    <div className={styles.tabSection}>
      {blocks.map(({ title, description }, i) => (
        <div className={styles.item} key={i}>
          <Markdown className={styles.title}>{title}</Markdown>
          <Markdown className={styles.description}>{description}</Markdown>
        </div>
      ))}
    </div>
  );
};
export default TabSection;
