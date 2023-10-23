import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const CentralizedHeading = ({ data: { heading, subheading, type } }) => {
	return (
		<header className={styles.header}>
			<DecorativeHeading type={type}>{heading}</DecorativeHeading>
			<div className={styles.subheading}>{subheading}</div>
		</header>
	);
};
export default CentralizedHeading;
