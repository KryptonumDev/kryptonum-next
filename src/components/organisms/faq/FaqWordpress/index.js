import Button from "@/components/atoms/Button";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const FaqWordpress = ({
	data: {
		heading,
		paragraph,
		subheading,
		secondParagraph,
		cta,
		summary,
		summaryCta,
		additionalStyles,
	},
}) => {
	return (
		<section className={`${styles.answer} ${additionalStyles}`}>
			<Markdown className={styles.heading}>{heading}</Markdown>
			<Markdown className={styles.paragraph}>{paragraph}</Markdown>
			<Markdown className={styles.subheading}>{subheading}</Markdown>
			<div className={styles.secondParagraph}>
				<Markdown>{secondParagraph}</Markdown>
				{cta?.text && (
					<Button data={cta}className={styles.cta}/>
				)}
			</div>
			<div className={styles.summary}>
				<Markdown>{summary}</Markdown>
				<Button data={summaryCta}className={styles.cta}/>
			</div>
		</section>
	);
};

export default FaqWordpress;
