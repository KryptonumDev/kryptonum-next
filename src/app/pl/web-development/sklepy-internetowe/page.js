import fetchData from "@/utils/fetchData";
import HeroServices from "@/app/components/sections/HeroServices";
import ConsultationForm from "@/app/components/sections/ConsultationForm";
import CaseStudies from "@/app/components/sections/CaseStudies";
import CtaSection from "@/app/components/sections/CtaSection";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import Process from "@/app/components/sections/webDevelopmentShoppingSites/Process";
import Develop from "@/app/components/sections/webDevelopmentShoppingSites/Develop";

export default async function WebDevelopmentShoppingSitesPage() {
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
			process_Claim,
			process_List,
			quickForm,
			caseStudies_Heading,
			develop_Paragraph1,
			develop_Paragraph2,
			develop_Paragraph3,
			develop_Paragraph4,
			ctaSection,
			blogEntries_Heading,
		},
	} = await query();
	return (
		<>
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
					process_Claim,
					process_List,
				}}
			/>
			<ConsultationForm data={quickForm} />
			<CaseStudies heading={caseStudies_Heading} />
			<Develop
				data={{
					develop_Paragraph1,
					develop_Paragraph2,
					develop_Paragraph3,
					develop_Paragraph4,
				}}
			/>
			<CtaSection data={ctaSection} />
			<LatestBlogEntries heading={blogEntries_Heading} />
		</>
	);
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  page: WebDevelopmentEcom(id: "webDevelopment_Ecom") {
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
    process_Claim
    process_List {
      heading
      subheading
      paragraph
      secondParagraph
      secondHeading
      cta {
        theme
        text
        href
      }
    }
    # Quick Form
    quickForm {
      heading
      subheading
      cta
    }
    # Case Studies
    caseStudies_Heading
    # Develop
    develop_Paragraph1
    develop_Paragraph2
    develop_Paragraph3
    develop_Paragraph4
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
  `);
	return data;
};
