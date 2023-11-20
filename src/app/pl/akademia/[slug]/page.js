import fetchData from "@/utils/fetchData";
import Hero from "@/app/components/sections/Hero";
import Categories from "@/app/components/sections/Categories";
import CtaSection from "@/app/components/sections/CtaSection";
import Faq from "@/app/components/sections/Faq";
import CuriosityEntries from "@/app/components/sections/CuriosityEntries";
import LatestBlogEntries from "@/app/components/sections/homepage/LatestBlogEntries";
import { notFound } from "next/navigation";
import { academyItemsPerPage } from "../page";
import EntryHero from "@/app/components/sections/EntryHero";
import ImageAndStandout from "@/app/components/sections/academyEntry/ImageAndStandout";
import KeyElements from "@/app/components/sections/academyEntry/KeyElements";
import Highlight from "@/app/components/sections/academyEntry/Highlight";
import Note from "@/app/components/sections/academyEntry/Note";
import Tiles from "@/app/components/sections/academyEntry/Tiles";
import LargeList from "@/app/components/sections/academyEntry/LargeList";
import ColumnText from "@/app/components/sections/academyEntry/ColumnText";
import ConsultationForm from "@/app/components/sections/ConsultationForm";
import Share from "@/app/components/sections/academyEntry/Share";
import Sources from "@/app/components/sections/academyEntry/Sources";
import LatestCuriosityEntries from "@/app/components/sections/LatestCuriosityEntries";
import ExtendedList from "@/app/components/sections/academyEntry/ExtendedList";
import SEO from "@/app/components/global/Seo";

export async function generateStaticParams() {
	const { curiosityEntriesCount } = await query();
	const pageNumbers = [];
	curiosityEntriesCount.map((entry) => pageNumbers.push(entry.slug.current));
	return pageNumbers.map((number) => ({ slug: number.toString() }));
}

export default async function academySlugPage({ params }) {
	const {
		page: {
			title,
			slug,
			subtitle,
			author,
			categories,
			img,
			_createdAt,
			content,
			share,
			sources,
			latestCuriosities_Heading,
		},
	} = await query(params.slug);
	if (params.slug == slug.current) {
		return (
			<>
				<EntryHero
					title={title}
					subtitle={subtitle}
					categories={categories}
					categorySlug="/pl/akademia/kategoria/"
					_createdAt={_createdAt}
					author={author}
					img={img}
				/>
				{content.map((component, i) => {
					switch (component._type) {
						case "standout":
							return (
								<ImageAndStandout
									key={i}
									heading={component.heading}
									paragraph={component.paragraph}
									standout={component.standout}
									img={component.img}
									reversed={component.reversed}
								/>
							);
						case "curiosity_KeyElements":
							return (
								<KeyElements
									key={i}
									heading={component.heading}
									list={component.list}
									paragraph={component.paragraph}
								/>
							);
						case "curiosity_Highlight":
							return (
								<Highlight
									key={i}
									heading={component.heading}
									paragraph={component.paragraph}
								/>
							);
						case "curiosity_Note":
							return (
								<Note
									key={i}
									heading={component.heading}
									paragraph={component.paragraph}
									attention={component.attention}
								/>
							);
						case "curiosity_Tiles":
							return (
								<Tiles
									key={i}
									heading={component.heading}
									list={component.list}
									annotation={component.annotation}
								/>
							);
						case "curiosity_LargeList":
							return (
								<LargeList
									key={i}
									isHeading={true}
									title={component.heading}
									list={component.list}
									paragraph={component.paragraph}
								/>
							);
						case "curiosity_ColumnText":
							return (
								<ColumnText
									key={i}
									heading={component.heading}
									paragraph={component.paragraph}
								/>
							);
						case "quickForm":
							return (
								<ConsultationForm
									key={i}
									data={component}
								/>
							);
						case "curiosity_ExtendedList":
							return (
								<ExtendedList
									key={i}
									data={component}
								/>
							);
						default:
							break;
					}
				})}
				<Share
					heading={share.heading}
					img={share.img}
					url={params.slug.current}
				/>
				<Sources data={sources} />
				<LatestCuriosityEntries
					heading={latestCuriosities_Heading}
					exclude={slug.current}
				/>
			</>
		);
	} else {
		notFound();
	}
}

export async function generateMetadata({ params: { slug } }) {
	const {
		page: { seo },
	} = await query(slug);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "",
	});
}

const query = async (slug) => {
	const {
		body: { data },
	} = await fetchData(`
  ${
		slug
			? `
    page: allCuriosityEntries(
      sort: { _createdAt: DESC }
      where: {slug: {current: {eq: "${slug}"}}}
    ) {
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
      content {
        ... on CuriosityKeyElements {
          _type
          heading
          list
          paragraph
        }
        ... on Standout {
          _type
          heading
          paragraph
          standout
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
          reversed
        }
        ... on CuriosityHighlight {
          _type
          heading
          paragraph
        }
        ... on CuriosityNote {
          _type
          heading
          paragraph
          attention
        }
        ... on CuriosityTiles {
          _type
          heading
          list
          annotation
        }
        ... on CuriosityLargeList {
          _type
          heading
          list
          paragraph
        }
        ... on CuriosityColumnText {
          _type
          heading
          paragraph
        }
        ... on QuickForm {
          _type
          heading
          subheading
          cta
        }
        ... on CuriosityExtendedList {
          _type
          heading
          subtitle
          extendedList: list {
            paragraph
            item {
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
              paragraph
            }
          }
        }
      }
      share {
        heading
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
      sources {
        heading
        list {
          text
          href
        }
      }
      latestCuriosities_Heading
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
  `);
  if (slug) {
    data.page = data.page[0];
  }
	return data;
};
