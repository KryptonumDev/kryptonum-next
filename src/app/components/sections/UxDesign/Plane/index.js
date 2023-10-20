import styles from "./styles.module.scss";
import Consultation from "@/app/components/molecules/UxDesign/Consultation";
import Questioning from "@/app/components/molecules/UxDesign/Questioning";
import MultipleUxEplanations from "@/app/components/organisms/MultipleUxExplanations";

const Plane = () => {
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
	const question = "Dlaczego?";
	const questionHeadingContext =
		"Wiesz, jakie dwie litery sprawią, że pomiędzy **Twoją stroną a użytkownikiem** coś naprawdę zaklika? UX.";
	const description = [
		"Bez dobrego UX strona internetowa jest jak [ szpilki Louboutina ] pod Giewontem. Ładne, ale nie zabiorą Cię na szczyt.",
		"Zaprojektujemy Twoją stronę www, sklep internetowy czy apkę tak, by zachwycała nie tylko designem, ale i użytecznością, dzięki czemu Twoja marka zyska +10 punktów do za… zaufania, of course.",
	];

	return (
		<section className={styles.wrapper}>
			<Questioning
				className={styles.questioning}
				question={question}
				headingContext={questionHeadingContext}
				description={description}
				questionClassName={styles.question}
			/>
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

export default Plane;
