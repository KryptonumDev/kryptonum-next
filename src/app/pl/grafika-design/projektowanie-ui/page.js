import CaseStudies from '@/components/sections/CaseStudies';
import CentralizedHeadingSection from '@/components/sections/CentralizedHeadingSection';
import CtaSection from '@/components/sections/CtaSection';
import FullWidthImageComponent from '@/components/sections/FullWidthImageComponent';
import Hero from '@/components/sections/Hero';
import IconTitleDescriptionListSection from '@/components/sections/IconTitleDescriptionListSection';
import Process from '@/components/sections/Process';
import Slider from '@/components/sections/Slider';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import TextSection from '@/components/sections/TextSection';
import TilesComponentWithHeading from '@/components/sections/TilesComponentWithHeading';
import Breadcrumbs from '@/global/Breadcrumbs';
import SEO from '@/global/Seo';
import fetchData from '@/utils/fetchData';

const breadcrumbs = [
  {
    name: 'Grafika & design',
    link: '/pl/grafika-design',
  },
  {
    name: 'Projektowanie UI',
    link: '/pl/grafika-design/projektowanie-ui',
  },
];

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
      blocks,
      centralizedHeading2,
      caseStudies,
      ctaSection3,
    },
  } = await query();

  return (
    <main id='main'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero data={hero} />
      <TextSection data={textSection} />
      <CentralizedHeadingSection
        data={centralizedHeading}
        decoration={false}
      />
      <CtaSection data={ctaSection} />
      <TilesComponentWithHeading data={tilesWithHeading} />
      <FullWidthImageComponent
        image={image}
        withBorder={true}
      />
      <Slider data={slider} />
      <TextSection data={textSection2} />
      <IconTitleDescriptionListSection data={headerTitleDescriptionList} />
      <FullWidthImageComponent image={image2} />
      <TextSection
        data={textSection3}
        breakLine={true}
      />
      <CtaSection data={ctaSection2} />
      <TextSection data={textSection4} />
      <Process data={{ blocks }} />
      <CentralizedHeadingSection data={centralizedHeading2} />
      <CaseStudies
        cta={caseStudies?.cta}
        data={caseStudies?.caseStudies}
      />
      <CtaSection data={ctaSection3} />
      <Team
        heading={team_Heading}
        paragraph={team_Text}
        cta={team_Cta}
      />
      <Testimonials />
    </main>
  );
}

export async function generateMetadata() {
  const { page: { seo }} = await query();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/pl/grafika-design/projektowanie-ui',
  });
}

const query = async () => {
  const { body: { data } } = await fetchData(/* GraphQL */ `
    query {
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
        blocks {
          title
          description
        }
        #CentralizedHeading
        centralizedHeading2 {
          heading
        }
        #Case studies
        caseStudies {
          heading
          caseStudies {
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
    }
  `);
  return data;
};