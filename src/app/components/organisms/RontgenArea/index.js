import HeadingImageText from "@/app/components/molecules/UxDesign/HeadingImageText";
import styles from "./styles.module.scss";

const RontgenArea = () => {
	const headingContent = "Strefa rentgena – badamy produkt, szukamy możliwości";
	const image = {
		asset: {
			altText: "asdsadsadsad",
			url: "/image 20.svg",
			metadata: {
				dimensions: {
					height: 610,
					width: 211,
				},
			},
		},
	};
	const description = [
		"Bez prześwietlenia operacja UX nie może się udać. Na etapie desk researchu przeczeszemy rynek i Twoją konkurencję, by dostrzec [ możliwości dla Twojego produktu ].",
		"[ Zanurzymy się w raporty ], analizy i badania. Nie pominiemy istotnych publikacji i statystyk, by mieć pełen obraz sytuacji. Zaczniemy bywać tam, gdzie Twoi klienci – z radarami mocno nastawionymi na ich potrzeby, bolączki i życzenia.",
		"W fazie badania nie pozostajemy wyłącznie za biurkami. Pogłębione wywiady z klientami i zbieranie insightów to megaważna część tego etapu, [ przynosząca wnioski na wagę złota ].",
	];
	return (
		<HeadingImageText
			headingType="h4"
			headingDecoration={true}
			headingContent={headingContent}
			image={image}
      description={description}
			className={styles.headingImageText}
			imageWrapperClassName={styles.imageWrapper}
			headingWrapperClassName={styles.headingWrapper}
		></HeadingImageText>
	);
};
export default RontgenArea;
