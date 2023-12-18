import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

const Document = ({
	data: { document_Heading, document_Paragraph, document_Paragraph2, document_Images },
}) => {
	return (
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
								sizes="(max-width: 999px) 100vw, 75vw"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Document;
