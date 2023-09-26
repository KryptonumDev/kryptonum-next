import React from "react";
import Wrapper from "./Wrapper";

import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Button from "@/app/components/atoms/Button";
import CaseStudies from "../CaseStudies";
import HeroSubheading from '../HeroSubheadings'

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
          <HeroSubheading>{hero_Subheading}</HeroSubheading>
        </div>
        <div className="cta-wrapper">
          <Button to={hero_Cta.href} theme={hero_Cta.theme}>{hero_Cta.text}</Button>
        </div>
      </header>
      <CaseStudies/>
    </Wrapper>
  );
}


 
export default Hero;