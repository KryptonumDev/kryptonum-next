'use server'

import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import fetchData from "@/utils/fetchData";
import Markdown from "@/utils/markdown";
import Link from "next/link";
import styles from "./styles.module.scss";

const Team = async ({ heading, paragraph, cta }) => {
  let data = await query();

  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">
        {heading || "Kryptonum to **MY**!"}
      </DecorativeHeading>
      <div className={styles.wrapper}>
        {data.team.map((person, i) => (
          <Link href={`/pl/zespol/${person.slug.current}`} key={i}>
            <div className={`${styles.img} personBorder`}>
              <Img
                data={person.img}
                className={styles.img}
                width={128}
                height={128}
              />
            </div>
            <div className={styles.info}>
              <h3>{person.name}</h3>
              <p>{person.cryptonym}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.copy}>
        <Markdown>{paragraph}</Markdown>
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
