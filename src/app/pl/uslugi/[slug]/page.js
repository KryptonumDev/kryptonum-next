import Hero from '@/components/sections/landingPage/Hero';
import Breadcrumbs from '@/global/Breadcrumbs';
import fetchData from '@/utils/fetchData';


export default async function LandingPage({ params: { slug } }) {
  const {
    page: { hero_Img, hero_Heading, hero_Paragraph, name },
  } = await query(slug);

  const breadcrumbs = [
    {
      name: `${name}`,
      link: `/pl/${slug}`,
    }
  ]

  return (
    <main>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero
        hero_Heading={hero_Heading}
        hero_Img={hero_Img}
        hero_Paragraph={hero_Paragraph}
      />
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
