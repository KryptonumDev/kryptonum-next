import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const Questioning = ({ className, question, headingContext, description, questionClassName }) => {
	return (
		<>
			<div className={className}>
				<div className={styles.decorativeHeadingWrapper}>
					<DecorativeHeading type="h4">{headingContext}</DecorativeHeading>
				</div>
				<div className={styles.contentWrapper}>
					<div className={questionClassName}>{question && <span>{question}</span>}</div>
					<div className={styles.explanation}>
						{description.map((paragraph, index) => (
							<p className={styles.paragraph} key={index}>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Questioning;
