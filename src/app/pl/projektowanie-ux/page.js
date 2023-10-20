import fetchData from "@/utils/fetchData";
import SEO from "@/components/global/Seo";
import Hero from "@/app/components/sections/UxDesign/Hero";
import UxExplanation from "@/app/components/sections/UxDesign/Plane";
import styles from "./styles.module.scss";
import ImageHeadingWrappers from "@/app/components/sections//UxDesign/ImageHeadingWrappers";
import Watch from "@/app/components/sections/UxDesign/Watch";

export async function generateMetadata() {
	const {
		page: { seo },
	} = await getUxDesignPageData();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "",
	});
}

export default function UxDesignPage() {
	return (
		<main id="main" className={styles.main}>
			<Hero/>
			<UxExplanation/>
			<ImageHeadingWrappers/>
			<Watch/>
		</main>
	);
}

//wait for new database data
const getUxDesignPageData = async () => {
	const {
		body: { data },
	} = await fetchData(`
  page: Homepage(id: "homepage") {
  # SEO
  seo {
    title
    description
  }
}
  `);
	return data;
};
