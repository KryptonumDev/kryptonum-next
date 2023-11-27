import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";
import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";

const Flexibility = ({
	data: {
		flexibility_Heading,
		flexibility_Claim,
		flexibility_Paragraph,
		flexibility_SecondParagraph,
		flexibility_Cta,
	},
}) => {
	return (
		<section className={styles.wrapper}>
			<DecorativeHeading type="h2">{flexibility_Heading}</DecorativeHeading>
			<Markdown className={styles.claim}>{flexibility_Claim}</Markdown>
			<Markdown className={styles.paragraph}>{flexibility_Paragraph}</Markdown>
			<Markdown className={styles.secondParagraph}>{flexibility_SecondParagraph}</Markdown>
			<div className={`${styles.ctaWrapper} ctaWrapper`}>
				{flexibility_Cta.map((cta, i) => (
					<Button
						data={cta}
						key={i}
					/>
				))}
			</div>
		</section>
	);
};

export default Flexibility;
