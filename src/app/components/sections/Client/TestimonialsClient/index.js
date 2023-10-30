"use client";

import styles from "./styles.module.scss";
import Img from "@/utils/Img";
import { useRef, useState } from "react";
import "swiper/css";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../atoms/Button";
import { Quote } from "../../../atoms/Icons";
const TestimonialsClient = ({ testimonials, children }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);

	const handlePrev = () => swiperRef?.current.swiper.slidePrev();
	const handleNext = () => swiperRef?.current.swiper.slideNext();
	return (
		<section className={styles.wrapper}>
			{children}
			<Swiper
				className={styles.slider}
				ref={swiperRef}
				spaceBetween={122}
				slidesPerView={1}
				modules={[A11y]}
				onSlideChange={(slider) => setActiveIndex(slider.activeIndex)}
			>
				{testimonials.map(({ name, text, cta, img }, i) => (
					<SwiperSlide className={styles.slide} key={i}>
						<div className={styles.author}>
							<Img data={img} className={styles.img} width={158} height={158} />
							<div>
								<h3>{name}</h3>
								<Button theme={cta.theme} to={cta.href}>
									{cta.text}
								</Button>
							</div>
						</div>
						<div className={styles.context}>
							<Quote />
							<p>{text}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.controls}>
				<button
					onClick={() => {
						handlePrev();
					}}
					disabled={activeIndex === 0}
					aria-label="Przejdź do poprzedniego elementu"
				>
					<ArrowLeft />
				</button>
				<button
					onClick={() => {
						handleNext();
					}}
					disabled={activeIndex === testimonials.length - 1}
					aria-label="Przejdź do następnego elementu"
				>
					<ArrowRight />
				</button>
			</div>
		</section>
	);
};
export default TestimonialsClient;

const ArrowLeft = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
		<path
			stroke="#EFF0F3"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M19 12H5m0 0l7 7m-7-7l7-7"
		></path>
	</svg>
);

const ArrowRight = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
		<path
			stroke="#EFF0F3"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M5 12h14m0 0l-7-7m7 7l-7 7"
		></path>
	</svg>
);
