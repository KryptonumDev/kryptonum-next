import Markdown from '@/utils/markdown';
import styles from './styles.module.scss'
import Img from '@/utils/Img';

const ImageAndStandout = ({ 
  heading,
  paragraph,
  standout, 
  img, 
  reversed 
}) => {
	return (
		<section className={reversed ? `${styles.reversed} ${styles.wrapper}` : styles.wrapper}>
			{heading && (
				<DecorativeHeading
					type="h2"
				>
					{heading}
				</DecorativeHeading>
			)}
			<div className={styles.column}>
				<Markdown className={styles.paragraph}>{paragraph}</Markdown>
				{standout && <Markdown className={styles.standout}>{standout}</Markdown>}
				<Img
          data={img}
					className={styles.img}
				/>
			</div>
		</section>
	);
};
export default ImageAndStandout;