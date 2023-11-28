import Markdown from '@/utils/markdown';
import styles from './styles.module.scss'
import DecorativeHeading from '@/app/components/atoms/DecorativeHeading';
import { Error } from '@/app/components/atoms/Icons';

const Hero = ({
  data: {
    hero_Heading,
    hero_Paragraph,
    hero_Column,
  }
}) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading className={styles.heading}>{hero_Heading}</DecorativeHeading>
        <div className={styles.paragraph}>
          <Error />
          <Markdown>{hero_Paragraph}</Markdown>
        </div>
      </header>
      <div className={styles.column}>
        {hero_Column.map((item, i) => (
          <div className={styles.item} key={i}>
            <Markdown className={styles.title}>{item.title}</Markdown>
            <Markdown className={styles.description}>{item.description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Hero;