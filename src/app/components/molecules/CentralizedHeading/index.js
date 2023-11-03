import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const CentralizedHeading = ({
	data: { heading, subheading, cta },
	decoration,
	additionalStyles,
}) => {
	return (
		<header
			className={
				additionalStyles
					? `${styles.header} ${additionalStyles.centralizedHeadingSection}`
					: styles.header
			}
		>
			<DecorativeHeading type="h3" decoration={decoration} className={styles.decorativeHeading}>
				{heading}
			</DecorativeHeading>
			{subheading && <div className={styles.subheading}>{subheading}</div>}
			{cta && <Button data={cta} />}
			</header>
	);
};
export default CentralizedHeading;
