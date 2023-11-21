import SEO from "@/app/components/global/Seo";
import BlogEntries from "@/app/components/sections/BlogEntries";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import Faq from "@/app/components/sections/Faq";
import Hero from "@/app/components/sections/Hero";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import fetchData from "@/utils/fetchData";
import { notFound } from "next/navigation";
import { blogItemsPerPage } from "../../page";

export async function generateStaticParams() {
	const { blogCategories } = await query();
	const pageNumbers = [];
	blogCategories.map((category) => pageNumbers.push(category.slug.current));
	return pageNumbers.map((category) => ({ category: category }));
}

export default async function blogCategoryPage({ params: { category } }) {

	const id = await getCategoryId(category);

	const {
		page: { ctaSection },
		blogEntries,
		blogCategory: { slug, hero_Heading, hero_Paragraph, hero_Img },
    blogCategories,
    blogEntriesCount
	} = await query(category, id);

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
				page={1}
        itemsPerPage= {blogItemsPerPage}
			/>
			<CtaSection data={ctaSection} />
			<LatestCuriosityEntries />
			<Faq />
		</>
	);
}

export async function generateMetadata({params:{category}}) {
  const id = await getCategoryId(category);
  const {
    page: { seo },
  } = await query(category, id);
  return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "",
	});
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

const query = async (category, id) => {
	const {
		body: { data },
	} = await fetchData(`
  ${
		category
			? `
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
  }`
			: ``
	}

  blogEntriesCount:allBlogEntries {
    categories {
      slug {
        current
      }
    }
  }

  blogCategories: allBlogCategories {
    name
    slug {
      current
    }
  }
  `);
	if (category) {
		data.blogEntries = data.blogEntries
			.filter((blogEntry) =>
				blogEntry.categories.map((text) => text.slug.current).includes(category),
			)
			.slice(0, blogItemsPerPage);

		if (data.blogEntries.length == 0) {
			return notFound();
		}

		data.blogEntriesCount = data.blogEntriesCount.filter((blogEntry) =>
			blogEntry.categories.map((text) => text.slug.current).includes(category),
		);
	}
	return data;
};
