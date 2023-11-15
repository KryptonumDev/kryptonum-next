import fetchData from "@/utils/fetchData";
import { blogItemsPerPage } from "../page";
import Hero from "@/app/components/sections/Hero";
import Categories from "@/app/components/sections/Categories";
import BlogEntries from "@/app/components/sections/BlogEntries";
import CtaSection from "@/app/components/sections/CtaSection";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const {blogEntriesCount} = await query();
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(blogEntriesCount.length / blogItemsPerPage); i++) {
		pageNumbers.push(i + 1);
	}
	return pageNumbers.map((number) => ({ number: number.toString() }));
}

export default async function blogPaginationPage({ params }) {

	const {
		page: {
			hero_Heading,
			hero_Paragraph, 
			hero_Img, 
			ctaSection 
		},
		blogEntries,
		blogCategories,
		blogEntriesCount,
	} = await query(params);

	if (blogEntries.length == 0 || params.number == 1) {
		return notFound();
	}

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
				page={parseInt(params.number)}
        itemsPerPage={blogItemsPerPage}
			/>
			<CtaSection data={ctaSection} />
			<LatestCuriosityEntries />
			<Faq />
		</>
	);
}

const query = async (params) => {

	const {
		body: { data },
	} = await fetchData(`
  ${params ? `
	blogEntries: allBlogEntries(
    limit: ${blogItemsPerPage}
		offset: ${(parseInt(params.number) - 1) * blogItemsPerPage}
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
  ` : ``}

  blogEntriesCount: allBlogEntries {
    _type
  }
  `);
	return data;
};
