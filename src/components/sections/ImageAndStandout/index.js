import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const ImageAndStandout = ({ heading, paragraph, standout, img, reversed }) => {
  return (
    <section className={reversed ? `${styles.reversed} ${styles.wrapper}` : styles.wrapper}>
      {heading && <DecorativeHeading type="h2">{heading}</DecorativeHeading>}
      <div className={styles.column}>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        {standout && <Markdown className={styles.standout}>{standout}</Markdown>}
        <Img data={img} className={styles.img} sizes="(max-width: 1099px) 100vw, 50vw" />
      </div>
    </section>
  );
};
export default ImageAndStandout;
