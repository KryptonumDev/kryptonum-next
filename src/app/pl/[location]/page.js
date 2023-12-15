import CentralizedHeading from "@/components/molecules/CentralizedHeading";
import TextComponent from "@/components/molecules/TextComponent";
import ListWithOverflowIcon from "@/components/organisms/ListWithOverflowIcon";
import CaseStudies from "@/components/sections/CaseStudies";
import CtaSection from "@/components/sections/CtaSection";
import GridFloatingImg from "@/components/sections/GridFloatingImg";
import ImageComponent from "@/components/sections/ImageComponent";
import ImageShowcase from "@/components/sections/ImageShowcase";
import LargeListWithImg from "@/components/sections/LargeListWithImg";
import Hero from "@/components/sections/LocationPageHero";
import LogoShowcase from "@/components/sections/LogoShowcase";
import Process from "@/components/sections/Process";
import SimpleCtaSection from "@/components/sections/SimpleCtaSection";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import TextColumnComponent from "@/components/sections/TextColumnComponent";
import TilesComponent from "@/components/sections/TilesComponent";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const { allLocationPage } = await paramsQuery();
	return allLocationPage.map((location) => ({ location: location.slug.current }));
}


export default async function LocationPage({ params: { location } }) {

	const mappedComponents = (component, i) => ({
		CaseStudies: (
			<CaseStudies
				key={i}
				heading={component?.heading}
				eagerLoading={true}
			/>
		),
		ctaSection: (
			<CtaSection
				key={i}
				data={component}
			/>
		),
		ImageShowcase: (
			<ImageShowcase
				key={i}
				data={component}
			/>
		),
		TeamSection: (
			<Team
				key={i}
				heading={component?.heading}
				paragraph={component?.paragraph}
				cta={component?.cta}
			/>
		),
		LatestTestimonials: (
			<Testimonials
				key={i}
				heading={component?.heading}
				testimonials={testimonials}
			/>
		),
		simpleCtaSection: (
			<SimpleCtaSection
				key={i}
				data={component}
			/>
		),
		TextComponent: (
			<TextComponent
				key={i}
				data={component}
			/>
		),
		TextColumnComponent: (
			<TextColumnComponent
				key={i}
				data={component}
			/>
		),
		ImageComponent: (
			<ImageComponent
				key={i}
				data={component}
			/>
		),
		TilesComponent: (
			<TilesComponent
				key={i}
				data={component}
			/>
		),
		CenteredHeading: (
			<CentralizedHeading
				key={i}
				data={component}
			/>
		),
		ListWithOverflowIcon_Array: (
			<ListWithOverflowIcon
				key={i}
				data={component}
			/>
		),
		Process: (
			<Process
				key={i}
				data={component}
			/>
		),
		LargeList: (
			<LargeListWithImg
				key={i}
				data={component}
			/>
		),
		LogoShowcase: (
			<LogoShowcase
				key={i}
				data={component}
			/>
		),
		GridFloatingImg: (
			<GridFloatingImg
				key={i}
				data={component}
			/>
		),
	});

	const {
		page: { hero_Heading, hero_Subheading, hero_List, hero_Cta, content, name },
		testimonials,
	} = await query(location);

  const breadcrumbs =[
    {
      name: `Strony internetowe ${name}`,
      link: `/pl/${location}`
    }
  ];

	return (
		<>
			<main id="main">
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
				<Hero
					data={{
						hero_Heading,
						hero_Subheading,
						hero_List,
						hero_Cta,
					}}
				/>
				{content.map((component, i) => {
					const Component = mappedComponents(component, i)[component._type];
					return Component ? Component : null;
				})}
			</main>
		</>
	);
}

export async function generateMetadata({ params: { location } }) {
	const {
		page: { seo },
	} = await query(location);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: `/pl/${location}`,
	});
}

const query = async (location) => {
	const {
		body: { data },
	} = await fetchData(
		`
  query($location: String!) {
    page: allLocationPage(where: { slug: { current: { eq: $location } } }) {
      hero_Heading
      hero_Subheading
      hero_List
      name
      hero_Cta {
        theme
        text
        href
      }
      slug {
        current
      }
      content {
        ... on CaseStudies {
          _type
          heading
        }
        ... on CtaSection {
          _type
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
        ... on ImageShowcase {
          _type
          images {
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
          cta {
            theme
            href
            text
          }
        }
        ... on TeamSection {
          _type
          heading
          paragraph
          cta {
            theme
            href
            text
          }
        }
        ... on LatestTestimonials {
          _type
          heading
        }
        ... on SimpleCtaSection {
          _type
          heading
          cta {
            theme
            href
            text
          }
        }
        ... on TextComponent {
          _type
          heading
          blocks {
            icon {
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
            title
            description
          }
        }
        ... on TextColumnComponent {
          _type
          heading
          items: blocks
        }
        ... on ImageComponent {
          _type
          isMockup
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
        ... on TilesComponent {
          _type
          heading
          list {
            icon {
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
            title
            description
          }
        }
        ... on CenteredHeading {
          _type
          heading
          paragraph
        }
        ... on ListWithOverflowIconArray {
          _type
          blocks {
            icon {
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
            title
            description
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
        ... on Process {
          _type
          heading
          blocks {
            title
            description
          }
        }
        ... on LargeList {
          _type
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
          list {
            title
            description
          }
        }
        ... on LogoShowcase {
          _type
          heading
          paragraph
          proposals {
            title
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
        ... on GridFloatingImg {
          _type
          heading
          list {
            title
            description
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
            href
          }
        }
      }
      seo {
        title
        description
      }
    }
    testimonials: allTestimonials(limit: 3, sort: {_createdAt:ASC}) {
      name
      text
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
  `,
		{
			location,
		},
	);
	data.page ? (data.page = data.page[0]) : notFound();
	location !== data.page?.slug.current && notFound();
	return data;
};

const paramsQuery = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
    allLocationPage {
      slug {
        current
      }
    }
  }`);
	return data;
};
