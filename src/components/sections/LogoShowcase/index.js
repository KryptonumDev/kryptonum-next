import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const LogoShowcase = ({ data: { heading, paragraph, proposals } }) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.wrapper}>
        {proposals.map(({ title, img }, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.img}>
              <Img data={img} className={styles.logo} sizes="(max-width: 949px) 100vw, 50vw" />
            </div>
            {title && <Markdown className={styles.title}>{title}</Markdown>}
          </div>
        ))}
      </div>
    </section>
  );
};
export default LogoShowcase;
