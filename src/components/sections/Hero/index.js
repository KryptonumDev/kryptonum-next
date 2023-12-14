import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import Button from "../../atoms/Button";
import styles from "./styles.module.scss";

const Hero = ({
	data: { heading, subheading, image, sideImage, paragraph, cta },
	isBlogHero = false,
}) => {
	return (
		<section className={isBlogHero ? `${styles.section} ${styles.blogSection} hero` : `${styles.section} hero`}>
			<header>
				<div className={styles.copy}>
					<DecorativeHeading type="h1">{heading}</DecorativeHeading>
					{paragraph && <Markdown className={styles.paragraph}>{paragraph}</Markdown>}
					{cta?.text && (
						<Button
							data={cta}
							className={styles.cta}
						/>
					)}
				</div>
				{sideImage && (
					<Img
						data={sideImage}
						className={styles.sideImg}
						priority={true}
					/>
				)}
				{subheading && (
					<div className={styles.spanWrapper}>
						<Markdown className={styles.span}>{subheading}</Markdown>
					</div>
				)}
			</header>
			{image && (
				<div className={styles.imageWrapper}>
					<Img
						data={image}
						className={styles.img}
						sizes="100vw"
						priority={true}
					/>
				</div>
			)}
		</section>
	);
};

export default Hero;
