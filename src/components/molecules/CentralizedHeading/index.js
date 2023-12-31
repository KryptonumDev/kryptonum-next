import Markdown from "@/components/atoms/Markdown";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const CentralizedHeading = ({ data: { heading, paragraph, cta }, decoration, additionalStyles }) => {
  return (
    <header
      className={additionalStyles ? `${styles.header} ${additionalStyles.centralizedHeadingSection}` : styles.header}
    >
      <DecorativeHeading type="h3" decoration={decoration} className={styles.decorativeHeading}>
        {heading}
      </DecorativeHeading>
      {paragraph && <Markdown className={styles.subheading}>{paragraph}</Markdown>}
      {cta && <Button data={cta} className={styles.cta} />}
    </header>
  );
};
export default CentralizedHeading;
