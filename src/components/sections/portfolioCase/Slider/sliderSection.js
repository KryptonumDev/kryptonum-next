"use client";

import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import { useRef, useState } from "react";
import "swiper/css";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const SliderSection = ({ arrowLeft, arrowRight, slides, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef?.current.swiper.slidePrev();
  const handleNext = () => swiperRef?.current.swiper.slideNext();

  return (
    <section className={styles.section}>
      {children}
      <Swiper
        ref={swiperRef}
        spaceBetween={32}
        slidesPerView={1.5}
        breakpoints={{
          0: {
            spaceBetween: 16,
            slidesPerView: 1.1,
          },
          768: {
            spaceBetween: 32,
            slidesPerView: 1.5,
          },
        }}
        modules={[A11y]}
        className={styles.slider}
        onSlideChange={(slider) => setActiveIndex(slider.activeIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide className={styles.slide} key={i}>
            <div>
              <Img data={slide.img} className={styles.img} sizes="40px" />
              <Markdown className={styles.title}>{slide.title}</Markdown>
            </div>
            <Markdown className={styles.description}>{slide.description}</Markdown>
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
          disabled={activeIndex === slides.length - 1}
          aria-label="Przejdź do następnego elementu"
        >
          {arrowRight}
        </button>
      </div>
    </section>
  );
};
export default SliderSection;
