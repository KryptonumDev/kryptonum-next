"use client";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import { Suspense, useEffect, useRef, useState } from "react";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const Card = ({ className = "", data: { title, description, img } }) => {
  return (
    <div className={className}>
      <div>
        {img && <Img data={img} className={styles.img} sizes="40px" quality={100}/>}
        <Markdown className={styles.title} components={{ p: "h3" }}>
          {title}
        </Markdown>
      </div>
      <Markdown className={styles.description}>{description}</Markdown>
    </div>
  );
};

const SliderSection = ({ data: { slides }, arrowLeft, arrowRight, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef?.current.swiper.slidePrev();
  const handleNext = () => swiperRef?.current.swiper.slideNext();

  return (
    <section className={styles.wrapper}>
      {children}
      {windowWidth >= 1050 ? (
        <Suspense>
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
            onSlideChange={(slider) => setActiveIndex(slider.activeIndex)}
            className={styles.slider}
          >
            {slides.map((slide, i) => (
              <SwiperSlide className={styles.slide} key={i}>
                <Card data={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.controls}>
            <button onClick={handlePrev} disabled={activeIndex === 0} aria-label="Przejdź do poprzedniego elementu">
              {arrowLeft}
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === slides.length - 1}
              aria-label="Przejdź do następnego elementu"
            >
              {arrowRight}
            </button>
          </div>
        </Suspense>
      ) : (
        <div className={styles.items}>
          {slides.map((slide, i) => (
            <Card data={slide} key={i} className={styles.item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SliderSection;
