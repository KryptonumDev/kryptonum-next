'use client'

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const easeInOut = (t) => {
  return 0.5 - Math.cos(t * Math.PI) / 2;
};

const ShowcaseClient = ({
	decorativeHeading,
	markdown,
	logos,
	showcase_SummaryLeft,
	showcase_SummaryRight,
	children,
  ...props
}) => {
	const listRef = useRef();
	const [animationValue, setAnimationValue] = useState(0);

	const handleScroll = () => {
		const list = listRef.current;
		const windowHeight = window.innerHeight;
		const { top, bottom } = list.getBoundingClientRect();
		const distance = bottom - top;
		const scrollPosition = windowHeight / 2 - top;
		const value = scrollPosition / distance;
		let animValue = 0;

		if (top < windowHeight / 2 && bottom > windowHeight / 2) {
			animValue = easeInOut(value);
		} else if (bottom < windowHeight * 1.5) {
			animValue = 1;
		} else if (top > windowHeight * 0.5) {
			animValue = 0;
		}
		animValue =
			window.innerWidth >= 3000
				? `-${animValue * 200}%`
				: `-${animValue * (3000 + window.innerWidth)}px`;
		setAnimationValue(animValue);
	};

	useEffect(() => {
		const handleAnimationFrame = () => {
			handleScroll();
			requestAnimationFrame(handleAnimationFrame);
		};
		handleAnimationFrame();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className={styles.section}>
			<header>
				{decorativeHeading}
				{markdown}
			</header>
			<div
				className={styles.list}
				ref={listRef}
			>
				<div
					className={styles.showcase}
					style={{ transform: `translate(${animationValue}, -50%)` }}
				>
					{logos}
				</div>
				{children}
			</div>
			<div className={styles.summary}>
				<p>{showcase_SummaryLeft}</p>
				<p>{showcase_SummaryRight}</p>
			</div>
		</section>
	);
};
export default ShowcaseClient;
