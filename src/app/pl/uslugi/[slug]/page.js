import Hero from '@/components/sections/landingPage/Hero';
import Breadcrumbs from '@/global/Breadcrumbs';
import fetchData from '@/utils/fetchData';
import Slider from '@/components/sections/services/Slider';

export default async function LandingPage({ params: { slug } }) {
  const mappedComponents = (component, i) => ({
    Slider: (
      <Slider
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
      link: `/pl/${slug}`,
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
