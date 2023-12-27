import CardWithOverflowIcon from "@/components/sections/CardWithOverflowIcon";
import CentralizedHeadingWithCardGrid from "@/components/sections/CentralizedHeadingWithCardGrid";
import ConsultationForm from "@/components/sections/ConsultationForm";
import CtaSection from "@/components/sections/CtaSection";
import FullWidthImageComponent from "@/components/sections/FullWidthImageComponent";
import HeadingWithIconTitleDescriptionList from "@/components/sections/HeadingWithIconTitleDescriptionList";
import HeadingWithMaxWidth from "@/components/sections/HeadingWithMaxWidth";
import Hero from "@/components/sections/Hero";
import ImageDisplayedOnTablet from "@/components/sections/ImageDisplayedOnTablet";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import TextSection from "@/components/sections/TextSection";
import TitleDescriptionImageList from "@/components/sections/TitleDescriptionImageList";
import HeadingBlocksCardGrid from "@/components/sections/UxDesign/HeadingBlocksCardGrid";
import HeadingImageTextList from "@/components/sections/UxDesign/HeadingImageTextList";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";

const breadcrumbs = [
  {
    name: "Projektowanie UX",
    link: "/projektowanie-ux",
  },
];

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

	return (
    <main id="main">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero data={hero} />
      <TextSection data={textSection} />
      <CtaSection data={ctaSection} />
      <TitleDescriptionImageList data={titleDescriptionImageList} />
      <HeadingImageTextList data={headingImageBlocksList} />
      <CtaSection data={ctaSection2} />
      <TextSection data={textSection2} />
      <FullWidthImageComponent image={imageSection} />
      <TextSection data={textSection3} />
      <CardWithOverflowIcon cardData={cardWithOverflowIcon} />
      <CentralizedHeadingWithCardGrid
        data={cardGridWithCentralizedHeading}
        decoration={true}
      />
      <CtaSection data={ctaSection3} />
      <HeadingBlocksCardGrid data={headingBlocksCardGrid} />
      <ConsultationForm data={consultationCta} />
      <HeadingWithIconTitleDescriptionList data={headingWithIconTitleDescriptionList} />
      <ImageDisplayedOnTablet image={imageDisplayedOnTablet} />
      <HeadingWithIconTitleDescriptionList data={headingWithIconDescriptionList2} />
      <HeadingWithMaxWidth
        heading={headingWithMaxWidth}
        decoration={false}
      />
      <CtaSection data={ctaSection4} />
      <Team
        heading={team_Heading}
        paragraph={team_Text}
        cta={team_Cta}
      />
      <Testimonials testimonials={testimonials} />
    </main>
	);
}

export async function generateMetadata() {
  const {
    page: { seo },
  } = await query();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/pl/projektowanie-ux',
  });
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
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
    }
  `);
  return data;
};
