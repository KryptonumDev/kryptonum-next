import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";
import Img from "@/components/atoms/Img";

const HeroTwoColumns = ({ heading, paragraph, cta, img }) => {
  return (
    <section className={styles.heroTwoColumns}>
      <header>
        <DecorativeHeading>{heading}</DecorativeHeading>
        {paragraph && <Markdown className={styles.paragraph}>{paragraph}</Markdown>}
        {cta?.text && <Button data={cta} />}
      </header>
      {img && <Img data={img} className={styles.img} sizes="600px" />}
    </section>
  );
};
export default HeroTwoColumns;
