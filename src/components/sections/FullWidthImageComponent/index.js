import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';

const FullWidthImageComponent = ({image, withBorder = false} ) => {
  return (
  <section className={withBorder ? `${styles.wrapper} ${styles.border}` : styles.wrapper}>
    <div className={styles.imageWrapper}>
      <Img data={image} className={styles.image} sizes="100vw"></Img>
    </div>
  </section>)
}
export default FullWidthImageComponent;