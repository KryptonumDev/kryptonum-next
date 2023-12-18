import Content from "@/components/sections/Content";
import EntryHero from "@/components/sections/EntryHero";
import LatestBlogEntries from "@/components/sections/LatestBlogEntries";
import LatestCuriosityEntries from "@/components/sections/LatestCuriosityEntries";
import ScrollToNext from "@/components/sections/ScrollToNext";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import { removeMarkdown } from "@/utils/functions";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { allBlogEntries } = await paramsQuery();
  return allBlogEntries.map((entry) => ({
    slug: entry.slug.current
  }));
}

export default async function BlogSlugPage({ params }) {
  const {
    page: { title, subtitle, categories, _createdAt, img, contentRaw, author, seo, scrollToNext },
    blogEntries,
  } = await query(params.slug);

  const breadcrumbs = [
    {
      name: "Blog",
      link: "/pl/blog",
    },
    {
      name: title,
      link: params.slug,
    },
  ];

  return (
    <>
      <main id="main">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <EntryHero
          title={title}
          subtitle={subtitle}
          categories={categories}
          categorySlug="/pl/blog/kategoria/"
          _createdAt={_createdAt}
          img={img}
        />
        <Content contentRaw={contentRaw} author={author} share={seo} />
        <LatestBlogEntries exclude={params.slug} data={blogEntries} />
        <LatestCuriosityEntries />
      </main>
      {scrollToNext && <ScrollToNext data={scrollToNext} />}
    </>
  );
}

export async function generateMetadata({ params: { slug } }) {
  const {
    page: {
      seo,
      img: {
        asset: { url: ogImage },
      },
    },
  } = await query(slug);
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: `/pl/blog/${slug}`,
    ogImage: `${ogImage}?w=1200`,
  });
}

const query = async (slug) => {
  const {
    body: { data },
  } = await fetchData(
    /* GraphQL */ `
      query ($slug: String!) {
        page: allBlogEntries(sort: { _createdAt: DESC }, where: { slug: { current: { eq: $slug } } }) {
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
          contentRaw
          _createdAt
          # SEO
          seo {
            title
            description
          }
        }
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
        scrollToNext_BlogPost: allBlogEntries(sort: { _createdAt: ASC }) {
          title
          slug {
            current
          }
        }
      }
    `,
    {
      slug,
    }
  );
  if (slug) {
    data.page ? (data.page = data.page[0]) : notFound();
    slug !== data.page?.slug.current && notFound();
  }
  const blogPosts = data?.scrollToNext_BlogPost;
  const currentIndex = blogPosts.findIndex((item) => item.slug.current === data.page.slug.current);
  const nextPost = currentIndex !== -1 && currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  if (nextPost) {
    data.page.scrollToNext = {
      paragraph: "**Scrolluj**, by przejść do następnego artykułu",
      title: "Następny post:",
      link: { text: removeMarkdown(nextPost.title), href: `/pl/blog/${nextPost.slug.current}` },
    };
  }
  return data;
};

const paramsQuery = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      allBlogEntries: allBlogEntries {
        slug {
          current
        }
      }
    }
  `);
  return data;
};
