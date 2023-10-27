'use client'

import Img from '@/utils/Img';
import { useEffect, useState } from "react";
import Button from '../../atoms/Button';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import styles from './styles.module.scss';

const CtaWithImage = ({data:{buttonContext, buttonMobileContext, headingContext, image}, parentStyles}) => {
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
		<div className={`${styles.wrapper} ${parentStyles.consultation}`}>
			<div className={`${styles.imgWrapper} ${parentStyles.imageWrapper}`}>
				<Img data={image} className={`${styles.img} ${parentStyles.image}`} sizes="(min-width: 1000px) 1000px, (max-width:999px) 100vw"/>
			</div>
			<div className={styles.consultationWrapper}>
				<div className={styles.decorativeHeadingWrapper}>
					<DecorativeHeading type="h4">{headingContext}</DecorativeHeading>
				</div>
				<Button to="" theme={"primary"} className={`${styles.button} ${styles.button}`}>
					{windowWidth > 500 ? buttonContext : buttonMobileContext}
				</Button>
			</div>
		</div>
	);
}
export default CtaWithImage;