import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const ImageDisplayedOnTablet = ({ image }) => {
	return (
		<section className={styles.section}>
			<div className={styles.imageWrapper}>
        <div class={styles.lowerVolume}/>
        <div class={styles.increaseVolume}/>
        <div class={styles.onOffSwitch}/>
				<Img data={image} className={styles.image} />
			</div>
      <div className={styles.test}></div>
		</section>
	);
};
export default ImageDisplayedOnTablet;
