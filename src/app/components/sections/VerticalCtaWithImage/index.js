import CtaSectionWithImage from "../../molecules/CtaWithImage";
import styles from './styles.module.scss';

const VerticalCtaWithImage = ({data}) => {
  return (
    <section className={styles.wrapper}>
      <CtaSectionWithImage
        data={data}
        parentStyles={styles}
      />
    </section>
  )
}
export default VerticalCtaWithImage;