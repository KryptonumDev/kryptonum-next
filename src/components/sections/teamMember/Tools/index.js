import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import styles from "./styles.module.scss";

const Tools = ({ data }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">**Narzędzia**</DecorativeHeading>
      <div className={styles.wrapper}>
        {data.map((tool, i) => (
          <div className={styles.item} key={i}>
              <Img data={tool.img} className={styles.img} sizes="152px" />
              <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Tools;
