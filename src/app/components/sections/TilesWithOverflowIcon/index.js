import DecorativeHeading from "../../atoms/DecorativeHeading"
import CardGrid from "../../organisms/CardGrid"
import styles from './styles.module.scss'

const TilesWithOverflowIcon = ({data}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h3">{data.heading}</DecorativeHeading>
      <CardGrid data={data} additionalStyles={styles}></CardGrid>
    </section>
  )
}
export default TilesWithOverflowIcon