import React from "react";
import ReactMarkdown from "react-markdown";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Wrapper from './Wrapper';


const Creativity = ({
  data: {
    creativity_Heading,
    creativity_Paragraph,
    creativity_SecondParagraph,
  }
}) => {
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{creativity_Heading}</DecorativeHeading>
      <p>{creativity_Paragraph}</p>
      <ReactMarkdown>{creativity_SecondParagraph}</ReactMarkdown>
    </Wrapper>
  );
}
 
export default Creativity;