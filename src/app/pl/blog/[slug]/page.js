import SEO from "@/app/components/global/Seo";
import EntryHero from "@/app/components/sections/EntryHero";
import LatestBlogEntries from "@/app/components/sections/LatestBlogEntries";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import fetchData from "@/utils/fetchData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const { blogEntriesCount } = await query();
	const pageNumbers = [];
	blogEntriesCount.map((entry) => pageNumbers.push(entry.slug.current));
	return pageNumbers.map((number) => ({ slug: number.toString() }));
}

export default async function blogSlugPage({ params }) {
	const data = await query(params.slug);
	if (data.page) {
		const page = data.page;
		if (params.slug == page.slug.current) {
			return (
				<>
					<EntryHero
						title={page.title}
						subtitle={page.subtitle}
						categories={page.categories}
						categorySlug="/pl/blog/kategoria/"
						_createdAt={page._createdAt}
						img={page.img}
					/>
					{/* <Content
        _rawContent={contentRaw}
        author={author}
        share={seo}
      /> */}
					<LatestBlogEntries exclude={params.slug} data={data.blogEntries} />
					<LatestCuriosityEntries />
				</>
			);
		} else {
			notFound();
		}
	} else {
		notFound();
	}
}

export async function generateMetadata({ params: { slug } }) {
	const data = await query(slug);
	if (data) {
		return SEO({
			title: data.page.seo?.title,
			description: data.page.seo?.description,
			url: "",
		});
	}
}

const query = async (slug) => {
	const {
		body: { data },
	} = await fetchData(`
  ${
		slug
			? `
  page: allBlogEntries(
    sort: { _createdAt: DESC }
    where: {slug: {current: {eq: "${slug}"}}}
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
    # SEO
    seo {
      title
      description
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
  blogEntries: allBlogEntries(limit: 4, sort: { _createdAt: DESC }) {
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
    _createdAt
    contentRaw
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
  `);
	if (slug) {
		data.page = data.page[0];
	}
	return data;
};
