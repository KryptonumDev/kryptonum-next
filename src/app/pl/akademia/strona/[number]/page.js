import SEO from "@/app/components/global/Seo";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import CuriosityEntries from "@/app/components/sections/CuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import Hero from "@/app/components/sections/Hero";
import LatestBlogEntries from "@/app/components/sections/LatestBlogEntries";
import fetchData from "@/utils/fetchData";
import { notFound, redirect } from "next/navigation";
import { academyItemsPerPage } from "../../page";

export async function generateStaticParams() {
	const { allCuriosityEntries } = await paramsQuery();
	return Array.from(
		{ length: Math.ceil(allCuriosityEntries.length / academyItemsPerPage) },
		(value, index) => ({ number: (index + 1).toString() }),
	).filter(({ number }) => number !== "1");
}

export default async function academyPaginationPage({ params: { number } }) {
	const {
		page: { hero_Paragraph, hero_Img, ctaSection },
		curiosityCategories,
		curiosityEntries,
		allCuriosityEntries,
		blogEntries,
	} = await query(number, academyItemsPerPage, (parseInt(number) - 1) * academyItemsPerPage);
	return (
		<>
			<Hero
				data={{
					heading: `**Akademia** - strona ${number}`,
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
				totalCount={allCuriosityEntries.length}
				page={parseInt(number)}
				curiosityEntries={curiosityEntries}
				itemsPerPage={academyItemsPerPage}
			/>
			<CtaSection data={ctaSection} />
			<LatestBlogEntries data={blogEntries} />
			<Faq />
		</>
	);
}

export async function generateMetadata({ params: { number } }) {
	const {
		page: { seo },
	} = await query(number, academyItemsPerPage, (parseInt(number) - 1) * academyItemsPerPage);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: `/pl/akademia/strona/${number}`,
	});
}

const query = async (number, academyItemsPerPage, offset) => {
	if (number && !parseInt(number)) {
		return notFound();
	} else if (number == 1) {
		redirect("/pl/akademia");
	}
	const {
		body: { data },
	} = await fetchData(
		`
  query($academyItemsPerPage: Int!, $offset: Int!) {
  curiosityEntries: allCuriosityEntries(
    limit: $academyItemsPerPage
    offset: $offset
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
  page: Academy(id: "academy") {
    # Hero
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
    allCuriosityEntries {
      slug {
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
    `,
		{
			academyItemsPerPage,
			offset,
		},
	);
	if (data.curiosityEntries?.length == 0) {
		notFound();
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
