import DecorativeHeading from "../../../atoms/DecorativeHeading";
import { Quote } from "../../../atoms/Icons";
import styles from "./styles.module.scss";

const Testimonials = ({ data: { testimonials_Heading, testimonials_List } }) => {
	return (
		<seciton className={styles.section}>
			<DecorativeHeading type="h2">{testimonials_Heading}</DecorativeHeading>
			<p className={styles.noMouseText}>
				<HandClick />
				<span>Dotknij, aby zobaczyć</span>
			</p>
			<div className={styles.wrapper}>
				{testimonials_List.map((item, i) => (
					<div
						className={styles.item}
						key={i}
						tabIndex="0"
					>
						<Quote />
						<p>{item}</p>
					</div>
				))}
			</div>
		</seciton>
	);
};

const HandClick = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="25"
		height="24"
		fill="none"
	>
		<path
			stroke="#EFF0F3"
			strokeWidth="2"
			d="M16.498 10.048h-1.572s-.572-3.445-1.072-5.222c-.5-1.778-.925-2.778-2.428-2.778-1.504 0-1.934 1.244-1.934 2.778l.584 8.555-3.24-.94s-2.233-.32-3.026.94l-.384 1.567 6.65 5.944c.403.422 1.356.656 1.934.656h6.236c1.067 0 1.972-.778 2.146-1.856l.534-5.644c.477-2.791-2.216-4-4.428-4z"
		></path>
	</svg>
);

export default Testimonials;
