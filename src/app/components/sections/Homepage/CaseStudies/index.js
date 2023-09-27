import React from "react";
import fetchData from "@/utils/fetchData";
import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";

import Wrapper from "./Wrapper";

const CaseStudies = async () => {
  let body = await query();

  return (
    <Wrapper>
      {<DecorativeHeading type="h2"></DecorativeHeading>}
      <div className="wrapper">
        {body.data.caseStudies.map((caseStudy, i) => (
          <div className="caseStudy" key={i}>
              <Img data={caseStudy.img} key={i} className="img"/>
            <Button
              to={`/pl/portfolio/${caseStudy.slug.current}`}
              aria-label={`Sprawdź projekt ${caseStudy.name}`}
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
    </Wrapper>
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
