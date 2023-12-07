"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

const OrderedListClient = ({ array, children }) => {
	const locationPath = usePathname();

	const listRef = useRef(null);

	useEffect(() => {
		const list = listRef.current;
		const items = list.querySelectorAll("li");

		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			items.forEach((item) => {
				const { top } = item.getBoundingClientRect();
				if (top <= windowHeight * 0.5) {
					item.classList.add(styles.active);
				} else {
					item.classList.remove(styles.active);
				}
			});
		};
		window.addEventListener("scroll", handleScroll);
	}, [locationPath]);

	return (
		<ol
			className={styles.orderedList}
			ref={listRef}
		>
			{children}
			{array.map((item, i) => (
				<li key={i}>
					<p className={styles.title}>{item.title}</p>
					<p className={styles.description}>{item.description}</p>
				</li>
			))}
		</ol>
	);
};
export default OrderedListClient;
