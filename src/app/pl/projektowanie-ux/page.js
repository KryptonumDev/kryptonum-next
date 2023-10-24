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
import ConsultationCta from "@/app/components/sections/UxDesign/ConsultationCta";
import DesignSteps from "@/app/components/sections/UxDesign/DesignSteps";

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

const animatedCardGridData = {
	blocks: [
		{
			description:
				"przemysł cyfrowy generuje więcej gazów cieplarnianych niż przemysł lotniczy, czyli mniej więcej 2-5% globalnej emisji.",
		},
		{
			description:
				"gdyby internet był państwem, zająłby 4 miejsce na liście państw generujących najwięcej zanieczyszczeń.",
		},
		{
			description: "Czy mamy w tym swój udział? Tak, ale możemy go znacznie zmniejszyć!",
		},
		{
			description:
				"Dążymy do tego, by tworzyć strony internetowe w duchu zrównoważonego rozwoju – dobre i dla ludzi, i dla planety. Wchodzisz w to?",
		},
	],
};

const designStepsData = {
	heading: "Design z szacunkiem dla odbiorców i środowiska",
	blocks: [
		{
			icon: {
				asset: {
					altText: "Aasdasd",
					url: "/quotaIcon.svg",
					metadata: {
						dimensions: {
							height: 300,
							width: 300,
						},
					},
				},
			},
			title: "Copy",
			description: "Napiszemy wartościowe treści, dzięki którym Twoi odbiorcy szybko znajdą to, czego potrzebują, redukując czas spędzony w internecie."
		},
		{
			icon: {
				asset: {
					altText: "Aasdasd",
					url: "/personIcon.svg",
					metadata: {
						dimensions: {
							height: 300,
							width: 300,
						},
					},
				},
			},
			title: "UX",
			description: "Projektujemy tak, by użytkownicy przemieszczali się po stronach szybko i gładko, nie nadużywając cierpliwości ani energii elektrycznej."
		},
		{
			icon: {
				asset: {
					altText: "Aasdasd",
					url: "/photoIcon.svg",
					metadata: {
						dimensions: {
							height: 300,
							width: 300,
						},
					},
				},
			},
			title: "Foto i wideo",
			description: "Czas, by strony przeładowane ciężkimi zdjęciami i filmami wyginęły jak dinozaury. Optymalizacja mediów to nasz konik!"
		},
		{
			icon: {
				asset: {
					altText: "Aasdasd",
					url: "/textIcon.svg",
					metadata: {
						dimensions: {
							height: 300,
							width: 300,
						},
					},
				},
			},
			title: "Fonty",
			description: "Im prościej, tym lepiej i tego się trzymamy, dobierając fonty. Mniej wariacji w imię lekkości. No i ostrożnie z boldem, ma dużo kalorii."
		},
	]
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
		<>
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
			<SustainableDevelopment
				sustainableDevelopmentData={sustainableDevelopmentData}
				animatedCardGridData={animatedCardGridData}
			/>
			<ConsultationCta/>
			<DesignSteps data={designStepsData}/>
		</>
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
