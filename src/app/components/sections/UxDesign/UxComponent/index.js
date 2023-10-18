import styles from './styles.module.scss';
import Consultation from '@/app/components/molecules/UxDesign/Consultation';
import Questioning from '@/app/components/molecules/UxDesign/Questioning';

const UxComponent = () => {
  
  return (
    <section className={styles.wrapper}>
      <Questioning/>
      <Consultation/>
    </section>
  )
}

export default UxComponent;