import Explanation from "../../molecules/UxDesign/Explanation";
import styles from "./styles.module.scss";

const MulitpleUxEplanations = ({className}) => {
	const explanations = [
		{
			title: "**Artyzm**",
			context:
				"Projektujemy strony piękne, a piękno… podbija użyteczność w oczach odbiorców. i użyteczne. Miło jest na nie popatrzeć, jeszcze przyjemniej poklikać. Wiemy, jak sprawić, by strony, sklepy i apki robiły [ niesamowite pierwsze wrażenie ]. I każde kolejne.",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/Rzexba 1.svg",
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
			context:
				"Za gładkim obliczem interfejsów stoi konkret. Proporcje, hierarchia, badania i testy, a to wszystko [ w służbie konwersji ], które napędzą Twój biznes. Odpalamy szalone pomysły, bazując na danych.",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/Rzeźbawydajnosc 1.svg",
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
			context:
				"Co powiesz na stronę, która szanuje wszystkich odbiorców i dba  o matkę naturę? Projektujemy strony w duchu zrównoważonego rozwoju, [ zgodne z zasadami dostępności ] cyfrowej WCAG.",
			image: {
				asset: {
					altText: "asdsadsadsad",
					url: "/Drzeworzezba 1.svg",
					metadata: {
						dimensions: {
							height: 354,
							width: 581,
						},
					},
				},
			},
		},
	];

	return (
		<div className={className}>
			{explanations.map((explanation, index) => (
				<Explanation
					key={index}
					title={explanation.title}
					context={explanation.context}
					image={explanation.image}
					explanationClassName={styles.explanation}
          imageWrapperClassName={styles.imageWrapper}
				/>
			))}
		</div>
	);
};
export default MulitpleUxEplanations;
