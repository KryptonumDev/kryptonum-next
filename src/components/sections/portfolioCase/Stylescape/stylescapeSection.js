"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const animation = { rotate: 2, x: 60 };

const StylescapeSection = ({ header, stylescapes, children }) => {
	const stylescapesRef = useRef(null);

	useEffect(() => {
		const items = stylescapesRef.current?.querySelectorAll(".img");
		if (items) {
			const animateItems = () => {
				const windowHeight = window.innerHeight;
				items.forEach((item, i) => {
					const { top, bottom } = item.getBoundingClientRect();
					let progress = 0;
					const rotationAngle = i % 2 === 0 ? -animation.rotate : animation.rotate;
					if (top >= windowHeight) {
						progress = 0;
						item.style = null;
					} else if (bottom <= 0) {
						progress = 1;
						item.style.transform = `rotate(${rotationAngle}deg) translateX(${60}%)`;
					} else {
						progress = 1 - bottom / windowHeight;
						const translationX =
							Math.ceil(progress * (i % 2 === 0 ? -animation.x : animation.x) * 10000) / 10000;
						item.style.transform = `rotate(${rotationAngle}deg) translateX(${translationX}%)`;
					}
				});
				requestAnimationFrame(animateItems);
			};

			const handleScroll = () => {
				requestAnimationFrame(animateItems);
			};
			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);
	
	return (
		<section className={styles.section}>
			{header}
			<div
				className={styles.stylescapes}
				ref={stylescapesRef}
			>
				{stylescapes}
			</div>
			{children}
		</section>
	);
};
export default StylescapeSection;
