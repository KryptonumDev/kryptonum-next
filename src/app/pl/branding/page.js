"use server";

import IconTitleDescriptionListSection from "@/app/components/sections/IconTitleDescriptionListSection";
import CentralizedHeadingSection from "@/app/components/sections/CentralizedHeadingSection";
import CtaSection from "@/app/components/sections/CtaSection";
import Hero from "@/app/components/sections/Hero";
import TextSection from "@/app/components/sections/TextSection";
import fetchData from "@/utils/fetchData";
import Testimonials from "@/app/components/sections/Testimonials";
import Team from "@/app/components/sections/Team";
import TilesWithOverflowIcon from "@/app/components/sections/TilesWithOverflowIcon";
import IconTitleDescriptionGrid from "@/app/components/sections/IconTitleDescriptionGrid";

export default async function BraindingPage() {
	const {
		page: { team_Cta, team_Heading, team_Text },
		testimonials,
	} = await query();
	return (
		<>
			<Hero data={heroData} />
			<TextSection data={brandingExplanation} />
			<CtaSection data={brandImageryData} />
			<TilesWithOverflowIcon data={tilesWithOverflowIconData} />
			<TextSection data={accessibilityData} />
			<IconTitleDescriptionGrid data={iconTitleDescriptionGridData} />
			<CentralizedHeadingSection data={centralizedHeadingData} decoration={false} />
			<IconTitleDescriptionGrid data={iconTitleDescriptionGridData2} />
			<CentralizedHeadingSection data={centralizedHeadingData2} decoration={false} />
			<TextSection data={brandingCipher} />
			<IconTitleDescriptionListSection data={iconTitleDescriptionListData} />
			<CtaSection data={brandingProcess} />
			<Team heading={team_Heading} paragraph={team_Text} cta={team_Cta} />
			<Testimonials testimonials={testimonials} />
		</>
	);
}

const iconTitleDescriptionGridData = {
	grid: [
		{
			icon: {
				asset: {
					altText: "asdasd",
					url: "/flag-icon.svg",
					metadata: {
						dimensions: {
							height: 100,
							width: 100,
						},
					},
				},
			},
			title: "**Strategia**",
			blocks: [
				{
					description:
						"Za odpowiedzią na niepozorne pytanie „o czym jest Twoja marka” kryje się solidna praca zespołowa. Twój udział zaczyna się od wypełnienia briefu kreatywnego, który wspólnie przepracujemy na warsztatach.",
				},
				{
					description:
						"W efekcie kreatywnych rozkminek i analitycznej pracy, wiemy, jaką osobowość ma Twoja marka, jak chce się zaprezentować światu i jakie emocje wzbudzać. Odkryliśmy potencjał, który pozwoli jej wyróżnić się na tle konkurencji, i nie zawahamy się go użyć w kolejnych krokach procesu.",
				},
			],
		},
		{
			icon: {
				asset: {
					altText: "asdasd",
					url: "/eye-icon.svg",
					metadata: {
						dimensions: {
							height: 100,
							width: 100,
						},
					},
				},
			},
			title: "**Identyfikacja** wizualna",
			blocks: [
				{
					description:
						"Unikalną wartość Twojej marki należy ubrać w design, który pozwoli jej być sobą w całej okazałości. To moment, w którym projektujemy logo i identyfikację wizualną z dbałością o każdy szczegół. ",
				},
				{
					description:
						"Bo branding tkwi w szczegółach: brand hero do kochania, ilustracje opowiadające historię Twojej marki, typografia, a nawet kolor nagłówków – nasi designerzy mają oko na wszystko. A Ty trzymasz rękę na pulsie i w czasie warsztatów kreatywnych wybierasz pomysły, z którymi najbardziej Ci po drodze.",
				},
			],
		},
	],
};
const iconTitleDescriptionGridData2 = {
	grid: [
		{
			icon: {
				asset: {
					altText: "asdasd",
					url: "/desktop-icon.svg",
					metadata: {
						dimensions: {
							height: 100,
							width: 100,
						},
					},
				},
			},
			title: "**Strona internetowa**",
			blocks: [
				{
					description:
						"Strona internetowa, aplikacja webowa czy sklep online to kolejny milowy krok w procesie brandingu. Tutaj stawką jest uwaga i zaangażowanie odbiorców, które mierzymy serduszkami konwersjami.",
				},
				{
					description:
						"Starannie ukształtowana osobowość Twojej marki zasługuje na stronę internetową najwyższej próby. Nasi graficy i programiści pokazują, na co ich stać, dając upust kreatywności podszytej najlepszymi praktykami UX i UI.",
				},
				{
					description:
					"Na tym etapie jest co robić! Makiety, projekt home page dla wersji desktop, tablet i mobile, design pozostałych stron – wymieniać dalej? Zresztą nic Cię tu nie ominie, bo zatwierdzasz kolejne etapy projektowania."
				}
			],
		},
		{
			icon: {
				asset: {
					altText: "asdasd",
					url: "/implement-icon.svg",
					metadata: {
						dimensions: {
							height: 100,
							width: 100,
						},
					},
				},
			},
			title: "**Implementacja**",
			blocks: [
				{
					description:
						"Branding nie lubi bezczynności. Pozwólmy mu odpalić wrotki. Kanały w social mediach, dokumentacja, która trafia w ręce klientów, materiały reklamowe i wszystkie kroki prowadzące do realizacji strategii biznesowej – o to też trzeba zadbać.",
				},
				{
					description:
						"Przygotujemy dla Ciebie rekomendacje wdrożeniowe i zaprzęgniemy do działania wszystkie nasze skille, by Twój branding rozwinął skrzydła na maxa.",
				},
			],
		},
	],
};

