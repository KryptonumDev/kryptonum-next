import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const Benefits = ({ data }) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">Do zespołu **wnoszę...**</DecorativeHeading>
			<Markdown>{data}</Markdown>
		</section>
	);
};
export default Benefits;
