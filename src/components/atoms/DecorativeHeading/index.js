import { HeadingDecoration, HeadingLineFlexibility } from "../Icons";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const DecorativeHeading = ({ type = "h1", children, decoration = true, components, className, ...props }) => {
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

  const Heading = type;

  const headingClassName = [
    children?.includes("\n\n") ? styles.has2Spans : '',
    styles.wrapper,
    className || '',
  ].join(' ');

  return (
    <Heading
      className={headingClassName}
      {...props}
    >
      {decoration && <HeadingDecoration />}
      <Markdown
        components={{
          p: renderParagraph,
          ...components,
        }}
      >
        {children}
      </Markdown>
    </Heading>
  );
};

export default DecorativeHeading;
