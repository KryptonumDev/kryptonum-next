import SEO from "@/app/components/global/Seo";
import BlogEntries from "@/app/components/sections/BlogEntries";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import Faq from "@/app/components/sections/Faq";
import Hero from "@/app/components/sections/Hero";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import fetchData from "@/utils/fetchData";
import { notFound } from "next/navigation";
import { blogItemsPerPage } from "../../../page";

export async function generateStaticParams() {
	const { blogEntriesCount } = await query();
	return blogEntriesCount
		.flatMap((entry) =>
			entry.categories.map((category) => {
				const categorySlug = category.slug.current;
				return { category: categorySlug };
			}),
		)
		.map((obj, index, array) => ({
			...obj,
			number: Math.ceil(
				(array.filter((o) => o.category === obj.category).indexOf(obj) + 1) / blogItemsPerPage,
			).toString(),
		}))
		.filter(
			(value, index, self) =>
				index ===
					self.findIndex((v) => v.number === value.number && v.category === value.category) &&
				value.number !== "1",
		);
}

export default async function blogCategoryPaginationPage({ params: { category, number } }) {
	const id = await getCategoryId(category);
	const {
		page: { ctaSection },
		blogEntries,
		blogCategories,
		blogCategory: { slug, hero_Heading, hero_Paragraph, hero_Img },
		blogEntriesCount,
	} = await query(category, id, number);

	if (blogEntries.length === 0 || number === 1) {
		return notFound();
	}

	return (
		<>
			<Hero
				data={{ heading: hero_Heading, paragraph: hero_Paragraph, sideImage: hero_Img }}
				isBlogHero
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
        itemsPerPage={blogItemsPerPage}
			/>
			<CtaSection data={ctaSection} />
			<LatestCuriosityEntries />
			<Faq />
		</>
	);
}

export async function generateMetadata({params:{category,number}}) {
  const id = await getCategoryId(category);
  const {
    page: { seo },
  } = await query(category, id, number);
  return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "",
	});
}

async function getCategoryId(category) {
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
	return (
		data.allBlogCategories.find((blogCategory) => blogCategory.slug.current === category)?._id ||
		null
	);
}

async function query(category, id, number) {
	const {
		body: { data },
	} = await fetchData(`
    ${
			category
				? `
    page: Blog(id: "blog") {
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
      seo {
        title
        description
      }
    }

    blogEntries: allBlogEntries(sort: { _createdAt: DESC }) {
      categories {
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
    }`
				: ``
		}

    blogEntriesCount: allBlogEntries {
      categories {
        slug {
          current
        }
      }
    }
  `);

	if (category) {
		data.blogEntries = data.blogEntries
			.filter((blogEntry) =>
				blogEntry.categories.map((text) => text.slug.current).includes(category),
			)
			.slice((number - 1) * blogItemsPerPage, number * blogItemsPerPage);

		if (data.blogEntries.length === 0 || number == 1) {
			return notFound();
		}

		data.blogEntriesCount = data.blogEntriesCount.filter((blogEntry) =>
			blogEntry.categories.map((text) => text.slug.current).includes(category),
		);
	}

	return data;
}