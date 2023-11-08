import CentralizedHeading from "@/app/components/molecules/CentralizedHeading";
import CardGrid from "@/app/components/organisms/CardGrid";
import styles from "./styles.module.scss";

const CentralizedHeadingWithCardGrid = ({ data: {centralizedHeading, cardGrid}, decoration }) => {
	const cardGridData= {
		list: cardGrid
	}
	return (
		<section className={styles.section}>
			<CentralizedHeading
				data={centralizedHeading}
				decoration={decoration}
				additionalStyles={styles}
			></CentralizedHeading>
			<CardGrid data={cardGridData} />
		</section>
	);
};

export default CentralizedHeadingWithCardGrid;
