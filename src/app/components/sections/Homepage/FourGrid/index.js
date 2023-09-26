import React from "react";
import ReactMarkdown from 'react-markdown';
import Wrapper from "./Wrapper";
import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";


const FourGrid = ({ heading, claim, paragraph, secondClaim, cta }) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ReactMarkdown>{claim}</ReactMarkdown>
      <p>{paragraph}</p>
      <div>
        <ReactMarkdown>{secondClaim}</ReactMarkdown>
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
      </div>
    </Wrapper>
  );
}
 
export default FourGrid;