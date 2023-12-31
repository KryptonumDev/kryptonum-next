import CaseStudies from '@/components/sections/CaseStudies';
import CtaSection from '@/components/sections/CtaSection';
import HeroServices from '@/components/sections/HeroServices';
import LatestBlogEntries from '@/components/sections/LatestBlogEntries';
import ListSection from '@/components/sections/ListSection';
import QuickForm from '@/components/sections/QuickForm';
import ScrollToNext from '@/components/sections/ScrollToNext';
import Showcase from '@/components/sections/Showcase';
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
    name: 'Projektowanie logo',
    link: '/pl/grafika-design/projektowanie-logo',
  },
];

export default async function graphicsAndDesignDesigningLogoPage() {
  const {
    page: {
      hero_Heading,
      hero_Annotation,
      hero_Paragraph,
      hero_SecondParagraph,
      hero_Img,
      simpleCtaSection,
      showcase_Heading,
      showcase_Paragraph,
      showcase_List,
      showcase_SummaryLeft,
      showcase_SummaryRight,
      quickForm,
      process_Heading,
      process_Paragraph,
      process_Title,
      process_List,
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
        <Showcase
          data={{
            showcase_Heading,
            showcase_Paragraph,
            showcase_List,
            showcase_SummaryLeft,
            showcase_SummaryRight,
          }}
        />
        <QuickForm data={quickForm} />
        <ListSection
          heading={process_Heading}
          paragraph={process_Paragraph}
          title={process_Title}
          list={process_List}
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
    url: '/pl/grafika-design/projektowanie-logo',
  });
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      page: GraphicsDesignLogo(id: "graphicsDesign_Logo") {
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
        # Showcase
        showcase_Heading
        showcase_Paragraph
        showcase_List {
          title
          description
        }
        showcase_SummaryLeft
        showcase_SummaryRight
        # Quick Form
        quickForm {
          heading
          subheading
          cta
        }
        # Process
        process_Heading
        process_Paragraph
        process_Title
        process_List {
          title
          description
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
