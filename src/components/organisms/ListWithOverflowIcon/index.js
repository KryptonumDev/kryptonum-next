import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const ListWithOverflowIcon = ({ data: { blocks }, className, itemClassName }) => {
	return (
		<div className={className ? `${styles.wrapper} ${className}` : styles.wrapper}>
			{blocks.map(({ icon, description, title, img }, i) => (
				<div
					className={`${styles.item} ${itemClassName}`}
					key={i}
				>
					<Img
						data={icon}
						className={styles.icon}
						width={60}
						height={60}
						sizes="60px"
					></Img>
					{title && (
						<Markdown
							className={styles.title}
							components={{ p: "h2" }}
						>
							{title}
						</Markdown>
					)}
					{img && (
						<Img
							data={img}
							className={styles.img}
							sizes="(max-width: 799px) 100vw, 50vw"
						/>
					)}
					<Markdown className={styles.description}>{description}</Markdown>
				</div>
			))}
		</div>
	);
};
export default ListWithOverflowIcon;
