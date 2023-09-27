import React from "react";
import Link from "next/link";
import { removeMarkdown } from "@/utils/functions";
import ReadingTime from "../../atoms/ReadingTime";
import Img from "@/utils/Img";
import Wrapper from "./Wrapper";

const BlogEntry = ({ data, smallEntry }) => {
  return (
    <Wrapper className={`entry${smallEntry ? " smallEntry" : ""}`}>
      <Img data={data.img} className="img" quality="100" />
      <Link
        href={`/pl/blog/${data.slug.current}`}
        className="link"
        aria-label={removeMarkdown(data.title)}
      ></Link>
      <h3 className="title">{removeMarkdown(data.title)}</h3>
      <p className="subtitle">{removeMarkdown(data.subtitle)}</p>
      <Link
        href={`/pl/zespol/${data.author[0].slug.current}`}
        className="author"
      >
        <Img data={data.author[0].img} className="person-border" />
        <span>{data.author[0].name}</span>
      </Link>
      <div className="categories">
        {data.categories.slice(0, 3).map((category, i) => (
          <Link href={`/pl/blog/kategoria/${category.slug.current}`} key={i}>
            {category.name}
          </Link>
        ))}
      </div>
      <ReadingTime content={data.contentRaw} />
      <span className="createdAt">{data._createdAt}</span>
    </Wrapper>
  );
};

export default BlogEntry;
