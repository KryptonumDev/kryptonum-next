import Breadcrumbs from "@/global/Breadcrumbs";
import fetchData from "@/utils/fetchData";
import Hero from "@/sections/marketing/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import CtaSection from "@/components/sections/CtaSection";
import LatestBlogEntries from "@/components/sections/LatestBlogEntries";

const breadcrumbs = [
  {
    name: "Marketing 360",
    link: "/pl/grafika-design/marketing-360",
  },
];

export default async function MarketingPage() {
  const mappedComponents = (component, i) => ({
    CaseStudies: (
      <CaseStudies
        key={i}
        heading={component?.heading}
        eagerLoading={true}
      />
    ),
    ctaSection: (
      <CtaSection
        key={i}
        data={component}
      />
    ),
    LatestBlogEntries: (
      <LatestBlogEntries
      key={i}
        data={blogEntries}
        heading={component?.heading}
      />
    ),
  });

  const {
    page: { hero, content },
    blogEntries,
  } = await query();

  return (
    <main id="main">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero data={hero} />
      {content.map((component, i) => {
        return mappedComponents(component, i)[component._type];
      })}
    </main>
  );
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(`
  query {
    page: Marketing360Page(id: "marketing360Page") {
      hero {
        cta {
          theme
          text
          href
        }
        subheading
        heading
        image {
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
        imageDescription
        textComponent {
          heading
          blocks {
            description
          }
        }
      }
      content {
        ... on CaseStudies {
          _type
          heading
        }
        ... on CtaSection {
          _type
          heading
          cta {
            theme
            text
            href
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
        ... on CtaSectionPill {
          _type
          heading
          cta {
            theme
            text
            href
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
          icon {
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
        ... on HeadingImageBlocks {
          _type
          heading
          blocks {
            description
          }
          image {
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
        ... on ProcessList {
          _type
          ProcessList {
            heading
            subheading
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
            paragraph
          }
        }
        ... on SimpleCtaSection {
          _type
          heading
          cta {
            theme
            text
            href
          }
        }
        ... on LatestBlogEntries {
          _type
          heading
        }
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
  }
  `);
  return data;
};
