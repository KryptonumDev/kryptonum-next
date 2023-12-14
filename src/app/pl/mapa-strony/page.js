import Breadcrumbs from "@/components/global/Breadcrumbs";
import SEO from "@/components/global/Seo";
import Hero from "@/components/sections/Hero";
import Grid from "@/components/sections/SitemapGrid";
import fetchData from "@/utils/fetchData";

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
    akademiaEntries
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
      <Hero data={{
        heading: hero_Heading,
        paragraph: hero_Subheading,
        sideImage: hero_Img
      }}
      isBlogHero={true}
      />
      <Grid
        team={team}
        blogEntries={blogEntries}
        WebDevelopment={WebDevelopment}
        Agency={Agency}
        GraphicsDesign={GraphicsDesign}
        Workshop={Workshop}
        caseStudies={caseStudies}
        akademiaEntries={akademiaEntries}
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
 const {
    body: { data },
  } = await fetchData(`
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
    akademiaEntries: allCuriosityEntries {
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