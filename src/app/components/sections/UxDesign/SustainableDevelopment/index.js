import HeadingWithDescriptionTitle from "@/app/components/molecules/HeadingWithDescriptionTitle";
import styles from "./styles.module.scss";
import AnimatedCardGrid from "@/app/components/organisms/AnimatedCardGrid";

const SustainableDevelopment = ({ sustainableDevelopmentData, animatedCardGridData }) => {
	const type = "h2";


	return (
		<section className={styles.section}>
			<HeadingWithDescriptionTitle
				data={sustainableDevelopmentData}
			/>
			<AnimatedCardGrid data={animatedCardGridData} />
		</section>
	);
};
export default SustainableDevelopment;
