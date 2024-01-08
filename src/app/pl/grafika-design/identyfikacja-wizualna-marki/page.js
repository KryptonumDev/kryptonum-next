import BrandbookTypes from '@/components/sections/BrandbookTypes';
import CaseStudies from '@/components/sections/CaseStudies';
import CtaSection from '@/components/sections/CtaSection';
import HeroServices from '@/components/sections/HeroServices';
import ImageAndStandout from '@/components/sections/ImageAndStandout';
import LatestBlogEntries from '@/components/sections/LatestBlogEntries';
import MasonryList from '@/components/sections/MasonryList';
import QuickForm from '@/components/sections/QuickForm';
import ScrollToNext from '@/components/sections/ScrollToNext';
import SimpleCtaSection from '@/components/sections/SimpleCtaSection';
import Breadcrumbs from '@/global/Breadcrumbs';
import SEO from '@/global/Seo';
import fetchData from '@/utils/fetchData';

const breadcrumbs = [
  {
    name: 'Grafika & design',
    link: '/pl/grafika-design',
  },
  {
    name: 'Identyfikacja wizualna marki',
    link: '/pl/grafika-design/identyfikacja-wizualna-marki',
  },
];

export default async function graphicsAndDesignVisualIdentityPage() {
  const {
    page: {
      hero_Heading,
      hero_Annotation,
      hero_Paragraph,
      hero_SecondParagraph,
      hero_Img,
      simpleCtaSection,
      brandbook_Heading,
      brandbook_Paragraph,
      brandbook_Standout,
      brandbook_Img,
      primaryBrandbook_Heading,
      primaryBrandbook_Paragraph,
      primaryBrandbook_List,
      extendedBrandbook_Heading,
      extendedBrandbook_Paragraph,
      extendedBrandbook_Annotation,
      extendedBrandbook_List,
      quickForm,
      who_Heading,
      who_List,
      caseStudies,
      ctaSection,
      blogEntries_Heading,
      scrollToNext,
    },
    blogEntries,
  } = await query();

  return (
    <>
      <main id='main'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <HeroServices
          data={{
            hero_Heading,
            hero_Annotation,
            hero_Paragraph,
            hero_SecondParagraph,
            hero_Img,
          }}
        />
        <SimpleCtaSection data={simpleCtaSection} />
        <ImageAndStandout
          heading={brandbook_Heading}
          paragraph={brandbook_Paragraph}
          standout={brandbook_Standout}
          img={brandbook_Img}
        />
        <BrandbookTypes
          data={{
            primaryBrandbook_Heading,
            primaryBrandbook_Paragraph,
            primaryBrandbook_List,
            extendedBrandbook_Heading,
            extendedBrandbook_Paragraph,
            extendedBrandbook_Annotation,
            extendedBrandbook_List,
          }}
        />
        <QuickForm data={quickForm} />
        <MasonryList
          heading={who_Heading}
          list={who_List}
        />
        <CaseStudies
          heading={caseStudies?.heading}
          data={caseStudies?.caseStudies}
        />
        <CtaSection data={ctaSection} />
        <LatestBlogEntries
          heading={blogEntries_Heading}
          data={blogEntries}
        />
      </main>
      <ScrollToNext data={scrollToNext} />
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
    url: '/pl/grafika-design/identyfikacja-wizualna-marki',
  });
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      page: VisualIdentity(id: "visual-identity") {
        # Hero
        hero_Heading
        hero_Annotation
        hero_Paragraph
        hero_SecondParagraph
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
        # Simple CTA Section
        simpleCtaSection {
          heading
          cta {
            theme
            href
            text
          }
        }
        # Brandbook
        brandbook_Heading
        brandbook_Paragraph
        brandbook_Standout
        brandbook_Img {
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
        # Brandbook Types
        primaryBrandbook_Heading
        primaryBrandbook_Paragraph
        primaryBrandbook_List
        extendedBrandbook_Heading
        extendedBrandbook_Paragraph
        extendedBrandbook_Annotation
        extendedBrandbook_List
        # Quick Form
        quickForm {
          heading
          subheading
          cta
        }
        # For Who
        who_Heading
        who_List
        # Case Studies
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
        # CTA Section
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
        # Blog entries
        blogEntries_Heading
        # Scroll To Next
        scrollToNext {
          heading
          paragraph
          title
          link {
            text
            href
          }
        }
        # SEO
        seo {
          title
          description
        }
      }
      blogEntries: allBlogEntries(limit: 4, sort: { _createdAt: DESC }) {
        title
        subtitle
        slug {
          current
        }
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
