import "../styles/global.scss";
import localFont from "next/font/local";
import fetchData from "@/utils/fetchData";
import Footer from "./components/organisms/Footer";
import Nav from "./components/organisms/Nav";
import { formatDateToPolishLocale, changeImageDimensions } from "@/utils/functions";

const font = localFont({ src: "../resources/fonts/Poppins-Light.woff2" });

const handleDataChangesForComponents = (caseStudies, team, blogEntries, blogAuthors, curiosityEntries, academyAuthors) => {
  caseStudies.map((caseStudy) => {
    caseStudy.img = changeImageDimensions(caseStudy.img, 420, 420);
  });
  team.map((person) => {
    person.img = changeImageDimensions(person.img, 96, 96);
  });
  blogEntries.map((entry) => {
    entry.img = changeImageDimensions(entry.img, 200, 200 );
    entry.author[0].img = changeImageDimensions(entry.author[0].img, 32, 32);
    entry._createdAt = formatDateToPolishLocale(entry._createdAt);
  });
  blogAuthors.map((person)=> {
    person.img = changeImageDimensions(person.img, 96, 96);
  });
  curiosityEntries.map((curiosity) => {
    curiosity.img = changeImageDimensions(curiosity.img, 188, 188);
  });
  academyAuthors.map((person) => {
    person.img = changeImageDimensions(person.img, 96, 96);
  }); 
}

const uniqueAuthors = (data) => {
  const uniqueAuthors = {};
  data.forEach(node => {
    const author = node.author[0];
    const key = author.name;
    if (!uniqueAuthors[key]) {
      uniqueAuthors[key] = author;
    }
  });
  return Object.values(uniqueAuthors);
}



const query = async () => {
  const {
    body: { data },
  } = await fetchData(`
  caseStudies: allCaseStudyEntries(limit: 4, sort: { _createdAt: DESC }) {
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
  team: allTeamMember(sort: { _createdAt: ASC }) {
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
  blogEntries: allBlogEntries(limit: 2, sort: { _createdAt: DESC }) {
    title
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
            dimensions {
              height
              width
            }
          }
        }
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
  }
  blogCategories: allBlogCategories(limit: 8, sort: { _updatedAt: ASC }) {
    name
    slug {
      current
    }
  }
  curiosityEntries: allCuriosityEntries(limit: 2, sort: { _createdAt: DESC }) {
    title
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
  curiosityCategories: allCuriosityCategories(limit: 8, sort: { _createdAt: ASC }) {
    name
    slug {
      current
    }
  }
  blogAuthors: allBlogEntries {
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
  }
  academyAuthors: allCuriosityEntries {
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
  }
  global: Global(id: "global") {
    footer_OfficeCity
    footer_OfficeStreet
    footer_ContactName
    footer_ContactTel
    footer_ContactEmail
    footer_LegalLinks {
      text
      href
    }
    footer_Socials {
      text
      href
    }
  }
  `);
  return data;
};

const RootLayout = async ({ children }) => {
  let {
    caseStudies,
    team,
    blogEntries,
    blogCategories,
    curiosityEntries,
    curiosityCategories,
    blogAuthors,
    academyAuthors,
    global,
  } = await query();

  blogAuthors = uniqueAuthors(blogAuthors);
  academyAuthors = uniqueAuthors(academyAuthors);
  handleDataChangesForComponents(caseStudies, team, blogEntries, blogAuthors, curiosityEntries, academyAuthors);
  
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav
          caseStudies={caseStudies}
          team={team}
          blogEntries={blogEntries}
          blogCategories={blogCategories}
          curiosityEntries={curiosityEntries}
          curiosityCategories={curiosityCategories}
          blogAuthors={blogAuthors}
          academyAuthors={academyAuthors}
        />
        <main id="main">{children}</main>
        <Footer
          caseStudies={caseStudies}
          team={team}
          blogEntries={blogEntries}
          global={global}
        />
      </body>
    </html>
  );
};
export default RootLayout;