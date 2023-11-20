import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from './styles.module.scss'
import DecorativeHeading from "../../atoms/DecorativeHeading";
import Link from "next/link";
import SimpleCtaSection from "../SimpleCtaSection";

const HeroServices = ({
  data: {
    hero_Heading,
    hero_Annotation,
    hero_Paragraph,
    hero_SecondParagraph,
    hero_Img,
    hero_Nav,
    hero_simpleCtaSection,
  }
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading
        components={{em: ({...props}) => <sup {...props} />}}
      >{hero_Heading}</DecorativeHeading>
      <Img
        data={hero_Img}
        className={styles.img}
        loading="eager"
      />
      <div className={styles.copy}>
        {hero_Annotation && (
          <Markdown
            className={styles.annotation}
            components={{
              em: ({...props}) => <sup {...props} />
            }}
          >{hero_Annotation}</Markdown>
        )}
        <Markdown className={styles.paragraph} components={{ 'p': 'h2' }}>{hero_Paragraph}</Markdown>
        <Markdown className={styles.secondParagraph}>{hero_SecondParagraph}</Markdown>
      </div>
      {hero_Nav && (
        <nav className={`${styles.nav} ${hero_Nav.length === 3 && `${styles.three}`}`}>
          {hero_Nav.map((item, i) => (
            <Link href={item.href} className={styles.item} key={i}>
              <Markdown components={{ p: 'h3' }}>
                {item.title}
              </Markdown>
              <p>{item.description}</p>
            </Link>
          ))}
        </nav>
      )}
      {(hero_simpleCtaSection) && (
        <SimpleCtaSection data={hero_simpleCtaSection} className={styles.simpleCtaSection}/>
      )}
    </section>
  );
}
export default HeroServices;