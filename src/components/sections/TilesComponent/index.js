import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const TilesComponent = ({ data: { heading, list } }) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h2">{heading}</DecorativeHeading>
			</header>
			<div className={styles.wrapper}>
				{list.map(({ icon, title, description }, i) => (
					<div
						className={`${styles.item} ${icon ? styles.isIcon : ""}`}
						key={i}
					>
						{title ? (
							<Markdown className={styles.title}>{title}</Markdown>
						) : (
							<Img
                data={icon}
								className={styles.img}
								sizes="48px"
							/>
						)}
						<Markdown className={styles.description}>{description}</Markdown>
					</div>
				))}
			</div>
		</section>
	);
};
export default TilesComponent;
