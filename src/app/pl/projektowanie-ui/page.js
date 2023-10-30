import fetchData from "@/utils/fetchData";
import CentralizedHeading from "@/app/components/molecules/CentralizedHeading";
import FullWidthImageComponent from "@/app/components/sections/FullWidthImageComponent";
import Hero from "@/app/components/sections/Hero";
import TextSection from "@/app/components/sections/TextSection";
import CtaWithVerticalImage from "@/app/components/sections/CtaWithVerticalImage";
import Team from "@/app/components/sections/Team";
import Testimonials from "@/app/components/sections/Testimonials";
import styles from "./styles.module.scss";
import TilesComponentWithHeading from "@/app/components/sections/TilesComponentWithHeading";

export default async function UiDesignPage() {
	const {
		page: { team_Cta, team_Heading, team_Text },
		testimonials,
	} = await query();
	return (
		<>
			<Hero data={heroData} />
			<TextSection data={professionalSiteData} />
			<CentralizedHeading data={headingData} />
			<CtaWithVerticalImage data={jarData} />
			<TilesComponentWithHeading data={tilesComponentWithHeadingData} additionalStyles={styles} />
			<FullWidthImageComponent image={uiPhoto} additionalStyles={styles}/>
			<FullWidthImageComponent image={phones} />
			<TextSection data={kryptonumPractices} />
			<CtaWithVerticalImage data={trophyData} />
			<TextSection data={uiDesignShell} />
			<CtaWithVerticalImage data={phoneData} />
			<Team heading={team_Heading} paragraph={team_Text} cta={team_Cta} />
			<Testimonials testimonials={testimonials} />
		</>
	);
}

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
	subheading: "Do it like a boss!",
	type: "h4",
	decoration: false,
};

const jarData = {
	cta: {
		text: "Umów darmową konsultację!",
		textMobile: "umów konsultacje!",
		theme: "primary",
	},
	heading: "Potrzebujesz projektu, który wie, **jak zarabiać**?",
	img: {
		asset: {
			altText: "asdasd",
			url: "/Sloig 1.webp",
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
		textMobile: "umów konsultacje!",
		theme: "primary",
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
