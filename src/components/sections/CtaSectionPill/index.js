import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';
import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Button from '@/components/atoms/Button';

const CtaSectionPill = ({ data: { img, heading, cta, icon }, className }) => {
  return (
    <section className={`${styles.CtaSectionPill} ${className || ''}`}>
      <Img
        data={img}
        className={styles.img}
        sizes='100vw'
        quality={100}
      />
      <div className={styles.copy}>
        <div className={styles.iconWrapper}>
          <Img
            data={icon}
            className={styles.icon}
            sizes='64px'
            quality={100}
          />
        </div>
        <DecorativeHeading type='h2'>{heading}</DecorativeHeading>
        <Button
          data={cta}
          className={styles.cta}
        />
        <div className={styles.glow}></div>
      </div>
    </section>
  );
};

export default CtaSectionPill;
