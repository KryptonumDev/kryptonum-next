import React, { lazy } from "react";
import fetchData from "@/utils/fetchData";
import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import NextImage from "next/image";

import Wrapper from "./Wrapper";

const CaseStudies = async () => {
  let body  = await query();

    return (
    <Wrapper>
      {<DecorativeHeading type="h2"></DecorativeHeading>}
      <div className="wrapper">
        {body.data.caseStudies.map((caseStudy, i) => (
          <div className="caseStudy" key={i}>
            <NextImage
              key={i}
              src={caseStudy.img?.asset.url}
              width={caseStudy.img?.asset.metadata?.dimensions.width || 0}
              height={caseStudy.img?.asset.metadata?.dimensions.height || 0}
              alt={caseStudy.img?.asset.altText || ""}
              blurDataURL = {caseStudy.img?.asset.metadata.lqip}
              placeholder="blur"
              loading={"lazy"}
              quality= {80}
              className="img"
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
    );
};
const query = async () => {
  const {
    body
  } = await fetchData(`
    caseStudies: allCaseStudyEntries(limit: 3, sort: {_createdAt:DESC}) {
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
