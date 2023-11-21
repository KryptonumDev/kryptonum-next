import SEO from "@/app/components/global/Seo";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import CuriosityEntries from "@/app/components/sections/CuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import Hero from "@/app/components/sections/Hero";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import fetchData from "@/utils/fetchData";
import { academyItemsPerPage } from "../../../page";

export async function generateStaticParams() {
	const { curiosityEntriesCount } = await query();
	return curiosityEntriesCount
		.flatMap((entry) =>
			entry.categories.map((category) => {
				const categorySlug = category.slug.current;
				return { category: categorySlug };
			}),
		)
		.map((obj, index, array) => ({
			...obj,
			number: Math.ceil(
				(array.filter((o) => o.category === obj.category).indexOf(obj) + 1) / academyItemsPerPage,
			).toString(),
		}))
		.filter(
			(value, index, self) =>
				index ===
					self.findIndex((v) => v.number === value.number && v.category === value.category) &&
				value.number !== "1",
		);
}

export default async function academyCategoryPaginationPage({params: {category, number}}){

  const id = await getCategoryId(category);

  const {
    page: { ctaSection },
    curiosityEntries,
    curiosityCategory: { slug, hero_Heading, hero_Paragraph, hero_Img },
    curiosityCategories,
    curiosityEntriesCount
  } = await query(category, id, number);

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
        currentSlug={slug.current}
        categories={curiosityCategories}
      />
      <CuriosityEntries
        urlBasis={`/pl/akademia/kategoria/${category}`}
        totalCount={curiosityEntriesCount.length}
        curiosityEntries={curiosityEntries}
        page={parseInt(number)}
        itemsPerPage={academyItemsPerPage}
      />
      <CtaSection data={ctaSection} />
      <LatestBlogEntries />
      <Faq />
    </>
  )

}

export async function generateMetadata({params:{category, number}}) {

  const id = await getCategoryId(category);

  const {
    page: { seo },
  } = await query(category, id, number);
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
  allCuriosityCategories {
    _id
    slug {
      current
    }
  }
  `);
	return data.allCuriosityCategories.filter((curiosityCategory) => curiosityCategory.slug.current == category)[0]
		?._id;
};

const query = async(category, id, number) => {

  const {
		body: { data },
	} = await fetchData(`
  ${
		category
			? `
      page: Academy(id: "academy") {
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
      curiosityEntries: allCuriosityEntries(
        sort: { _createdAt: DESC }
      ) {
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
      curiosityCategories: allCuriosityCategories {
        name
        slug {
          current
        }
      }
      curiosityCategory: CuriosityCategories(id: "${id}") {
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
      }`
			: ``
	}
  curiosityCategories: allCuriosityCategories{
    name
    slug {
      current
    }
  }

  curiosityEntriesCount: allCuriosityEntries {
    categories {
      slug {
        current
      }
    }
  }`);

  if (category) {
		data.curiosityEntries = data.curiosityEntries
			.filter((curiosityEntry) =>
				curiosityEntry.categories.map((text) => text.slug.current).includes(category),
			)
			.slice((number - 1) * academyItemsPerPage, number * academyItemsPerPage);

		if (data.curiosityEntries.length == 0 || number == 1) {
			return notFound();
		}

		data.curiosityEntriesCount = data.curiosityEntriesCount.filter((curiosityEntry) =>
			curiosityEntry.categories.map((text) => text.slug.current).includes(category),
		);
	}
  return data;
}