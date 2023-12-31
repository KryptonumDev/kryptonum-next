import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const TitleDescriptionImage = ({ data: { title, description, img }, parentStyles }) => {
  return (
    <div className={`${styles.wrapper} ${parentStyles.titleDescriptionImage}`}>
      <div className={styles.descriptionWrapper}>
        <DecorativeHeading type="h3" decoration={false}>
          {title}
        </DecorativeHeading>
        <div className={styles.contextWrapper}>
          <Markdown className={styles.context}>{description}</Markdown>
        </div>
      </div>
      <div className={`${styles.imageWrapper} ${parentStyles.imageWrapper}`}>
        <Img data={img} className={styles.image} sizes="(max-width: 1199px) 70vw, 50vw"></Img>
      </div>
    </div>
  );
};

export default TitleDescriptionImage;
