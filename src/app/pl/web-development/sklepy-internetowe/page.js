import Breadcrumbs from "@/components/global/Breadcrumbs";
import SEO from "@/components/global/Seo";
import CaseStudies from "@/components/sections/CaseStudies";
import ConsultationForm from "@/components/sections/ConsultationForm";
import CtaSection from "@/components/sections/CtaSection";
import HeroServices from "@/components/sections/HeroServices";
import LatestBlogEntries from "@/components/sections/LatestBlogEntries";
import ScrollToNext from "@/components/sections/ScrollToNext";
import Develop from "@/components/sections/webDevelopmentShoppingSites/Develop";
import Process from "@/components/sections/webDevelopmentShoppingSites/Process";
import fetchData from "@/utils/fetchData";

export default async function webDevelopmentShoppingSitesPage() {
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
      scrollToNext
		},
		blogEntries,
	} = await query();

  const breadcrumbs =[
    {
      name: "Web Development",
      link: "/pl/web-development"
    },
    {
      name: "Sklepy internetowe",
      link: "/pl/sklepy-internetowe"
    }
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
			<LatestBlogEntries
				heading={blogEntries_Heading}
				data={blogEntries}
			/>
      </main>
      <ScrollToNext data={scrollToNext}/>
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
		url: "/pl/web-development/sklepy-internetowe",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
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
  blogEntries: allBlogEntries(limit: 4, sort: { _createdAt: DESC }) {
    title
    subtitle
    slug {
      current
    }
    author {
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
    categories {
      name
      slug {
        current
      }
    }
    _createdAt
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
