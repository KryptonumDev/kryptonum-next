import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const Copy = ({
	data: {
		copy_Heading,
		copy_Paragraph,
		copy_Paragraph2,
		copy_Paragraph3,
		copy_Img,
		copy_Cta,
		copy_Headline,
		copy_List,
	},
}) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">{copy_Heading}</DecorativeHeading>
			<Markdown className={styles.paragraph}>{copy_Paragraph}</Markdown>
			<Markdown className={styles.paragraph2}>{copy_Paragraph2}</Markdown>
			<div className={styles.column}>
				<div className={styles.text}>
					<Markdown>{copy_Paragraph3}</Markdown>
					<Button
						data={copy_Cta}
						className={styles.cta}
					/>
				</div>
				<div className={styles.imageWrapper}>
					<Img
						data={copy_Img}
						className={styles.img}
						sizes="(max-width: 999px) 50vw, 100vw"
					/>
				</div>
			</div>
			<Markdown className={styles.headline}>{copy_Headline}</Markdown>
			<div className={styles.wrapper}>
				{copy_List.map((item, i) => (
					<div
						className={styles.item}
						key={i}
					>
						<Markdown>{item.title}</Markdown>
						<Img
							data={item.img}
							className={styles.img}
							sizes="(max-width: 999px) 50vw, 100vw"
						/>
					</div>
				))}
			</div>
		</section>
	);
};
export default Copy;
