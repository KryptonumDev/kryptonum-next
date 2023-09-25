import React from "react";
import fetchData from "@/utils/fetchData";
import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";

import Wrapper from "./Wrapper";
import Image from "next/image";

const CaseStudies = async () => {
  let body  = await query();
    
    <Wrapper>
      {<DecorativeHeading type="h2"></DecorativeHeading>}
      <div className="wrapper">
        {body.data.caseStudies.map((caseStudy, i) => (
          <div className="caseStudy" key={i}>
            <Image
              key={i}
              image={caseStudy.img?.asset.gatsbyImageData}
              alt={caseStudy.img?.asset.altText || ""}
              className="img"
              loading={i == 0 ? "eager" : "lazy"}
            />
            <Button
              to={`/pl/portfolio/${caseStudy.slug.current}`}
              aria-label={`Sprawdź projekt ${caseStudy.name}`}
            >
              Sprawdź projekt
            </Button>
          </div>
        ))}
      </div>
      {(
        <Button theme="primary" to="/pl/portfolio">
          Wszystkie projekty
        </Button>
      )}
    </Wrapper>
};
const query = async () => {
  const {
    body
  } = await fetchData(`
    caseStudies: allCaseStudyEntries(limit: 3) {
          name
          slug {
            current
          }
          img {
            asset {
              altText
              metadata {
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
