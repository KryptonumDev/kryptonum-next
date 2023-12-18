import Brief from "@/components/organisms/Brief";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";

export default async function BriefPage() {
	const data = await query();

	const breadcrumbs = [
		{
			name: "Brief z Kryptonum",
			link: "/pl/brief-z-kryptonum",
		},
	];

	return (
    <main id="main">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Brief data={data} />
    </main>
	);
}

export async function generateMetadata() {
	const {
		page: { seo },
	} = await query();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "/pl/brief-z-kryptonum",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
  page : Brief (id:"brief") {
    hero_Heading
    hero_Paragraph
    hero_Paragraph2
    hero_ScrollText
    hero_Subheading
    seo {
      title
      description
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
  `);
	return data;
};
