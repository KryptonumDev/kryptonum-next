import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";

const ListWithOverflowIcon = ({ data: { blocks }, className, itemClassName }) => {
	return (
		<div className={`${styles.wrapper} ${className}`}>
			{blocks.map(({ icon, description, title, img }, i) => (
				<div className={`${styles.item} ${itemClassName}`} key={i}>
					<Img data={icon} className={styles.icon} width={60} height={60}></Img>
					{title && (
						<Markdown className={styles.title} components={{ p: "h2" }}>
							{title}
						</Markdown>
					)}
					<Markdown className={styles.description}>{description}</Markdown>
				</div>
			))}
		</div>
	);
};
export default ListWithOverflowIcon;
