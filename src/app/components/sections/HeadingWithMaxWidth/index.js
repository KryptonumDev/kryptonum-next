import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from './styles.module.scss';

const HeadingWithMaxWidth = ({data:{heading,type}}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type={type ? type : "h2"}>{heading}</DecorativeHeading>
    </section>
  )
}
export default HeadingWithMaxWidth;