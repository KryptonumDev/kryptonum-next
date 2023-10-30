import CardWithOverflowIcon from "@/app/components/sections/CardWithOverflowIcon";
import CentralizedHeadingWithCardGrid from "@/app/components/sections/CentralizedHeadingWithCardGrid";
import ConsultationForm from "@/app/components/sections/ConsultationForm";
import CtaWithVerticalImage from "@/app/components/sections/CtaWithVerticalImage";
import FullWidthImageComponent from "@/app/components/sections/FullWidthImageComponent";
import HeadingWithIconTitleDescriptionList from "@/app/components/sections/HeadingWithIconTitleDescriptionList";
import HeadingWithMaxWidth from "@/app/components/sections/HeadingWithMaxWidth";
import Hero from "@/app/components/sections/Hero";
import HorizontalCtaWithImage from "@/app/components/sections/HorizontalCtaWithImage";
import ImageDisplayedOnTablet from "@/app/components/sections/ImageDisplayedOnTablet";
import Team from "@/app/components/sections/Team";
import Testimonials from "@/app/components/sections/Testimonials";
import TextSection from "@/app/components/sections/TextSection";
import TitleDescriptionImageList from "@/app/components/sections/TitleDescriptionImageList";
import HeadingImageTextList from "@/app/components/sections/UxDesign/HeadingImageTextList";
import SustainableDevelopment from "@/app/components/sections/UxDesign/SustainableDevelopment";
import fetchData from "@/utils/fetchData";

export default async function UxDesignPage() {
	const {
		page: { team_Cta, team_Heading, team_Text },
		testimonials,
	} = await query();
	return (
		<>
			<Hero data={data.heroData} />
			<TextSection data={data.textSectionData} />
			<HorizontalCtaWithImage data={data.planeImageData} />
			<TitleDescriptionImageList data={data.titleDescriptionImageListData} />
			<HeadingImageTextList data={data.headingImageTextListData} />
			<CtaWithVerticalImage data={data.watchImageData3} />
			<TextSection data={data.wcagGuidelines} />
			<FullWidthImageComponent image={data.image} />
			<TextSection data={data.data} />
			<CardWithOverflowIcon cardData={data.cardData} />
			<CentralizedHeadingWithCardGrid cardData={data.wcagData} headingData={data.headingData} />
			<CtaWithVerticalImage data={data.CtaSectionWithImageData1} />
			<SustainableDevelopment
				sustainableDevelopmentData={data.sustainableDevelopmentData}
				animatedCardGridData={data.animatedCardGridData}
			/>
			<ConsultationForm data={data.consultationCtaData} />
			<HeadingWithIconTitleDescriptionList data={data.designStepsData} />
			<ImageDisplayedOnTablet image={data.image2} />
			<HeadingWithIconTitleDescriptionList data={data.jamstackTechnologyData} />
			<HeadingWithMaxWidth data={data.headingWithMaxWidthData} />
			<CtaWithVerticalImage data={data.CtaSectionWithImageData2} />
			<Team heading={team_Heading} paragraph={team_Text} cta={team_Cta} />
			<Testimonials testimonials={testimonials} />
		</>
	);
}

// export async function generateMetadata() {
// 	const {
// 		page: { seo },
// 	} = await getUxDesignPageData();
// 	return SEO({
// 		title: seo?.title,
// 		description: seo?.description,
// 		url: "",
// 	});
// }

