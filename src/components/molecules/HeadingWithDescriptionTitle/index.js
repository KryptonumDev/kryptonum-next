import Markdown from "@/components/atoms/Markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Img from "@/components/atoms/Img";

const HeadingWithDescriptionTitle = ({ data: { heading, blocks } }) => {
  return (
    <div className={styles.wrapper}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <div className={styles.divWrapper}>
        {blocks.map((item, i) => {
          item.description;
          return (
            <div className={styles.item} key={i}>
              {item.icon ? (
                <div className={styles.imageWrapper}>
                  <Img data={item.icon} className={`${styles.icon} person-border`} sizes="60px" quality={100}/>
                </div>
              ) : (
                <Markdown className={styles.title}>{item.title}</Markdown>
              )}
              <div className={styles.descriptionWrapper}>
                <DecorativeHeading type="h2" decoration={false}>
                  {item.description}
                </DecorativeHeading>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HeadingWithDescriptionTitle;
