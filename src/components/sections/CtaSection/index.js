import Img from '@/components/atoms/Img';
import Button from '../../atoms/Button';
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from './styles.module.scss';

const CtaSection = ({ data: { 
	img,
	cta,
	heading
 } 
}) => {
	return (
		<section className={styles.wrapper}>
			<header>
				<DecorativeHeading type="h3">{heading}</DecorativeHeading>
				<Button data={cta}/>
			</header>
			<Img data={img} className={styles.img} sizes="(max-width: 500px) 100vw, (max-width: 1199px) 70vw, 50vw"/>
		</section>
	);
};
export default CtaSection;
