import fetchData from "@/utils/fetchData";
import SEO from "@/components/global/Seo";
import Hero from "@/app/components/sections/UxDesign/Hero";
import styles from "./styles.module.scss";
import ImageHeadingWrappers from "@/app/components/sections//UxDesign/ImageHeadingWrappers";
import WatchComponent from "@/app/components/sections/UxDesign/WatchComponent";
import WcagGuidelines from "@/app/components/sections/UxDesign/WcagGuidelines";
import PlaneComponent from "@/app/components/sections/UxDesign/PlaneComponent";
import ImageComponent from "@/app/components/sections/UxDesign/Photo";
import CardWithOverflowIcon from "@/app/components/sections/UxDesign/CardWithOverflowIcon";
import WcagExplanation from "@/app/components/sections/UxDesign/WcagExplanation";
import ChairComponent from "@/app/components/sections/UxDesign/ChairComponent";
import InvestInSite from "@/app/components/sections/UxDesign/InvestInSite";
import SustainableDevelopment from "@/app/components/sections/UxDesign/SustainableDevelopment";

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
	blocks: [
		{
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
			title: "Czy Twój biznes potrzebuje strony WCAG?",
			description:
				"Podmioty publiczne nie mają wyboru – ich strony muszą spełniać zalecenia WCAG, inaczej grożą im konsekwencje. \n\n Tylko czemu postrzegać WCAG jak zło konieczne, zamiast wykorzystać szansę, jaką daje użytkownikom i biznesom na jeszcze lepsze strony internetowe?",
		},
	],
};
const wcagData = {
	blocks: [
		{
			icon: {
				asset: {
					altText: "Aasdasd",
					url: "/infoIcon.svg",
					metadata: {
						dimensions: {
							height: 300,
							width: 300,
						},
					},
				},
			},
			description:
				"Kolory wyraźne dla każdego – zapomnij o słabo widocznych linkach, napisach zlewających się z tłem czy rozpikselowanych ikonach",
		},
		{
			icon: {
				asset: {
					altText: "Aasdasd",
					url: "/infoIcon.svg",
					metadata: {
						dimensions: {
							height: 300,
							width: 300,
						},
					},
				},
			},
			description:
				"Jasno opisane linki i przyciski – poruszaj się po stronie bez potrzeby zgadywania „co dalej?",
		},
		{
			icon: {
				asset: {
					altText: "Aasdasd",
					url: "/infoIcon.svg",
					metadata: {
						dimensions: {
							height: 300,
							width: 300,
						},
					},
				},
			},
			description:
				"Szybki powrót na start – przenieś się na stronę główną jednym kliknięciem, bez naparzania tabulatorem jakieś, hmm... 40 razy",
		},
		{
			icon: {
				asset: {
					altText: "Aasdasd",
					url: "/infoIcon.svg",
					metadata: {
						dimensions: {
							height: 300,
							width: 300,
						},
					},
				},
			},
			description:
				"Oglądanie bez przeszkód – zawsze i wszędzie, na desktopie i na komórce, przy powiększeniu strony o 200%",
		},
	],
};
const headingData = {
	heading: "Jak tu nie lubić WCAG?",
	subheading: "Tylko spójrz",
	type: "h4",
};
const sustainableDevelopmentData = {
	heading: "Strony internetowe w duchu zrównoważonego rozwoju",
	blocks: [
		{
			description: "Niepokojąco ciekawych",
			title:
				"Jesteś jedną z tych osób, które nie biorą reklamówek w marketach  i martwią się o topniejące lodowce? Mamy dla Ciebie garść newsów.",
		},
	],
};

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
			<InvestInSite data={data} />
			<CardWithOverflowIcon cardData={cardData}></CardWithOverflowIcon>
			<WcagExplanation wcagData={wcagData} headingData={headingData}></WcagExplanation>
			<ChairComponent />
			<SustainableDevelopment sustainableDevelopmentData={sustainableDevelopmentData} />
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
