import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import CaseStudies from "../../CaseStudies";
import HeroSubheading from "../HeroSubheadings";
import styles from "./styles.module.scss";

const Hero = ({ data: { hero_Heading, hero_Subheading, hero_Cta } }) => {
  return (
    <section className={styles.section}>
      <header>
        <div className={styles.copy}>
          <DecorativeHeading type="h1">{hero_Heading}</DecorativeHeading>
          <HeroSubheading>{hero_Subheading}</HeroSubheading>
        </div>
        <div className={`${styles.ctaWrapper} ctaWrapper`}>
          <Button to={hero_Cta.href} theme={hero_Cta.theme}>
            {hero_Cta.text}
          </Button>
        </div>
      </header>
      <CaseStudies />
    </section>
  );
};

export default Hero;
