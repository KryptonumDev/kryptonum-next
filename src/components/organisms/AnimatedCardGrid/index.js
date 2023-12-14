import Markdown from '@/utils/markdown';
import styles from './styles.module.scss';

const AnimatedCardGrid = ({data}) => {
  return (
    <div className={styles.wrapper}>
      {data.map(({ description}, i) => (
        <div className={styles.item} key={i}>
          <Markdown className={styles.description}>{description}</Markdown>
          </div>
      ))}
    </div>
  )
}
export default AnimatedCardGrid;