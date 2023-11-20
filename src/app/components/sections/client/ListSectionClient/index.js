"use client";

import styles from "./styles.module.scss";
import { useRef, useEffect } from "react";

const ListSectionClient = ({
	decorativeHeading,
	decorativeHeading2,
	markdown,
	markdown2,
	markdown3,
	secondParagraph,
  children
}) => {
	const wrapperRef = useRef(null);

	const animateItems = async () => {
		const items = await wrapperRef.current.querySelectorAll(`div[class*=".item"]`);
		items.forEach((item) => {
			const { top } = item.getBoundingClientRect();
			if (top <= window.innerHeight * 0.66) {
				item.classList.add(styles.active);
			} else {
				item.classList.remove(styles.active);
			}
		});
	};

	const handleScroll = () => {
		requestAnimationFrame(animateItems);
	};

	useEffect(() => {
		animateItems();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className={styles.section}>
			{secondParagraph && decorativeHeading}
			<div className={styles.copy}>
				{!secondParagraph && decorativeHeading2}
				{markdown}
				{secondParagraph && markdown2}
			</div>
			{markdown3}
			<div
				className={styles.wrapper}
				ref={wrapperRef}
			>
				{children}
			</div>
		</section>
	);
};

export default ListSectionClient;
