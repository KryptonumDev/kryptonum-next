import BlogEntries from "@/components/sections/BlogEntries";
import Categories from "@/components/sections/Categories";
import CtaSection from "@/components/sections/CtaSection";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import LatestCuriosityEntries from "@/components/sections/LatestCuriosityEntries";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";

export const blogItemsPerPage = 12;

const breadcrumbs = [
  {
    name: "Blog",
    link: "/pl/blog",
  },
];


export default async function BlogPage() {
	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
		blogEntries,
		blogCategories,
		blogEntriesCount,
	} = await query();


	return (
    <main id="main">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero
        data={{
          heading: hero_Heading,
          paragraph: hero_Paragraph,
          sideImage: hero_Img,
        }}
      />
      <Categories
        categorySlug="/pl/blog/"
        categories={blogCategories}
      />
      <BlogEntries
        urlBasis={"/pl/blog"}
        totalCount={blogEntriesCount.length}
        blogEntries={blogEntries}
        page={1}
        itemsPerPage={blogItemsPerPage}
      />
      <CtaSection data={ctaSection} />
      <LatestCuriosityEntries />
      <Faq />
    </main>
	);
}

export async function generateMetadata() {
	const {
		page: { seo },
	} = await query();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "/pl/blog",
	});
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(
    /* GraphQL */ `
      query ($limit: Int!) {
        blogEntries: allBlogEntries(limit: $limit, sort: { _createdAt: DESC }) {
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
          contentRaw
          _createdAt
        }
        page: Blog(id: "blog") {
          # Hero
          hero_Heading
          hero_Paragraph
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

          # SEO
          seo {
            title
            description
          }
        }

        blogCategories: allBlogCategories {
          name
          slug {
            current
          }
        }

        blogEntriesCount: allBlogEntries {
          slug {
            current
          }
        }
      }
    `,
    {
      limit: blogItemsPerPage,
    }
  );
  return data;
};