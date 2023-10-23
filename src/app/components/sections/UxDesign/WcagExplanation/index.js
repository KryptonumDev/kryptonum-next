import Img from "@/utils/Img";
import React from "react";
import ReactMarkdown from "react-markdown";
import styles from './styles.module.scss';
import ListWithOverflowIcon from "@/app/components/molecules/ListWithOverflowIcon";
import CardGrid from "@/app/components/molecules/CardGrid";
import CentralizedHeading from "@/app/components/molecules/CentralizedHeading";

const WcagExplanation = ({wcagData, headingData}) => {
	console.log(headingData);
	return (
    <section className={styles.section}>
			<CentralizedHeading data={headingData}></CentralizedHeading>
			<CardGrid data={wcagData}/>
		</section>
	)
};

export default WcagExplanation;
