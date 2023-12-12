import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";
import FeaturesSection from "./featuresSection";

const Features = ({ data: { heading, feautures } }) => {
  const features = feautures;
  
	const header = (
		<header className={styles.header}>
			<DecorativeHeading type="h2">{heading}</DecorativeHeading>
		</header>
	);

	return (
		<FeaturesSection header={header}>
			{features.map((feature, i) => (
				<div
					className={`${styles.item} item`}
					key={i}
				>
					<Img
						data={feature.img}
						className={styles.img}
						sizes="48px"
					/>
					<Markdown className={styles.title}>{feature.title}</Markdown>
				</div>
			))}
		</FeaturesSection>
	);
};
export default Features;
