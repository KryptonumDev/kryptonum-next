import BlogEntries from '@/components/sections/BlogEntries';
import Categories from '@/components/sections/Categories';
import CtaSection from '@/components/sections/CtaSection';
import Faq from '@/components/sections/Faq';
import Hero from '@/components/sections/Hero';
import LatestCuriosityEntries from '@/components/sections/LatestCuriosityEntries';
import Breadcrumbs from '@/global/Breadcrumbs';
import SEO from '@/global/Seo';
import fetchData from '@/utils/fetchData';
import { notFound, redirect } from 'next/navigation';
import { blogItemsPerPage } from '../../page';

const breadcrumbs = [
  {
    name: 'Blog',
    link: '/pl/blog',
  },
];

export async function generateStaticParams() {
  const { allBlogEntries } = await paramsQuery();
  return Array.from({ length: Math.ceil(allBlogEntries.length / blogItemsPerPage) }, (value, index) => ({
    number: (index + 1).toString(),
  })).filter(({ number }) => number !== '1');
}

export default async function BlogPaginationPage({ params: { number } }) {
  const {
    page: { hero_Paragraph, hero_Img, ctaSection },
    blogEntries,
    blogCategories,
    allBlogEntries,
  } = await query(number);

  return (
    <main id='main'>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Hero
        data={{
          heading: `**Blog** - strona ${number}`,
          paragraph: hero_Paragraph,
          sideImage: hero_Img,
        }}
      />
      <Categories
        categorySlug='/pl/blog/'
        categories={blogCategories}
      />
      <BlogEntries
        urlBasis={'/pl/blog'}
        totalCount={allBlogEntries.length}
        blogEntries={blogEntries}
        page={parseInt(number)}
        itemsPerPage={blogItemsPerPage}
      />
      <CtaSection data={ctaSection} />
      <LatestCuriosityEntries />
      <Faq />
    </main>
  );
}

export async function generateMetadata({ params: { number } }) {
  const {
    page: { seo },
  } = await query(number);
  return SEO({
    title: `${seo?.title} | strona ${number}`,
    description: `${seo?.description} To ${number} strona bloga.`,
    url: `/pl/blog/strona/${number}`,
  });
}

const query = async (number) => {
  if (number && !parseInt(number)) {
    return notFound();
  } else if (number == 1) {
    redirect('/pl/blog');
  }
  const {
    body: { data },
  } = await fetchData(
    /* GraphQL */ `
      query ($limit: Int!, $offset: Int!) {
        blogEntries: allBlogEntries(limit: $limit, offset: $offset, sort: { _createdAt: DESC }) {
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
        allBlogEntries: allBlogEntries {
          slug {
            current
          }
        }
      }
    `,
    {
      limit: blogItemsPerPage,
      offset: (parseInt(number) - 1) * blogItemsPerPage,
    }
  );
  if (data.blogEntries?.length == 0) {
    notFound();
  }
  return data;
};

const paramsQuery = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      allBlogEntries: allBlogEntries {
        slug {
          current
        }
      }
    }
  `);
  return data;
};
