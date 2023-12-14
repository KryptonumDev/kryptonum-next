import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const Why = ({
	data: {
		why_Heading,
		why_Paragraph,
		why_SecondParagraph,
		why_ThirdParagraph,
		why_FourthParagraph,
		why_Cta,
	},
}) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading
				type="h2"
			>
				{why_Heading}
			</DecorativeHeading>
			<Markdown className={styles.paragraph}>{why_Paragraph}</Markdown>
			<Markdown className={styles.paragraph2}>{why_SecondParagraph}</Markdown>
			<Markdown className={styles.paragraph3}>{why_ThirdParagraph}</Markdown>
			<div className={styles.paragraph4}>
				<Markdown>{why_FourthParagraph}</Markdown>
				<Button
					data={why_Cta}
					className={styles.cta}
				/>
			</div>
		</section>
	);
};
export default Why;
