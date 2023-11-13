import fetchData from "@/utils/fetchData";
import { itemsPerPage } from "@/constants/shared";
import Hero from "@/app/components/sections/Hero";
import Categories from "@/app/components/sections/Categories";
import BlogEntries from "@/app/components/sections/BlogEntries";
import CtaSection from "@/app/components/sections/CtaSection";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const blogEntriesCount = await paramsQuery();
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(blogEntriesCount.length / itemsPerPage); i++) {
		pageNumbers.push(i + 1);
	}
	return pageNumbers.map((number) => ({ number: number }));
}

export default async function blogPageWithNumber({ params }) {

	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
		blogEntries,
		blogCategories,
		blogEntriesCount,
	} = await query(params);

	if (blogEntries.length == 0) {
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
			/>
			<CtaSection data={ctaSection} />
			<LatestCuriosityEntries />
			<Faq />
		</>
	);
}

const paramsQuery = async () => {
	const {
		body: { data },
	} = await fetchData(`
  blogEntriesCount: allBlogEntries { 
    _type
  }
  `);
	return data;
};

const query = async (params) => {
	const offset = (parseInt(params.number) - 1) * itemsPerPage;

	const {
		body: { data },
	} = await fetchData(`
	blogEntries: allBlogEntries(
    limit: ${itemsPerPage}
		offset: ${offset}
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
    _type
  }
  `);
	return data;
};
