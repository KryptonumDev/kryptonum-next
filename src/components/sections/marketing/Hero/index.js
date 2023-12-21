import Button from "@/components/atoms/Button";
import styles from "./styles.module.scss";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";

const Hero = ({ data: { heading, subheading, image, imageDescription, textComponent, cta } }) => {
  return (
    <section className={`${styles.hero} hero`}>
      <header>
        <DecorativeHeading
          type="h1"
          className={styles.heading}
        >
          {heading}
        </DecorativeHeading>
        <Markdown className={styles.subheading}>{subheading}</Markdown>
        <Img
          data={image}
          className={styles.img}
          sizes="100vw"
          priority={true}
        />
      </header>
      <Markdown className={styles.imageDescription}>{imageDescription}</Markdown>
      <div className={styles.textComponent}>
        <Markdown className={styles.descriptionHeading}>{textComponent.heading}</Markdown>
        <div className={styles.blocks}>
          {textComponent.blocks.map((block, i) => (
            <Markdown
              className={styles.description}
              key={i}
            >
              {block.description}
            </Markdown>
          ))}
          <Button
            data={cta}
            className={styles.button}
          ></Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
