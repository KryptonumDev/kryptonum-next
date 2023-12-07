import Breadcrumbs from "@/components/global/Breadcrumbs";
import SEO from "@/components/global/Seo";
import ConsultationForm from "@/components/sections/ConsultationForm";
import Hero from "@/components/sections/Hero";
import LatestBlogEntries from "@/components/sections/LatestBlogEntries";
import ScrollToNext from "@/components/sections/ScrollToNext";
import CaseStudies from "@/components/sections/portfolio/CaseStudies";
import fetchData from "@/utils/fetchData";

export default async function PortfolioPage() {
	const {
		page: { hero_Heading, hero_Paragraph, caseStudies, quickForm, blogEntries_Heading, scrollToNext },
		blogEntries,
	} = await query();

	const breadcrumbs = [
		{
			name: "Portfolio",
			link: "/pl/portfolio",
		},
	];

	return (
		<>
			<main id="main">
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<Hero data={{ heading: hero_Heading, paragraph: hero_Paragraph }} />
				<CaseStudies data={caseStudies} />
				<ConsultationForm data={quickForm} />
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
		url: "/pl/portfolio",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
    page: Portfolio(id: "portfolio") {
      # Hero
      hero_Heading
      hero_Paragraph
      # Case Studies
      caseStudies {
        name
        slug {
          current
        }
        heading
        categories {
          name
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
      # Quick Form
      quickForm {
        heading
        subheading
        cta
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
  }`);
	return data;
};
