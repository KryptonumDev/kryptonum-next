import CentralizedHeading from "../../molecules/CentralizedHeading";
import styles from './styles.module.scss';

const CentralizedHeadingSection = ({data}) => {
  return (
    <section className={styles.section}>
      <CentralizedHeading data={data}></CentralizedHeading>
    </section>
  )
}
export default CentralizedHeadingSection;
