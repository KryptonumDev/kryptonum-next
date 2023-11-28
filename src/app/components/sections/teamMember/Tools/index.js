import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Img from "@/utils/Img";

const Tools = ({ data }) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">**Narzędzia**</DecorativeHeading>
			<div className={styles.wrapper}>
				{data.map((tool, i) => (
					<div
						className={styles.item}
						key={i}
					>
						<Img
							data={tool.img}
							className={styles.img}
						/>
						<p>{tool.name}</p>
					</div>
				))}
			</div>
		</section>
	);
};
export default Tools;
