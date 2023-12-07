import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import SEO from "@/app/components/global/Seo";
import CentralizedHeadingSection from "@/app/components/sections/CentralizedHeadingSection";
import CtaSection from "@/app/components/sections/CtaSection";
import Hero from "@/app/components/sections/Hero";
import IconTitleDescriptionGrid from "@/app/components/sections/IconTitleDescriptionGrid";
import IconTitleDescriptionListSection from "@/app/components/sections/IconTitleDescriptionListSection";
import Team from "@/app/components/sections/Team";
import Testimonials from "@/app/components/sections/Testimonials";
import TextSection from "@/app/components/sections/TextSection";
import TilesWithOverflowIcon from "@/app/components/sections/TilesWithOverflowIcon";
import fetchData from "@/utils/fetchData";

export default async function BraindingPage() {
	const {
		page: {
			team_Cta,
			team_Heading,
			team_Text,
			hero,
			textSection,
			ctaSection,
			tiles,
			textSection2,
			iconTitleBlocksList,
			centralizedHeading,
			iconTitleBlocksList2,
			centralizedHeading2,
			textSection3,
			headerTitleDescriptionList,
			ctaSection2,
		},
		testimonials,
	} = await query();

	const breadcrumbs = [
		{
			name: "Branding",
			link: "/branding",
		},
	];

	return (
		<>
			<main id="main">
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<Hero data={hero} />
				<TextSection data={textSection} />
				<CtaSection data={ctaSection} />
				<TilesWithOverflowIcon data={tiles} />
				<TextSection data={textSection2} />
				<IconTitleDescriptionGrid data={iconTitleBlocksList} />
				<CentralizedHeadingSection
					data={centralizedHeading}
					decoration={false}
				/>
				<IconTitleDescriptionGrid data={iconTitleBlocksList2} />
				<CentralizedHeadingSection
					data={centralizedHeading2}
					decoration={false}
				/>
				<TextSection data={textSection3} />
				<IconTitleDescriptionListSection data={headerTitleDescriptionList} />
				<CtaSection data={ctaSection2} />
				<Team
					heading={team_Heading}
					paragraph={team_Text}
					cta={team_Cta}
				/>
				<Testimonials testimonials={testimonials} />
			</main>
		</>
	);
}

export async function generateMetadata() {
	const {
		page: { seo },
	} = await query();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "/pl/branding",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
    page: BrandingPage(id: "brandingPage") {
      #Hero
      hero {
        heading
        sideImage {
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
      #Text section
      textSection {
        heading
        blocks {
          title
          description
        }
      }
      #CtaSection
      ctaSection {
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
      #Tiles
      tiles {
        heading
        list {
          overflowContent
          title
          description
        }
      }
      #Text section 2
      textSection2 {
        heading
        blocks {
          title
          description
        }
      }
      #Icon Title Blocks List
      iconTitleBlocksList {
        title
        blocks {
          description
          title
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
      #Centralized heading
      centralizedHeading {
        heading
        cta {
          theme
          text
          href
        }
      }
      #IconTitleBlocksList
      iconTitleBlocksList2 {
        title
        blocks {
          description
          title
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
      #Centralized Heading 2
      centralizedHeading2 {
        heading
        cta {
          theme
          text
          href
        }
      }
      #Text section 3
      textSection3 {
        heading
        blocks {
          title
          description
        }
      }
      #Header Title Description List
      headerTitleDescriptionList {
        header
        title
        description
      }
      #CtaSection2
      ctaSection2 {
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
  
      # Team
      team_Heading
      team_Text
      team_Cta {
        theme
        text
        href
      }
      #SEO
      seo {
        title
        description
      }
    }
    testimonials: allTestimonials(limit: 3, sort: { _createdAt: ASC }) {
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
  }
		`);
	return data;
};
