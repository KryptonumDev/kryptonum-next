import styles from "./styles.module.scss";
import { ImageRenderer } from "../../PortableContent";
import Markdown from "@/utils/markdown";

const DetailedGrid = ({ blocks }) => {
	return (
		<div className={styles.detailedGrid}>
			{blocks.map(({ img, title, description }, i) => (
				<div
					className={styles.item}
					key={i}
				>
					<ImageRenderer
						value={img}
						key={i}
					/>
					<Markdown className={styles.title}>{title}</Markdown>
					<Markdown className={styles.description}>{description}</Markdown>
				</div>
			))}
		</div>
	);
};
export default DetailedGrid;
