import styles from './styles.module.scss';
import Consultation from '@/app/components/molecules/UxDesign/Consultation';
import Questioning from '@/app/components/molecules/UxDesign/Questioning';
import Explanation from '@/app/components/molecules/UxDesign/Explanation';
import MultipleUxEplanations from '@/app/components/organisms/MultipleUxExplanations';

const UxComponent = () => {
  
  return (
    <section className={styles.wrapper}>
      <Questioning/>
      <Consultation/>
      <MultipleUxEplanations/>
    </section>
  )
}

export default UxComponent;