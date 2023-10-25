import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const ImageDisplayedOnTablet = ({ image }) => {
	return (
		<section className={styles.section}>
			<div className={styles.imageWrapper}>
        <div className={styles.lowerVolume}/>
        <div className={styles.increaseVolume}/>
        <div className={styles.onOffSwitch}/>
				<Img data={image} className={styles.image} sizes="90vw" />
			</div>
      <div className={styles.test}></div>
		</section>
	);
};
export default ImageDisplayedOnTablet;
