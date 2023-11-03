"use server";

import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const Hero = ({ data: { heading, breadcrumbs, subheading, img, sideImg } }) => {
	return (
		<section className={styles.section}>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<header>
				<div className={styles.copy}>
					<DecorativeHeading type="h1">{heading}</DecorativeHeading>
				</div>
				{subheading && (
					<div className={styles.spanWrapper}>
						<span className={styles.span}>{subheading}</span>
					</div>
				)}
				{sideImg && (
					<Img
						data={sideImg}
						className={styles.sideImg}
						sizes="(max-width: 1299px) 100vw, (min-width: 1300px) 50vw"
						loading="eager"
					/>
				)}
			</header>
			<div className={styles.imageWrapper}>
				<Img data={img} className={styles.img} sizes="100vw" loading="eager" />
			</div>
		</section>
	);
};

export default Hero;
