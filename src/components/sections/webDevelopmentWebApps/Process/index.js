import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const Process = ({
	data: { process_Heading, process_Paragraph, process_SecondParagraph, process_List },
}) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h2">{process_Heading}</DecorativeHeading>
				<Markdown className={styles.paragraph}>{process_Paragraph}</Markdown>
				<Markdown className={styles.secondParagraph}>{process_SecondParagraph}</Markdown>
			</header>
			<div className={styles.wrapper}>
				{process_List.map((item, i) => (
					<div
						className={styles.item}
						key={i}
					>
						<Img
							data={item.img}
							className={styles.img}
							sizes="(max-width: 1100px) 100vw, 50vw"
						/>
						<Markdown
							className={styles.heading}
							components={{ p: "h3" }}
						>
							{item.heading}
						</Markdown>
						<Markdown className={styles.subheading}>{item.subheading}</Markdown>
						<Markdown className={styles.paragraph}>{item.paragraph}</Markdown>
						<Markdown className={styles.secondParagraph}>{item.secondParagraph}</Markdown>
					</div>
				))}
			</div>
		</section>
	);
};
export default Process;
