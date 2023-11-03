import CentralizedHeading from "@/app/components/molecules/CentralizedHeading";
import CardGrid from "@/app/components/organisms/CardGrid";
import styles from './styles.module.scss';

const CentralizedHeadingWithCardGrid = ({cardData, headingData}) => {
	return (
    <section className={styles.section}>
			<CentralizedHeading data={headingData} additionalStyles={styles}></CentralizedHeading>
			<CardGrid data={cardData}/>
		</section>
	)
};

export default CentralizedHeadingWithCardGrid;
