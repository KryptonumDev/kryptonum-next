import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";

const ListWithOverflowIcon = ({ data: { blocks }, className, itemClassName }) => {
	return (
		<div className={`${styles.wrapper} ${className}`}>
			{blocks.map(({ icon, description, title, img }, i) => (
				<div className={`${styles.item} ${itemClassName}`} key={i} data-isImg={Boolean(img)}>
					<Img data={icon} className={styles.icon}></Img>
					{title && (
						<ReactMarkdown className={styles.title} components={{ p: "h2" }}>
							{title}
						</ReactMarkdown>
					)}
					<ReactMarkdown className={styles.description}>{description}</ReactMarkdown>
				</div>
			))}
		</div>
	);
};
export default ListWithOverflowIcon;
