import fetchData from "@/utils/fetchData";
import HeroServices from "@/app/components/sections/HeroServices";
import Process from "@/app/components/sections/webDevelopmentWebApps/Process";
import ConsultationForm from "@/app/components/sections/ConsultationForm";
import Customer from "@/app/components/sections/webDevelopmentWebApps/Customer";
import CtaSection from "@/app/components/sections/CtaSection";
import CaseStudies from "@/app/components/sections/CaseStudies";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";

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
			caseStudies_Heading,
			blogEntries_Heading,
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
        hero_CtaHeading,
        hero_Cta
      }} />
      <Process data={{
        process_Heading,
        process_Paragraph,
        process_SecondParagraph,
        process_List
      }} />
      <ConsultationForm data={quickForm} />
      <Customer data={{
        customer_Heading,
        customer_WhatHeading,
        customer_WhatList,
        customer_WhatParagraph,
        customer_WhatSecondParagraph,
        customer_WhoHeading,
        customer_WhoList,
        customer_WhoAnnotation,
      }} />
      <CtaSection data={ctaSection} />
      <CaseStudies heading={caseStudies_Heading} />
      <LatestBlogEntries heading={blogEntries_Heading} />
    </>
  );
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
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
  caseStudies_Heading
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
}`);
	return data;
};
