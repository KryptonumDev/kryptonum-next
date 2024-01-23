import DecorativeHeading from "../../../atoms/DecorativeHeading";
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

export default Testimonials;

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

const Quote = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="url(#quote)"
  >
    <path d="M12.623 6.662c3.004 0 5.37 1.183 7.1 3.55 1.728 2.275 2.593 5.551 2.593 9.829 0 4.005-.91 7.69-2.73 11.058-1.73 3.367-4.323 6.735-7.782 10.102-.091.091-.228.137-.41.137-.273 0-.5-.137-.682-.41-.182-.273-.182-.5 0-.682 4.46-4.55 6.69-9.92 6.69-16.11 0-2.548-.456-4.414-1.366-5.597-.819 1.365-2.412 2.048-4.778 2.048-2.002 0-3.595-.592-4.778-1.775-1.183-1.274-1.775-2.958-1.775-5.05 0-2.276.683-4.005 2.048-5.189 1.456-1.274 3.413-1.91 5.87-1.91zm22.39 0c3.003 0 5.369 1.183 7.098 3.55 1.73 2.275 2.594 5.551 2.594 9.829 0 4.005-.91 7.69-2.73 11.058-1.73 3.367-4.323 6.735-7.782 10.102-.09.091-.227.137-.41.137-.273 0-.5-.137-.682-.41-.182-.273-.182-.5 0-.682 4.46-4.55 6.69-9.92 6.69-16.11 0-2.548-.456-4.414-1.366-5.597-.819 1.365-2.412 2.048-4.778 2.048-2.002 0-3.595-.592-4.778-1.775-1.183-1.274-1.775-2.958-1.775-5.05 0-2.276.683-4.005 2.048-5.189 1.456-1.274 3.413-1.91 5.87-1.91z"></path>
    <defs>
      <linearGradient
        id="quote"
        x1="43.955"
        x2="2.382"
        y1="6.662"
        y2="9.717"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2DD282"></stop>
        <stop
          offset="1"
          stopColor="#90F4E8"
        ></stop>
      </linearGradient>
    </defs>
  </svg>
);