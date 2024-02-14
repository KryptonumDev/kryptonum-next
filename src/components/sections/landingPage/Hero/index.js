import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const Hero = ({ hero_Img, hero_Heading, hero_Paragraph }) => {
  return (
    <section className={`${styles.hero} hero`}>
      <header>
        <DecorativeHeading
          type='h1'
          className={styles.heading}
        >
          {hero_Heading}
        </DecorativeHeading>
        <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
      </header>
      <div className={styles.imageWrapper}>
        <Img
          data={hero_Img}
          className={styles.img}
          sizes='(max-width: 1199px) 100vw, 50vw'
          priority={true}
        />
      </div>
    </section>
  );
};

export default Hero;
