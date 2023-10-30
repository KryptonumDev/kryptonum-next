import DecorativeHeading from "../../atoms/DecorativeHeading";
import TilesComponent from "../../organisms/TilesComponent";
import styles from './styles.module.scss';

const TilesComponentWithHeading = ({ data: {heading,tiles}, additionalStyles }) => {
	return (
		<section className={styles.wrapper}>
			<DecorativeHeading type="h4">{heading}</DecorativeHeading>
			<TilesComponent data={tiles} additionalStyles={additionalStyles}></TilesComponent>
		</section>
	);
};
export default TilesComponentWithHeading;
