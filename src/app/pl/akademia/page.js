import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import SEO from "@/app/components/global/Seo";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import CuriosityEntries from "@/app/components/sections/CuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import Hero from "@/app/components/sections/Hero";
import LatestBlogEntries from "@/app/components/sections/LatestBlogEntries";
import fetchData from "@/utils/fetchData";

export default async function AcademyPage() {
	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
		curiosityCategories,
		curiosityEntries,
		curiosityEntriesCount,
		blogEntries,
	} = await query();

	const breadcrumbs = [
		{
			name: "Akademia",
			link: "/pl/akademia",
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
				<LatestBlogEntries data={blogEntries} />
				<Faq />
			</main>
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
		url: "/pl/akademia",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(
		`
  query($academyItemsPerPage: Int!) {
  curiosityEntries: allCuriosityEntries(
    limit: $academyItemsPerPage,
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
		},
	);
	return data;
};

export const academyItemsPerPage = 12;
