import fetchData from "@/utils/fetchData";
import Hero from "@/app/components/sections/Hero";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import Faq from "@/app/components/sections/Faq";
import CuriosityEntries from "@/app/components/sections/CuriosityEntries";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import SEO from "@/app/components/global/Seo";

export default async function academyPage() {
	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
		curiosityCategories,
		curiosityEntries,
    curiosityEntriesCount
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
			<Categories
				categorySlug="/pl/akademia/"
				categories={curiosityCategories}
			/>
			<CuriosityEntries
				urlBasis="/pl/akademia"
				totalCount={curiosityEntriesCount.length}
				page={1}
				curiosityEntries={curiosityEntries}
        itemsPerPage={academyItemsPerPage}
			/>
			<CtaSection data={ctaSection} />
			<LatestBlogEntries />
			<Faq />
		</>
	);
}

export async function generateMetadata() {
  const {
    page: { seo },
  } = await query();
  return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  curiosityEntries: allCuriosityEntries(
    limit: ${academyItemsPerPage},
    sort: { _createdAt: DESC }) {
    title
    subtitle
    slug {
      current
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
    _createdAt
  }
  page: Academy(id: "academy") {
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
  curiosityCategories: allCuriosityCategories {
    name
    slug {
      current
    }
  }
  curiosityEntriesCount: allCuriosityEntries {
    _type
  }
  `);
	return data;
};

export const academyItemsPerPage=1;