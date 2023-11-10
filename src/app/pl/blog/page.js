import fetchData from "@/utils/fetchData";
import { env } from "process";
import Hero from "@/app/components/sections/Hero";
import styles from './styles.module.scss';
import Categories from "@/app/components/sections/Categories";
import BlogEntries from "@/app/components/sections/BlogEntries";
import { formatDateToPolishLocale } from "@/utils/functions";
import CtaSection from "@/app/components/sections/CtaSection";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import Faq from "@/app/components/sections/Faq";

const changeBlogEntriesLocale = (blogEntries) => {
	blogEntries.map((entry) => {
		entry._createdAt = formatDateToPolishLocale(entry._createdAt);
	});
};

export default async function blogPage() {
	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection },
		blogEntries,
		blogCategories,
    blogEntriesCount
	} = await query();
	const hero = {
		heading: hero_Heading,
		paragraph: hero_Paragraph,
		sideImage: hero_Img,
	};
  changeBlogEntriesLocale(blogEntries);
	return (
		<>
			<Hero data={hero} additionalStyles={styles}/>
			<Categories categorySlug="/pl/blog/" categories={blogCategories} />
			<BlogEntries
				urlBasis={"/pl/blog"}
				totalCount={blogEntriesCount.length}
				blogEntries={blogEntries}
				page={1}
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
    limit: ${env.PAGE_ITEM_COUNT}
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
