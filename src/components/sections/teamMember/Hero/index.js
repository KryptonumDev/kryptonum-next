import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import styles from "./styles.module.scss";

const Hero = ({ name, cryptonym, img }) => {
	return (
		<section className={`${styles.section} hero`}>
			<header>
				<DecorativeHeading type="h1">{name}</DecorativeHeading>
				<h2 className="strong">{cryptonym}</h2>
			</header>
			<Img
				data={img}
				className={`${styles.img} personBorder`}
				sizes="300px"
				quality={100}
			/>
		</section>
	);
};
export default Hero;
