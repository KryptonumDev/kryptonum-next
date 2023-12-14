import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from './styles.module.scss';

const Hero = ({
  data: {
    hero_Heading,
    hero_Subheading,
    hero_List,
    hero_Cta,
  }
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h1">{hero_Heading}</DecorativeHeading>
      <div>
        <DecorativeHeading type="h2">{hero_Subheading}</DecorativeHeading>
        <ol>
          {hero_List.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
        <Button data={hero_Cta} className={styles.cta} />
      </div>
    </section>
  );
}
export default Hero;