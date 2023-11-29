import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const Hero = ({ name, cryptonym, img }) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading>{name}</DecorativeHeading>
				<h2 className="strong">{cryptonym}</h2>
			</header>
			<Img
				data={img}
				className={`${styles.img} personBorder`}
			/>
		</section>
	);
};
export default Hero;