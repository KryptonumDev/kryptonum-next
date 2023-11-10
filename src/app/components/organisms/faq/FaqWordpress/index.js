import Button from "@/app/components/atoms/Button";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";

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
					<Button theme={cta.theme} to={cta.href} className={styles.cta}>
						{cta.text}
					</Button>
				)}
			</div>
			<div className={styles.summary}>
				<Markdown>{summary}</Markdown>
				<Button theme={summaryCta.theme} to={summaryCta.href} className={styles.cta}>
					{summaryCta.text}
				</Button>
			</div>
		</section>
	);
};

export default FaqWordpress;
