import Breadcrumbs from "@/components/global/Breadcrumbs";
import SEO from "@/components/global/Seo";
import HeroServices from "@/components/sections/HeroServices";
import ListSection from "@/components/sections/ListSection";
import ScrollToNext from "@/components/sections/ScrollToNext";
import SimpleCtaSection from "@/components/sections/SimpleCtaSection";
import Document from "@/components/sections/workshop/Document";
import Why from "@/components/sections/workshop/Why";
import fetchData from "@/utils/fetchData";

export default async function discoveryWorkshopsPage() {
	const {
		page: {
			hero_Heading,
			hero_Annotation,
			hero_Paragraph,
			hero_SecondParagraph,
			hero_Img,
			simpleCtaSection,
			process_Heading,
			process_List,
			why_Heading,
			why_Paragraph,
			why_SecondParagraph,
			why_ThirdParagraph,
			why_FourthParagraph,
			why_Cta,
			document_Heading,
			document_Paragraph,
			document_Paragraph2,
			document_Images,
			document_SimpleCtaSection,
			scrollToNext,
		},
	} = await query();

	const breadcrumbs = [
		{
			name: "Warsztaty strategiczny",
			link: "/pl/warsztaty-discovery",
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
					heading={process_Heading}
					list={process_List}
				/>
				<Why
					data={{
						why_Heading,
						why_Paragraph,
						why_SecondParagraph,
						why_ThirdParagraph,
						why_FourthParagraph,
						why_Cta,
					}}
				/>
				<Document
					data={{
						document_Heading,
						document_Paragraph,
						document_Paragraph2,
						document_Images,
					}}
				/>
				<SimpleCtaSection data={document_SimpleCtaSection} />
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
		url: "/pl/warsztaty-discovery",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
  page: Workshop(id: "workshop") {
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
    # Process
    process_Heading
    process_List {
      title
      description
    }
    # Why
    why_Heading
    why_Paragraph
    why_SecondParagraph
    why_ThirdParagraph
    why_FourthParagraph
    why_Cta {
      theme
      text
      href
    }
    # Document
    document_Heading
    document_Paragraph
    document_Paragraph2
    document_Images {
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
    document_SimpleCtaSection {
      heading
      cta {
        theme
        text
        href
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
