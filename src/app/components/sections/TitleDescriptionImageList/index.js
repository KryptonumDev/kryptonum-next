import TitleDescriptionImage from "../../molecules/TitleDescriptionImage";
import styles from "./styles.module.scss";

const TitleDescriptionImageList = ({ data }) => {
	return (
		<section>
			{data.map((titleDescriptionImage,i) => (
				<TitleDescriptionImage data={titleDescriptionImage} parentStyles={styles} key={i} />
			))}
		</section>
	);
};
export default TitleDescriptionImageList;
