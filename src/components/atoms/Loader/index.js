import styles from "./styles.module.scss";

const Loader = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.ldsEllipsis}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
export default Loader;
