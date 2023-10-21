import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Button from "@/app/components/atoms/Button";

const HeadingImageText = ({
	headingType,
	headingDecoration,
	headingContent,
	image,
	description,
	className,
	imageWrapperClassName,
	headingWrapperClassName,
}) => {
	return (
		<div className={`${className} ${styles.wrapper}`}>
			<div className={`${styles.headingWrapper} ${headingWrapperClassName}`}>
				<DecorativeHeading type={headingType} decoration={headingDecoration}>
					{headingContent}
				</DecorativeHeading>
			</div>
			<div className={`${styles.imageWrapper} ${imageWrapperClassName}`}>
				<Img className={styles.image} data={image}></Img>
			</div>
			<div className={styles.descriptionWrapper}>
				{description.map((paragraph, index) => {
					if (!paragraph.includes("<btn>")) {
						return (
							<div className={styles.spanWrapper} key={index}>
								<span>{paragraph}</span>
							</div>
						);
					} else {
						return (
							<Button className={styles.button} key={index}>
								{paragraph.replace(/<btn>/, "").replace(/<\/btn>/, "")}
							</Button>
						);
					}
				})}
			</div>
		</div>
	);
};
export default HeadingImageText;
