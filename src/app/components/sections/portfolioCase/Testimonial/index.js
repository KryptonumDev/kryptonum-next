import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import { Quote } from "@/app/components/atoms/Icons";
import Img from "@/utils/Img";
import Button from "@/app/components/atoms/Button";

const Testimonial = ({ data: { name, text, cta, img } }) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">{"**Opinia** klienta"}</DecorativeHeading>
			<div className={styles.hr}></div>
			<div className={styles.author}>
				<Img
					data={img}
					className={styles.img}
				/>
				<div>
					<h3>{name}</h3>
					<Button data={cta} />
				</div>
			</div>
			<div className={styles.content}>
				<Quote />
				<p>{text}</p>
			</div>
		</section>
	);
};
export default Testimonial;
