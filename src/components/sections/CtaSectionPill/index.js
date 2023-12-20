import Img from "@/components/atoms/Img";
import styles from "./styles.module.scss";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import ButtonNew from "@/components/atoms/ButtonNew";

const CtaSectionPill = ({ data: { img, heading, cta, icon } }) => {
  return (
    <section className={styles.ctaSectionPill}>
      <Img
        data={img}
        className={styles.img}
      />
      <div className={styles.ctaWrapper}>
        <div className={styles.iconWrapper}>
        <Img
          data={icon}
          className={styles.icon}
        />
        </div>
        <DecorativeHeading className={styles.heading}>{heading}</DecorativeHeading>
        <ButtonNew data={cta} className={styles.cta}/>
      </div>
    </section>
  );
};
export default CtaSectionPill;
