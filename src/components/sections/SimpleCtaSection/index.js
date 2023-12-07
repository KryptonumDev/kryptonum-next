import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const SimpleCtaSection = ({ data: { heading, cta }, ...props }) => {
	return (
		<section className={styles.simpleCtaSection}>
			<DecorativeHeading
				type="h2"
				decoration={false}
				{...props}
			>
				{heading}
			</DecorativeHeading>
			{cta.href && <Button data={cta} />}
		</section>
	);
};
export default SimpleCtaSection;
