import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const IconTitleDescriptionList = ({ data: { blocks } }) => {
	return (
		<>
			{blocks.map(({ icon, title, description }, i) => (
				<div className={styles.item} key={i}>
					<div className={styles.iconWrapper}>
						<Img data={icon} className={styles.icon} width={40} height={40} />
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
