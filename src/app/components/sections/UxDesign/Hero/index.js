import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Img from "@/utils/Img";

const Hero = () => {
	const breadcrumbs = [
		{
			name: "Projektowanie UX",
			link: "/projektowanie-ux",
		},
	];
	const image = {
		asset: {
			altText:
				"ASDASDasd",
			url: "/Hero.png",
			metadata: {
				dimensions: {
					height: 1152,
					width: 1929,
				},
			},
		},
	};

	const heroHeading = "**Projektowanie UX**, by klikało się lepiej";

	return (
			<section className={styles.section}>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
				<header>
					<div className={styles.copy}>
						<DecorativeHeading type="h1">{heroHeading}</DecorativeHeading>
					</div>
					<div className={styles.spanWrapper}>
						<span className={styles.span}>Kompleksowe usługi graficzne i projekowanie.</span>
					</div>
				</header>
				<div className={styles.imageWrapper}>
					<Img data={image} className={styles.img} sizes="100vw" loading="eager"/>
				</div>
			</section>
	);
};

export default Hero;
