import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import { Error } from "@/components/atoms/Icons";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const Hero = ({ data: { hero_Heading, hero_Paragraph, hero_Column } }) => {
  return (
    <section className={`${styles.section} hero`}>
      <header>
        <DecorativeHeading>{hero_Heading}</DecorativeHeading>
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
};
export default Hero;
