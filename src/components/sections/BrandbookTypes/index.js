import Markdown from "@/utils/markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Star } from "../../atoms/Icons";
import styles from "./styles.module.scss";

const BrandbookTypes = ({
	data: {
		primaryBrandbook_Heading,
		primaryBrandbook_Paragraph,
		primaryBrandbook_List,
		extendedBrandbook_Heading,
		extendedBrandbook_Paragraph,
		extendedBrandbook_Annotation,
		extendedBrandbook_List,
	},
}) => {
	return (
		<section className={styles.section}>
			<div className={styles.type}>
				<header>
					<DecorativeHeading type="h2">{primaryBrandbook_Heading}</DecorativeHeading>
					<Markdown className={styles.paragraph}>{primaryBrandbook_Paragraph}</Markdown>
				</header>
				<ul className={styles.list}>
					{primaryBrandbook_List.map((item, i) => (
						<li key={i}>
							<Star />
							<span>{item}</span>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.type}>
				<header>
					<DecorativeHeading type="h2">{extendedBrandbook_Heading}</DecorativeHeading>
					<Markdown className={styles.paragraph}>{extendedBrandbook_Paragraph}</Markdown>
					<Markdown>{extendedBrandbook_Annotation}</Markdown>
				</header>
				<ul className={styles.list}>
					{extendedBrandbook_List.map((item, i) => (
						<li key={i}>
							<Star />
							<span>{item}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
export default BrandbookTypes;
