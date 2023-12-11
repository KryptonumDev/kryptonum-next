import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const ImageComponent = ({ data: { isMockup, img } }) => {
	return (
		<section className={isMockup ? `${styles.mockup} ${styles.section}` : styles.section}>
			{isMockup && <MockupFrame />}
			<Img
				data={img}
				className={styles.img}
				sizes="100vw"
			/>
		</section>
	);
};

const MockupFrame = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1094"
		height="656"
		viewBox="0 0 1094 656"
		fill="none"
	>
		<rect
			width="1090"
			height="652"
			x="3"
			y="3"
			stroke="#5B5F67"
			strokeWidth="2"
			rx="21"
		></rect>
		<path
			fill="#5B5F67"
			d="M62 0h40v2H62zm50 0h40v2h-40zM0 70V30h2v40z"
		></path>
	</svg>
);
export default ImageComponent;