const tilesWithOverflowIconData = {
	heading: "**Branding robi robotę** na każdym etapie życia marki",
	blocks: [
		{
			description:
				"Chcesz przekuć pomysł na biznes w wyrazistą markę? Inwestując w branding, zapewnisz jej najlepszy start w przyszłość. Przemyślane założenia, unikatowa osobowość i atrakcyjny wygląd przyniosą wymarzone wyniki.",
			title: "**Branding, gdy marka przychodzi na świat**",
			overflowContent: "**01**",
		},
		{
			description:
				"W życiu marki nadchodzi czas na remont – odświeżenie wizerunku, repozycjonowanie się na rynku albo wyjście do świata z nową ofertą. Rebranding pomoże Ci zaistnieć na nowo w przemyślany sposób.",
			title: "**Re-branding, gdy marka potrzebuje świeżości**",
			overflowContent: "**02**",
		},
		{
			description:
				"Zarządzanie portfelem marek to wyższa szkoła jazdy. Jak sprawić, by wszystkie marki wizerunkowo współpracowały ze sobą? Odpowiedzią jest co-branding, dzięki któremu zachowasz spójność tam, gdzie łatwo wkrada się chaos.",
			title: "**Co-branding, gdy marka jest towarzyska**",
			overflowContent: "**03**",
		},
	],
};

const brandingProcess = {
	cta: {
		text: "Umów darmową konsultację!",
		textMobile: "Umów konsultację!",
		theme: "primary",
		href: "/pl/kontakt",
	},
	heading: "Skusisz się na **proces brandingowy** w naszym towarzystwie?",
	img: {
		asset: {
			altText: "asdasd",
			url: "/cupWithTea.webp",
			metadata: {
				dimensions: {
					height: 2048,
					width: 2048,
				},
			},
		},
	},
};

const brandImageryData = {
	cta: {
		text: "Umów darmową konsultację!",
		textMobile: "Umów konsultację!",
		theme: "primary",
		href: "/pl/kontakt",
	},
	heading: "Chcesz popracować nad **wizerunkiem swojej marki**?",
	img: {
		asset: {
			altText: "asdasd",
			url: "/oldSchoolMirror.webp",
			metadata: {
				dimensions: {
					height: 2048,
					width: 2048,
				},
			},
		},
	},
};
const heroData = {
	heading: "Branding **wydobywa znaczenie** marki",
	sideImg: {
		asset: {
			altText: "ASDASDasd",
			url: "/brandingHero.webp",
			metadata: {
				dimensions: {
					height: 1152,
					width: 1929,
				},
			},
		},
	},
};

const brandingExplanation = {
	heading: "Marka, do której **wzdychają klienci**, nie jest dziełem przypadku",
	blocks: [
		{
			description:
				"Jeśli chcesz mocno zaznaczyć swoją obecność na rynku, za **atrakcyjnym obliczem** Twojej marki, muszą stać: osobowość, wartości i focus na celach biznesowych.",
		},
		{
			description:
				"Proces brandingowy **pozwoli Ci zabłysnąć** przed światem marką pełną znaczenia.",
		},
	],
};

const accessibilityData = {
	heading: "Identyfikacja wizualna **brandingu nie czyni**",
	blocks: [
		{
			description:
				"Logo i grafiki są – nie bójmy się słowa – sexy. Ale żeby faktycznie **działały na zmysły odbiorców** , trzeba odrobić brandingową pracę domową. W tych lekcjach z miłą chęcią Ci pomożemy!",
		},
		{
			description: "Zobacz, jak wygląda nasz proces brandingowy.",
		},
	],
};

const centralizedHeadingData = {
	heading: "**Zadbamy o każdy aspekt** identyfikacji wizualnej Twojej marki.",
	cta: {
		text: "Zobacz, jak porjektujemy identyfikację wizualną",
		theme: "secondary",
		href: "/pl/portfolio",
	},
};

const centralizedHeadingData2 = {
	heading: "A tak w ogóle to **chodź na stronę**",
	cta: {
		text: "Sprawdź, jak tworzymy strony internetowe",
		theme: "secondary",
		href: "/pl/portfolio",
	},
};

const brandingCipher = {
	heading: "Szyfr do dobrego brandingu? **Znamy go!**",
	blocks: [
		{
			description:
				"Pdund, gr mxnčš łąćgććńą ołńkčćń, ołh młń lććgćć gśńńkććńkx ołhć mmłčćx ołńhścćčćńć śx vręłfęćłććgććń vć qxrććfnćć cfxćńńłćććśx: óvșćńćć, ùćšńźlć i jğćlćć pq fxòńc cjòšxćńćlnć.",
		},
		{
			description: "Pozdro dla kumatych ;)",
		},
	],
};

const iconTitleDescriptionListData = {
	blocks: [
		{
			header: "/01",
			title: "UVP",
			description:
				"Sedno brandingu? Zdefiniowanie unikalnej wartości oferty, której nie będą się mogli oprzeć klienci. Opracujemy wspólny mianownik wszystkich działań.",
		},
		{
			header: "/02",
			title: "USP",
			description:
				"Dlaczego Ty, a nie konkurencja? Dajmy klientom odpowiedź, wzmacniając Unikalną Propozycję Sprzedaży, wizerunkiem, który wywala z butów.",
		},
		{
			header: "/03",
			title: "KPI",
			description:
				"Branding nie jest sztuką dla sztuki. Starannie zaprojektowana twarz Twojej marki będzie pracować na KPI, czyli kluczowe wskaźniki biznesowe.",
		},
	],
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
