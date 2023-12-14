import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import styles from "./styles.module.scss";

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
							sizes="40px"
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
