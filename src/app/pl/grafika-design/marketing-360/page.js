import Breadcrumbs from "@/global/Breadcrumbs";
import fetchData from "@/utils/fetchData";
import Hero from "@/sections/marketing/Hero";

const breadcrumbs = [
  {
    name: "Grafika & design",
    link: "/pl/grafika-design"
  },
  {
    name: "Marketing 360",
    link: "/pl/grafika-design/marketing-360",
  },
];

export default async function MarketingPage() {
  const {
    page: { hero, content },
  } = await query();

  return (
    <main id="main">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero data={hero}/>
    </main>
  );
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(`
  query {
    page: Marketing360Page (id: "marketing360Page") {
      hero {
        cta {
          theme
          text
          href
        }
        heading
        subheading
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
          heading
          cta {
            theme
            text
            href
          }
        }
      }
    }
  }`);
  return data;
};
