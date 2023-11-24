"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from './styles.module.scss'
import Markdown from "@/utils/markdown";
import { ScrollDown } from "@/app/components/atoms/Icons";

const Hero = ({ setStep, data }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const handleScroll = (e) => {
		e.preventDefault();
		setStep(1);
	};

	useEffect(() => {
		if (isInView) {
			window.addEventListener("scroll", handleScroll);
		}
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isInView]);

	return (
		<section className={styles.section}>
			<div className={styles.sticky}>
				<div className={styles.grid}>
					<div>
						<DecorativeHeading type="h1">{data.hero_Heading}</DecorativeHeading>
						<Markdown className={styles.left}>{data.hero_Subheading}</Markdown>
					</div>
					<div>
						<Markdown className={styles.top}>{data.hero_Paragraph}</Markdown>
						<Markdown
							className={styles.bot}
							components={{ p: "h3" }}
						>
							{data.hero_Paragraph2}
						</Markdown>
					</div>
				</div>
				<div className={styles.scroll}>
					<Markdown>{data.hero_ScrollText}</Markdown>
					<ScrollDown />
				</div>
			</div>
			<div
				className={styles.bottom}
				ref={ref}
			/>
		</section>
	);
};
export default Hero;
