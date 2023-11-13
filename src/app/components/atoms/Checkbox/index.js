import styles from './styles.module.scss';

export const Checkbox = ({ 
  icon, 
  text, 
  name, 
  register, 
  errors, 
  error }) => (
  <label className={errors[name] ? `${styles.errored} ${styles.label}` : styles.label}>
    <input type="checkbox" {...register} />
    <span className={styles.checkbox} />
    {text ? (
      <p dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
      <p>Zgadzam się na <a href="/pl/polityka-prywatnosci" target="_blank" rel="noopener">przetwarzanie moich danych</a></p>
    )}
    {icon}
    {error && (
      <>
        {errors[name] && <span className={styles.error}><Error /> {error}</span>}
      </>
    )}
  </label>
)