import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const IconTitleDescriptionList = ({ data }) => {
  return (
    <>
      {data.map(({ header, icon, title, description }, i) => (
        <div className={icon ? `${styles.item} ${styles.iconStyles}` : `${styles.item} ${styles.headerStyles}`} key={i}>
          <div className={icon ? styles.iconWrapper : styles.contentWrapper}>
            {icon && <Img data={icon} className={styles.icon} width={40} height={40} sizes="40px" />}
            {header && <p>{header}</p>}
          </div>
          <Markdown className={styles.title}>{title}</Markdown>
          <Markdown className={styles.description}>{description}</Markdown>
        </div>
      ))}
    </>
  );
};
export default IconTitleDescriptionList;
