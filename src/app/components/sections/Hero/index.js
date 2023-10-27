import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const Hero = ({ data: { heading, breadcrumbs, subheading, img } }) => {
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
			</header>
			<div className={styles.imageWrapper}>
				<Img data={img} className={styles.img} sizes="100vw" loading="eager"/>
			</div>
		</section>
	);
};

export default Hero;
