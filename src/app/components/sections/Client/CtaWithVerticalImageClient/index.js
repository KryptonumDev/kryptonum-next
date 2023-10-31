"use client";

import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import Button from "@/app/components/atoms/Button";

const CtaWithVerticalImageClient = ({ data: { img, cta }, children }) => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<section className={styles.wrapper}>
			<header>
				{children}
				<Button theme={cta.theme} to={cta.href}>
					{windowWidth < 550 && cta.textMobile ? cta.textMobile : cta.text}
				</Button>
			</header>
			<Img data={img} className={styles.img} sizes="(min-width: 1200px) 50vw, (max-width: 1199px) 70vw, (max-width: 500px) 100vw"/>
		</section>
	);
};
export default CtaWithVerticalImageClient;
