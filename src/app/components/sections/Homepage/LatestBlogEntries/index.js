import React from "react";
import fetchData from "@/utils/fetchData";
import Wrapper from "./Wrapper";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Button from "@/app/components/atoms/Button";
import BlogEntry from "@/app/components/organisms/BlogEntry";
import { changeImageDimensions, formatDateToPolishLocale } from "@/utils/functions";

const LatestBlogEntries = async ({
  data,
  heading,
  exclude = null,
  smallEntry = false,
}) => {
  
  function changeBlogEntriesData(body) {
    return body.data.blogEntries.map((entry) => {
      entry._createdAt = formatDateToPolishLocale(entry._createdAt);
      entry.author.map((author) => {
        author.img = changeImageDimensions(author.img, 48, 48);
      });
      entry.img = changeImageDimensions(entry.img, 230, 230);
    });
  }

  let body;
  if (data) {
    body = data;
  } else {
     body = await query();
     changeBlogEntriesData(body);
  }

  return (
    <Wrapper>
      <DecorativeHeading type="h2">
        {heading || "Zobacz nasze najnowsze **posty** na blogu"}
      </DecorativeHeading>
      <div className="wrapper">
        {body.data.blogEntries
          .filter((entry) => entry.slug.current !== exclude)
          .map(
            (entry, i) =>
              i < 3 && (
                <BlogEntry data={entry} key={i} smallEntry={smallEntry} />
              )
          )}
      </div>
      <Button theme="secondary" to="/pl/blog" className="cta">
        Przejdź do bloga
      </Button>
    </Wrapper>
  );
};

const query = async () => {
  const { body } = await fetchData(`
  blogEntries: allBlogEntries(limit: 4, sort: { _createdAt: DESC }) {
    title
    subtitle
    slug {
      current
    }
    author {
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
    categories {
      name
      slug {
        current
      }
    }
    _createdAt
    contentRaw
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

export default LatestBlogEntries;
