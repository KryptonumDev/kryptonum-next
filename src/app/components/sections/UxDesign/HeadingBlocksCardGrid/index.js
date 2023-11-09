import HeadingWithDescriptionTitle from "@/app/components/molecules/HeadingWithDescriptionTitle";
import AnimatedCardGrid from "@/app/components/organisms/AnimatedCardGrid";
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
