import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import SEO from "@/app/components/global/Seo";
import CaseStudies from "@/app/components/sections/CaseStudies";
import ConsultationForm from "@/app/components/sections/ConsultationForm";
import CtaSection from "@/app/components/sections/CtaSection";
import HeroServices from "@/app/components/sections/HeroServices";
import ListSection from "@/app/components/sections/ListSection";
import ScrollToNext from "@/app/components/sections/ScrollToNext";
import SimpleCtaSection from "@/app/components/sections/SimpleCtaSection";
import Audit from "@/app/components/sections/agencyCare/Audit";
import Copy from "@/app/components/sections/agencyCare/Copy";
import Protection from "@/app/components/sections/agencyCare/Protection";
import fetchData from "@/utils/fetchData";

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
			caseStudies_Heading,
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

	const breadcrumbs = [
		{
			name: "Opieka agencyjna",
			link: "/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie",
		},
	];

	return (
		<>
			<main id="main">
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
				<ConsultationForm data={quickForm} />
				<CaseStudies heading={caseStudies_Heading} />
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
		url: "pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
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
      caseStudies_Heading
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
