import styles from './styles.module.scss';
import Markdown from '@/utils/markdown';

const Tiles = ({ data }) => {
  return (
    <section className={styles.section}>
      {data.map((item, i) => (
        <div className={styles.item} key={i}>
          <Markdown className={styles.paragraph}>{item.heading}</Markdown>
          <Markdown className={styles.list}>{item.list}</Markdown>
        </div>
      ))}
    </section>
  );
}
export default Tiles;