import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import LargeList from "../../LargeList";
import styles from "./styles.module.scss";

const Audit = ({
  data: {
    audit_Heading,
    audit_Paragraph,
    audit_Paragraph2,
    audit_Title,
    audit_List,
    audit_Paragraph3,
    audit_Paragraph4,
  },
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{audit_Heading}</DecorativeHeading>
      <div className={styles.copy}>
        <Markdown className={styles.paragraph}>{audit_Paragraph}</Markdown>
        <Markdown className={styles.paragraph2}>{audit_Paragraph2}</Markdown>
      </div>
      <LargeList title={audit_Title} list={audit_List} paragraph={audit_Paragraph3} paragraph2={audit_Paragraph4} />
    </section>
  );
};
export default Audit;
