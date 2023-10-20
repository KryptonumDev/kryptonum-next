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

	return (
		<section className={styles.wrapper}>
			<Questioning className={styles.questioning} />
			<Consultation
				className={styles.consultation}
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
