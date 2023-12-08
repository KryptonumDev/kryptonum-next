import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const Document = ({
	data: { document_Heading, document_Paragraph, document_Paragraph2, document_Images },
}) => {
	return (
		<>
			<section className={styles.section}>
				<DecorativeHeading type="h2">{document_Heading}</DecorativeHeading>
				<Markdown className={styles.paragraph}>{document_Paragraph}</Markdown>
				<Markdown className={styles.paragraph2}>{document_Paragraph2}</Markdown>
				<div className={styles.slider}>
					<div className={styles.sliderWrapper}>
						{document_Images.map((img, i) => (
							<div
								className={styles.item}
								key={i}
							>
								<Img
									data={img}
									className={styles.img}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
export default Document;