import HeadingWithDescriptionTitle from "@/app/components/molecules/HeadingWithDescriptionTitle";
import AnimatedCardGrid from "@/app/components/organisms/AnimatedCardGrid";
import styles from "./styles.module.scss";

const SustainableDevelopment = ({ sustainableDevelopmentData, animatedCardGridData }) => {
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
