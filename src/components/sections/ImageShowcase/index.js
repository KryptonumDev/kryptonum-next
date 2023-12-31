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
          sizes="(max-width:699px) 90vw, 65vw"
        />
      ))}
      {cta?.href && (
        <Button data={cta} className={styles.cta}/>
      )}
    </section>
  );
};
export default ImageShowcase;