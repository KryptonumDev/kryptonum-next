import styles from "./styles.module.scss";
import { ImageRenderer } from "@/app/components/organisms/PortableContent";

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
