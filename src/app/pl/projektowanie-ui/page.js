import CentralizedHeadingSection from "@/app/components/sections/CentralizedHeadingSection";
import CtaWithVerticalImage from "@/app/components/sections/CtaWithVerticalImage";
import FullWidthImageComponent from "@/app/components/sections/FullWidthImageComponent";
import Hero from "@/app/components/sections/Hero";
import IconTitleDescriptionListSection from "@/app/components/sections/IconTitleDescriptionListSection";
import Team from "@/app/components/sections/Team";
import Testimonials from "@/app/components/sections/Testimonials";
import TextSection from "@/app/components/sections/TextSection";
import TilesComponentWithHeading from "@/app/components/sections/TilesComponentWithHeading";
import fetchData from "@/utils/fetchData";
import styles from "./styles.module.scss";
import CaseStudies from "@/app/components/sections/CaseStudies";
import Process from "@/app/components/sections/Process";

export default async function UiDesignPage() {
	const {
		page: { team_Cta, team_Heading, team_Text },
		testimonials,
	} = await query();
	return (
		<>
			<Hero data={heroData} />
			<TextSection data={professionalSiteData} />
			<CentralizedHeadingSection data={headingData} decoration={false}/>
			<CtaWithVerticalImage data={jarData} />
			<TilesComponentWithHeading data={tilesComponentWithHeadingData} additionalStyles={styles} />
			<FullWidthImageComponent image={uiPhoto} additionalStyles={styles} />
			<TextSection data={goodUiDesignData} />
			<IconTitleDescriptionListSection data={iconTitleDescriptionListData} />
			<FullWidthImageComponent image={phones} />
			<TextSection data={kryptonumPractices} additionalStyles={styles} />
			<CtaWithVerticalImage data={trophyData} />
			<Process data={processData}/>
			<TextSection data={uiDesignShell} />
			<CentralizedHeadingSection data={centralizedHeadingSectionData}/>
			<CaseStudies cta={caseStudiesCta}/>
			<CtaWithVerticalImage data={phoneData} />
			<Team heading={team_Heading} paragraph={team_Text} cta={team_Cta} />
			<Testimonials testimonials={testimonials} />
		</>
	);
}

const processData= {
	blocks: [
		{
			title:"Zasada **estetyki**",
			description: "To co ładniejsze, jest postrzegane jako **bardziej użyteczne**. Badania pokazują, że chętniej wypłacimy gotówkę z ładnego bankomatu, a w okienku na poczcie podejdziemy do hmm.. przyjaźniej wyglądającej pani. Wygląd strony internetowej działa dokładnie tak samo!"
		},
		{
			title:"Efekt **pozycji szeregowej**",
			description: "Nie da rady zapamiętać długiego zbioru choćby najciekawszych informacji, kuszących ofert czy przepisów na wege burgery. Największą szansę na zapisanie się w pamięci odbiorcy ma **pierwszy i ostatni** element listy. Wiemy, jak wykorzystać to na stronie!"
		},
		{
			title:"Efekt **von Restorff**",
			description: "Zasada niezwykła w swej prostocie i jakże skuteczna. Jak skierować uwagę odbiorcy na pożądany element? **Wyróżnić go** na tle innych. Tylko tyle i aż tyle. Tu można poszaleć z formą, kolorem, fontem czy proporcjami."
		},
		{
			title:"Prawo **Jakoba**",
			description: "Wyróżnij się albo zgiń? Pewnie, ale bez przesady. Niejaki Jakob Nielsen wykazał, że **warto używać znanych wzorców** projektowych. Twoi odbiorcy pewnie spędzają full czasu na innych stronach. Podsuńmy im rozwiązanie, które z łatwością ogarną."
		},
	]
}

const centralizedHeadingSectionData = {
	heading: "Dobry UI nie istnieje bez **porządnie zaprojektowanego UX**",
}

const caseStudiesCta = {
	text: "Zobacz projektowanie UX w naszym wydaniu",
	theme: "secondary",
	href: "/pl/portfolio"

}

const iconTitleDescriptionListData = {
	blocks: [
		{
			header: "/01",
			title: "Charakterystyczna marka",
			description:
				"Mieć stronę internetową, której nie da się pomylić z żadną inną? Załatwione. Sklep internetowy, o którym klienci będą opowiadać znajomym? Robi się. Dowieziemy projekt UI, który sprawi, że klienci Cię zapamiętają i polubią.",
		},
		{
			header: "/02",
			title: "Niezapomniane wrażenia",
			description:
				"Masz tylko kilka sekund, aby zrobić dobre wrażenie. Głupio byłoby je zmarnować, pop-upem zasłaniającym pół ekranu… UI design stoi na straży tego, by klient nie uciekł z Twojej strony, tylko swobodnie żeglował po niej prosto do celu.",
		},
		{
			header: "/03",
			title: "Zrealizowane cele",
			description:
				"Dobre wrażenie się opłaca. Kozacki projekt UI przekłada się na pobrane PDF-y, wypełnione formularze, no i szalone zakupy w sklepie internetowym, nie tylko  w Black Friday. Przedsiębiorco, pamiętaj – UI design to inwestycja!",
		}
	],
};

