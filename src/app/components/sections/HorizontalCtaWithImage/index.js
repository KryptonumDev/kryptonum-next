import DecorativeHeading from "../../atoms/DecorativeHeading";
import CtaWithImage from "../../molecules/CtaWithImage";
import styles from './styles.module.scss';

const HorizontalCtaWithImage = ({data}) => {
	return (
		<section className={styles.wrapper}>
			<CtaWithImage data={data} parentStyles={styles}>
				<DecorativeHeading type="h4">{data.heading}</DecorativeHeading>
			</CtaWithImage>
		</section>
	);
};
export default HorizontalCtaWithImage;
