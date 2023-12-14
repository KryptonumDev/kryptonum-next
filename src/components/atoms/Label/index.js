import { AnimatePresence, motion } from "framer-motion";
import { SmallError } from "../Icons";
import styles from "./styles.module.scss";

export const Label = ({
	applyAdditionalStyles,
	rows,
	placeholder,
	title,
	name,
	register,
	errors,
	error = "To pole jest wymagane",
}) => (
	<label className={styles.label}>
		<span className={applyAdditionalStyles ? `${styles.legend} ${styles.additionalStyles}` : styles.legend}>{title}</span>
		{rows ? (
			<textarea
				rows={rows}
				placeholder={placeholder}
				className={errors[name] ? `${styles.errored} ${styles.input}` : `${styles.input}`}
				{...register}
			/>
		) : (
			<input
				placeholder={placeholder}
				className={errors[name] ? `${styles.errored} ${styles.input}` : `${styles.input}`}
				{...register}
			/>
		)}
		<span className={applyAdditionalStyles ? `${styles.border} ${styles.additionalStyles}` : styles.border}/>
		<AnimatePresence>
			{errors[name] && (
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={styles.error}
				>
					<SmallError /> {error}
				</motion.span>
			)}
		</AnimatePresence>
	</label>
);
