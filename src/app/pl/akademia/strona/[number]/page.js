import SEO from "@/app/components/global/Seo";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import CuriosityEntries from "@/app/components/sections/CuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import Hero from "@/app/components/sections/Hero";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import fetchData from "@/utils/fetchData";
import { notFound, redirect } from "next/navigation";
import { academyItemsPerPage } from "../../page";

export async function generateStaticParams() {
	const { curiosityEntriesCount } = await query();
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(curiosityEntriesCount.length / academyItemsPerPage); i++) {
		pageNumbers.push(i + 1);
	}
	return pageNumbers.map((number) => ({ number: number.toString() }));
}

export default async function academyPaginationPage({ params: { number } }) {
	if (parseInt(number)) {
		const {
			page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
			curiosityCategories,
			curiosityEntries,
			curiosityEntriesCount,
		} = await query(number);
		if (curiosityEntries.length != 0 && number != 1) {
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
						totalCount={curiosityEntriesCount.length}
						page={parseInt(number)}
						curiosityEntries={curiosityEntries}
						itemsPerPage={academyItemsPerPage}
					/>
					<CtaSection data={ctaSection} />
					<LatestBlogEntries />
					<Faq />
				</>
			);
		} else if (number == 1) {
			redirect("/pl/akademia");
		} else {
			return notFound();
		}
	} else {
		return notFound();
	}
}

export async function generateMetadata({params: {number}}) {
  const {
    page: { seo },
  } = await query(number);
  return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "",
	});
}

const query = async (number) => {
	const {
		body: { data },
	} = await fetchData(
		`${
			number
				? `curiosityEntries: allCuriosityEntries(
    limit: ${academyItemsPerPage}
    offset: ${(number - 1) * academyItemsPerPage}
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
	}`
				: ``
		}
    curiosityEntriesCount: allCuriosityEntries {
      slug {
        current
      }
    }
    `,
	);
	return data;
};
