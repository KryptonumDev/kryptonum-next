import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';

const Hobbies = ({ data }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">**#jaramsię**</DecorativeHeading>
      <ul className={styles.wrapper}>
        {data.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}
export default Hobbies;