import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import { Quote } from "@/components/atoms/Icons";
import Img from "@/components/atoms/Img";
import styles from "./styles.module.scss";

const Testimonial = ({ data: { name, text, cta, img } }) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">{"**Opinia** klienta"}</DecorativeHeading>
			<div className={styles.hr}></div>
			<div className={styles.author}>
				<Img
					data={img}
					className={styles.img}
					sizes="156px"
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
