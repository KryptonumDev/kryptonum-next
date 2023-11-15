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
	return await paramsQuery();
}

export default async function categoryPageWithNumber({ params }) {
	const { category, number } = params;

	const id = await getCategoryId(category);

	const {
		page: { ctaSection },
		blogEntries,
		blogCategories,
		blogCategory: { slug, hero_Heading, hero_Paragraph, hero_Img },
		blogEntriesCount,
	} = await query(category, id, number);

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
				currentSlug={slug.current}
			/>
			<BlogEntries
				urlBasis={`/pl/blog/kategoria/${category}`}
				totalCount={blogEntriesCount.length}
				blogEntries={blogEntries}
				page={parseInt(number)}
			/>
			<CtaSection data={ctaSection} />
			<LatestCuriosityEntries />
			<Faq />
		</>
	);
}

const getCategoryId = async (category) => {
	const {
		body: { data },
	} = await fetchData(`
  allBlogCategories {
    _id
    slug {
      current
    }
  }
  `);
	return data.allBlogCategories.filter((blogCategory) => blogCategory.slug.current == category)[0]
		?._id;
};

const paramsQuery = async () => {
	const {
		body: { data },
	} = await fetchData(`
  blogEntriesCount: allBlogEntries {
    categories {
      slug {
        current
      }
    }
  }
  `);
	const categoriesData = data.blogEntriesCount;

	return categoriesData
		.flatMap((entry) =>
			entry.categories.map((category) => {
				const categorySlug = category.slug.current;
				return { category: categorySlug };
			}),
		)
		.map((obj, index, array) => ({
			...obj,
			number: Math.ceil(
				(array.filter((o) => o.category === obj.category).indexOf(obj) + 1) / itemsPerPage,
			).toString(),
		}))
		.filter(
			(value, index, self) =>
				index ===
					self.findIndex((v) => v.number === value.number && v.category === value.category) &&
				value.number !== "1",
		);
};

const query = async (category, id, number) => {
	const {
		body: { data },
	} = await fetchData(`
  page: Blog(id: "blog") {
    
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
  }
  
  blogCategories: allBlogCategories {
    name
    slug {
      current
    }
  }
  
  blogCategory: BlogCategories(id: "${id}") {
    name
    slug {
      current
    }
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
    # SEO
    seo {
      title
      description
    }
  }
  
  blogEntries: allBlogEntries(
    sort: { _createdAt: DESC }
  ) {
    categories{
      name
      slug {
        current
      }
    }
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
    _createdAt
    contentRaw
  }
  blogEntriesCount:allBlogEntries {
    categories {
      slug {
        current
      }
    }
  }
  `);
	data.blogEntries = data.blogEntries
		.filter((blogEntry) => blogEntry.categories.map((text) => text.slug.current).includes(category))
		.slice((number - 1) * itemsPerPage, number * itemsPerPage);

	if (data.blogEntries.length == 0 || number == 1) {
		return notFound();
	}

	data.blogEntriesCount = data.blogEntriesCount.filter((blogEntry) =>
		blogEntry.categories.map((text) => text.slug.current).includes(category),
	);
	return data;
};
