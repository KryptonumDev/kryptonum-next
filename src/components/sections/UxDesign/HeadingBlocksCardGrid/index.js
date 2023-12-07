import HeadingWithDescriptionTitle from "@/components/molecules/HeadingWithDescriptionTitle";
import AnimatedCardGrid from "@/components/organisms/AnimatedCardGrid";
import styles from "./styles.module.scss";

const HeadingBlocksCardGrid = ({ data }) => {
	return (
		<section className={styles.section}>
			<HeadingWithDescriptionTitle
				data={data}
			/>
			<AnimatedCardGrid data={data.cardGrid} />
		</section>
	);
};
export default HeadingBlocksCardGrid;
