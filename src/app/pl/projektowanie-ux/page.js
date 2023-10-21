import fetchData from "@/utils/fetchData";
import SEO from "@/components/global/Seo";
import Hero from "@/app/components/sections/UxDesign/Hero";
import styles from "./styles.module.scss";
import ImageHeadingWrappers from "@/app/components/sections//UxDesign/ImageHeadingWrappers";
import WatchComponent from "@/app/components/sections/UxDesign/WatchComponent";
import WcagGuidelines from "@/app/components/sections/UxDesign/WcagGuidelines";
import PlaneComponent from "@/app/components/sections/UxDesign/PlaneComponent";
import ImageComponent from "@/app/components/sections/UxDesign/Photo";

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

	const image = {
		asset: {
			altText: "asdasdsadsadasd",
			url: "/Photo1.jpg",
			metadata: {
				dimensions: {
					width:3840,
					height: 2160
				}
			}
		}
	}

	return (
		<main id="main" className={styles.main}>
			<Hero/>
			<PlaneComponent/>
			<ImageHeadingWrappers/>
			<WatchComponent/>
			<WcagGuidelines/>
			<ImageComponent image={image}/>
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
