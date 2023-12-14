import { ImageRenderer } from "@/components/organisms/PortableContent";
import styles from "./styles.module.scss";

const SimpleGridImage2Columns = ({ list }) => {
  return (
    <div className={styles.wrapper}>
      {list.map((item, i) => (
        <ImageRenderer value={item} key={i} />
      ))}
    </div>
  );
}
export default SimpleGridImage2Columns;
