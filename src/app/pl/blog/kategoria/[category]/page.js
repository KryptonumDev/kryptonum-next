import BlogEntries from "@/components/sections/BlogEntries";
import Categories from "@/components/sections/Categories";
import CtaSection from "@/components/sections/CtaSection";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import LatestCuriosityEntries from "@/components/sections/LatestCuriosityEntries";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import { notFound } from "next/navigation";
import { blogItemsPerPage } from "../../page";

export async function generateStaticParams() {
	const { blogCategories } = await paramsQuery();
	return blogCategories.map((category) => ({ category: category.slug.current }));
}

export default async function BlogCategoryPage({ params: { category } }) {
	const {
		page: { ctaSection },
		blogEntries,
		blogCategory: { slug, hero_Heading, hero_Paragraph, hero_Img, name },
		blogCategories,
		allBlogEntries,
	} = await query(category);

	const breadcrumbs = [
		{
			name: "Blog",
			link: "/pl/blog",
		},
		{
			name: name,
			link: slug,
		},
	];

	return (
    <main id="main">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
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
        totalCount={allBlogEntries.length}
        blogEntries={blogEntries}
        page={1}
        itemsPerPage={blogItemsPerPage}
        isCategoryPagination={true}
      />
      <CtaSection data={ctaSection} />
      <LatestCuriosityEntries />
      <Faq />
    </main>
	);
}

export async function generateMetadata({ params: { category } }) {
	const {
		blogCategory: { seo },
	} = await query(category);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: `/pl/blog/kategoria/${category}`,
	});
}

const query = async (category) => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
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
      allBlogEntries {
        categories {
          slug {
            current
          }
        }
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
    }
  `);
  if (category) {
    data.blogCategory = data.blogCategory.filter(
      (blogCategory) => blogCategory.slug.current == category
    )[0];
    data.blogEntries = data.blogEntries
      .filter((blogEntry) =>
        blogEntry.categories.map((text) => text.slug.current).includes(category)
      )
      .slice(0, blogItemsPerPage);

    if (data.blogEntries.length == 0) {
      return notFound();
    }

    data.allBlogEntries = data.allBlogEntries.filter((blogEntry) =>
      blogEntry.categories.map((text) => text.slug.current).includes(category)
    );
  }
  return data;
};

const paramsQuery = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      blogCategories: allBlogCategories {
        name
        slug {
          current
        }
      }
    }
  `);
  return data;
};
