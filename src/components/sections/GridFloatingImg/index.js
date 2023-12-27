"use client";

import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import { removeMarkdown } from "@/utils/functions";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const options = {
  damping: 50,
  swiftness: 300,
};

const GridFloatingImg = ({ data: { heading, list } }) => {
  const wrapper = useRef(null);

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const handleMouseMove = (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    wrapper?.current?.addEventListener("mousemove", handleMouseMove);
    return () => wrapper?.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2" decoration={false}>
          {heading}
        </DecorativeHeading>
      </header>
      <div className={styles.wrapper} ref={wrapper}>
        {list.map(({ title, description, img, href }, i) => (
          <div className={styles.item} key={i}>
            {href && <Link href={href} aria-label={removeMarkdown(title)} className={styles.link} />}
            <motion.div
              style={{
                left: mouse.x,
                top: mouse.y,
              }}
              className={styles.img}
            >
              <Img data={img} className={styles.cover} sizes="320px" quality={100}/>
            </motion.div>
            <h2>
              <span>{title}</span>
              <Arrow />
            </h2>
            <Markdown className={styles.description}>{description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridFloatingImg;

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    stroke="url(#paint0_linear_7869_9975)"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 34l20-20m0 0H14m20 0v20"></path>
    <defs>
      <linearGradient
        id="paint0_linear_7869_9975"
        x1="33.625"
        x2="12.811"
        y1="14"
        y2="15.326"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2DD282"></stop>
        <stop offset="1" stopColor="#90F4E8"></stop>
      </linearGradient>
    </defs>
  </svg>
);
