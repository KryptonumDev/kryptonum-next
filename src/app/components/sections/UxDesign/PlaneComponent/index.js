import styles from "./styles.module.scss";
import Consultation from "@/app/components/molecules/UxDesign/Consultation";
import MultipleUxEplanations from "@/app/components/organisms/MultipleUxExplanations";
import TextComponent from "@/app/components/sections/TextComponent";

const PlaneComponent = () => {
	const buttonContext = "Umów darmową konsultację";
	const buttonMobileContext = "Umów konsultację";
	const headingContext = "Marzy Ci się UX **wysokich lotów**?";
	const image = {
		asset: {
			altText: "Aasdasd",
			url: "/Image.svg",
			metadata: {
				dimensions: {
					height: 422,
					width: 794,
				},
			},
		},
	};
	const questionHeadingContext =
		"Wiesz, jakie dwie litery sprawią, że pomiędzy **Twoją stroną a użytkownikiem** coś naprawdę zaklika? UX.";
	const blocks = [
		{
			title: "Dlaczego?",
			description:
				"Bez dobrego UX strona internetowa jest jak [ szpilki Louboutina ] pod Giewontem. Ładne, ale nie zabiorą Cię na szczyt.",
		},
		{
			description:
				"Zaprojektujemy Twoją stronę www, sklep internetowy czy apkę tak, by zachwycała nie tylko designem, ale i użytecznością, dzięki czemu Twoja marka zyska +10 punktów do za… zaufania, of course.",
		},
	];
	const data = {
		heading: questionHeadingContext,
		blocks: blocks,
	};

	return (
		<section className={styles.wrapper}>
			<TextComponent data={data}></TextComponent>
			<Consultation
				className={styles.wrapper}
				image={image}
				buttonContext={buttonContext}
				buttonMobileContext={buttonMobileContext}
				headingContext={headingContext}
				imageWrapperClassName={styles.imageWrapper}
				imageClassName={styles.image}
			/>
			<MultipleUxEplanations className={styles.multipleUxEplanations} />
		</section>
	);
};

export default PlaneComponent;
