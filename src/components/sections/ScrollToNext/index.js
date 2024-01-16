import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { ScrollDown } from "../../atoms/Icons";
import ScrollToNextSection from "./scrollToNextSection";
import styles from "./styles.module.scss";

const ScrollToNext = ({ data: { heading, paragraph, title, link } }) => {
  const markdown = <Markdown>{title}</Markdown>;
  const decorativeHeading = heading ? <DecorativeHeading type="h2" className={styles.heading}>{heading}</DecorativeHeading> : null;
  const scrollDown = <ScrollDown />;
  const image = <Img data={link.person?.img} className={`personBorder ${styles.personBorder}`} sizes="180px" quality={100} />;

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

const ScrollToNextArrowRight = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66406 16.0003H25.3307M25.3307 16.0003L15.9974 6.66699M25.3307 16.0003L15.9974 25.3337"
      stroke="#EFF0F3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);