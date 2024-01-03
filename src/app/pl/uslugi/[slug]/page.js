import CaseStudies from '@/components/sections/CaseStudies';
import CentralizedHeadingSection from '@/components/sections/CentralizedHeadingSection';
import HeadingWithTitleAndImgList from '@/components/sections/HeadingWIthTitleAndImgList';
import HeadingWithIconDescriptionList from '@/components/sections/HeadingWithIconDescriptionList';
import ImageShowcase from '@/components/sections/ImageShowcase';
import ProsAndConsShowcase from '@/components/sections/ProsAndConsShowcase';
import TextSection from '@/components/sections/TextSection';
import WindowsShowcase from '@/components/sections/WindowsShowcase';
import Hero from '@/components/sections/landingPage/Hero';
import Slider from '@/components/sections/services/Slider';
import Breadcrumbs from '@/global/Breadcrumbs';
import fetchData from '@/utils/fetchData';

export default async function LandingPage({ params: { slug } }) {
  const mappedComponents = (component, i) => ({
    Slider: (
      <Slider
        key={i}
        data={component}
      />
    ),
    CenteredHeading: (
      <CentralizedHeadingSection
        key={i}
        data={component}
      />
    ),
    WindowsShowcase: (
      <WindowsShowcase
        key={i}
        data={component}
      />
    ),
    TextComponent: (
      <TextSection
        key={i}
        data={component}
      />
    ),
    CaseStudies: (
      <CaseStudies
        key={i}
        heading={component.heading}
      />
    ),
    ProsAndConsShowcase: (
      <ProsAndConsShowcase
        key={i}
        data={component}
      />
    ),
    HeadingWithTitleAndImgList: (
      <HeadingWithTitleAndImgList
        key={i}
        data={component}
      />
    ),
    HeadingWithIconDescriptionList: (
      <HeadingWithIconDescriptionList
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
  });

  const {
    page: { hero_Img, hero_Heading, hero_Paragraph, name, content },
  } = await query(slug);

  const breadcrumbs = [
    {
      name: `${name}`,
      link: `/pl/uslugi/${slug}`,
    },
  ];

  return (
    <main>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero
        hero_Heading={hero_Heading}
        hero_Img={hero_Img}
        hero_Paragraph={hero_Paragraph}
      />
      {content.map((component, i) => {
        return mappedComponents(component, i)[component._type];
      })}
    </main>
  );
}

const query = async (slug) => {
  const {
    body: { data },
  } = await fetchData(
    /* GraphQL */ `
      query ($slug: String!) {
        page: allLandingPage(where: { slug: { current: { eq: $slug } } }) {
          name
          #Hero
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
          hero_Heading
          hero_Paragraph
          #Slider
          content {
            ... on Slider {
              _type
              heading
              slides {
                title
                description
              }
            }
            ... on CenteredHeading {
              _type
              heading
            }
            ... on WindowsShowcase {
              _type
              heading
              description
              icons {
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
                description
              }
              windows {
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
            ... on TextComponent {
              _type
              heading
              blocks {
                description
              }
            }
            ... on CaseStudies {
              _type
              heading
            }
            ... on ProsAndConsShowcase {
              _type
              heading
              ProsAndConsList {
                title
                ProsAndCons {
                  isPros
                  content
                }
              }
            }
            ... on HeadingWithTitleAndImgList {
              _type
              heading
              TitleAndImage {
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
            ... on HeadingWithIconDescriptionList {
              _type
              heading
              IconDescriptionList {
                description
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
            }
          }
        }
      }
    `,
    {
      slug,
    }
  );
  data.page = data.page[0];
  return data;
};
