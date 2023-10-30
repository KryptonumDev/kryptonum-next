import CentralizedHeading from "../../molecules/CentralizedHeading";
import styles from './styles.module.scss';

const CentralizedHeadingSection = ({data, decoration}) => {
  return (
    <section className={styles.section}>
      <CentralizedHeading data={data} decoration={decoration}></CentralizedHeading>
    </section>
  )
}
export default CentralizedHeadingSection;
