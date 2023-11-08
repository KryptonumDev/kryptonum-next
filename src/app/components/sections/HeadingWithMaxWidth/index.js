import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from './styles.module.scss';

const HeadingWithMaxWidth = ({heading,type,decoration}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type={type ? type : "h2"} decoration={decoration}>{heading}</DecorativeHeading>
    </section>
  )
}
export default HeadingWithMaxWidth;