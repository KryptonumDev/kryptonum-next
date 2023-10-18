import DecorativeHeading from '@/app/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';

const title="Wiesz, jakie dwie litery sprawią, że pomiędzy **Twoją stroną a użytkownikiem** coś naprawdę zaklika? UX."
const content1="Bez dobrego UX strona internetowa jest jak [ szpilki Louboutina ] pod Giewontem. Ładne, ale nie zabiorą Cię na szczyt."
const content2="Zaprojektujemy Twoją stronę www, sklep internetowy czy apkę tak, by zachwycała nie tylko designem, ale i użytecznością, dzięki czemu Twoja marka zyska +10 punktów do za… zaufania, of course."

const Questioning = () => {
	return (
		<>
			<div className={styles.decorativeHeadingWrapper}>
				<DecorativeHeading type="h4">{title}</DecorativeHeading>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.question}>
					<span>Dlaczego?</span>
				</div>
				<div className={styles.explanation}>
					<p className={styles.firstContent}>{content1}</p>
					<p>{content2}</p>
				</div>
			</div>
		</>
	);
};
export default Questioning;