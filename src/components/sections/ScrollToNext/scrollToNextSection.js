"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const easeOut = (t) => {
	return 1 - Math.pow(1 - t, 3);
};

const scrollHeight = 800;

const ScrollToNextSection = ({ link, decorativeHeading, scrollDown, markdown, image, children }) => {
	const router = useRouter();

	const scrollToNext = useRef(null);
	const [scaleY, setScaleY] = useState(0);
	const locationPath = usePathname();
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const maxScroll = documentHeight - windowHeight;
			const remainingScroll = maxScroll - scrollPosition;
			let progress = Math.max(0, Math.min(1, 1 - remainingScroll / scrollHeight));
			progress = easeOut(progress);
			setScaleY(progress);
			if (remainingScroll <= 0) {
				window.scrollTo({ top: scrollPosition - scrollHeight });
				router.push(link.href);
			}
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [locationPath]);
	return (
		<section
			className={`${styles.maxWidth} maxWidth`}
			ref={scrollToNext}
		>
			<div
				className={styles.margin}
				style={{ height: `${scrollHeight}px` }}
			/>
			<div className={styles.sticky}>
				{decorativeHeading}
				{children}
				<div className={styles.grid}>
					{markdown}
					<div className={styles.page}>
						{link.person ? (
							<div className={styles.person}>
								{image}
								<div className={styles.copy}>
									<p className={styles.name}>{link.person.name}</p>
									<p className={styles.cryptonym}>{link.person.cryptonym}</p>
								</div>
							</div>
						) : (
							<p>{link.text}</p>
						)}
						<div className={styles.indicator}>
							<div
								className={styles.bar}
								style={{ transform: `scaleY(${scaleY})` }}
							></div>
						</div>
					</div>
					{scrollDown}
				</div>
			</div>
		</section>
	);
};

export default ScrollToNextSection;
