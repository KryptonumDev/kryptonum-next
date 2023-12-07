import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const TilesComponent = ({ 
	data: { 
		heading,
		list 
	}, 
	additionalStyles }) => {
	return (
		<div
			className={additionalStyles ? `${styles.section} ${additionalStyles.tiles}` : styles.section}
		>
			{heading && <header>
				<DecorativeHeading type="h2">{heading}</DecorativeHeading>
			</header>}
			<div className={styles.wrapper}>
				{list.map(({ icon, title, description }, i) => (
					<div
						className={`${styles.item}${icon ? ` ${styles.isIcon}` : ""}`}
						key={i}
					>
						{title ? (
							<Markdown
								className={
									additionalStyles ? `${styles.title} ${additionalStyles.title}` : styles.title
								}
							>
								{title}
							</Markdown>
						) : (
							<Img
								data={icon}
								className={styles.img}
							/>
						)}
						<Markdown
							className={
								additionalStyles
									? `${styles.description} ${additionalStyles.description}`
									: styles.title
							}
						>
							{description}
						</Markdown>
					</div>
				))}
			</div>
		</div>
	);
};
export default TilesComponent;
