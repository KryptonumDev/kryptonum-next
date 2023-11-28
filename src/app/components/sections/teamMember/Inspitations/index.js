"use client";

import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import TagCloud from "@frank-mayer/react-tag-cloud";
import styles from "./styles.module.scss";

const Inspirations = ({ data }) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">Chmura **inspiracji**:</DecorativeHeading>
			<TagCloud
				className={styles.wrapper}
				options={(w) => ({
					radius: w.innerWidth >= 768 ? 768 / 2 : w.innerWidth / 2 - 16,
				})}
				onClickOptions={{ passive: true }}
			>
				{data}
			</TagCloud>
		</section>
	);
};
export default Inspirations;
