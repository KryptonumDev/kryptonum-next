import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";

const IconTitleDescriptionTable = ({ data: { blocks } }) => {
	return (
		<>
			{blocks.map(({ icon, title, description }, i) => (
				<div className={styles.item} key={i}>
					<div className={styles.iconWrapper}>
						<Img data={icon} className={styles.icon} />
					</div>
					<Markdown className={styles.title} components={{ p: "h3" }}>
						{title}
					</Markdown>
					<Markdown className={styles.description}>{description}</Markdown>
				</div>
			))}
		</>
	);
};
export default IconTitleDescriptionTable;
