import TextComponent from "@/app/components/molecules/TextComponent";
import styles from "./styles.module.scss";
import AnimatedCardGrid from "@/app/components/organisms/AnimatedCardGrid";

const SustainableDevelopment = ({ sustainableDevelopmentData, animatedCardGridData }) => {
	return (
		<section className={styles.section}>
			<TextComponent
				data={sustainableDevelopmentData}
				itemClassName={styles.item}
				descriptionClassName={styles.description}
				wrapperClassName={styles.wrapper}
			/>
			<AnimatedCardGrid data={animatedCardGridData} />
		</section>
	);
};
export default SustainableDevelopment;
