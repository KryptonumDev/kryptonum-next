import "../styles/global.scss";
import localFont from "next/font/local";
import fetchData from "@/utils/fetchData";
import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";
import { formatDateToPolishLocale } from "@/utils/functions";

const font = localFont({ src: "../resources/fonts/Poppins-Light.woff2" });

const changeBlogEntriesLocale = (blogEntries) => {
  blogEntries.map((entry) => {
    entry._createdAt = formatDateToPolishLocale(entry._createdAt);
  });
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

  changeBlogEntriesLocale(blogEntries);

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
        {children}
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
