import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";

const HeadingBlocksSideImg = ({ data: { heading, image, blocks } }) => {
  return (
    <section className={styles.headingBlocksSideImg}>
      <div className={`${styles.headingWrapper}`}>
        <DecorativeHeading type="h3">{heading}</DecorativeHeading>
      </div>
      <div className={`${styles.imageWrapper}`}>
        <Img
          className={styles.image}
          data={image}
          sizes="(max-width: 1199px) 100vw, 50vw"
        />
      </div>
      <div className={styles.descriptionWrapper}>
        {blocks.map(({ description }, index) => {
          return <Markdown key={index}>{description}</Markdown>;
        })}
      </div>
    </section>
  );
};
export default HeadingBlocksSideImg;
