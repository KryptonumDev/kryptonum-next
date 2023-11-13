import DecorativeHeading from "../../atoms/DecorativeHeading";
import TilesComponent from "../../organisms/TilesComponent";
import styles from './styles.module.scss';

const TilesComponentWithHeading = ({ data: {heading,tiles}}) => {
	return (
		<section className={styles.wrapper}>
			<DecorativeHeading type="h3">{heading}</DecorativeHeading>
			<TilesComponent data={tiles} additionalStyles={styles}></TilesComponent>
		</section>
	);
};
export default TilesComponentWithHeading;
