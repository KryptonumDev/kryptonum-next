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
import Breadcrumbs from "@/app/components/global/Breadcrumbs";

export async function generateStaticParams() {
	const { allBlogEntries } = await paramsQuery();
	return allBlogEntries
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

export default async function BlogCategoryPaginationPage({ params: { category, number } }) {
	const {
		page: { ctaSection },
		blogEntries,
		blogCategories,
		blogCategory: { slug, hero_Heading, hero_Paragraph, hero_Img, name },
		allBlogEntries,
	} = await query(category, number);

  const breadcrumbs = [
    {
      name: "Blog",
      link: "/pl/blog"
    },
    {
      name: name,
      link: slug
    }
  ];

	return (
		<>
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
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
				totalCount={allBlogEntries.length}
				blogEntries={blogEntries}
				page={parseInt(number)}
				itemsPerPage={blogItemsPerPage}
				isCategoryPagination={true}
			/>
			<CtaSection data={ctaSection} />
			<LatestCuriosityEntries />
			<Faq />
		</>
	);
}

export async function generateMetadata({ params: { category, number } }) {
	const {
		page: { seo },
	} = await query(category, number);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: `/pl/blog/kategoria/${category}/${number}`,
	});
}

async function query(category, number) {
	const {
		body: { data },
	} = await fetchData(`
  query {
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
    }

    blogCategory: allBlogCategories {
      _id
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

    allBlogEntries {
      categories {
        slug {
          current
        }
      }
    }
  }
  `);

	if (category && number) {
		data.blogCategory = data.blogCategory.filter(
			(blogCategory) => blogCategory.slug.current == category,
		)[0];
		data.blogEntries = data.blogEntries
			.filter((blogEntry) =>
				blogEntry.categories.map((text) => text.slug.current).includes(category),
			)
			.slice((number - 1) * blogItemsPerPage, number * blogItemsPerPage);

		if (data.blogEntries.length === 0 || number == 1) {
			return notFound();
		}

		data.allBlogEntries = data.allBlogEntries.filter((blogEntry) =>
			blogEntry.categories.map((text) => text.slug.current).includes(category),
		);
	}

	return data;
}

const paramsQuery = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
    allBlogEntries {
      categories {
        slug {
          current
        }
      }
    }
  }`);
	return data;
};