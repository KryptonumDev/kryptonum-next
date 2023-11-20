import Hero from "@/app/components/sections/Hero";
import Categories from "@/app/components/sections/Categories";
import BlogEntries from "@/app/components/sections/BlogEntries";
import CtaSection from "@/app/components/sections/CtaSection";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import Faq from "@/app/components/sections/Faq";
import { blogItemsPerPage } from "../../page";
import fetchData from "@/utils/fetchData";
import { notFound, redirect } from "next/navigation";
import SEO from "@/app/components/global/Seo";

export async function generateStaticParams() {
	const { blogEntriesCount } = await query();
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(blogEntriesCount.length / blogItemsPerPage); i++) {
		pageNumbers.push(i + 1);
	}
	return pageNumbers.map((number) => ({ number: number.toString() }));
}

export default async function blogPaginationPage({ params: { number } }) {
	if (parseInt(number)) {
		const {
			page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
			blogEntries,
			blogCategories,
			blogEntriesCount,
		} = await query(number);
		if (blogEntries.length != 0 && number != 1) {
			return (
				<>
					<Hero
						data={{
							heading: `**Blog** - strona ${number}`,
							paragraph: hero_Paragraph,
							sideImage: hero_Img,
						}}
						isBlogHero={true}
					/>
					<Categories
						categorySlug="/pl/blog/"
						categories={blogCategories}
					/>
					<BlogEntries
						urlBasis={"/pl/blog"}
						totalCount={blogEntriesCount.length}
						blogEntries={blogEntries}
						page={parseInt(number)}
						itemsPerPage={blogItemsPerPage}
					/>
					<CtaSection data={ctaSection} />
					<LatestCuriosityEntries />
					<Faq />
				</>
			);
		} else if (number == 1) {
      redirect("/pl/blog");
    }else {
			notFound();
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
				? 
        `blogEntries: allBlogEntries(
        limit: ${blogItemsPerPage}
        offset: ${(parseInt(number) - 1) * (blogItemsPerPage)}
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
  `
				: ``
		}
    blogEntriesCount: allBlogEntries {
      slug
      {
        current
      }
    }`,
	);
	return data;
};
