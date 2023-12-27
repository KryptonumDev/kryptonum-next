import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const ListWithOverflowIcon = ({ data: { blocks }, className, itemClassName }) => {
  return (
    <div className={className ? `${styles.wrapper} ${className}` : styles.wrapper}>
      {blocks.map(({ icon, description, title, img }, i) => (
        <div className={`${styles.item} ${itemClassName}`} key={i}>
          <div className={styles.iconWrapper}>
            <Img data={icon} className={styles.icon} sizes="60px" quality={100}></Img>
          </div>
          {title && (
            <Markdown className={styles.title} components={{ p: "h2" }}>
              {title}
            </Markdown>
          )}
          {img && <Img data={img} className={styles.img} sizes="(max-width: 799px) 100vw, 50vw" />}
          <Markdown className={styles.description}>{description}</Markdown>
        </div>
      ))}
    </div>
  );
};
export default ListWithOverflowIcon;
