import styles from "./styles.module.scss";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";

const IconTitleDescription = ({
	data: { 
		icon, 
		title, 
		blocks 
	},
	...props
}) => {
	return (
		<>
			<div
				className={styles.item}
				{...props}
			>
				<div className={styles.iconWrapper}>
					{icon && (
						<Img
							data={icon}
							className={styles.icon}
							width={40}
							height={40}
						/>
					)}
				</div>
				<Markdown
					className={styles.title}
					components={{ p: "h3" }}
				>
					{title}
				</Markdown>
				<div className={styles.descriptionWrapper}>
					{blocks.map(({ description }, i) => (
						<Markdown
							className={styles.description}
							key={i}
						>
							{description}
						</Markdown>
					))}
				</div>
			</div>
		</>
	);
};
export default IconTitleDescription;
