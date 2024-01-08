import Categories from "@/components/sections/Categories";
import CtaSection from "@/components/sections/CtaSection";
import CuriosityEntries from "@/components/sections/CuriosityEntries";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import LatestBlogEntries from "@/components/sections/LatestBlogEntries";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import { notFound } from "next/navigation";
import { academyItemsPerPage } from "../../page";

export async function generateStaticParams() {
	const { allCuriosityCategories } = await paramsQuery();
	return allCuriosityCategories.map((category) => ({ category: category.slug.current }));
}

export default async function AcademyCategoryPage({ params: { category } }) {
	const {
		page: { ctaSection },
		curiosityEntries,
		curiosityCategory: { slug, hero_Heading, hero_Paragraph, hero_Img, name },
		curiosityCategories,
		allCuriosityEntries,
		blogEntries,
	} = await query(category);

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
  <main id="main">
    <Breadcrumbs breadcrumbs={breadcrumbs} />
    <Hero
      data={{
        heading: hero_Heading,
        paragraph: hero_Paragraph,
        sideImage: hero_Img,
      }}
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
      page={1}
      itemsPerPage={academyItemsPerPage}
      isCategoryPagination={true}
    />
    <CtaSection data={ctaSection} />
    <LatestBlogEntries data={blogEntries} />
    <Faq />
    </main>
	);
}

export async function generateMetadata({ params: { category } }) {
	const {
		curiosityCategory: { seo },
	} = await query(category);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: `/pl/akademia/kategoria/${category}`,
	});
}

const query = async (category) => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
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
      curiosityEntries: allCuriosityEntries(sort: { _createdAt: DESC }) {
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

  if (category) {
    data.curiosityCategory = data.curiosityCategory.filter(
      (curiosityCategory) => curiosityCategory.slug.current == category
    )[0];
    data.curiosityEntries = data.curiosityEntries
      .filter((curiosityEntry) =>
        curiosityEntry.categories
          .map((text) => text.slug.current)
          .includes(category)
      )
      .slice(0, academyItemsPerPage);

    if (data.curiosityEntries.length == 0) {
      return notFound();
    }

    data.allCuriosityEntries = data.allCuriosityEntries.filter(
      (curiosityEntry) =>
        curiosityEntry.categories
          .map((text) => text.slug.current)
          .includes(category)
    );
  }
  return data;
};

const paramsQuery = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      allCuriosityCategories {
        slug {
          current
        }
      }
    }
  `);
  return data;
};
