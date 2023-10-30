import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const CentralizedHeading = ({ data: { heading, subheading }, decoration }) => {
	return (
		<header className={styles.header}>
			<DecorativeHeading type="h4" decoration={decoration} className={styles.decorativeHeading}>{heading}</DecorativeHeading>
			{subheading && <div className={styles.subheading}>{subheading}</div>}
		</header>
	);
};
export default CentralizedHeading;
