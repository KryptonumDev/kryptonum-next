import GridFloatingImg from "@/components/sections/GridFloatingImg";
import LatestBlogEntries from "@/components/sections/LatestBlogEntries";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Creativity from "@/components/sections/homepage/Creativity";
import FourGrid from "@/components/sections/homepage/FourGrid";
import Hero from "@/components/sections/homepage/Hero";
import Roadmap from "@/components/sections/homepage/Roadmap";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";

export async function generateMetadata() {
	const {
		page: { seo },
	} = await query();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "/pl",
	});
}

const PolishIndexPage = async () => {
	const {
		page: {
			hero_Heading,
			hero_Subheading,
			hero_Cta,
			services,
			conquest_Heading,
			conquest_Claim,
			conquest_Paragraph,
			conquest_SecondClaim,
			conquest_Cta,
			challenge_Heading,
			challenge_Claim,
			challenge_Paragraph,
			challenge_SecondClaim,
			challenge_Cta,
			creativity_Heading,
			creativity_Paragraph,
			creativity_SecondParagraph,
			roadmap_Heading,
			roadmap_Process,
			roadmap_Cta,
			team_Heading,
			team_Text,
			team_Cta,
		},
		testimonials,
		blogEntries,
	} = await query();

	return (
		<>
			<main id="main">
				<Hero
					data={{
						hero_Heading,
						hero_Subheading,
						hero_Cta,
					}}
					eagerLoading={true}
				/>
				<GridFloatingImg data={services} />
				<FourGrid
					heading={conquest_Heading}
					claim={conquest_Claim}
					paragraph={conquest_Paragraph}
					secondClaim={conquest_SecondClaim}
					cta={conquest_Cta}
				/>
				<FourGrid
					heading={challenge_Heading}
					claim={challenge_Claim}
					paragraph={challenge_Paragraph}
					secondClaim={challenge_SecondClaim}
					cta={challenge_Cta}
				/>
				<Creativity
					data={{
						creativity_Heading,
						creativity_Paragraph,
						creativity_SecondParagraph,
					}}
				/>
				<Roadmap
					heading={roadmap_Heading}
					list={roadmap_Process}
					cta={roadmap_Cta}
				/>
				<Team
					heading={team_Heading}
					paragraph={team_Text}
					cta={team_Cta}
				/>
				<Testimonials testimonials={testimonials} />
				<LatestBlogEntries data={blogEntries} />
			</main>
		</>
	);
};

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
    query {
      page: Homepage(id: "homepage") {
        # Hero
        hero_Heading
        hero_Subheading
        hero_Cta {
          theme
          text
          href
        }
        # Services
        services: GridFloatingImg {
          heading
          list {
            title
            description
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
            href
          }
        }
        # Conquest
        conquest_Heading
        conquest_Claim
        conquest_Paragraph
        conquest_SecondClaim
        conquest_Cta {
          theme
          text
          href
        }
        # Challange
        challenge_Heading
        challenge_Claim
        challenge_Paragraph
        challenge_SecondClaim
        challenge_Cta {
          theme
          text
          href
        }
        # Creativity
        creativity_Heading
        creativity_Paragraph
        creativity_SecondParagraph
        # Roadmap
        roadmap_Heading
        roadmap_Process {
          title
          description
        }
        roadmap_Cta {
          theme
          text
          href
        }
        # Team
        team_Heading
        team_Text
        team_Cta {
          theme
          text
          href
        }
        # SEO
        seo {
          title
          description
        }
      }
      testimonials: allTestimonials(limit: 3, sort: {_createdAt:ASC}) {
        name
        text
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

export default PolishIndexPage;
