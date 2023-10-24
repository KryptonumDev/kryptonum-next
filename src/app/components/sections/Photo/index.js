import Img from '@/utils/Img';
import styles from './styles.module.scss';

const ImageComponent = ({image}) => {
  return (
  <section className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <Img data={image} className={styles.image}></Img>
    </div>
  </section>)
}
export default ImageComponent;