<<<<<<< HEAD
import SEO from "@/app/components/global/Seo";
=======
>>>>>>> 2dcc939d18d8753f2c592d978767eb5919fb928a
import Hero from "@/app/components/sections/Hero";
import SimpleCtaSection from "@/app/components/sections/SimpleCtaSection";
import Content from "@/app/components/sections/privacyPolicy/Content";
import KeyElements from "@/app/components/sections/privacyPolicy/KeyElements";
import fetchData from "@/utils/fetchData";

export default async function PrivacyPolicyPage() {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Img,
    keyInfo_Heading,
    keyInfo_List,
    content_Heading,
    contentRaw,
    simpleCtaSection
  }} = await query();

  return (
    <>
      <Hero data={{
        heading: hero_Heading,
        paragraph: hero_Paragraph,
        sideImage: hero_Img
      }}
      isBlogHero={true}
      />
      <KeyElements
        heading={keyInfo_Heading}
        list={keyInfo_List}
      />
      <Content
        heading={content_Heading}
        _rawContent={contentRaw}
      />
      <SimpleCtaSection data={simpleCtaSection} />
    </>
  )
}

export async function generateMetadata() {
	const {
		page: { seo },
	} = await query();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "/pl/polityka-prywatnosci",
	});
}

const query = async () => {
 const {
    body: { data },
  } = await fetchData(`
  query {
    page: PrivacyPolicy(id: "privacyPolicy") {
      # Hero
      hero_Heading
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
      # Content
      keyInfo_Heading
      keyInfo_List
      content_Heading
      contentRaw
      # Simple CTA Section
      simpleCtaSection {
        heading
        cta {
          theme
          href
          text
        }
      }
      # SEO
      seo {
        title
        description
      }
    }
  }
  `
);
return data;
};