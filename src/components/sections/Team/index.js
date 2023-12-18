import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import fetchData from "@/utils/fetchData";
import Link from "next/link";
import styles from "./styles.module.scss";

const Team = async ({ heading, paragraph, cta }) => {
  let data = await query();

  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading || "Kryptonum to **MY**!"}</DecorativeHeading>
      <div className={styles.wrapper}>
        {data.team.map((person, i) => (
          <Link href={`/pl/zespol/${person.slug.current}`} key={i}>
            <div className={`${styles.img} personBorder`}>
              <Img data={person.img} className={styles.img} width={128} height={128} sizes="128px" />
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
        {cta?.text && <Button data={cta} />}
      </div>
    </section>
  );
};

const query = async () => {
  const {
    body: { data },
  } = await fetchData(`
	query {
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
	}
  `);
  return data;
};

export default Team;
