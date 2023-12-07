"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const FeaturesClient = ({ header, children }) => {
	const wrapperRef = useRef(null);
	useEffect(() => {
		const wrapper = wrapperRef.current;
		const items = wrapper.querySelectorAll(".item");
		let animationFrameId;
		const handleResize = () => {
			animationFrameId = requestAnimationFrame(() => {
				let itemsMaxHeight = 0;
				items.forEach((item) => {
					let itemHeight = item.getBoundingClientRect().height;
					itemsMaxHeight = Math.max(itemsMaxHeight, itemHeight);
				});
				items[items.length - 1].style.height = itemsMaxHeight + "px";
			});
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		const handleShrinkMargin = () => {
			const { top } = wrapper.getBoundingClientRect();
			if (top <= 72) {
				wrapper.classList.add("scrolled");
			} else {
				wrapper.classList.remove("scrolled");
			}
		};
		window.addEventListener("scroll", handleShrinkMargin);
		return () => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("scroll", handleShrinkMargin);
		};
	}, []);

	return (
		<section className={styles.section}>
			{header}
			<div
				className={styles.wrapper}
				ref={wrapperRef}
			>
				{children}
			</div>
		</section>
	);
};
export default FeaturesClient;
