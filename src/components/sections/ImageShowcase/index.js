import Img from '@/utils/Img';
import Button from '../../atoms/Button';
import styles from './styles.module.scss';

const ImageShowcase = ({ data: { images, cta } }) => {
  return (
    <section className={styles.section}>
      {images.map((image, i) => (
        <Img
        data={image}
          className={`${styles.img} ${styles[`img${i}`]}`}
          key={i}
        />
      ))}
      {cta?.href && (
        <Button data={cta} />
      )}
    </section>
  );
};
export default ImageShowcase;