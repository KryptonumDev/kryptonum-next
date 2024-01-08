import CaseStudies from '@/components/sections/CaseStudies';
import CtaSection from '@/components/sections/CtaSection';
import HeroServices from '@/components/sections/HeroServices';
import LatestBlogEntries from '@/components/sections/LatestBlogEntries';
import MasonryList from '@/components/sections/MasonryList';
import ScrollToNext from '@/components/sections/ScrollToNext';
import SimpleCtaSection from '@/components/sections/SimpleCtaSection';
import Audit from '@/components/sections/graphicsAndDesign/Audit';
import Breadcrumbs from '@/global/Breadcrumbs';
import SEO from '@/global/Seo';
import fetchData from '@/utils/fetchData';

export default async function graphicsAndDesignPage() {
  const {
    page: {
      hero_Heading,
      hero_Annotation,
      hero_Paragraph,
      hero_SecondParagraph,
      hero_Img,
      hero_Nav,
      audit_Paragraph,
      audit_Paragraph2,
      audit_Paragraph3,
      audit_Cta,
      audit_Img,
      simpleCtaSection,
      digital_Heading,
      digital_Paragraph,
      digital_Paragraph2,
      digital_List,
      simpleCtaSection2,
      phisical_Heading,
      phisical_Paragraph,
      phisical_Paragraph2,
      phisical_List,
      simpleCtaSection3,
      caseStudies,
      ctaSection,
      blogEntries_Heading,
      scrollToNext,
    },
    blogEntries,
  } = await query();

  const breadcrumbs = [
    {
      name: 'Grafika & design',
      link: '/pl/grafika-design',
    },
  ];

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
            hero_Nav,
          }}
        />
        <Audit
          data={{
            audit_Paragraph,
            audit_Paragraph2,
            audit_Paragraph3,
            audit_Cta,
            audit_Img,
          }}
        />
        <SimpleCtaSection data={simpleCtaSection} />
        <MasonryList
          heading={digital_Heading}
          paragraph={digital_Paragraph}
          paragraph2={digital_Paragraph2}
          list={digital_List}
        />
        <SimpleCtaSection data={simpleCtaSection2} />
        <MasonryList
          heading={phisical_Heading}
          paragraph={phisical_Paragraph}
          paragraph2={phisical_Paragraph2}
          list={phisical_List}
        />
        <SimpleCtaSection data={simpleCtaSection3} />
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
    url: '/pl/grafika-design',
  });
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      page: GraphicsDesign(id: "graphics-design") {
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
        hero_Nav {
          title
          description
          href
        }
        # Audit
        audit_Paragraph
        audit_Paragraph2
        audit_Paragraph3
        audit_Cta {
          theme
          text
          href
        }
        audit_Img {
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
        # Digital products
        digital_Heading
        digital_Paragraph
        digital_Paragraph2
        digital_List
        # Second Simple CTA Section
        simpleCtaSection2 {
          heading
          cta {
            theme
            href
            text
          }
        }
        # Digital products
        phisical_Heading
        phisical_Paragraph
        phisical_Paragraph2
        phisical_List
        # Third Simple CTA Section
        simpleCtaSection3 {
          heading
          cta {
            theme
            href
            text
          }
        }
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
