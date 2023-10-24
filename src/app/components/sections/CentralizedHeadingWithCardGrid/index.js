import React from "react";
import styles from './styles.module.scss';
import CardGrid from "@/app/components/organisms/CardGrid";
import CentralizedHeading from "@/app/components/molecules/CentralizedHeading";

const CentralizedHeadingWithCardGrid = ({cardData, headingData}) => {
	return (
    <section className={styles.section}>
			<CentralizedHeading data={headingData}></CentralizedHeading>
			<CardGrid data={cardData}/>
		</section>
	)
};

export default CentralizedHeadingWithCardGrid;
