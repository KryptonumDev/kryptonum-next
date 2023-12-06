import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";
import Button from "../../atoms/Button";

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
						sizes="(max-width: 1299px) 100vw, (min-width: 1300px) 50vw"
						loading="eager"
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
						loading="eager"
					/>
				</div>
			)}
		</section>
	);
};

export default Hero;
