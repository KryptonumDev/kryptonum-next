import Button from '../../atoms/Button';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import styles from './styles.module.scss'

const SimpleCtaSection = ({ data: { heading, cta } }) => {
  return (
    <section className={styles.simpleCtaSection}>
      <DecorativeHeading type="h2" decoration={false}>{heading}</DecorativeHeading>
      {cta.href && (
        <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
      )}
    </section>
  );
}
export default SimpleCtaSection