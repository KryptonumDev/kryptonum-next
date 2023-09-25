import React from "react";
import Wrapper from "./Wrapper";

import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Button from "@/app/components/atoms/Button";
import CaseStudies from "../CaseStudies";

const Hero = ({
  data: {
    hero_Heading,
    hero_Subheading,
    hero_Cta,
  }
}) => {
  return (
    <Wrapper>
      <header>
        <div className="copy">
          <DecorativeHeading type="h1">{hero_Heading}</DecorativeHeading>
          <ol>
            {hero_Subheading.map((subheading, i) => (
              <li key={i}>{subheading}</li>
            ))}
          </ol>
        </div>
        <div className="cta-wrapper">
          <Button to={hero_Cta.href} theme={hero_Cta.theme}>{hero_Cta.text}</Button>
        </div>
      </header>
      <CaseStudies eagerLoading={1} />
    </Wrapper>
  );
}


 
export default Hero;