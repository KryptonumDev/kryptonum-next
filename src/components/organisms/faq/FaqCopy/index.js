import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const FaqCopy = ({ 
	data:
	 { 
		img,
		heading,
		paragraph,
		summary,
		additionalStyles
		}
	}) => {
	return (
		<section className={`${styles.answer} ${additionalStyles}`}>
			<Img
				data={img}
				className={styles.img}
			/>
			<div className={styles.copy}>
				<Markdown className={styles.heading}>{heading}</Markdown>
				<Markdown className={styles.paragraph}>{paragraph}</Markdown>
				<Markdown className={styles.summary}>{summary}</Markdown>
			</div>
		</section>
	);
};

export default FaqCopy;
