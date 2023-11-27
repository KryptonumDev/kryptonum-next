import fetchData from "@/utils/fetchData";
import SEO from "@/app/components/global/Seo";
import CaseStudies from "@/app/components/sections/CaseStudies";
import CentralizedHeadingSection from "@/app/components/sections/CentralizedHeadingSection";
import CtaSection from "@/app/components/sections/CtaSection";
import FullWidthImageComponent from "@/app/components/sections/FullWidthImageComponent";
import Hero from "@/app/components/sections/Hero";
import IconTitleDescriptionListSection from "@/app/components/sections/IconTitleDescriptionListSection";
import Process from "@/app/components/sections/Process";
import Slider from "@/app/components/sections/Slider";
import Team from "@/app/components/sections/Team";
import Testimonials from "@/app/components/sections/Testimonials";
import TextSection from "@/app/components/sections/TextSection";
import TilesComponentWithHeading from "@/app/components/sections/TilesComponentWithHeading";

export default async function UiDesignPage() {
	const {
		page: {
			team_Cta,
			team_Heading,
			team_Text,
			hero,
			textSection,
			centralizedHeading,
			ctaSection,
			tilesWithHeading,
			image,
			slider,
      textSection2,
      headerTitleDescriptionList,
      image2,
      textSection3,
      ctaSection2,
      textSection4,
      process,
      centralizedHeading2,
      caseStudies,
      ctaSection3
		},
		testimonials,
	} = await query();

  const breadcrumbs = [{
    name: "Projektowanie UI",
    link: "/projektowanie-ui"
  }];
  
	return (
		<>
			<Hero data={hero} breadcrumbs={breadcrumbs}/>
			<TextSection data={textSection} />
			<CentralizedHeadingSection data={centralizedHeading} decoration={false} />
			<CtaSection data={ctaSection} />
			<TilesComponentWithHeading data={tilesWithHeading} />
			<FullWidthImageComponent image={image} withBorder={true}/>
			<Slider data={slider} />
			<TextSection data={textSection2} />
			<IconTitleDescriptionListSection data={headerTitleDescriptionList} />
			<FullWidthImageComponent image={image2} />
			<TextSection data={textSection3} breakLine={true}/>
			<CtaSection data={ctaSection2} />
			<TextSection data={textSection4} />
			<Process data={process}/>
			<CentralizedHeadingSection data={centralizedHeading2}/>
			<CaseStudies cta={caseStudies}/>
			<CtaSection data={ctaSection3} />
			<Team heading={team_Heading} paragraph={team_Text} cta={team_Cta} />
			<Testimonials testimonials={testimonials} />
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
		url: "/pl/projektowanie-ui",
	});
}


const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
    page: UiDesignPage(id: "uiDesignPage") {
      #Hero
      hero {
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
      }
      #TextSection
      textSection {
        heading
        blocks {
          description
          title
        }
      }
      #CentralizedHeading
      centralizedHeading {
        heading
        paragraph
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
      #Tiles component with heading
      tilesWithHeading {
        heading
        tiles {
          heading
          list {
            title
            description
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
        }
      }
      #ImageSection
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
      #Slider
      slider {
        heading
        slides {
          title
          description
          href
        }
      }
      #TextSection2
      textSection2 {
        heading
        blocks {
          title
          description
        }
      }
      #Header with title description list
      headerTitleDescriptionList {
        header
        title
        description
      }
      #Image2
      image2 {
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
      #TextSection3
      textSection3 {
        heading
        blocks {
          title
          description
        }
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
      #TextSection4
      textSection4 {
        heading
        blocks {
          title
          description
        }
      }
      #Process
      process {
        title
        description
      }
      #CentralizedHeading
      centralizedHeading2 {
        heading
      }
      #Case studies
      caseStudies {
        theme
        text
        href
      }
      #CtaSection3
      ctaSection3 {
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
      #Team
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
  
		`);
	return data;
};
