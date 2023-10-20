"use client";

import Button from "../../../atoms/Button";
import DecorativeHeading from "../../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Img from "@/utils/Img";
import { useState, useEffect } from "react";

const Consultation = ({
	className,
	buttonContext,
	buttonMobileContext,
	headingContext,
	imageWrapperClassName,
	imageClassName,
	image,
}) => {
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
		<div className={`${styles.wrapper} ${className}`}>
			<div className={`${styles.imgWrapper} ${imageWrapperClassName}`}>
				<Img data={image} className={`${styles.img} ${imageClassName}`} />
			</div>
			<div className={styles.consultationWrapper}>
				<div className={styles.decorativeHeadingWrapper}>
					<DecorativeHeading type="h4">{headingContext}</DecorativeHeading>
				</div>
				<Button to="" theme={"primary"} className={styles.button}>
					{windowWidth > 500 ? buttonContext : buttonMobileContext}
				</Button>
			</div>
		</div>
	);
};

export default Consultation;
