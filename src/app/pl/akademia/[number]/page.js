import { itemsPerPage } from "@/constants/shared";
import fetchData from "@/utils/fetchData";
import Hero from "@/app/components/sections/Hero";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import Faq from "@/app/components/sections/Faq";
import CuriosityEntries from "@/app/components/sections/CuriosityEntries";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const { curiosityEntriesCount } = await paramsQuery();
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(curiosityEntriesCount.length / itemsPerPage); i++) {
		pageNumbers.push(i + 1);
	}
	return pageNumbers.map((number) => ({ number: number.toString() }));
}

export default async function academyPageWithNumber({ params }) {

  const { number } = params;

	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
		curiosityCategories,
		curiosityEntries,
    curiosityEntriesCount
	} = await query(params);

	if (curiosityEntries.length == 0 || number == 1) {
		return notFound();
	}

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
				page={parseInt(params.number)}
				curiosityEntries={curiosityEntries}
			/>
			<CtaSection data={ctaSection} />
			<LatestBlogEntries />
			<Faq />
		</>
	);
}

const query = async (params) => {
	const offset = (parseInt(params.number) - 1) * itemsPerPage;

	const {
		body: { data },
	} = await fetchData(`
  curiosityEntries: allCuriosityEntries(
    limit: ${itemsPerPage},
    offset: ${offset},
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

const paramsQuery = async () => {
	const {
		body: { data },
	} = await fetchData(`
  curiosityEntriesCount: allCuriosityEntries { 
    _type
  }
  `);
	return data;
};
