import CaseStudies from '@/components/sections/CaseStudies';
import CtaSection from '@/components/sections/CtaSection';
import HeroServices from '@/components/sections/HeroServices';
import LatestBlogEntries from '@/components/sections/LatestBlogEntries';
import QuickForm from '@/components/sections/QuickForm';
import ScrollToNext from '@/components/sections/ScrollToNext';
import Customer from '@/components/sections/webDevelopmentWebApps/Customer';
import Process from '@/components/sections/webDevelopmentWebApps/Process';
import Breadcrumbs from '@/global/Breadcrumbs';
import SEO from '@/global/Seo';
import fetchData from '@/utils/fetchData';

const breadcrumbs = [
  {
    name: 'Web Development',
    link: '/pl/web-development',
  },
  {
    name: 'Aplikacje internetowe',
    link: '/pl/web-development/aplikacje-internetowe',
  },
];

export default async function webDevelopmentWebAppsPage() {
  const {
    page: {
      hero_Heading,
      hero_Annotation,
      hero_Paragraph,
      hero_SecondParagraph,
      hero_Img,
      hero_CtaHeading,
      hero_Cta,
      process_Heading,
      process_Paragraph,
      process_SecondParagraph,
      process_List,
      quickForm,
      customer_Heading,
      customer_WhatHeading,
      customer_WhatList,
      customer_WhatParagraph,
      customer_WhatSecondParagraph,
      customer_WhoHeading,
      customer_WhoList,
      customer_WhoAnnotation,
      ctaSection,
      caseStudies,
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
            hero_CtaHeading,
            hero_Cta,
          }}
        />
        <Process
          data={{
            process_Heading,
            process_Paragraph,
            process_SecondParagraph,
            process_List,
          }}
        />
        <QuickForm data={quickForm} />
        <Customer
          data={{
            customer_Heading,
            customer_WhatHeading,
            customer_WhatList,
            customer_WhatParagraph,
            customer_WhatSecondParagraph,
            customer_WhoHeading,
            customer_WhoList,
            customer_WhoAnnotation,
          }}
        />
        <CtaSection data={ctaSection} />
        <CaseStudies
          heading={caseStudies?.heading}
          data={caseStudies?.caseStudies}
        />
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
    url: '/pl/web-development/aplikacje-internetowe',
  });
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      page: WebDevelopmentPwa(id: "webDevelopment_Pwa") {
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
        hero_CtaHeading
        hero_Cta {
          theme
          text
          href
        }
        # Process
        process_Heading
        process_Paragraph
        process_SecondParagraph
        process_List {
          heading
          subheading
          paragraph
          secondParagraph
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
        # Quick Form
        quickForm {
          heading
          subheading
          cta
        }
        # Customer
        customer_Heading
        customer_WhatHeading
        customer_WhatList {
          title
        }
        customer_WhatParagraph
        customer_WhatSecondParagraph
        customer_WhoHeading
        customer_WhoList {
          title
        }
        customer_WhoAnnotation
        # Call To Action
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
        # Blog Entries
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
