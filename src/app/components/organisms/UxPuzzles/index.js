import HeadingImageText from "../../molecules/HeadingImageText";
import styles from "./styles.module.scss";
const UxPuzzles = () => {
	const headingContent = "Układanie UX-owych puzzli – **tworzymy prototyp**";
	const image = {
		asset: {
			altText: "asdsadsadsad",
			url: "/Group 33751.svg",
			metadata: {
				dimensions: {
					height: 603,
					width: 302,
				},
			},
		},
	};
	const description = [
		"Sfokusowani na celu i nakarmieni wiedzą zaczniemy tworzyć architekturę informacji oraz prototyp Twojej witryny lub aplikacji.",
		"Jeśli Twoja strona lub apka już śmiga w sieci, zaczniemy od audytu UX, by skonfrontować obecny stan rzeczy z założonymi celami. Tutaj dowiesz się więcej o audycie UX.",
		"[Sprawdź, jak wygląda audyt]()",
		"Zaprzęgniemy do akcji dobre praktyki budowania interfejsów cyfrowych, heurystyki Nielsena, zasady Gestalt i piramidę potrzeb UX, by zaprojektować intuicyjną stronę internetową. Nigdy więcej frustrujących formularzy, linków prowadzących donikąd czy zamulających filmów wideo!",
		"Krok po kroku, przy użyciu naszej ukochanej Figmy, powstanie prototyp gotowy do przeklikania wzdłuż i wszerz.",
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
export default UxPuzzles;
