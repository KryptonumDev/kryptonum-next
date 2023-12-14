import Img from '@/components/atoms/Img';
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
          sizes="65vw"
        />
      ))}
      {cta?.href && (
        <Button data={cta} />
      )}
    </section>
  );
};
export default ImageShowcase;