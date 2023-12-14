"use client";

import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import { ScrollDown } from "@/components/atoms/Icons";
import Markdown from "@/components/atoms/markdown";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from './styles.module.scss';

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
							components={{ p: "h2" }}
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
