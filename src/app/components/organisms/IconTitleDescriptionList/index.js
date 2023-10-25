import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";

const IconTitleDescriptionList = ({ data: { blocks } }) => {
	return (
		<>
			{blocks.map(({ icon, title, description }, i) => (
				<div className={styles.item} key={i}>
					<div className={styles.iconWrapper}>
						<Img data={icon} className={styles.icon} />
					</div>
					<Markdown className={styles.title}>
						{title}
					</Markdown>
					<Markdown className={styles.description}>{description}</Markdown>
				</div>
			))}
		</>
	);
};
export default IconTitleDescriptionList;