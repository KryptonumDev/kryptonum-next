import SEO from "@/app/components/global/Seo";
import CaseStudies from "@/app/components/sections/CaseStudies";
import ConsultationForm from "@/app/components/sections/ConsultationForm";
import CtaSection from "@/app/components/sections/CtaSection";
import HeroServices from "@/app/components/sections/HeroServices";
import ListSection from "@/app/components/sections/ListSection";
import Showcase from "@/app/components/sections/Showcase";
import SimpleCtaSection from "@/app/components/sections/SimpleCtaSection";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import fetchData from "@/utils/fetchData";

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
			caseStudies_Heading,
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
			<ConsultationForm data={quickForm} />
			<ListSection
				heading={process_Heading}
				paragraph={process_Paragraph}
				title={process_Title}
				list={process_List}
			/>
			<CaseStudies heading={caseStudies_Heading} />
			<CtaSection data={ctaSection} />
			<LatestBlogEntries heading={blogEntries_Heading} />
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
		url: "",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
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
    caseStudies_Heading
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
  }`);
	return data;
};