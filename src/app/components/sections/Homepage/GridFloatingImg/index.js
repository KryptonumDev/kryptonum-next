"use client";

import React, { useEffect, useRef} from "react";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import { ArrowTopRight } from "@/components/atoms/Icons";
import Link from "next/link";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import { motion, useMotionValue, useSpring } from 'framer-motion';

const options = {
  damping: 20,
  swiftness: 80,
}


const GridFloatingImg = ({ data: { heading, list } }) => {
	const wrapper = useRef(null);

	const mouse = {
		x: useSpring(useMotionValue(0), options),
		y: useSpring(useMotionValue(0), options),
	};

	const handleMouseMove = (e) => {
		const x = e.clientX - wrapper.current.getBoundingClientRect().left;
		const y = e.clientY - wrapper.current.getBoundingClientRect().top;
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
				<DecorativeHeading type="h2">{heading}</DecorativeHeading>
			</header>
			<div className={styles.wrapper} ref={wrapper}>
				{list.map(({title, description, img, href}, i) => (
					<Link href={href} className={styles.item} key={i}>
            <motion.div
            style={{
              left: mouse.x,
              top: mouse.y,
            }}
            className={styles.img}
            >
						<Img data={img} className={styles.cover} sizes="320px" width={320} height={320} />
						</motion.div>
            <h3>
							<span>{title}</span>
							<ArrowTopRight />
						</h3>
						<ReactMarkdown className={styles.description}>{description}</ReactMarkdown>
					</Link>
				))}
			</div>
		</section>
	);
};

export default GridFloatingImg;
