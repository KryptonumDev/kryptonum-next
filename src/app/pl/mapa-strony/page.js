import Grid from "@/components/sections/SitemapGrid";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import HeroTwoColumns from "../../../components/sections/HeroTwoColumns";

export default async function SitemapPage() {
  const {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Img,
    },
    team,
    blogEntries,
    WebDevelopment,
    Agency,
    GraphicsDesign,
    Workshop,
    caseStudies,
    curiosityEntries
  } = await query();

  const breadcrumbs = [
    {
      name: "Mapa strony",
      link: "/pl/mapa-strony"
    },
  ];

  return (
    <>
    <main id="main">
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
      <HeroTwoColumns 
        heading= {hero_Heading}
        paragraph={hero_Subheading}
        img={hero_Img}
      />
      <Grid
        team={team}
        blogEntries={blogEntries}
        WebDevelopment={WebDevelopment}
        Agency={Agency}
        GraphicsDesign={GraphicsDesign}
        Workshop={Workshop}
        caseStudies={caseStudies}
        curiosityEntries={curiosityEntries}
      />
      </main>
    </>
  )
}

export async function generateMetadata() {
	const {
		page: { seo },
	} = await query();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "/pl/mapa-strony",
	});
}

const query = async () => {
 const { body: { data } } = await fetchData(`
    query {
      page: Sitemap(id: "sitemap") {
        hero_Heading
        hero_Subheading
        hero_Img {
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
        seo {
          title
          description
        }
      }
      caseStudies: allCaseStudyEntries {
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
      Workshop(id: "workshop") {
        hero_Img {
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
      GraphicsDesign(id: "graphics-design") {
        hero_Img {
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
      Agency(id: "agency") {
        hero_Img {
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
      WebDevelopment(id: "webDevelopment") {
        hero_Img {
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
      curiosityEntries: allCuriosityEntries {
        title
        slug {
          current
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
        _createdAt
      }
      blogEntries: allBlogEntries(sort: { _createdAt: DESC }) {
        title
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
        _createdAt
      }
      team: allTeamMember {
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
    }
  `
  );
  return data;
};