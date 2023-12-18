import fetchData from "@/utils/fetchData";

export const domain = "https://kryptonum.eu";
export const locale = "pl_PL";

const SEO = async ({
  pagination,
  author,
  date,
  title,
  description,
  url,
  ogImage,
  children,
  ...props
}) => {
  const {
    body: {
      data: {
        global: {
          globalSeo: { og_Img },
        },
      },
    },
  } = await getData();

  const seo = {
    title: title || "Kryptonum - Agencja dla tych, którym zależy",
    description: description || "",
    url: url ? url + (pagination ? `/${pagination}` : "") : "",
    ogImage: ogImage || og_Img.asset.url,
  };

  const metadata = {
    robots: {
      index: false,
    },
    metadataBase: new URL(domain),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: seo.title,
      url: seo.url,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: "website",
    },
    ...props,
  };
  return metadata;
};

const getData = async () => {
  return await fetchData(`
		query {
			global: Global(id: "global") {
				globalSeo {
					og_Img {
						asset {
							url
						}
					}
				}
			}
		}
  `);
};

export default SEO;
