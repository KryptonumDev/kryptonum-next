import fetchData from "@/utils/fetchData";
import SEO from "@/app/components/global/Seo";
import CardWithOverflowIcon from "@/app/components/sections/CardWithOverflowIcon";
import CentralizedHeadingWithCardGrid from "@/app/components/sections/CentralizedHeadingWithCardGrid";
import ConsultationForm from "@/app/components/sections/ConsultationForm";
import CtaSection from "@/app/components/sections/CtaSection";
import FullWidthImageComponent from "@/app/components/sections/FullWidthImageComponent";
import HeadingWithIconTitleDescriptionList from "@/app/components/sections/HeadingWithIconTitleDescriptionList";
import HeadingWithMaxWidth from "@/app/components/sections/HeadingWithMaxWidth";
import Hero from "@/app/components/sections/Hero";
import ImageDisplayedOnTablet from "@/app/components/sections/ImageDisplayedOnTablet";
import Team from "@/app/components/sections/Team";
import Testimonials from "@/app/components/sections/Testimonials";
import TextSection from "@/app/components/sections/TextSection";
import TitleDescriptionImageList from "@/app/components/sections/TitleDescriptionImageList";
import HeadingBlocksCardGrid from "@/app/components/sections/UxDesign/HeadingBlocksCardGrid";
import HeadingImageTextList from "@/app/components/sections/UxDesign/HeadingImageTextList";

export default async function UxDesignPage() {
	const {
		page: {
			team_Cta,
			team_Heading,
			team_Text,
			hero,
			textSection,
			ctaSection,
			titleDescriptionImageList,
			headingImageBlocksList,
			ctaSection2,
			textSection2,
			imageSection,
			textSection3,
			cardWithOverflowIcon,
			cardGridWithCentralizedHeading,
			ctaSection3,
			headingBlocksCardGrid,
			consultationCta,
			headingWithIconTitleDescriptionList,
			imageDisplayedOnTablet,
			headingWithIconDescriptionList2,
			headingWithMaxWidth,
			ctaSection4,
		},
		testimonials,
	} = await query();
	const breadcrumbs = [{
    name: "Projektowanie UX",
    link: "/projektowanie-ux"
  }];
	return (
		<>
			<Hero data={hero} breadcrumbs={breadcrumbs}/>
			<TextSection data={textSection} />
			<CtaSection data={ctaSection} />
			<TitleDescriptionImageList data={titleDescriptionImageList} />
			<HeadingImageTextList data={headingImageBlocksList} />
			<CtaSection data={ctaSection2} />
			<TextSection data={textSection2} />
			<FullWidthImageComponent image={imageSection} />
			<TextSection data={textSection3} />
			<CardWithOverflowIcon cardData={cardWithOverflowIcon} />
			<CentralizedHeadingWithCardGrid data={cardGridWithCentralizedHeading} decoration={true} />
			<CtaSection data={ctaSection3} />
			<HeadingBlocksCardGrid data={headingBlocksCardGrid}/>
			<ConsultationForm data={consultationCta} />
			<HeadingWithIconTitleDescriptionList data={headingWithIconTitleDescriptionList} />
			<ImageDisplayedOnTablet image={imageDisplayedOnTablet} />
			<HeadingWithIconTitleDescriptionList data={headingWithIconDescriptionList2} />
			<HeadingWithMaxWidth heading={headingWithMaxWidth} decoration={false} />
			<CtaSection data={ctaSection4} />
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
		url: "/pl/projektowanie-ux",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
	page: UxDesignPage(id: "uxDesignPage") {
    #Hero
    hero {
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
    }
    #TextSection
    textSection {
      heading
      blocks {
        description
        title
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
    #Title description image list
    titleDescriptionImageList {
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
    }
    #Heading image blocks list
    headingImageBlocksList {
      heading
      blocks {
        title
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
    #Cta section2
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
    #Text section2
    textSection2 {
      heading
      blocks {
        description
        title
      }
    }
    #ImageSection
    imageSection {
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
    #Text section3
    textSection3 {
      heading
      blocks {
        description
        title
      }
    }
    #cardWithOverflowIcon
    cardWithOverflowIcon {
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
      title
      description
    }
    #CardGrid
    cardGridWithCentralizedHeading {
      centralizedHeading {
        heading
        paragraph
      }
      cardGrid {
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
    #HeadingBlocksCardGrid
    headingBlocksCardGrid {
      heading
      blocks {
        title
        description
      }
      cardGrid {
        description
      }
    }
    #ConsultationCta
    consultationCta {
      heading
      subheading
      cta
    }
    #Heading with Icon description list
    headingWithIconTitleDescriptionList {
      heading
      IconTitleDescriptionList {
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
        title
        description
      }
    }
    imageDisplayedOnTablet {
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
    #Heading with Icon description list 2
    headingWithIconDescriptionList2 {
      heading
      IconTitleDescriptionList {
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
    #HeadingWithMaxWidth
    headingWithMaxWidth
    #CtaSection4
    ctaSection4 {
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
