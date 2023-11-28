import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";

const Benefits = ({ data }) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">Do zespołu **wnoszę...**</DecorativeHeading>
			<Markdown>{data}</Markdown>
		</section>
	);
};
export default Benefits;
