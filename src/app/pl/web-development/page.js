import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import SEO from "@/app/components/global/Seo";
import CaseStudies from "@/app/components/sections/CaseStudies";
import CtaSection from "@/app/components/sections/CtaSection";
import HeroServices from "@/app/components/sections/HeroServices";
import ListSection from "@/app/components/sections/ListSection";
import ScrollToNext from "@/app/components/sections/ScrollToNext";
import Testimonials from "@/app/components/sections/Testimonials";
import Advantages from "@/app/components/sections/webDevelopment/Advantages";
import Flexibility from "@/app/components/sections/webDevelopment/Flexibility";
import fetchData from "@/utils/fetchData";

export default async function webDevelopmentPage() {
	const {
		page: {
			hero_Heading,
			hero_Annotation,
			hero_Paragraph,
			hero_SecondParagraph,
			hero_Img,
			hero_Nav,
			advantages_Heading,
			advantages_Array,
			simpleCtaSection,
			flexibility_Heading,
			flexibility_Claim,
			flexibility_Paragraph,
			flexibility_SecondParagraph,
			flexibility_Cta,
			process_Heading,
			process_Claim,
			process_Paragraph,
			process_List,
			caseStudies_Heading,
			ctaSection,
			scrollToNext,
		},
		testimonials,
	} = await query();

	const breadcrumbs = [
		{
			name: "Web Development",
			link: "/pl/web-development",
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
						hero_Nav,
					}}
				/>
				<Advantages
					heading={advantages_Heading}
					advantages={advantages_Array}
					simpleCtaSection={simpleCtaSection}
				/>
				<ListSection
					heading={process_Heading}
					paragraph={process_Claim}
					title={process_Paragraph}
					list={process_List}
				/>
				<Flexibility
					data={{
						flexibility_Heading,
						flexibility_Claim,
						flexibility_Paragraph,
						flexibility_SecondParagraph,
						flexibility_Cta,
					}}
				/>
				<Testimonials testimonials={testimonials} />
				<CaseStudies heading={caseStudies_Heading} />
				<CtaSection data={ctaSection} />
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
		url: "/pl/web-development",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
  page: WebDevelopment(id: "webDevelopment") {
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
    hero_Nav {
      title
      description
      href
    }
    # Advantages
    advantages_Heading
    advantages_Array {
      title
      description
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
    # Simple Cta Section
    simpleCtaSection {
      heading
      cta {
        theme
        text
        href
      }
    }
    # Flexibility
    flexibility_Heading
    flexibility_Claim
    flexibility_Paragraph
    flexibility_SecondParagraph
    flexibility_Cta {
      theme
      text
      href
    }
    # Process
    process_Heading
    process_Claim
    process_Paragraph
    process_List {
      title
      description
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
  testimonials: allTestimonials(limit: 3, sort: { _createdAt: ASC }) {
    name
    text
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
}
  `);
	return data;
};
