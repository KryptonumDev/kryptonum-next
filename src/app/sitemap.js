import fetchData from "@/utils/fetchData";
import { domain } from "../global/Seo";

const currentDate = new Date();
let staticPages = [
  "/pl",
  "/pl/akademia",
  "/pl/blog",
  "/pl/branding",
  "/pl/brief-z-kryptonum",
  "/pl/grafika-design",
  "/pl/grafika-design/audyt-ux-ui",
  "/pl/grafika-design/identyfikacja-wizualna-marki",
  "/pl/grafika-design/projektowanie-logo",
  "/pl/kontakt",
  "/pl/mapa-strony",
  "/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie",
  "/pl/polityka-prywatnosci",
  "/pl/portfolio",
  "/pl/projektowanie-ui",
  "/pl/projektowanie-ux",
  "/pl/warsztaty-discovery",
  "/pl/web-development",
  "/pl/web-development/aplikacje-internetowe",
  "/pl/web-development/sklepy-internetowe",
  "/pl/web-development/strony-internetowe",
  "/pl/zespol",
];

export default async function sitemap() {
  let {
    locationPages,
    blogEntries,
    blogCategories,
    curiosityEntries,
    curiosityCategories,
    caseStudyEntries,
    teamMembers,
  } = await query();
  locationPages = locationPages.map(({ slug: { current: slug }}) => ({
    url: `${domain}/pl/${slug}`,
    lastModified: currentDate,
  }));
  blogEntries = blogEntries.map(({ slug: { current: slug }}) => ({
    url: `${domain}/pl/blog/${slug}`,
    lastModified: currentDate,
  }));
  blogCategories = blogCategories.map(({ slug: { current: slug }}) => ({
    url: `${domain}/pl/blog/kategoria/${slug}`,
    lastModified: currentDate,
  }));
  curiosityEntries = curiosityEntries.map(({ slug: { current: slug }}) => ({
    url: `${domain}/pl/akademia/${slug}`,
    lastModified: currentDate,
  }));
  curiosityCategories = curiosityCategories.map(({ slug: { current: slug }}) => ({
    url: `${domain}/pl/akademia/kategoria/${slug}`,
    lastModified: currentDate,
  }));
  caseStudyEntries = caseStudyEntries.map(({ slug: { current: slug }}) => ({
    url: `${domain}/pl/portfolio/${slug}`,
    lastModified: currentDate,
  }));
  teamMembers = teamMembers.map(({ slug: { current: slug }}) => ({
    url: `${domain}/pl/zespol/${slug}`,
    lastModified: currentDate,
  }));
  staticPages = staticPages.map(({ slug: { current: slug }}) => ({
    url: `${domain}${slug}`,
    lastModified: currentDate,
  }));

  return [
    ...locationPages,
    ...blogEntries,
    ...blogCategories,
    ...curiosityEntries,
    ...curiosityCategories,
    ...caseStudyEntries,
    ...teamMembers,
    ...staticPages,
  ];
}

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      locationPages: allLocationPage {
        slug {
          current
        }
      }
      blogEntries: allBlogEntries {
        slug {
          current
        }
      }
      blogCategories: allBlogCategories {
        slug {
          current
        }
      }
      curiosityEntries: allCuriosityEntries {
        slug {
          current
        }
      }
      curiosityCategories: allCuriosityCategories {
        slug {
          current
        }
      }
      caseStudyEntries: allCaseStudyEntries {
        slug {
          current
        }
      }
      teamMembers: allTeamMember {
        slug {
          current
        }
      }
    }
  `);
  return data;
};
