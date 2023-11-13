import CentralizedHeading from "@/app/components/molecules/CentralizedHeading";
import CardGrid from "@/app/components/organisms/CardGrid";
import styles from "./styles.module.scss";

const CentralizedHeadingWithCardGrid = ({ 
	data: {
		centralizedHeading, 
		cardGrid 
	}, 
	decoration 
}) => {
	return (
		<section className={styles.section}>
			<CentralizedHeading
				data={centralizedHeading}
				decoration={decoration}
				additionalStyles={styles}
			></CentralizedHeading>
			<CardGrid data={{list: cardGrid}} />
		</section>
	);
};

export default CentralizedHeadingWithCardGrid;
