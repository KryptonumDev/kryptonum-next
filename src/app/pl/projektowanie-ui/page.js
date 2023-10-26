import CentralizedHeading from "@/app/components/molecules/CentralizedHeading";
import FullWidthImageComponent from "@/app/components/sections/FullWidthImageComponent";
import Hero from "@/app/components/sections/Hero";
import TextSection from "@/app/components/sections/TextSection";
import VerticalCtaWithImage from "@/app/components/sections/VerticalCtaWithImage";

export default function UiDesignPage() {
	return (
		<>
			<Hero data={heroData} />
			<TextSection data={professionalSiteData} />
			<CentralizedHeading data={headingData} />
      <VerticalCtaWithImage data={jarData}/>
      <FullWidthImageComponent image={uiPhoto}/>
      <FullWidthImageComponent image={phones}/>
      <TextSection data={kryptonumPractices}/>
		</>
	);
}

const heroData = {
	heading: "**Projektowanie UI** – poznaj ładniejszą siostrę UX",
	img: {
		asset: {
			altText: "ASDASDasd",
			url: "/UiHero.png",
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
	heading: "Chcesz **cieszyć oczy** ładną stroną internetową czy **napędzać biznes** interfejsem zaprojektowanym według najlepszych zasad UI?",
	subheading: "Do it like a boss!",
	type: "h4",
  decoration: false,
};

const jarData = {
	cta : {
		text: "Umów darmową konsultację!",
		textMobile:"umów konsultacje!",
		theme:"primary",
	},
	heading: "Potrzebujesz projektu, który wie, **jak zarabiać**?",
	img: {
		asset: {
			altText: "asdasd",
			url: "/sloig 1.svg",
			metadata: {
				dimensions: {
					height: 2048,
					width: 2048,
				}
			}
		}
	}
}

const uiPhoto = {
	asset: {
		altText: "asdasdsadsadasd",
		url: "/UiPhoto.jpg",
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
		url: "/Phones.png",
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