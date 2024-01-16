"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const RoadmapSection = ({ children }) => {
	const roadmapRef = useRef();
	const [scrollable, setScrollable] = useState(0);
	useEffect(() => {
		const roadmap = roadmapRef.current;
		const container = roadmap.querySelector(".roadmap");
		const items = container.querySelectorAll(".roadmapItem");
		const anim = () => {
			var scrollableWidth = container.scrollWidth - container.clientWidth;
			setScrollable(scrollableWidth);

			const { top } = roadmap.getBoundingClientRect();
			const topPositive = Math.abs(top);
			items.forEach((item) => {
				item.getBoundingClientRect().left <= window.innerWidth / 2.5
					? item.classList.add(styles.active)
					: item.classList.remove(styles.active);
			});
			if (topPositive >= scrollableWidth) {
				container.scrollTo({ left: scrollableWidth });
			} else if (top <= 0) {
				container.scrollTo({ left: topPositive });
			} else {
				container.scrollTo({ left: 0 });
			}
		};
		anim();
		window.addEventListener("resize", anim);
		window.addEventListener("scroll", anim);
	}, []);
	return (
		<section
			className={`${styles.roadmapWrapper}`}
			style={{ minHeight: `calc(100vh + ${scrollable}px` }}
			ref={roadmapRef}
		>
			{children}
		</section>
	);
};
export default RoadmapSection;
