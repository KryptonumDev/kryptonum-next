import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { ScrollDown, ScrollToNextArrowRight } from "../../atoms/Icons";
import ScrollToNextSection from "./scrollToNextSection";
import styles from "./styles.module.scss";

const ScrollToNext = ({ data: { heading, paragraph, title, link } }) => {
  const markdown = <Markdown>{title}</Markdown>;

  const decorativeHeading = heading ? <DecorativeHeading type="h2" className={styles.heading}>{heading}</DecorativeHeading> : null;

  const scrollDown = <ScrollDown />;

  const image = <Img data={link.person?.img} className={`personBorder ${styles.personBorder}`} sizes="180px" />;

  return (
    <ScrollToNextSection
      link={link}
      decorativeHeading={decorativeHeading}
      scrollDown={scrollDown}
      markdown={markdown}
      image={image}
    >
      <div className={styles.paragraph}>
        <Markdown>{paragraph}</Markdown>
        <ScrollToNextArrowRight />
      </div>
    </ScrollToNextSection>
  );
};

export default ScrollToNext;
