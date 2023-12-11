import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const Hero = ({ name, cryptonym, img }) => {
	return (
		<section className={`${styles.section} hero`}>
			<header>
				<DecorativeHeading>{name}</DecorativeHeading>
				<h2 className="strong">{cryptonym}</h2>
			</header>
			<Img
				data={img}
				className={`${styles.img} personBorder`}
				sizes="300px"
			/>
		</section>
	);
};
export default Hero;
