import IconTitleDescription from "../../molecules/IconTitleDescription";
import styles from './styles.module.scss';

const IconTitleDescriptionGrid = ({data}) => {
  return (
    <section className={styles.wrapper}>
      {data.map((item,i) => (
        <IconTitleDescription data={item} key={i}/>
        ))}
    </section>
  )
}
export default IconTitleDescriptionGrid;