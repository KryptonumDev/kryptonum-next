import CtaSection from '@/components/sections/CtaSection';
import Hero from '@/components/sections/Hero';
import LatestCuriosityEntries from '@/components/sections/LatestCuriosityEntries';
import fetchData from '@/utils/fetchData';

export default async function notFound() {
  const {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Cta,
      hero_Img,
      curiosities_Heading,
      ctaSection,
    },
  } = await query();

  return (
    <main id='main'>
      <Hero
        data={{
          sideImage: hero_Img,
          heading: hero_Heading,
          paragraph: hero_Subheading,
          cta: hero_Cta,
        }}
        isBlogHero={true}
      />
      <LatestCuriosityEntries heading={curiosities_Heading} />
      <CtaSection data={ctaSection} />
    </main>
  );
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      page: NotFound(id: "notFound") {
        # Hero
        hero_Heading
        hero_Subheading
        hero_Cta {
          theme
          text
          href
        }
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
        # Curiosities
        curiosities_Heading
        # CTA
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
        # SEO
        seo {
          title
          description
        }
      }
    }
  `);
  return data;
};
