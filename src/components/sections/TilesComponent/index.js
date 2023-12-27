import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const TilesComponent = ({ data: { heading, list } }) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      </header>
      <div className={styles.wrapper}>
        {list.map(({ icon, title, description }, i) => (
          <div className={`${styles.item} ${icon ? styles.isIcon : ""}`} key={i}>
            {title ? (
              <Markdown className={styles.title}>{title}</Markdown>
            ) : (
              <div className={styles.imgWrapper}>
                <Img data={icon} className={styles.img} sizes="48px" quality={100}/>
              </div>
            )}
            <Markdown className={styles.description}>{description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TilesComponent;
