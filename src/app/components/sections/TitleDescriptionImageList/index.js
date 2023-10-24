import TitleDescriptionImage from "../../molecules/TitleDescriptionImage";
import styles from "./styles.module.scss";

const TitleDescriptionImageList = ({ data }) => {
	return (
		<section>
			{data.map((titleDescriptionImage) => (
				<TitleDescriptionImage data={titleDescriptionImage} parentStyles={styles} />
			))}
		</section>
	);
};
export default TitleDescriptionImageList;
