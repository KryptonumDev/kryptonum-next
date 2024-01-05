import CaseStudies from '@/components/sections/CaseStudies';
import CtaSection from '@/components/sections/CtaSection';
import HeroServices from '@/components/sections/HeroServices';
import ListSection from '@/components/sections/ListSection';
import QuickForm from '@/components/sections/QuickForm';
import ScrollToNext from '@/components/sections/ScrollToNext';
import SimpleCtaSection from '@/components/sections/SimpleCtaSection';
import Audit from '@/components/sections/agencyCare/Audit';
import Copy from '@/components/sections/agencyCare/Copy';
import Protection from '@/components/sections/agencyCare/Protection';
import Breadcrumbs from '@/global/Breadcrumbs';
import SEO from '@/global/Seo';
import fetchData from '@/utils/fetchData';

const breadcrumbs = [
  {
    name: 'Opieka agencyjna',
    link: '/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie',
  },
];

export default async function AgencyCarePage() {
  const {
    page: {
      hero_Heading,
      hero_Annotation,
      hero_Paragraph,
      hero_SecondParagraph,
      hero_Img,
      simpleCtaSection,
      services_Heading,
      services_Paragraph,
      services_Paragraph2,
      services_Title,
      services_List,
      audit_Heading,
      audit_Paragraph,
      audit_Paragraph2,
      audit_Title,
      audit_List,
      audit_Paragraph3,
      audit_Paragraph4,
      quickForm,
      caseStudies,
      ctaSection,
      protection_Heading,
      protection_Paragraph,
      protection_Paragraph2,
      protection_Paragraph3,
      protection_List,
      copy_Heading,
      copy_Paragraph,
      copy_Paragraph2,
      copy_Paragraph3,
      copy_Img,
      copy_Cta,
      copy_Headline,
      copy_List,
      secondSimpleCtaSection,
      scrollToNext,
    },
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
        <ListSection
          heading={services_Heading}
          paragraph={services_Paragraph}
          secondParagraph={services_Paragraph2}
          title={services_Title}
          list={services_List}
        />
        <Audit
          data={{
            audit_Heading,
            audit_Paragraph,
            audit_Paragraph2,
            audit_Title,
            audit_List,
            audit_Paragraph3,
            audit_Paragraph4,
          }}
        />
        <QuickForm data={quickForm} />
        <CaseStudies
          heading={caseStudies.heading}
          data={caseStudies.caseStudies}
        />
        <CtaSection data={ctaSection} />
        <Protection
          data={{
            protection_Heading,
            protection_Paragraph,
            protection_Paragraph2,
            protection_Paragraph3,
            protection_List,
          }}
        />
        <Copy
          data={{
            copy_Heading,
            copy_Paragraph,
            copy_Paragraph2,
            copy_Paragraph3,
            copy_Img,
            copy_Cta,
            copy_Headline,
            copy_List,
          }}
        />
        <SimpleCtaSection data={secondSimpleCtaSection} />
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
    url: 'pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie',
  });
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      page: Agency(id: "agency") {
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
        # Services
        services_Heading
        services_Paragraph
        services_Paragraph2
        services_Title
        services_List {
          title
          description
        }
        # Audit
        audit_Heading
        audit_Paragraph
        audit_Paragraph2
        audit_Title
        audit_List
        audit_Paragraph3
        audit_Paragraph4
        # Quick Form
        quickForm {
          heading
          subheading
          cta
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
        # Call To Action Section
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
        # Protection
        protection_Heading
        protection_Paragraph
        protection_Paragraph2
        protection_Paragraph3
        protection_List
        # Copy
        copy_Heading
        copy_Paragraph
        copy_Paragraph2
        copy_Paragraph3
        copy_Img {
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
        copy_Cta {
          theme
          text
          href
        }
        copy_Headline
        copy_List {
          title
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
        # Second Simple CTA Section
        secondSimpleCtaSection {
          heading
          cta {
            theme
            href
            text
          }
        }
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
    }
  `);
  return data;
};
