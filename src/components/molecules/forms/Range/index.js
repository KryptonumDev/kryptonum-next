import styles from "./styles.module.scss";

const Range = ({ left, right, register }) => {
	return (
		<label className={styles.label}>
			<span className={styles.left}>{left}</span>
			<div className={styles.inputWrap}>
				<input
					{...register}
					type="range"
					min={"1"}
					defaultValue={"4"}
					max={"7"}
				/>
				<div className={styles.dots}>
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
			</div>
			<span className={styles.right}>{right}</span>
		</label>
	);
};
export default Range;
