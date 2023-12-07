import Breadcrumbs from "@/components/global/Breadcrumbs";
import SEO from "@/components/global/Seo";
import Categories from "@/components/sections/Categories";
import CtaSection from "@/components/sections/CtaSection";
import CuriosityEntries from "@/components/sections/CuriosityEntries";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import LatestBlogEntries from "@/components/sections/LatestBlogEntries";
import fetchData from "@/utils/fetchData";
import { academyItemsPerPage } from "../../../page";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const { allCuriosityEntries } = await paramsQuery();
	return allCuriosityEntries
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

export default async function AcademyCategoryPaginationPage({ params: { category, number } }) {
	const {
		page: { ctaSection },
		curiosityEntries,
		curiosityCategory: { slug, hero_Heading, hero_Paragraph, hero_Img, name },
		curiosityCategories,
		allCuriosityEntries,
		blogEntries,
	} = await query(category, number);

	const breadcrumbs = [
		{
			name: "Akademia",
			link: "/pl/akademia",
		},
		{
			name: name,
			link: slug,
		},
	];

	return (
		<>
			<main id="main">
				<Breadcrumbs breadcrumbs={breadcrumbs} />
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
					totalCount={allCuriosityEntries.length}
					curiosityEntries={curiosityEntries}
					page={parseInt(number)}
					itemsPerPage={academyItemsPerPage}
					isCategoryPagination={true}
				/>
				<CtaSection data={ctaSection} />
				<LatestBlogEntries data={blogEntries} />
				<Faq />
			</main>
		</>
	);
}

export async function generateMetadata({ params: { category, number } }) {
	const {
		page: { seo },
	} = await query(category, number);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: `/pl/akademia/kategoria/${category}/${number}`,
	});
}

const query = async (category, number) => {
	const {
		body: { data },
	} = await fetchData(`
  query {
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
      curiosityCategory: allCuriosityCategories {
        _id
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
      }
  allCuriosityCategories {
    _id
    name
    slug {
      current
    }
  }

  allCuriosityEntries {
    categories {
      slug {
        current
      }
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
}`);

	if (category) {
		data.curiosityCategory = data.curiosityCategory.filter(
			(curiosityCategory) => curiosityCategory.slug.current == category,
		)[0];
		data.curiosityEntries = data.curiosityEntries
			.filter((curiosityEntry) =>
				curiosityEntry.categories.map((text) => text.slug.current).includes(category),
			)
			.slice((number - 1) * academyItemsPerPage, number * academyItemsPerPage);

		if (data.curiosityEntries.length == 0 || number == 1) {
			return notFound();
		}

		data.allCuriosityEntries = data.allCuriosityEntries.filter((curiosityEntry) =>
			curiosityEntry.categories.map((text) => text.slug.current).includes(category),
		);
	}
	return data;
};

const paramsQuery = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
    allCuriosityEntries {
      categories {
        slug {
          current
        }
      }
    }
  }`);
	return data;
};
