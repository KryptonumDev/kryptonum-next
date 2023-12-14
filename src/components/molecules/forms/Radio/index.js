import styles from "./styles.module.scss";

const Radio = ({ className, title, register }) => {
	return (
		<label className={`${className} ${styles.label}`}>
			<input
				type="radio"
				{...register}
				value={title}
				id={title}
			/>
			<span className={styles.radio} />
			<p>{title}</p>
		</label>
	);
};
export default Radio;
