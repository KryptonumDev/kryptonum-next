import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

const SimpleGridList2Columns = ({ list }) => {
  return (
    <ul className={styles.grid}>
      {list.map((item, i) => (
        <li className={styles.item} key={i}>
          <Markdown>{item}</Markdown>
        </li>
      ))}
    </ul>
  );
};
export default SimpleGridList2Columns;
