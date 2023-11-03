import IconTitleDescription from "../../molecules/IconTitleDescription";
import styles from './styles.module.scss';

const IconTitleDescriptionGrid = ({data:{grid}}) => {
  return (
    <section className={styles.wrapper}>
      {grid.map((data,i) => (
        <IconTitleDescription data={data} key={i}/>
        ))}
    </section>
  )
}
export default IconTitleDescriptionGrid;