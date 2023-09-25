'use client';

import React from "react";
import fetchData from "@/../../utils/fetchData";
import styled from "styled-components";
import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import { Clamp } from "../../../../../../utils/functions";

const CaseStudies = async () => {
  let caseStudies  = await query();
  let data = {caseStudies};
    
    <Wrapper>
      {<DecorativeHeading type="h2"></DecorativeHeading>}
      <div className="wrapper">
        {data.caseStudies.map((caseStudy, i) => (
          <div className="caseStudy" key={i}>
            <img
              key={i}
              image={caseStudy.img?.asset.gatsbyImageData}
              alt={caseStudy.img?.asset.altText || ""}
              className="img"
              loading={eagerLoading && i == 0 ? "eager" : "lazy"}
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
      {!data && (
        <Button theme="primary" to="/pl/portfolio">
          Wszystkie projekty
        </Button>
      )}
    </Wrapper>
};
const query = async () => {
  const {
    body: { data },
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
      return data;
};

const Wrapper = styled.section`
  h2 {
    margin: 0 auto ${Clamp(28, 72, 72)};
    text-align: left;
  }
  > a {
    margin-top: 48px;
  }
  text-align: center;
  @media (min-width: 500px) {
    .caseStudy {
      overflow: hidden;
      position: sticky;
      top: 0;
      max-height: 100vh;
      max-height: 100dvh;
      .img {
        width: 100%;
        height: 100%;
      }
      .cta {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0)
        );
        width: 100%;
        padding: 50% 0;
      }
    }
  }
  @media (max-width: 1189px) {
    .caseStudy {
      margin: 0 calc(var(--pageMargin) * -1);
    }
  }
  @media (max-width: 499px) {
    .caseStudy {
      &:not(:last-child) {
        margin-bottom: 48px;
      }
      .cta {
        margin-top: 24px;
      }
    }
  }
`;

export default CaseStudies;
