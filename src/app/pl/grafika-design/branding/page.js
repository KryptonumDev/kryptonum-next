import CentralizedHeadingSection from '@/components/sections/CentralizedHeadingSection';
import CtaSection from '@/components/sections/CtaSection';
import Hero from '@/components/sections/Hero';
import IconTitleDescriptionGrid from '@/components/sections/IconTitleDescriptionGrid';
import IconTitleDescriptionListSection from '@/components/sections/IconTitleDescriptionListSection';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import TextSection from '@/components/sections/TextSection';
import TilesWithOverflowIcon from '@/components/sections/TilesWithOverflowIcon';
import Breadcrumbs from '@/global/Breadcrumbs';
import SEO from '@/global/Seo';
import fetchData from '@/utils/fetchData';

const breadcrumbs = [
  {
    name: 'Grafika & design',
    link: '/pl/grafika-design',
  },
  {
    name: 'Branding',
    link: '/pl/grafika-design/branding',
  },
];

export default async function BrandingPage() {
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

  return (
    <main id='main'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero data={hero} hasBorder={true}/>
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
  );
}

export async function generateMetadata() {
  const {
    page: { seo },
  } = await query();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/pl/grafika-design/branding',
  });
}

const query = async () => {
  const { body: { data } } = await fetchData(/* GraphQL */ `
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
