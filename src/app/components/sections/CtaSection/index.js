import styles from './styles.module.scss'
import DecorativeHeading from "../../atoms/DecorativeHeading";
import Button from '../../atoms/Button';
import Img from '@/utils/Img';

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
			<Img data={img} className={styles.img} sizes="(min-width: 1200px) 50vw, (max-width: 1199px) 70vw, (max-width: 500px) 100vw"/>
		</section>
	);
};
export default CtaSection;
