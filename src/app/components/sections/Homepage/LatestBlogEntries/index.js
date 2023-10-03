import React from "react";
import fetchData from "@/utils/fetchData";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Button from "@/components/atoms/Button";
import BlogEntry from "@/components/organisms/BlogEntry";
import { formatDateToPolishLocale } from "@/utils/functions";
import styles from "./styles.module.scss";

const LatestBlogEntries = async ({
  data,
  heading,
  exclude = null,
  smallEntry = false,
}) => {
  function changeBlogEntriesData(body) {
    return body.data.blogEntries.map((entry) => {
      entry._createdAt = formatDateToPolishLocale(entry._createdAt);
    });
  }

  let body;
  if (data) {
    body.data.blogEntries = data;
  } else {
    body = await query();
    changeBlogEntriesData(body);
  }

  return (
    <section className={styles.section}>
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
      <Button theme="secondary" to="/pl/blog" className={styles.cta}>
        Przejdź do bloga
      </Button>
    </section>
  );
};

export default LatestBlogEntries;

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
