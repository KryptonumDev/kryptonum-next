import fetchData from "@/utils/fetchData";
import SEO from "@/components/global/Seo";
import Hero from "@/app/components/sections/UxDesign/Hero";
import styles from "./styles.module.scss";
import ImageHeadingWrappers from "@/app/components/sections//UxDesign/ImageHeadingWrappers";
import WatchComponent from "@/app/components/sections/UxDesign/WatchComponent";
import WcagGuidelines from "@/app/components/sections/UxDesign/WcagGuidelines";
import PlaneComponent from "@/app/components/sections/UxDesign/PlaneComponent";
import ImageComponent from "@/app/components/sections/UxDesign/Photo";
import TextComponent from "@/app/components/sections/TextComponent";
import CardWithOverflowIcon from "@/app/components/sections/CardWithOverflowIcon";

const blocks = [
	{
		description:
			"WCAG to wytyczne dotyczące dostępności stron internetowych. Dzięki nim Twoja strona będzie przyjazna dla osób z niepełnosprawnościami wzroku, słuchu, ruchu i z zaburzeniami poznawczymi, czyli dla jakichś 20% użytkowników internetu.",
	},
	{
		title: "Dużo?",
		description: "Dużo! Jest dla kogo się starać.",
	},
];

const data = {
	heading: "Zainwestuj w stronę internetową dostępną dla wszystkich",
	blocks,
};

const cardData = {
	icon: {
		asset: {
			altText: "Aasdasd",
			url: "/question_icon.svg",
			metadata: {
				dimensions: {
					height: 300,
					width: 300,
				},
			},
		},
	},
	heading: "Czy Twój biznes potrzebuje strony WCAG?",
	description: "Podmioty publiczne nie mają wyboru – ich strony muszą spełniać zalecenia WCAG, inaczej grożą im konsekwencje. \n\n Tylko czemu postrzegać WCAG jak zło konieczne, zamiast wykorzystać szansę, jaką daje użytkownikom i biznesom na jeszcze lepsze strony internetowe?"
}

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
					width: 3840,
					height: 2160,
				},
			},
		},
	};

	return (
		<main id="main" className={styles.main}>
			<Hero />
			<PlaneComponent />
			<ImageHeadingWrappers />
			<WatchComponent />
			<WcagGuidelines />
			<ImageComponent image={image} />
			<TextComponent data={data}></TextComponent>
			<CardWithOverflowIcon data={cardData}></CardWithOverflowIcon>
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
