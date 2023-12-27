import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import Link from "next/link";
import styles from "./styles.module.scss";

const Participated = ({ data: { heading, paragraph, people } }) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.wrapper}>
        {people.slice(0, 3).map((person, i) => (
          <div className={styles.item} key={i}>
            <Link href={`/pl/zespol/${person.slug.current}`} className={styles.avatar}>
              <Img data={person.img} className={`personBorder ${styles.img}`} sizes="106px" quality={100}/>
              <p className={styles.name}>{person.name}</p>
            </Link>
            {people[i + 3] && (
              <Link href={`/pl/zespol/${people[i + 3].slug.current}`} className={styles.avatar}>
                <Img data={people[i + 3].img} className={`personBorder ${styles.img}`} sizes="106px" quality={100}/>
                <p className={styles.name}>{people[i + 3].name}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Participated;
