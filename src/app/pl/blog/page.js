import SEO from "@/app/components/global/Seo";
import BlogEntries from "@/app/components/sections/BlogEntries";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import Faq from "@/app/components/sections/Faq";
import Hero from "@/app/components/sections/Hero";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import fetchData from "@/utils/fetchData";

export default async function BlogPage() {
	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
		blogEntries,
		blogCategories,
		blogEntriesCount,
	} = await query();
	return (
		<>
			<Hero
				data={{
					heading: hero_Heading,
					paragraph: hero_Paragraph,
					sideImage: hero_Img,
				}}
				isBlogHero={true}
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
		url: "/pl/blog",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(
		`
  query($limit: Int!) {
  blogEntries: allBlogEntries(
    limit: $limit
    sort: { _createdAt: DESC }
  ) {
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
    slug
    {
      current
    }
  }
}
  `,
		{
			limit: blogItemsPerPage,
		},
	);
	return data;
};

export const blogItemsPerPage = 2;
