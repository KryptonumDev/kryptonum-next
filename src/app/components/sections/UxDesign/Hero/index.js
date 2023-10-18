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
				"Laptop z otwartą podstroną nowości na stronie sits.eu. Laptop stoi na oparciu sofy SITS na tle jasnej ściany",
			url: "https://cdn.sanity.io/images/8mfl0q49/production/56e7b94ddf3534397afa11aa10599de5c0a01cef-1929x1152.webp",
			metadata: {
				lqip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAPoAAAD6AG1e1JrAAACaklEQVQokYWSWUtbQRSA848KQhF8bBEL/oa2UJBC+1h8qKC4UJcHraiorTbRxJoYEveYvfdqrje5d7IYTcxm3JKv2n9RMiJE29KHjxlmznycOedYrq+vubq6+oPG+WNqtdp/sVxeXtLgXnRxcUGlUqFYLFAsFiWlUklSLpflXbValbHNonq9fifM5U5okM/nZHDjUSqVJJGII4SBECbCvFuTSSHJZNIytjnr+r0wEg0RjYZQ1SiplODk5JikMMnnjrk4P+O8WuGsUqJaKcl9uVQge5SRP3hchnq9jmVuboY19yrhSICEcUgyaSDMOGflIrc/a/y6gdubOrWrKpdnRcqFHNlMmkLhH8JXr18yOvYJ394WpqkT1w/YVyMkTZ3jjCCfTVHKZ8kKncR+CC3qJx5TOc3n/1pHS2vrU7q63uByrZBIaChKGP/eNrqmkhY6yUSMjIiTETpCV9GUIAdKmKNMWjaz9ljY0vKEd+/fsrXtlcJAYBen04HX42Z7cx2P24nbtcqaa5XV7w5s3xawWRcJ+P2cnp5KafPXLW1trQwO9aGoYQxDw+/fxmr9yuTkBENDg/T0fJT09fUyMNAvGRkZxm63o2marGVzppb29mdMz3xG1/cxjEOCQR9Opx2bdYGxsWG6uz/Q39/L7Ow0drsNh2OJZbsNt9uJokTluD0Qdna+YH5+hngihil0QiEf7rUVvB4nVusXxsdHWVpeJBzxE4sp/FBCBAI77OxuyHFrzHBzcywdHc+ZmppA01RM45C9vU3sywuse534fBvs7HhRlBCi0WVDQ92PEAz52Nzy4PNtkU6nHmT4G7zX/BOZ2Oh7AAAAAElFTkSuQmCC",
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
					<Img data={image} className={styles.img} />
				</div>
			</section>
	);
};

export default Hero;
