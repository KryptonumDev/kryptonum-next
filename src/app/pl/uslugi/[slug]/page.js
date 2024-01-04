import BlocksShowcase from '@/components/sections/BlocksShowcase';
import CaseStudies from '@/components/sections/CaseStudies';
import CentralizedHeadingSection from '@/components/sections/CentralizedHeadingSection';
import HeadingDescriptionWithBlocksList from '@/components/sections/HeadingDescriptionWithBlocksList';
import HeadingWithTitleAndImgList from '@/components/sections/HeadingWIthTitleAndImgList';
import HeadingWithIconDescriptionList from '@/components/sections/HeadingWithIconDescriptionList';
import HeadingWithIconTitleGrid from '@/components/sections/HeadingWithIconTitleGrid';
import ImageComponent from '@/components/sections/ImageComponent';
import ImageShowcase from '@/components/sections/ImageShowcase';
import LatestBlogEntries from '@/components/sections/LatestBlogEntries';
import ProsAndConsShowcase from '@/components/sections/ProsAndConsShowcase';
import TextSection from '@/components/sections/TextSection';
import RevealableGrid from '@/components/sections/RevealableGrid';
import Hero from '@/components/sections/landingPage/Hero';
import ProcessList from '@/components/sections/services/ProcessList';
import Slider from '@/components/sections/services/Slider';
import Breadcrumbs from '@/global/Breadcrumbs';
import SEO from '@/global/Seo';
import fetchData from '@/utils/fetchData';
import { notFound } from 'next/navigation';
import ConsultationForm from '@/components/sections/ConsultationForm';
import CooperationGrid from '@/components/sections/CooperationGrid';

export async function generateStaticParams() {
  const { allLandingPage } = await paramsQuery();
  return allLandingPage.map((entry) => ({ slug: entry.slug.current }));
}

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
    RevealableGrid: (
      <RevealableGrid
        key={i}
        data={component}
      />
    ),
    CooperationGrid: (
      <CooperationGrid
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
    HeadingDescriptionWithBlocksList: (
      <HeadingDescriptionWithBlocksList
        key={i}
        data={component}
      />
    ),
    HeadingWithIconTitleGrid: (
      <HeadingWithIconTitleGrid
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
    BlocksShowcase: (
      <BlocksShowcase
        key={i}
        data={component}
      />
    ),
    ProcessList: (
      <ProcessList
        key={i}
        data={component}
      />
    ),
    quickForm: (
      <ConsultationForm
        key={i}
        data={component}
      />
    ),
  });

  const {
    page: { hero_Img, hero_Heading, hero_Paragraph, name, content },
    blogEntries,
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
      <LatestBlogEntries data={blogEntries} />
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
    url: `/pl/uslugi/${slug}`,
  });
}

const query = async (slug) => {
  const {
    body: { data },
  } = await fetchData(
    /* GraphQL */ `
      query ($slug: String!) {
        page: allLandingPage(where: { slug: { current: { eq: $slug } } }) {
          name
          slug {
            current
          }
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
            ... on RevealableGrid {
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
              grid {
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
            ... on CooperationGrid {
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
              grid {
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
            ... on HeadingDescriptionWithBlocksList {
              _type
              heading
              description
              blocks {
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
            ... on HeadingWithIconTitleGrid {
              _type
              heading
              titleAndImageGrid {
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
            ... on BlocksShowcase {
              _type
              heading
              description
              blocks {
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
            ... on ProcessList {
              _type
              ProcessList {
                heading
                subheading
                paragraph
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
            ... on QuickForm {
              _type
              heading
              subheading
              cta
            }
          }
          #SEO
          seo {
            title
            description
          }
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
      allLandingPage {
        slug {
          current
        }
      }
    }
  `);
  return data;
};