const heroData = {
	heading: "**Projektowanie UI** – poznaj ładniejszą siostrę UX",
	img: {
		asset: {
			altText: "ASDASDasd",
			url: "/UiHero.webp",
			metadata: {
				dimensions: {
					height: 1152,
					width: 1929,
				},
			},
		},
	},
	breadcrumbs: [
		{
			name: "Projektowanie UI",
			link: "/projektowanie-ui",
		},
	],
};
const goodUiDesignData = {
	heading: "Jak **dobry UI design** zaopiekował się biznesem…",
	blocks: [
		{
			description:
				"To może być Twoja bajka. Bo kiedy roztropny, twardo stąpający po ziemi UX, spotka na swej drodze wyrafinowany UI z charakterem, biznesowy [ happy end ] jest nieunikniony.",
		},
	],
};

const professionalSiteData = {
	heading: "**Profesjonalna strona internetowa** musi się podobać",
	blocks: [
		{
			description:
				"Technologia to podstawa, ale **dobry design** robi równie ważną robotę. A my wiemy, jak wycisnąć z niego maks możliwości.",
			title: "Dlaczego?",
		},
		{
			description:
				"Tu wychodzimy poza przestawianie pikseli, by było ładnie. W strefie UI spotykają się strategia marki, przemyślany UX i charakterny design po to, by **przynosić konkretne efekty**.",
		},
	],
};

const headingData = {
	heading:
		"Chcesz **cieszyć oczy** ładną stroną internetową czy **napędzać biznes** interfejsem zaprojektowanym według najlepszych zasad UI?",
	subheading: "Do it like a boss!"
};

const jarData = {
	cta: {
		text: "Umów darmową konsultację!",
		textMobile: "Umów konsultację!",
		theme: "primary",
		href: "/pl/kontakt"
	},
	heading: "Potrzebujesz projektu, który wie, **jak zarabiać**?",
	img: {
		asset: {
			altText: "asdasd",
			url: "/JarFilledWithCoins.webp",
			metadata: {
				dimensions: {
					height: 2048,
					width: 2048,
				},
			},
		},
	},
};

const tilesComponentWithHeadingData = {
	heading: "W UI design **każdej stronie do twarzy**",
	tiles: {
		heading: "**Projektujemy interfejsy** dla:",
		list: [
			{
				title: "/01",
				description: "Stron internetowych",
			},
			{
				title: "/02",
				description: "Landing page",
			},
			{
				title: "/03",
				description: "Platform kursowych",
			},
			{
				title: "/04",
				description: "Aplikacji biznesowych",
			},
			{
				title: "/05",
				description: "Sklepów internetowych",
			},
		],
	},
};

const uiPhoto = {
	asset: {
		altText: "asdasdsadsadasd",
		url: "/UiPhoto.webp",
		metadata: {
			dimensions: {
				width: 3840,
				height: 2160,
			},
		},
	},
};

const phones = {
	asset: {
		altText: "asdasdsadsadasd",
		url: "/Phones.webp",
		metadata: {
			dimensions: {
				width: 3840,
				height: 2160,
			},
		},
	},
};

const kryptonumPractices = {
	heading: "**Od wrażenia do wdrożenia,** czyli jak projektujemy UI w Kryptonum",
	blocks: [
		{
			description:
				"W projektowaniu UI idziemy na całość! iUI design is in da house! Od strategii, przez projektowanie UX i UI design, po wdrożenie – nasz team opiekuje się każdym etapem. Graficy, programiści i developerzy rozumieją się lepiej niż niejedna rodzina.",
		},
		{
			description:
				"No i są elastyczni – jeśli zechcesz przechwycić projekt UI i wdrożyć go z własnym zespołem, nie będziemy stawać na drodze. A nawet więcej – możesz liczyć na solidne wsparcie naszych designerów.",
		},
	],
};

const trophyData = {
	cta: {
		text: "Pogadajmy!",
		theme: "primary",
		href:"/pl/kontakt"
	},
	heading: "Potrzebujesz projektu, który wie, **jak zarabiać**?",
	img: {
		asset: {
			altText: "asdasd",
			url: "/Trophy.webp",
			metadata: {
				dimensions: {
					height: 2048,
					width: 2048,
				},
			},
		},
	},
};
const uiDesignShell = {
	heading: "Zajrzyj pod powierzchnię **UI design**",
	blocks: [
		{
			description:
				"Pamiętasz, jak mówiliśmy o tym, że w projektowaniu nie ma przypadków? Dobry UI design wie, że co do zasady ludzki mózg nie lubi się męczyć.",
		},
	],
};
const phoneData = {
	cta: {
		text: "Umów darmową konsultację!",
		textMobile: "Umów konsultację!",
		theme: "primary",
		href: "/pl/kontakt"
	},
	heading: "Czujesz, że potrzebujesz **świetnego UI designu**?",
	img: {
		asset: {
			altText: "asdasd",
			url: "/Phone.webp",
			metadata: {
				dimensions: {
					height: 2048,
					width: 2048,
				},
			},
		},
	},
};

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
		page: Homepage(id: "homepage") {
			# Team
			team_Heading
			team_Text
			team_Cta {
				theme
				text
				href
			}
		}
		testimonials: allTestimonials(limit: 3, sort: {_createdAt:ASC}) {
			name
			text
			cta {
				theme
				text
				href
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
		`);
	return data;
};
