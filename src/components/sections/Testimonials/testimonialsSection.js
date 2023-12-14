"use client";

import Button from "@/components/atoms/Button";
import Img from "@/utils/Img";
import { useRef, useState } from "react";
import "swiper/css";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const TestimonialsSection = ({ testimonials, quote, arrowLeft, arrowRight, children }) => {
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
					<SwiperSlide
						className={styles.slide}
						key={i}
					>
						<div className={styles.author}>
							<Img
								data={img}
								className={styles.img}
								width={158}
								height={158}
								sizes="158px"
							/>
							<div>
								<h3>{name}</h3>
								<Button data={cta} />
							</div>
						</div>
						<div className={styles.context}>
							{quote}
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
					{arrowLeft}
				</button>
				<button
					onClick={() => {
						handleNext();
					}}
					disabled={activeIndex === testimonials.length - 1}
					aria-label="Przejdź do następnego elementu"
				>
					{arrowRight}
				</button>
			</div>
		</section>
	);
};
export default TestimonialsSection;
