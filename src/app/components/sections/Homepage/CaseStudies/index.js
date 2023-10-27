import React from "react";
import fetchData from "@/utils/fetchData";
import Button from "@/components/atoms/Button";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";

const CaseStudies = async ({ data, heading }) => {
  let body = await query();
  if (data) {
    body.data.caseStudies = data;
  }

  return (
    <section className={styles.wrapper}>
      {heading && <Markdown.h2></Markdown.h2>}
      <div className={`wrapper`}>
        {body.data.caseStudies.map((caseStudy, i) => (
          <div className={`${styles.caseStudy} caseStudy`} key={i}>
            <Img
              data={caseStudy.img}
              key={i}
              className={`${styles.img} img`}
              loading="eager"
              sizes="100vw"
            />
            <Button
              to={`/pl/portfolio/${caseStudy.slug.current}`}
              aria-label={`Sprawdź projekt ${caseStudy.name}`}
              className={styles.cta}
            >
              Sprawdź projekt
            </Button>
          </div>
        ))}
      </div>
      {
        <Button theme="primary" to="/pl/portfolio">
          Wszystkie projekty
        </Button>
      }
    </section>
  );
};

const query = async () => {
  const { body } = await fetchData(`
    caseStudies: allCaseStudyEntries(limit: 3, sort: {_updatedAt:ASC}) {
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
        }
      `);
  return body;
};

export default CaseStudies;
