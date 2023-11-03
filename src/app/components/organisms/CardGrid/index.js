import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";

const CardGrid = ({ data: { blocks }, additionalStyles }) => {
	return (
		<div
			className={
				additionalStyles ? `${additionalStyles.cardGrid} ${styles.wrapper} ` : styles.wrapper
			}
		>
			{blocks.map(({ title, description, icon, overflowContent }, i) => (
				<div className={additionalStyles ? `${additionalStyles.item} ${styles.item}` : styles.item} key={i}>
					{icon ? (
						<Img
							data={icon}
							className={
								additionalStyles ? `${additionalStyles.icon} ${styles.icon}` : styles.icon
							}
						/>
					) : (
						<Markdown className={additionalStyles ? `${additionalStyles.icon} ${styles.icon}` : styles.icon} width={60} height={60} components={{ p: "h3" }}>
							{overflowContent}
						</Markdown>
					)}

					<Markdown className={styles.title} components={{ p: "h3" }}>
						{title}
					</Markdown>
					<Markdown className={styles.description}>{description}</Markdown>
				</div>
			))}
		</div>
	);
};
export default CardGrid;
