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

export async function generateStaticParams() {
	const { curiosityEntriesCount } = await query();
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(curiosityEntriesCount.length / academyItemsPerPage); i++) {
		pageNumbers.push(i + 1);
	}
	curiosityEntriesCount.map((entry) => pageNumbers.push(entry.slug.current));
	return pageNumbers.map((number) => ({ slug: number.toString() }));
}

export default async function academySlugPage({ params: { slug } }) {
	const {
		page: { hero_Heading, hero_Paragraph, hero_Img, ctaSection, seo },
		curiosityCategories,
		curiosityEntries,
		curiosityEntriesCount,
	} = await query(slug);

	if ((curiosityEntries.length != 0 && slug != 1) && parseInt(slug)) {
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
					page={parseInt(slug)}
					curiosityEntries={curiosityEntries}
					itemsPerPage={academyItemsPerPage}
				/>
				<CtaSection data={ctaSection} />
				<LatestBlogEntries />
				<Faq />
			</>
		);
	} else if (slug == curiosityEntries.map((entry) => entry.slug.current)) {
		return (
			<>
				<EntryHero
					title={curiosityEntries[0].title}
					subtitle={curiosityEntries[0].subtitle}
					categories={curiosityEntries[0].categories}
					categorySlug="/pl/akademia/kategoria/"
					_createdAt={curiosityEntries[0]._createdAt}
					author={curiosityEntries[0].author}
					img={curiosityEntries[0].img}
				/>
				{curiosityEntries[0].content.map((component, i) => {
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
					heading={curiosityEntries[0].share.heading}
					img={curiosityEntries[0].share.img}
					url={slug.current}
				/>
				<Sources data={curiosityEntries[0].sources} />
				<LatestCuriosityEntries
					heading={curiosityEntries[0].latestCuriosities_Heading}
					exclude={slug.current}
				/>
			</>
		);
	} else {
		notFound();
	}
}

const query = async (slug) => {
	let queryString = "";

	if (slug) {
		if (parseInt(slug)) {
			queryString = `curiosityEntries: allCuriosityEntries(
        limit: ${academyItemsPerPage}
        offset: ${(parseInt(slug) - 1) * academyItemsPerPage}
        sort: { _createdAt: DESC }
      ) {`;
		} else {
			queryString = `curiosityEntries: allCuriosityEntries(
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
        `;
		}
	}

	const {
		body: { data },
	} = await fetchData(`
  ${
		slug
			? `
    ${queryString} 
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
  `);
	return data;
};
