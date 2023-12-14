import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const AfterWork = ({ data }) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">A po **godzinach**...</DecorativeHeading>
			<Markdown>{data}</Markdown>
		</section>
	);
};
export default AfterWork;