// //wait for new database data
// const getUxDesignPageData = async () => {
// 	const {
// 		body: { data },
// 	} = await fetchData(`
//   page: Homepage(id: "homepage") {
//   # SEO
//   seo {
//     title
//     description
//   }
// }
//   `);
// 	return data;
// };
const data = {
	heroData: {
		heading: "**Projektowanie UX**, by klikało się lepiej",
		subheading: "Kompleksowe usługi graficzne i projekowanie.",
		img: {
			asset: {
				altText: "ASDASDasd",
				url: "/UxHero.webp",
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
				name: "Projektowanie UX",
				link: "/projektowanie-ux",
			},
		],
	},

	wcagGuidelines: {
		heading: "**Wytyczne WCAG**, czyli UX na wysoki połysk",
		blocks: [
			{
				description:
					"Czy zdarzyło Ci się widzieć matkę próbującą wciągnąć wózek  z dzieckiem pod wysoki krawężnik? Niezły challenge, prawda? Na stronach internetowych roi się od podobnych przeszkód.",
			},
			{
				description:
					"Jeśli chcesz, by Twoja strona była dostępna dla wszystkich, nie tylko dla wysportowanych osiłków, zaprojektujemy ją zgodnie z zasadami dostępności WCAG.",
			},
		],
	},

	titleDescriptionImageListData: [
		{
			title: "**Artyzm**",
			description:
				"Projektujemy strony piękne, a piękno… podbija użyteczność w oczach odbiorców. i użyteczne. Miło jest na nie popatrzeć, jeszcze przyjemniej poklikać. Wiemy, jak sprawić, by strony, sklepy i apki robiły **niesamowite pierwsze wrażenie**. I każde kolejne.",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/ArtristryStatue.webp",
					metadata: {
						dimensions: {
							height: 430,
							width: 340,
						},
					},
				},
			},
		},
		{
			title: "**Wydajność**",
			description:
				"Za gładkim obliczem interfejsów stoi konkret. Proporcje, hierarchia, badania i testy, a to wszystko **w służbie konwersji**, które napędzą Twój biznes. Odpalamy szalone pomysły, bazując na danych.",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/EfficiencyStatue.webp",
					metadata: {
						dimensions: {
							height: 326,
							width: 495,
						},
					},
				},
			},
		},
		{
			title: "**Wpływ**",
			description:
				"Co powiesz na stronę, która szanuje wszystkich odbiorców i dba  o matkę naturę? Projektujemy strony w duchu zrównoważonego rozwoju, **zgodne z zasadami dostępności** cyfrowej WCAG.",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/TreeStatue.webp",
					metadata: {
						dimensions: {
							height: 354,
							width: 581,
						},
					},
				},
			},
		},
	],

	textSectionData: {
		heading:
			"Wiesz, jakie dwie litery sprawią, że pomiędzy **Twoją stroną a użytkownikiem** coś naprawdę zaklika? UX.",
		blocks: [
			{
				title: "Dlaczego?",
				description:
					"Bez dobrego UX strona internetowa jest jak **szpilki Louboutina** pod Giewontem. Ładne, ale nie zabiorą Cię na szczyt.",
			},
			{
				description:
					"Zaprojektujemy Twoją stronę www, sklep internetowy czy apkę tak, by zachwycała nie tylko designem, ale i użytecznością, dzięki czemu Twoja marka zyska +10 punktów do za… zaufania, of course.",
			},
		],
	},

	data: {
		heading: "Zainwestuj w stronę internetową **dostępną dla wszystkich**",
		blocks: [
			{
				description:
					"WCAG to wytyczne dotyczące dostępności stron internetowych. Dzięki nim Twoja strona będzie przyjazna dla osób z niepełnosprawnościami wzroku, słuchu, ruchu i z zaburzeniami poznawczymi, czyli dla jakichś 20% użytkowników internetu.",
			},
			{
				title: "Dużo?",
				description: "Dużo! Jest dla kogo się starać.",
			},
		],
	},

	cardData: {
		blocks: [
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/question-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "Czy Twój biznes potrzebuje **strony WCAG**?",
				description:
					"Podmioty publiczne nie mają wyboru – ich strony muszą spełniać zalecenia WCAG, inaczej grożą im konsekwencje. \n\n Tylko czemu postrzegać WCAG jak zło konieczne, zamiast wykorzystać szansę, jaką daje użytkownikom i biznesom na jeszcze lepsze strony internetowe?",
			},
		],
	},
	wcagData: {
		blocks: [
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/info-icon.svg",
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
						url: "/info-icon.svg",
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
						url: "/info-icon.svg",
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
						url: "/info-icon.svg",
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
	},
	headingData: {
		heading: "Jak tu nie lubić **WCAG**?",
		subheading: "Tylko spójrz",
		type: "h4",
		decoration: true,
	},
	sustainableDevelopmentData: {
		heading: "Strony internetowe w duchu **zrównoważonego rozwoju**",
		blocks: [
			{
				description: "Niepokojąco **ciekawych**",
				title:
					"Jesteś jedną z tych osób, które nie biorą reklamówek w marketach  i martwią się o topniejące lodowce? Mamy dla Ciebie garść newsów.",
			},
		],
	},

	animatedCardGridData: {
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
	},

	designStepsData: {
		heading: "**Design z szacunkiem** dla odbiorców i środowiska",
		blocks: [
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/quota-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "Copy",
				description:
					"Napiszemy wartościowe treści, dzięki którym Twoi odbiorcy szybko znajdą to, czego potrzebują, redukując czas spędzony w internecie.",
			},
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/person-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "UX",
				description:
					"Projektujemy tak, by użytkownicy przemieszczali się po stronach szybko i gładko, nie nadużywając cierpliwości ani energii elektrycznej.",
			},
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/photo-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "Foto i wideo",
				description:
					"Czas, by strony przeładowane ciężkimi zdjęciami i filmami wyginęły jak dinozaury. Optymalizacja mediów to nasz konik!",
			},
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/font-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "Fonty",
				description:
					"Im prościej, tym lepiej i tego się trzymamy, dobierając fonty. Mniej wariacji w imię lekkości. No i ostrożnie z boldem, ma dużo kalorii.",
			},
		],
	},

	jamstackTechnologyData: {
		heading: "**Technologia JamStack**  z kosmicznymi możliwościami",
		blocks: [
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/next-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "Statyczne generatory kodu SSG",
				description:
					"Nie zaśmiecamy netu niepotrzebnym kodem. Korzystamy z rozwiązań takich jak Next, Gatsby czy Astro, dzięki czemu strony są na maxa lekkie i wczytują tylko to, co trzeba.",
			},
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/vercel-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "Hosting",
				description:
					"Stawiamy na nowoczesne platformy hostingowe zasilane energią odnawialną. To bezpieczne serwery  o kosmicznej mocy obliczeniowej. Zaparkujemy Twoją stronę w najlepszej miejscówce w mieście.",
			},
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/api-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "API",
				description:
					"Czy można pójść na całość, uzbrajając stronę w wypasione funkcjonalności, jednocześnie nie szkodząc środowisku? Można. Integracje z platformami takimi jak Stripe, Algola czy Shopify to nasza specjalność.",
			},
			{
				icon: {
					asset: {
						altText: "Aasdasd",
						url: "/sanity-icon.svg",
						metadata: {
							dimensions: {
								height: 300,
								width: 300,
							},
						},
					},
				},
				title: "CMS",
				description:
					"Czas na nowoczesne CMS-y w trybie headless, które pozwalają przechowywać treści niezależnie od wyglądu. Zapomnij o stronie spuchniętej od nadmiaru wtyczek. Zrobimy dla Ciebie witrynę lekką jak piórko  i megałatwą w obsłudze.",
			},
		],
	},

	CtaSectionWithImageData1: {
		cta: {
			text: "Pogadajmy!",
			theme: "primary",
			href:"/pl/kontakt"
		},
		heading: "Chcesz mieć stronę, która **ugości jak należy** każdego użytkownika?",
		img: {
			asset: {
				altText: "asdasd",
				url: "/Chair.webp",
				metadata: {
					dimensions: {
						height: 2048,
						width: 2048,
					},
				},
			},
		},
	},

	CtaSectionWithImageData2: {
		cta: {
			text: "Pogadajmy!",
			theme: "primary",
			href:"/pl/kontakt"
		},
		heading: "Potrzebujesz **zrównoważonej strony** internetowej?",
		img: {
			asset: {
				altText: "asdasd",
				url: "/Scale.webp",
				metadata: {
					dimensions: {
						height: 2048,
						width: 2048,
					},
				},
			},
		},
	},

	watchImageData3: {
		cta: {
			text: "Umów darmową konsultację!",
			textMobile: "umów konsultacje!",
			theme: "primary",
			href:"/pl/kontakt"
		},
		heading: "**Projektowanie UX** potrzebne od zaraz?",
		img: {
			asset: {
				altText: "asdasd",
				url: "/Watch.webp",
				metadata: {
					dimensions: {
						height: 2048,
						width: 2048,
					},
				},
			},
		},
	},

	planeImageData: {
		heading: "Marzy Ci się UX **wysokich lotów**?",
		cta: {
			text: "Umów darmową konsultację!",
			textMobile: "umów konsultacje!",
			theme: "primary",
			href: "/pl/kontakt",
		},
		image: {
			asset: {
				altText: "asdasd",
				url: "/Plane.webp",
				metadata: {
					dimensions: {
						height: 2048,
						width: 2048,
					},
				},
			},
		},
	},

	image2: {
		asset: {
			altText: "asdasdsadsadasd",
			url: "/TabletPhoto.webp",
			metadata: {
				dimensions: {
					width: 3840,
					height: 2160,
				},
			},
		},
	},

	image: {
		asset: {
			altText: "asdasdsadsadasd",
			url: "/UxPhoto.webp",
			metadata: {
				dimensions: {
					width: 3840,
					height: 2160,
				},
			},
		},
	},
	headingWithMaxWidthData: {
		heading:
			"Tworzymy strony internetowe  i aplikacje webowe, **które topią serca odwiedzających**, niekoniecznie lodowce.",
		decoration: false,
	},

	consultationCtaData: {
		heading: "Dobry UX jest **zielony**!",
		subheading:
			"Zaprojektujemy dla Ciebie ultraszybką i intuicyjną stronę  z małym apetytem na prąd. Kto wie, może dzięki niej nie wyginą maskonury?",
		cta: "Umawiam konsultację",
	},
	headingImageTextListData: [
		{
			heading: "Warsztaty pożegnalne – **tworzymy strategię UX**",
			headingDecoration: true,
			headingType: "h4",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/DesignThinking.webp",
					metadata: {
						dimensions: {
							height: 1000,
							width: 2000,
						},
					},
				},
			},
			blocks: [
				{
					description:
						"Powiedz „do widzenia” chaosowi, bo tu wasze drogi rozchodzą się raz na zawsze. Na początek zapoznamy się z Twoją marką, ustalimy dokąd zmierza i jakie **wyzwanie przed nią stoi**. Dalej będzie już tylko konkretniej.",
				},
				{
					description:
						"Przygotuj się na prawdziwą burzę mózgów zgodną z podejściem Design Thinking. Efekty? Wygenerujemy pomysły, ustalimy priorytety i kolejne kroki do osiągnięcia **UX-owego raju**, w pełnym poszanowaniu customer experience",
				},
			],
		},
		{
			heading: "Warsztaty są **grą zespołową**. Sprawdź, czy lubisz ten sport",
			headingDecoration: false,
			headingType: "h4",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/OrganizationComparisonGraph.webp",
					metadata: {
						dimensions: {
							height: 1000,
							width: 2000,
						},
					},
				},
			},
			blocks: [
				{
					description:
						"Model Value Curve, czyli proste narzędzie, dzięki któremu ustalimy wartości najważniejsze dla Twoich klientów",
				},
				{
					description:
						"**Lean UX Canvas**– biznesplan w sprytnym wydaniu pozwalający uniknąć pułapek w rozwijaniu własnego biznesu.",
				},
				{
					description:
						"**Crazy 8** – sprintem do najlepszych pomysłów. Metoda dla fanów adrenaliny.",
				},
				{
					description:
						"**Card Sorting** – biznesowa układanka, a konkretniej – metoda ułatwiająca sortowanie informacji na stronie,",
				},
				{
					description:
						"**Burza Mózgów** – zapomnij o niekontrolowanym przerzucaniu się pomysłami. To poukładany proces sprzyjający kreatywności.",
				},
			],
		},
		{
			heading: "Strefa rentgena – badamy produkt, **szukamy możliwości**",
			headingDecoration: true,
			headingType: "h4",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/ProductGraph.webp",
					metadata: {
						dimensions: {
							height: 610,
							width: 211,
						},
					},
				},
			},
			blocks: [
				{
					description:
						"Bez prześwietlenia operacja UX nie może się udać. Na etapie desk researchu przeczeszemy rynek i Twoją konkurencję, by dostrzec **możliwości dla Twojego produktu**.",
				},
				{
					description:
						"**Zanurzymy się w raporty**, analizy i badania. Nie pominiemy istotnych publikacji i statystyk, by mieć pełen obraz sytuacji. Zaczniemy bywać tam, gdzie Twoi klienci – z radarami mocno nastawionymi na ich potrzeby, bolączki i życzenia.",
				},
				{
					description:
						"W fazie badania nie pozostajemy wyłącznie za biurkami. Pogłębione wywiady z klientami i zbieranie insightów to megaważna część tego etapu, **przynosząca wnioski na wagę złota**.",
				},
			],
		},
		{
			heading: "Układanie UX-owych puzzli – **tworzymy prototyp**",
			headingDecoration: true,
			headingType: "h4",
			image : {
				asset: {
					altText: "asdsadsadsad",
					url: "/UxPuzzles.webp",
					metadata: {
						dimensions: {
							height: 603,
							width: 302,
						},
					},
				},
			},
			blocks: [
				{
					description:
						"Sfokusowani na celu i nakarmieni wiedzą zaczniemy tworzyć architekturę informacji oraz prototyp Twojej witryny lub aplikacji.",
				},
				{
					description:
						"Jeśli Twoja strona lub apka już śmiga w sieci, zaczniemy od audytu UX, by skonfrontować obecny stan rzeczy z założonymi celami. Tutaj dowiesz się więcej o audycie UX.",
				},
				{
					description:
						"[Sprawdź, jak wygląda audyt](audyt)",
				},
				{
					description:
						"Zaprzęgniemy do akcji dobre praktyki budowania interfejsów cyfrowych, heurystyki Nielsena, zasady Gestalt i piramidę potrzeb UX, by zaprojektować intuicyjną stronę internetową. Nigdy więcej frustrujących formularzy, linków prowadzących donikąd czy zamulających filmów wideo!",
				},
				{
					description:
						"Krok po kroku, przy użyciu naszej ukochanej Figmy, powstanie prototyp gotowy do przeklikania wzdłuż i wszerz.",
				},
			],
		},
		{
			heading: "Ludzie i myszy – **testujemy pełną parą**",
			headingDecoration: true,
			headingType: "h4",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/TestingShowcase.webp",
					metadata: {
						dimensions: {
							height: 1000,
							width: 2000,
						},
					},
				},
			},
			blocks: [
				{
					description:
						"Pora solidnie przetestować wszystko, co do tej pory wypracowaliśmy. To właśnie tutaj pojawiają się ludzie i myszy (no, OK, same klawiatury też wystarczą) gotowi przeklikać wszystkie zakamarki strony internetowej lub aplikacji.",
				},
				{
					description:
						"Logowanie, odzyskiwanie hasła, sprawdzanie różnych przeglądarek czy odpalanie strony na słabym necie – testy UX nie są zwykłym scrollowankiem.",
				},
				{
					description:
						"Zaprzęgniemy do akcji dobre praktyki budowania interfejsów cyfrowych, heurystyki Nielsena, zasady Gestalt i piramidę potrzeb UX, by zaprojektować intuicyjną stronę internetową. Nigdy więcej frustrujących formularzy, linków prowadzących donikąd czy zamulających filmów wideo!",
				},
				{
					description:
						"Testerzy mają full zadań do wykonania, a my śledzimy każdy ich ruch, by nie przeoczyć żadnej przeszkody, o którą może się potknąć świetny UX.",
				},
			],
		},
		{
			heading: "I to **koniec**?",
			headingDecoration: true,
			headingType: "h4",
			image :{ 
				asset: {
					altText: "asdsadsadsad",
					url: "/WorkflowShowcase.webp",
					metadata: {
						dimensions: {
							height: 1000,
							width: 2000,
						},
					},
				},
			},
			blocks: [
				{
					description:
					"Projektowanie UX nie kończy się wraz z uruchomieniem strony, sklepu internetowego czy aplikacji. Trzeba niezmiennie trzymać rękę na pulsie, analizować, wyciągać wnioski, zmieniać i testować. W tym też Ci pomożemy!"
				}
			],
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
