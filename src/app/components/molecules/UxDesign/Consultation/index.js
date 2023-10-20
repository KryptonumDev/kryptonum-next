"use client";

import Button from "../../../atoms/Button";
import DecorativeHeading from "../../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Img from "@/utils/Img";
import { useState, useEffect }  from 'react';

const Consultation = ({className}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	const text = "Marzy Ci się UX **wysokich lotów**?";
	const image = {
		asset: {
			altText: "Aasdasd",
			url: "/Image.svg",
			metadata: {
				dimensions: {
					height: 422,
					width: 794,
				},
			},
		},
	};

	return (
		<div className={`${styles.wrapper} ${className}`}>
			<div className={styles.imgWrapper}>
				<Img data={image} className={styles.img} />
			</div>
			<div className={styles.consultationWrapper}>
				<div className={styles.decorativeHeadingWrapper}> 
				<DecorativeHeading type="h4" >
					{text}
				</DecorativeHeading>
				</div>
				<Button to="" theme={"primary"} className={styles.button}>
					{windowWidth > 500 ? "Umów darmową konsultację" : "Umów konsultację"}
				</Button>
			</div>
		</div>
	);
};

export default Consultation;
