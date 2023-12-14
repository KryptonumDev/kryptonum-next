import Markdown from "@/components/atoms/markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import List from "./list";
import styles from "./styles.module.scss";

const ListSection = ({ heading, list, paragraph, secondParagraph, title }) => {
	const decorativeHeading = <DecorativeHeading type="h2">{heading}</DecorativeHeading>;
	const decorativeHeading2 = <DecorativeHeading type="h2">{heading}</DecorativeHeading>;
	const markdown = (
		<Markdown
			className={styles.paragraph}
			components={{ p: "h3" }}
		>
			{paragraph}
		</Markdown>
	);
	const markdown2 = <Markdown className={styles.paragraph2}>{secondParagraph}</Markdown>;
	const markdown3 = <Markdown className={styles.title}>{title}</Markdown>;

	return (
		<List
			decorativeHeading={decorativeHeading}
			decorativeHeading2={decorativeHeading2}
			markdown={markdown}
			markdown2={markdown2}
			markdown3={markdown3}
      secondParagraph={secondParagraph}
		>
      {list.map((item, i) => (
					<div
						className={`${styles.item} .item`}
						key={i}
					>
						<Markdown
							className={styles.title}
							components={{ p: "h3" }}
						>
							{item.title}
						</Markdown>
						<Markdown className={styles.description}>{item.description}</Markdown>
					</div>
				))}
		</List>
	);
};

export default ListSection;
