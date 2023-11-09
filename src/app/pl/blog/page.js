import fetchData from "@/utils/fetchData";
import { env } from "process";
import Hero from "@/app/components/sections/Hero";

export default async function blogPage() {
	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
		allBlogEntries,
		allBlogCategories,
	} = await query();
	const hero = {
		heading: hero_Heading,
		subheading: hero_Paragraph,
		sideImage: hero_Img,
	};
	return (
		<>
			<Hero data={hero} />
			{/* <Categories categorySlug="/pl/blog/" categories={allBlogCategories} />
			<BlogEntries
				urlBasis={"/pl/blog"}
				totalCount={totalCount}
				blogEntries={allBlogEntries}
				page={1}
			/>
			<CtaSection data={ctaSection} />
			<LatestCuriosityEntries />
			<Faq /> */}
		</>
	);
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  blogEntries: allBlogEntries(limit: ${env.PAGE_ITEM_COUNT}, sort: {_createdAt: DESC}) {
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
      }
    }
    contentRaw
    _createdAt
  }
page: Blog (id:"blog"){
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
  `);
	return data;
};
