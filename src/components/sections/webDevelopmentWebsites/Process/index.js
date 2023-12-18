import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import { Fragment } from "react";
import Roadmap from "../../homepage/Roadmap";
import styles from "./styles.module.scss";
import QuickForm from "../../QuickForm";

const Process = ({
  data: { process_Heading, process_List, roadmap_Heading, roadmap_List, roadmap_Cta, quickForm },
}) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2">{process_Heading}</DecorativeHeading>
      </header>
      <div className={styles.wrapper}>
        {process_List.map((item, i) => (
          <Fragment key={i}>
            <div className={styles.item}>
              <Markdown className={styles.claim} components={{ p: "h3" }}>
                {item.claim}
              </Markdown>
              <Markdown className={styles.heading} components={{ p: "h4" }}>
                {item.heading}
              </Markdown>
              <Markdown className={styles.subheading}>{item.subheading}</Markdown>
              <Img data={item.img} className={styles.img} sizes="(max-width: 899px) 100vw, 50vw" />
              <Markdown className={styles.paragraph}>{item.paragraph}</Markdown>
            </div>
            {i === 2 && (
              <>
                <Roadmap heading={roadmap_Heading} list={roadmap_List} cta={roadmap_Cta} />
                <QuickForm data={quickForm} />
              </>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
export default Process;
