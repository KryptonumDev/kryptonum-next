import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const Attitude = ({
	data: { attitude_Heading, attitude_Paragraph, attitude_Claim, attitude_Img },
}) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading
					type="h2"
					className={styles.heading}
				>
					{attitude_Heading}
				</DecorativeHeading>
				<Markdown className={styles.paragraph}>{attitude_Paragraph}</Markdown>
			</header>
			<Img
				data={attitude_Img}
				className={styles.img}
				sizes="(max-width: 899px) 40vw, 100vw"
			/>
			<Markdown className={styles.claim}>{attitude_Claim}</Markdown>
		</section>
	);
};
export default Attitude;
