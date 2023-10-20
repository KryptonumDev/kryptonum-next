import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";

const Explanation = ({title, context, image, explanationClassName, imageWrapperClassName}) => {
	return (
		<div className={`${styles.wrapper} ${explanationClassName}`}>
			<div className={styles.descriptionWrapper}>
				<DecorativeHeading type="h4" decoration={false}>{title}</DecorativeHeading>
				<div className={styles.contextWrapper}>
					<span className={styles.context}>{context}</span>
				</div>
			</div>
			<div className={`${styles.imageWrapper} ${imageWrapperClassName}`}>
				<Img data={image} className={styles.image}></Img>
			</div>
		</div>
	);
};

export default Explanation;
