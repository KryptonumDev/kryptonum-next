import EntryHero from "@/components/sections/EntryHero";
import ImageAndStandout from "@/components/sections/ImageAndStandout";
import LargeList from "@/components/sections/LargeList";
import LatestCuriosityEntries from "@/components/sections/LatestCuriosityEntries";
import QuickForm from "@/components/sections/QuickForm";
import ColumnText from "@/components/sections/academyEntry/ColumnText";
import ExtendedList from "@/components/sections/academyEntry/ExtendedList";
import Highlight from "@/components/sections/academyEntry/Highlight";
import KeyElements from "@/components/sections/academyEntry/KeyElements";
import Note from "@/components/sections/academyEntry/Note";
import Share from "@/components/sections/academyEntry/Share";
import Sources from "@/components/sections/academyEntry/Sources";
import Tiles from "@/components/sections/academyEntry/Tiles";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const { allCuriosityEntries } = await paramsQuery();
	return allCuriosityEntries.map((entry) => ({ slug: entry.slug.current }));
}

export default async function AcademySlugPage({ params }) {
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

  const breadcrumbs = [
    {
      name: "Akademia",
      link: "/pl/akademia"
    },
    {
      name: title,
      link: slug
    }
  ];

	return (
  <main id="main">
    <Breadcrumbs breadcrumbs={breadcrumbs}/>
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
            <QuickForm
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
      url={params.slug}
    />
    <Sources data={sources} />
    <LatestCuriosityEntries
      heading={latestCuriosities_Heading}
      exclude={slug.current}
    />
    </main>
	);
}

export async function generateMetadata({ params: { slug } }) {
	const {
		page: { seo },
	} = await query(slug);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: `/pl/akademia/${slug}`,
	});
}

const query = async (slug) => {
  const {
    body: { data },
  } = await fetchData(
    /* GraphQL */ `
      query ($slug: String!) {
        page: allCuriosityEntries(
          sort: { _createdAt: DESC }
          where: { slug: { current: { eq: $slug } } }
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
        }
      }
    `,
    {
      slug,
    }
  );
  if (slug) {
    data.page ? (data.page = data.page[0]) : notFound();
    slug !== data.page?.slug.current && notFound();
  }
  return data;
};

const paramsQuery = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      allCuriosityEntries {
        slug {
          current
        }
      }
    }
  `);
  return data;
};
