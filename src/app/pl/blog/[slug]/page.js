import fetchData from "@/utils/fetchData";
import { blogItemsPerPage } from "../page";
import Hero from "@/app/components/sections/Hero";
import Categories from "@/app/components/sections/Categories";
import BlogEntries from "@/app/components/sections/BlogEntries";
import CtaSection from "@/app/components/sections/CtaSection";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import { notFound } from "next/navigation";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import EntryHero from "@/app/components/sections/EntryHero";
import Content from "@/app/components/sections/Content";

export async function generateStaticParams() {
	const { blogEntriesCount } = await query();
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(blogEntriesCount.length / blogItemsPerPage); i++) {
		pageNumbers.push(i + 1);
	}
	blogEntriesCount.map((entry) => pageNumbers.push(entry.slug.current));
	return pageNumbers.map((number) => ({ slug: number.toString() }));
}

export default async function blogSlugPage({ params }) {
	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection, seo },
		blogEntries,
		blogCategories,
		blogEntriesCount,
	} = await query(params);

	if ((blogEntries.length != 0 && params.slug != 1) && parseInt(params.slug)) {
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
					page={parseInt(params.slug)}
					itemsPerPage={blogItemsPerPage}
				/>
				<CtaSection data={ctaSection} />
				<LatestCuriosityEntries />
				<Faq />
			</>
		);
	} else if (params.slug == blogEntries.map((entry) => entry.slug.current)) {
		return (
			<>
				<EntryHero
					title={blogEntries[0].title}
					subtitle={blogEntries[0].subtitle}
					categories={blogEntries[0].categories}
					categorySlug="/pl/blog/kategoria/"
					_createdAt={blogEntries[0]._createdAt}
					img={blogEntries[0].img}
				/>
				{/* <Content
        _rawContent={blogEntries[0].contentRaw}
        author={blogEntries[0].author}
        share={seo}
      /> */}
				<LatestBlogEntries exclude={params.slug} />
				<LatestCuriosityEntries />
			</>
		);
	} else {
		notFound();
	}
}

const query = async (params) => {
	let queryString = "";

	if (params) {
		if (parseInt(params.slug)) {
			queryString = `blogEntries: allBlogEntries(
        limit: ${blogItemsPerPage}
        offset: ${(parseInt(params.slug) - 1) * blogItemsPerPage}
        sort: { _createdAt: DESC }
      )`;
		} else {
			queryString = `blogEntries: allBlogEntries(
        sort: { _createdAt: DESC }
        where: {slug: {current: {eq: "${params.slug}"}}}
      )`;
		}
	}

	const {
		body: { data },
	} = await fetchData(`
  ${
		params
			? `
  ${queryString} {
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
  `
			: ``
	}

  blogEntriesCount: allBlogEntries {
    slug
    {
      current
    }
  }
  `);
	return data;
};
