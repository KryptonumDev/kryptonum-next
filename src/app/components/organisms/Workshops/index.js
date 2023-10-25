import HeadingImageText from "@/app/components/molecules/HeadingImageText";
import styles from "./styles.module.scss";

const Workshops = () => {
	const headingContent = "Warsztaty pożegnalne – **tworzymy strategię UX**";
	const headingContent2 = "Warsztaty są **grą zespołową**. Sprawdź, czy lubisz ten sport";
	const images = [
		{
			asset: {
				altText: "asdsadsadsad",
				url: "/image 22.svg",
				metadata: {
					dimensions: {
						height: 603,
						width: 302,
					},
				},
			},
		},
		{
			asset: {
				altText: "asdsadsadsad",
				url: "/image 21.svg",
				metadata: {
					dimensions: {
						height: 603,
						width: 302,
					},
				},
			},
		},
	];
	const description = [
		"Powiedz „do widzenia” chaosowi, bo tu wasze drogi rozchodzą się raz na zawsze. Na początek zapoznamy się z Twoją marką, ustalimy dokąd zmierza i jakie **wyzwanie przed nią stoi**. Dalej będzie już tylko konkretniej.",
		"Przygotuj się na prawdziwą burzę mózgów zgodną z podejściem Design Thinking. Efekty? Wygenerujemy pomysły, ustalimy priorytety i kolejne kroki do osiągnięcia **UX-owego raju**, w pełnym poszanowaniu customer experience",
	];
	const description2 = [
		"Model Value Curve, czyli proste narzędzie, dzięki któremu ustalimy wartości najważniejsze dla Twoich klientów",
		"**Lean UX Canvas**– biznesplan w sprytnym wydaniu pozwalający uniknąć pułapek w rozwijaniu własnego biznesu.",
		"**Crazy 8** – sprintem do najlepszych pomysłów. Metoda dla fanów adrenaliny.",
		"**Card Sorting** – biznesowa układanka, a konkretniej – metoda ułatwiająca sortowanie informacji na stronie,",
		"**Burza Mózgów** – zapomnij o niekontrolowanym przerzucaniu się pomysłami. To poukładany proces sprzyjający kreatywności.",
	];
	return (
		<div className={styles.wrapper}>
			<HeadingImageText
				headingType="h4"
				headingDecoration={true}
				headingContent={headingContent}
				image={images[0]}
				description={description}
				className={styles.headingImageText}
        imageWrapperClassName={styles.imageWrapper}
        headingWrapperClassName={styles.headingWrapper}
			/>
			<HeadingImageText
				headingType="h4"
				headingDecoration={false}
				headingContent={headingContent2}
				image={images[1]}
				description={description2}
				className={styles.headingImageText}
        imageWrapperClassName={styles.imageWrapper}
        headingWrapperClassName={styles.headingWrapper}
			/>
		</div>
	);
};
export default Workshops;
