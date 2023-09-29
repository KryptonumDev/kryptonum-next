import React from "react";
import ReactMarkdown from "react-markdown";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Button from "@/app/components/atoms/Button";
import Link from "next/link";
import Img from "@/utils/Img";
import fetchData from "@/utils/fetchData";
import { changeImageDimensions } from "@/utils/functions";
import styles from './styles.module.scss';

const Team = async ({ heading, paragraph, cta }) => {
  let data = await query();
  data.team = data.team.map((person) => {
    person.img = changeImageDimensions(person.img, 156, 156);
    return person;
  });

  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">
        {heading || "Kryptonum to **MY**!"}
      </DecorativeHeading>
      <div className={styles.wrapper}>
        {data.team.map((person, i) => (
          <Link href={`/pl/zespol/${person.slug.current}`} key={i}>
            <div className={`${styles.img} personBorder`}>
              <Img data={person.img} className={styles.img}/>
            </div>
            <div className={styles.info}>
              <h3>{person.name}</h3>
              <p>{person.cryptonym}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.copy}>
        <ReactMarkdown>{paragraph}</ReactMarkdown>
        {cta?.text && (
          <Button to={cta.href} theme={cta.theme}>
            {cta.text}
          </Button>
        )}
      </div>
    </section>
  );
};

const query = async () => {
  const {
    body: { data },
  } = await fetchData(`
  team: allTeamMember(sort: { _createdAt: ASC }) {
    name
    slug {
      current
    }
    img {
      asset {
        altText
        url
        metadata {
          lqip
          dimensions {
            height
            width
          }
        }
      }
    }
    cryptonym
  }
  `);
  return data;
};

export default Team;
