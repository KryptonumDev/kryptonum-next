import Markdown from "@/utils/markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const Process = ({ data }) => {
	return (
		<section className={styles.section}>
			{data.heading && (
				<header>
					<DecorativeHeading type="h2">{heading}</DecorativeHeading>
				</header>
			)}
			<div className={styles.wrapper}>
				{data.map(({ title, description }, i) => (
					<div className={styles.item} key={i}>
						<Markdown className={styles.title} components={{ p: "h3" }}>
							{title}
						</Markdown>
						<Markdown className={styles.description}>{description}</Markdown>
					</div>
				))}
			</div>
		</section>
	);
};
export default Process;
