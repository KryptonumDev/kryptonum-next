import styles from "./styles.module.scss";
import { SmallError } from "../Icons";
import { AnimatePresence, motion } from "framer-motion";

export const Label = ({ rows, placeholder, title, name, register, errors, error = 'To pole jest wymagane' }) => (
  <label className={styles.label}>
    <span className={styles.legend}>{title}</span>
    {rows
      ? <textarea rows={rows} placeholder={placeholder} className={errors[name] ? `${styles.errored} ${styles.input}` : `${styles.input}`} {...register} />
      : <input placeholder={placeholder} className={errors[name] ? `${styles.errored} ${styles.input}` : `${styles.input}`} {...register} />}
    <span className={styles.border} />
    <AnimatePresence>
      {errors[name] && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.error}><SmallError /> {error}</motion.span>}
    </AnimatePresence>
  </label>
)