import HeroServices from "@/app/components/sections/HeroServices";
import ListSection from "@/app/components/sections/ListSection";
import SimpleCtaSection from "@/app/components/sections/SimpleCtaSection";
import Document from "@/app/components/sections/workshop/Document";
import Why from "@/app/components/sections/workshop/Why";
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
		},
	} = await query();
  return (
    <>
      <HeroServices data={{
        hero_Heading,
        hero_Annotation,
        hero_Paragraph,
        hero_SecondParagraph,
        hero_Img,
      }} />
      <SimpleCtaSection data={simpleCtaSection} />
      <ListSection heading={process_Heading} list={process_List} />
      <Why data={{
        why_Heading,
        why_Paragraph,
        why_SecondParagraph,
        why_ThirdParagraph,
        why_FourthParagraph,
        why_Cta,
      }} />
      <Document data={{
        document_Heading,
        document_Paragraph,
        document_Paragraph2,
        document_Images,
      }} />
      <SimpleCtaSection data={document_SimpleCtaSection} />
    </>
  );
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
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
  `);
	return data;
};
