"use client";

import React, { useRef, useState } from "react";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import fetchData from "@/utils/fetchData";
import TestimonialsSwiper from "@/components/organisms/TestimonialsSwiper";
import styles from "./styles.module.scss";
const Testimonials = async ({ heading }) => {
	const data = await query();

	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);

	const handlePrev = () => swiperRef?.current.swiper.slidePrev();
	const handleNext = () => swiperRef?.current.swiper.slideNext();

	return (
		<section className={styles.wrapper}>
			<DecorativeHeading type="h2">{heading || "Zobacz, co mówią **klienci**:"}</DecorativeHeading>
			<TestimonialsSwiper data={data} />
		</section>
	);
};

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
    testimonials: allTestimonials(limit: 3, sort: {_createdAt:ASC}) {
      name
      project
      text
      cta {
        theme
        text
        href
      }
      img {
        asset {
          altText
          url
          metadata {
            lqip
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `);
	return data;
};

export default Testimonials;
