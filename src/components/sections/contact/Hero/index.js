import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import Form from "@/components/organisms/forms/FastContact";
import Link from "next/link";
import styles from "./styles.module.scss";

const Hero = ({ heading, subheading, contact }) => {
  return (
    <section className={`${styles.section} hero`}>
      <div>
        <DecorativeHeading type="h1">{heading}</DecorativeHeading>
        <Markdown className={styles.subheading}>{subheading}</Markdown>
        <Form />
      </div>
      <div className={styles.contact}>
        {contact.map((item, i) => (
          <div className={styles.item} key={i}>
            <p>{item.title}</p>
            <div>
              <Link href={`/pl/zespol/${item.person.slug.current}`}>
                <Img
                  data={item.person.img}
                  className={`${styles.img} personBorder`}
                  sizes="(max-width: 499px) 96px, 160px"
                />
              </Link>
              <p>
                {item.person.email && <a href={`mailto:${item.person.email}`}>{item.person.email}</a>}
                {item.person.tel && <a href={`tel:${item.person.tel?.replace(/\s/g, "")}`}>{item.person.tel}</a>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Hero;
