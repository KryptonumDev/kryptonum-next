import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import FeaturesSection from "./featuresSection";
import styles from "./styles.module.scss";

const Features = ({ data: { heading, feautures } }) => {
  const features = feautures;

  const header = (
    <header className={styles.header}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
    </header>
  );

  return (
    <FeaturesSection header={header}>
      {features.map((feature, i) => (
        <div className={`${styles.item} item`} key={i}>
          <Img data={feature.img} className={styles.img} sizes="48px" />
          <Markdown className={styles.title}>{feature.title}</Markdown>
        </div>
      ))}
    </FeaturesSection>
  );
};
export default Features;
