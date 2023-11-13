"use client";
import Button from "@/components/atoms/Button";
import { useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';

const RoadmapClient = ({
	list,
	cta,
	children
}) => {
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
			<div className={`${styles.sticky} sticky`}>
				{children}
				<div className={`${styles.line} line`}></div>
				<div className={`${styles.roadmap} roadmap`}>
					{list.map((item, i) => (
						<div className={`${styles.roadmapItem} roadmapItem`} key={i}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							{i + 1 === list.length && cta?.text && (
								<Button to={cta.href} theme={cta.theme} className={`${styles.cta} cta`}>
									{cta.text}
								</Button>
							)}
						</div>
					))}
					<div className={`${styles.roadmapItem} ${styles.active} roadmapItem active`}></div>
				</div>
			</div>
		</section>
	);
};
export default RoadmapClient;
