import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const FourGrid = ({ 
  heading, 
  claim, 
  paragraph, 
  secondClaim, 
  cta 
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <Markdown>{claim}</Markdown>
      <p>{paragraph}</p>
      <div>
        <Markdown>{secondClaim}</Markdown>
        <Button theme={cta.theme} to={cta.href} className={styles.cta}>
          {cta.text}
        </Button>
      </div>
    </section>
  );
};

export default FourGrid;
