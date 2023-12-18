import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const FourGrid = ({ heading, claim, paragraph, secondClaim, cta }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <Markdown>{claim}</Markdown>
      <p>{paragraph}</p>
      <div>
        <Markdown>{secondClaim}</Markdown>
        <Button data={cta} className={styles.cta} />
      </div>
    </section>
  );
};

export default FourGrid;
