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
  locationPages = locationPages.map((route) => ({
    url: `${domain}/pl/${route}`,
    lastModified: currentDate,
  }));
  blogEntries = blogEntries.map((route) => ({
    url: `${domain}/pl/blog/${route}`,
    lastModified: currentDate,
  }));
  blogCategories = blogCategories.map((route) => ({
    url: `${domain}/pl/blog/kategoria/${route}`,
    lastModified: currentDate,
  }));
  curiosityEntries = curiosityEntries.map((route) => ({
    url: `${domain}/pl/akademia/${route}`,
    lastModified: currentDate,
  }));
  curiosityCategories = curiosityCategories.map((route) => ({
    url: `${domain}/pl/akademia/kategoria/${route}`,
    lastModified: currentDate,
  }));
  caseStudyEntries = caseStudyEntries.map((route) => ({
    url: `${domain}/pl/portfolio/${route}`,
    lastModified: currentDate,
  }));
  teamMembers = teamMembers.map((route) => ({
    url: `${domain}/pl/zespol/${route}`,
    lastModified: currentDate,
  }));
  staticPages = staticPages.map((route) => ({
    url: `${domain}${route}`,
    lastModified: currentDate,
  }));

  return [
    locationPages,
    blogEntries,
    blogCategories,
    curiosityEntries,
    curiosityCategories,
    caseStudyEntries,
    teamMembers,
    staticPages,
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
