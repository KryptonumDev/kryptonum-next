import fetchData from "@/utils/fetchData";
import BlogEntries from "@/app/components/sections/BlogEntries";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import Faq from "@/app/components/sections/Faq";
import Hero from "@/app/components/sections/Hero";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";

const itemCount = 12;

export default async function blogPage() {

	const {
		page: { 
      hero_Heading,
      hero_Paragraph,
      hero_Img,
      ctaSection },
		blogEntries,
		blogCategories,
		blogEntriesCount,
	} = await query();
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
			<Categories categorySlug="/pl/blog/" categories={blogCategories} />
			<BlogEntries
				urlBasis={"/pl/blog"}
				totalCount={blogEntriesCount.length}
				blogEntries={blogEntries}
				page={1}
        itemCount={itemCount}
			/>
			<CtaSection data={ctaSection} />
			<LatestCuriosityEntries />
			<Faq />
		</>
	);
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  blogEntries: allBlogEntries(
    limit: ${itemCount}
    sort: { _createdAt: DESC }
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

  blogEntriesCount: allBlogEntries {
    _type
  }
  `);
	return data;
};
