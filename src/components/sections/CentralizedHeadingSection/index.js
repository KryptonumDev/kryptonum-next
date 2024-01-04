import CentralizedHeading from "../../molecules/CentralizedHeading";
import styles from './styles.module.scss';

const CentralizedHeadingSection = ({
  data,
  decoration = false,
  additionalStyles
}) => {
  return (
    <section className={styles.section}>
      <CentralizedHeading data={data} decoration={decoration} additionalStyles={additionalStyles}></CentralizedHeading>
    </section>
  )
}
export default CentralizedHeadingSection;
