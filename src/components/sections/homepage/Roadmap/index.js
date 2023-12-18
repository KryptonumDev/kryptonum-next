import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import RoadmapSection from "./roadmapSection";
import styles from "./styles.module.scss";

const Roadmap = ({ heading, list, cta }) => {
  return (
    <RoadmapSection list={list} cta={cta}>
      <div className={`${styles.sticky} sticky`}>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <div className={`${styles.line} line`}></div>
        <div className={`${styles.roadmap} roadmap`}>
          {list.map((item, i) => (
            <div className={`${styles.roadmapItem} roadmapItem`} key={i}>
              <Markdown className={styles.title} components={{ p: "h3" }}>
                {item.title}
              </Markdown>
              <Markdown className={styles.description}>{item.description}</Markdown>
              {i + 1 === list.length && cta?.text && <Button data={cta} className={`${styles.cta} cta`} />}
            </div>
          ))}
          <div className={`${styles.roadmapItem} ${styles.active} roadmapItem active`}></div>
        </div>
      </div>
    </RoadmapSection>
  );
};

export default Roadmap;
