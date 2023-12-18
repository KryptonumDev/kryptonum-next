import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const Process = ({ data: { process_Heading, process_Claim, process_List } }) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2">{process_Heading}</DecorativeHeading>
        <Markdown className={styles.paragraph}>{process_Claim}</Markdown>
      </header>
      <div className={styles.wrapper}>
        {process_List.map((item, i) => (
          <div className={styles.item} key={i}>
            <Markdown className={styles.heading} components={{ p: "h3" }}>
              {item.heading}
            </Markdown>
            <Markdown className={styles.subheading}>{item.subheading}</Markdown>
            <div className={styles.copy}>
              <Markdown className={styles.paragraph}>{item.paragraph}</Markdown>
              <Markdown className={styles.secondParagraph}>{item.secondParagraph}</Markdown>
            </div>
            <Markdown className={styles.secondHeading}>{item.secondHeading}</Markdown>
            {item.cta.href && (
              <div className={styles.ctaWrapper}>
                <Button data={item.cta} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Process;
