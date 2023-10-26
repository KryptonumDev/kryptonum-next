import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const CentralizedHeading = ({ data: { heading, subheading, type, decoration } }) => {
	return (
		<header className={styles.header}>
			<DecorativeHeading type={type} decoration={decoration}>{heading}</DecorativeHeading>
			<div className={styles.subheading}>{subheading}</div>
		</header>
	);
};
export default CentralizedHeading;
