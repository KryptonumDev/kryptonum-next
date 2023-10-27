'use client'


import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import Button from "../../atoms/Button";
import { useState,useEffect } from "react";

const CtaWithVerticalImage = ({ data: { img, heading, cta } }) => {
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
				<DecorativeHeading type="h4">{heading}</DecorativeHeading>
				<Button theme={cta.theme} to={cta.href}>{(windowWidth < 500 && cta.textMobile) ? cta.textMobile : cta.text}</Button>
			</header>
			<Img data={img} className={styles.img} />
		</section>
	);
};
export default CtaWithVerticalImage;
