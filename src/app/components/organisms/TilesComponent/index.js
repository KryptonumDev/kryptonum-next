import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import Img from "@/utils/Img";

const TilesComponent = ({ data: { heading, list }, additionalStyles}) => {
	return (
		<div
			className={additionalStyles ? `${styles.section} ${additionalStyles.tiles}` : styles.section}
		>
			<header>
				<DecorativeHeading type="h2">{heading}</DecorativeHeading>
			</header>
			<div className={styles.wrapper}>
				{list.map(({ icon, title, description }, i) => (
					<div className={`${styles.item}${icon ? ` ${styles.isIcon}` : ""}`} key={i}>
						{title ? (
							<Markdown className={`${styles.title} ${additionalStyles.tilesTitle}`}>{title}</Markdown>
						) : (
							<Img data={icon} className={styles.img} />
						)}
						<Markdown className={styles.description}>{description}</Markdown>
					</div>
				))}
			</div>
		</div>
	);
};
export default TilesComponent;
