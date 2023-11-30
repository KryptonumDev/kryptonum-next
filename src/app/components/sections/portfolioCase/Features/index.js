import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import FeaturesClient from "@/app/components/organisms/FeaturesClient";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const Features = ({ data: { heading, feautures } }) => {
  const features = feautures;
  
	const header = (
		<header className={styles.header}>
			<DecorativeHeading type="h2">{heading}</DecorativeHeading>
		</header>
	);

	return (
		<FeaturesClient header={header}>
			{features.map((feature, i) => (
				<div
					className={`${styles.item} item`}
					key={i}
				>
					<Img
						data={feature.img}
						className={styles.img}
					/>
					<Markdown className={styles.title}>{feature.title}</Markdown>
				</div>
			))}
		</FeaturesClient>
	);
};
export default Features;
