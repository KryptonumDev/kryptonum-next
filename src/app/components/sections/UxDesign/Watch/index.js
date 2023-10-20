import Consultation from "@/app/components/molecules/UxDesign/Consultation";
import styles from "./styles.module.scss";

const Watch = () => {
	const buttonContext = "Umów darmową konsultację";
	const buttonMobileContext = "Umów konsultację";
	const headingContext = "Projektowanie UX potrzebne od zaraz?";
	const image = {
		asset: {
			altText: "Aasdasd",
			url: "/Image2.svg",
			metadata: {
				dimensions: {
					height: 500,
					width: 430,
				},
			},
		},
	};
	return (
		<section className={styles.wrapper}>
			<Consultation
				className={styles.consultation}
				image={image}
				buttonContext={buttonContext}
				buttonMobileContext={buttonMobileContext}
				headingContext={headingContext}
				imageWrapperClassName={styles.imageWrapper}
				imageClassName={styles.image}
			></Consultation>
		</section>
	);
};

export default Watch;
