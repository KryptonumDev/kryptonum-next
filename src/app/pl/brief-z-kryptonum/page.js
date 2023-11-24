import fetchData from "@/utils/fetchData";
import SEO from "@/app/components/global/Seo";
import Brief from "@/app/components/organisms/Brief";

export default async function BriefPage() {
  const data = await query();
  return(
    <Brief data={data}/>
  )
}

export async function generateMetadata() {
	const {
		page: { seo },
	} = await query();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "/pl/brief-z-kryptonum",
	});
}

const query = async() => {
  const {
    body: { data },
  } = await fetchData(`
  page : Brief (id:"brief") {
    hero_Heading
    hero_Paragraph
    hero_Paragraph2
    hero_ScrollText
    hero_Subheading
    seo {
      title
      description
    }
  }
  `);
  return data;
}