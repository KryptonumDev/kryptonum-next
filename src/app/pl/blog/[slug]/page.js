import fetchData from "@/utils/fetchData";
import { blogItemsPerPage } from "../page";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import { notFound } from "next/navigation";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import EntryHero from "@/app/components/sections/EntryHero";
import Content from "@/app/components/sections/Content";
import SEO from "@/app/components/global/Seo";

export async function generateStaticParams() {
	const { blogEntriesCount } = await query();
	const pageNumbers = [];
	blogEntriesCount.map((entry) => pageNumbers.push(entry.slug.current));
	return pageNumbers.map((number) => ({ slug: number.toString() }));
}

export default async function blogSlugPage({ params }) {
	const {
		page: { title, subtitle, categories, _createdAt, img, contentRaw, author, seo, slug },
	} = await query(params.slug);

	if (params.slug == slug.current) {
		return (
			<>
				<EntryHero
					title={title}
					subtitle={subtitle}
					categories={categories}
					categorySlug="/pl/blog/kategoria/"
					_createdAt={_createdAt}
					img={img}
				/>
				{/* <Content
        _rawContent={contentRaw}
        author={author}
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

export async function generateMetadata({ params: { slug } }) {
	const {
		page: { seo },
	} = await query(slug);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "",
	});
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
  `);
	if (slug) {
		data.page = data.page[0];
	}
	return data;
};
