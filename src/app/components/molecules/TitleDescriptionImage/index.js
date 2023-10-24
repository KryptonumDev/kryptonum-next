import styles from './styles.module.scss';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import Img from '@/utils/Img';

const TitleDescriptionImage = ({data: {title, description, image}, parentStyles}) => {
  return (
		<div className={`${styles.wrapper} ${parentStyles.titleDescriptionImage}`}>
			<div className={styles.descriptionWrapper}>
				<DecorativeHeading type="h4" decoration={false}>{title}</DecorativeHeading>
				<div className={styles.contextWrapper}>
					<span className={styles.context}>{description}</span>
				</div>
			</div>
			<div className={`${styles.imageWrapper} ${parentStyles.imageWrapper}`}>
				<Img data={image} className={styles.image}></Img>
			</div>
		</div>
	);
};

export default TitleDescriptionImage;