import SEO from "@/app/components/global/Seo";
import Content from "@/app/components/sections/Content";
import EntryHero from "@/app/components/sections/EntryHero";
import LatestBlogEntries from "@/app/components/sections/LatestBlogEntries";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import fetchData from "@/utils/fetchData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const { allBlogEntries } = await paramsQuery();
	return allBlogEntries.map((entry) => ({ slug: entry.slug.current }));
}

export default async function BlogSlugPage({ params }) {
	const {
		page: { title, subtitle, categories, _createdAt, img, contentRaw, author, seo },
		blogEntries,
	} = await query(params.slug);

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
			<Content
				contentRaw={contentRaw}
				author={author}
				share={seo}
			/>
			<LatestBlogEntries
				exclude={params.slug}
				data={blogEntries}
			/>
			<LatestCuriosityEntries />
		</>
	);
}

export async function generateMetadata({ params: { slug } }) {
	const data = await query(slug);
	return SEO({
		title: data?.page?.seo.title,
		description: data?.page?.seo.description,
		url: `/pl/blog/${slug}`,
	});
}

const query = async (slug) => {
	const {
		body: { data },
	} = await fetchData(`
  query($slug: String!) {
  page: allBlogEntries(
    sort: { _createdAt: DESC }
    where: {slug: {current: {eq: $slug}}}
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
  allBlogEntries: allBlogEntries {
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
}
  `,{
    slug
  });
	if (slug) {
		data.page ? (data.page = data.page[0]) : notFound();
		slug !== data.page.slug.current && notFound();
	}
	return data;
};

const paramsQuery = async () => {
  const {
		body: { data },
	} = await fetchData(`
  query{
    allBlogEntries: allBlogEntries {
      slug
      {
        current
      }
    }
}`);
return data;
}
