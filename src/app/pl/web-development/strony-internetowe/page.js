import SEO from "@/app/components/global/Seo";
import CaseStudies from "@/app/components/sections/CaseStudies";
import CtaSection from "@/app/components/sections/CtaSection";
import Faq from "@/app/components/sections/Faq";
import HeroServices from "@/app/components/sections/HeroServices";
import LatestBlogEntries from "@/app/components/sections/LatestBlogEntries";
import SimpleCtaSection from "@/app/components/sections/SimpleCtaSection";
import Pricing from "@/app/components/sections/webDevelopmentWebsites/Pricing";
import Process from "@/app/components/sections/webDevelopmentWebsites/Process";
import Technology from "@/app/components/sections/webDevelopmentWebsites/Technology";
import fetchData from "@/utils/fetchData";

export default async function WebDevelopmentWebsitesPage() {
	const {
		page: {
			hero_Heading,
			hero_Annotation,
			hero_Paragraph,
			hero_SecondParagraph,
			hero_Img,
			hero_simpleCtaSection,
			pricing_Heading,
			pricing_Plans,
			process_Heading,
			process_List,
			roadmap_Heading,
			roadmap_List,
			roadmap_Cta,
			quickForm,
			technology_Heading,
			technology_Paragraph,
			technology_Content,
			technology_Img,
			caseStudies_Heading,
			ctaSection,
			simpleCtaSection,
			blogEntries_Heading,
		},
    blogEntries
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
					hero_simpleCtaSection,
				}}
			/>
			<Pricing
				data={{
					pricing_Heading,
					pricing_Plans,
				}}
			/>
			<Faq />
			<CtaSection data={ctaSection} />
			<Process
				data={{
					process_Heading,
					process_List,
					roadmap_Heading,
					roadmap_List,
					roadmap_Cta,
					quickForm,
				}}
			/>
			<Technology
				data={{
					technology_Heading,
					technology_Paragraph,
					technology_Content,
					technology_Img,
				}}
			/>
			<CaseStudies heading={caseStudies_Heading} />
			<SimpleCtaSection data={simpleCtaSection} />
			<LatestBlogEntries heading={blogEntries_Heading} data={blogEntries} />
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
		url: "/pl/web-development/strony-internetowe",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  page: WebDevelopmentSite(id: "webDevelopment_Site") {
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
    hero_simpleCtaSection {
      heading
      cta {
        theme
        text
        href
      }
    }
    # Pricing
    pricing_Heading
    pricing_Plans {
      title
      description
      subpages
      price
      cta {
        theme
        text
        href
      }
      benefits {
        name
        highlighted
      }
      hint
      mostPopular
    }
    # Process
    process_Heading
    process_List {
      claim
      heading
      subheading
      paragraph
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
    # Roadmap
    roadmap_Heading
    roadmap_List {
      title
      description
    }
    roadmap_Cta {
      theme
      text
      href
    }
    # Quick Form
    quickForm {
      heading
      subheading
      cta
    }
    # Technology
    technology_Heading
    technology_Paragraph
    technology_Content
    technology_Img {
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
    # Case Studies
    caseStudies_Heading
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
    # Simple CTA Section
    simpleCtaSection {
      heading
      cta {
        text
        theme
        href
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
  `);
	return data;
};
