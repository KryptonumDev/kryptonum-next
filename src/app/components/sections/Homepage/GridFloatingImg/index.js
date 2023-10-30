"use client";

import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import { ArrowTopRight } from "@/components/atoms/Icons";
import Img from "@/utils/Img";
import { removeMarkdown } from "@/utils/functions";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";

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
				<DecorativeHeading type="h2">{heading}</DecorativeHeading>
			</header>
			<div className={styles.wrapper} ref={wrapper}>
				{list.map(({ title, description, img, href }, i) => (
					<div className={styles.item} key={i}>
						<Link href={href} aria-label={removeMarkdown(title)} className={styles.link}>
							<motion.div
								style={{
									left: mouse.x,
									top: mouse.y,
								}}
								className={styles.img}
							>
								<Img data={img} className={styles.cover} sizes="320px" />
							</motion.div>
							<h3>
								<span>{title}</span>
								<ArrowTopRight />
							</h3>
							<Markdown className={styles.description}>{description}</Markdown>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default GridFloatingImg;
