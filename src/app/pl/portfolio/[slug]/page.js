import SEO from "@/app/components/global/Seo";
import TextComponent from "@/app/components/molecules/TextComponent";
import CtaSection from "@/app/components/sections/CtaSection";
import ImageComponent from "@/app/components/sections/ImageComponent";
import ImageShowcase from "@/app/components/sections/ImageShowcase";
import LogoShowcase from "@/app/components/sections/LogoShowcase";
import Features from "@/app/components/sections/portfolioCase/Features";
import Hero from "@/app/components/sections/portfolioCase/Hero";
import Participated from "@/app/components/sections/portfolioCase/Participated";
import Slider from "@/app/components/sections/portfolioCase/Slider";
import Stylescape from "@/app/components/sections/portfolioCase/Stylescape";
import Testimonial from "@/app/components/sections/portfolioCase/Testimonial";
import fetchData from "@/utils/fetchData";

export async function generateStaticParams() {
	const { caseStudies } = await paramsQuery();
	return caseStudies.map((caseStudy) => caseStudy.slug.current);
}

export default async function PortfolioSlugPage({ params: { slug } }) {
	const mappedComponents = {
		caseStudy_Participated: Participated,
		caseStudy_Text: TextComponent,
		caseStudy_Image: ImageComponent,
		ImageShowcase: ImageShowcase,
		LogoShowcase: LogoShowcase,
		caseStudy_Stylescape: Stylescape,
		caseStudy_Feautures: Features,
		ctaSection: CtaSection,
		testimonials: Testimonial,
		caseStudy_Slider: Slider,
	};

	const {
		caseStudy: { heading, categories_Paragraph, categories, img, content, name },
	} = await query(slug);

	const breadcrumbs = [
		{
			name: "Portfolio",
			link: "/pl/portfolio",
		},
		{
			name: name,
			link: `/pl/portfolio/${slug}`,
		},
	];

	return (
		<>
			<Hero
				data={{
					heading,
					categories_Paragraph,
					categories,
					img,
				}}
				breadcrumbs={breadcrumbs}
			/>
			{content.map((component, i) => {
				const Component = mappedComponents[component._type];
				return (
					<Component
						key={i}
						data={component}
					/>
				);
			})}
		</>
	);
}

export async function generateMetadata({params: {slug}}) {
	const {
		caseStudy: { seo,ogImage },
	} = await query(slug);
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: `/pl/portfolio/${slug}`,
    ogImage:`https://kryptonum.eu${ogImage.asset.url}`
	});
}

const query = async (slug) => {
	const {
		body: { data },
	} = await fetchData(
		`
    query($slug: String!) {
      caseStudy: allCaseStudyEntries(where: { slug: { current: { eq: $slug } } }) {
        name
        slug {
          current
        }
        heading
        categories_Paragraph
        categories {
          name
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
        content {
          ... on CaseStudyParticipated {
            _type
            heading
            paragraph
            people {
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
          }
          ... on CaseStudyText {
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
          ... on CaseStudyImage {
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
          ... on CaseStudyStylescape {
            _type
            heading
            paragraph
            stylescapes {
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
            elements {
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
          ... on CaseStudyFeautures {
            _type
            heading
            feautures {
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
          ... on Testimonials {
            _type
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
          ... on CaseStudySlider {
            _type
            heading
            slides {
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
        }
        seo {
          title
          description
        }
        ogImage: img {
          asset {
            url
          }
        }
      }
    }
    `,
		{
			slug,
		},
	);
	data.caseStudy = data.caseStudy[0];

	return data;
};

const paramsQuery = async () => {
	const {
		body: { data },
	} = await fetchData(`
query {
  caseStudies: allCaseStudyEntries {
    slug {
      current
    }
  }
}`);
	return data;
};
