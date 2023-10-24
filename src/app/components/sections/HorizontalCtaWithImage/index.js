import CtaWithImage from "../../molecules/CtaWithImage";
import styles from './styles.module.scss'

const HorizontalCtaWithImage = ({data}) => {
	return (
		<section className={styles.wrapper}>
			<CtaWithImage data={data} parentStyles={styles}></CtaWithImage>
		</section>
	);
};
export default HorizontalCtaWithImage;
