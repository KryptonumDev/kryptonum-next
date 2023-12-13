import styles from './styles.module.scss'

export default function SwiperSkeleton() {
	return (
		<div className={`${styles.skeleton} ${styles.shimmer}`}>
			<div className={styles.slide}>
				<div className={`${styles.author} ${styles.shimmer}`} />
				<div className={styles.context}>
					<div className={styles.quote}></div>
					<div className={styles.text} />
				</div>
			</div>
		</div>
	);
}