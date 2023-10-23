import TextComponent from "@/app/components/molecules/TextComponent";
import styles from "./styles.module.scss";

const SustainableDevelopment = ({ sustainableDevelopmentData }) => {
	return (
		<section>
			<TextComponent
				data={sustainableDevelopmentData}
				itemClassName={styles.item}
        descriptionClassName={styles.description}
        wrapperClassName={styles.wrapper}
			/>
		</section>
	);
};
export default SustainableDevelopment;
