import Wrapper from "./Wrapper";
import React from "react";
import ReactMarkdown from "react-markdown";
import { HeadingDecoration, HeadingLineFlexibility } from "../Icons";

const DecorativeHeading = ({
  type = "h1",
  children,
  decoration = true,
  components,
  ...props
}) => {
  const renderParagraph = ({ children }) => {
    const renderedChildren = [];
    children.forEach((child) => {
      if (typeof child === "string") {
        const parts = child.split(/(~>|~~~>)/);
        parts.forEach((part, partIndex) => {
          if (part === "~>") {
            renderedChildren.push(<HeadingLineFlexibility key={partIndex} />);
          } else if (part === "~~~>") {
            renderedChildren.push(<HeadingDecoration key={partIndex} />);
          } else {
            renderedChildren.push(part);
          }
        });
      } else {
        renderedChildren.push(child);
      }
    });
    return <span>{renderedChildren}</span>;
  };

  return (
    <Wrapper as={type} $has2spans={children?.includes("\n\n").toString()} {...props}>
      {decoration && <HeadingDecoration />}
      <ReactMarkdown
        components={{
          p: renderParagraph,
          ...components,
        }}
      >
        {children}
      </ReactMarkdown>
    </Wrapper>
  );
};

export default DecorativeHeading;
