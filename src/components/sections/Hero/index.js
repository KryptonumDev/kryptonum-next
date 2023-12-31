import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import Button from "../../atoms/Button";
import styles from "./styles.module.scss";

const Hero = ({ data: { heading, subheading, image, sideImage, paragraph, cta }, hasBorder = false }) => {
  return (
    <section className={hasBorder ? `${styles.section} hero` : `${styles.section} ${styles.blogSection} hero`}>
      <header>
        <div className={styles.copy}>
          <DecorativeHeading type="h1">{heading}</DecorativeHeading>
          {paragraph && <Markdown className={styles.paragraph}>{paragraph}</Markdown>}
          {cta?.text && <Button data={cta} className={styles.cta} />}
        </div>
        {sideImage && (
          <Img data={sideImage} className={styles.sideImg} sizes="(max-width: 1299px) 100vw, 50vw" priority={true} />
        )}
        {subheading && (
          <div className={styles.spanWrapper}>
            <Markdown className={styles.span}>{subheading}</Markdown>
          </div>
        )}
      </header>
      {image && (
        <Img data={image} className={styles.img} sizes="100vw" priority={true} />
      )}
    </section>
  );
};

export default Hero;
