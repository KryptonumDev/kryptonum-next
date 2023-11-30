import SEO from "@/app/components/global/Seo";
import ConsultationForm from "@/app/components/sections/ConsultationForm";
import Hero from "@/app/components/sections/Hero";
import LatestBlogEntries from "@/app/components/sections/LatestBlogEntries";
import CaseStudies from "@/app/components/sections/portfolio/CaseStudies";
import fetchData from "@/utils/fetchData";

export default async function PortfolioPage() {
	const {
		page: { hero_Heading, hero_Paragraph, caseStudies, quickForm, blogEntries_Heading },
		blogEntries,
	} = await query();
	return (
		<>
			<Hero data={{ heading: hero_Heading, paragraph: hero_Paragraph }} />
			<CaseStudies data={caseStudies} />
			<ConsultationForm data={quickForm} />
			<LatestBlogEntries
				heading={blogEntries_Heading}
				data={blogEntries}
			/>
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