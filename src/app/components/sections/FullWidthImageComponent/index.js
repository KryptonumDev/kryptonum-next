import Img from '@/utils/Img';
import styles from './styles.module.scss';

const FullWidthImageComponent = ({image, additionalStyles} ) => {
  return (
  <section className={additionalStyles ? `${styles.wrapper} ${additionalStyles.imageWrapper}` : styles.wrapper}>
    <div className={styles.imageWrapper}>
      <Img data={image} className={styles.image} sizes="100vw"></Img>
    </div>
  </section>)
}
export default FullWidthImageComponent;