import Markdown from '@/utils/markdown';
import styles from './styles.module.scss'
import Button from '../../atoms/Button';

const SmallCtaSection = ({
  data: {
    smallCta_Heading,
    smallCta_Cta,
    smallCta_Heading2,
    smallCta_Cta2,
  }
}) => {
  return (
    <section className={styles.wrapper}>
      <Markdown components={{'p': 'h3'}} className={styles.heading}>{smallCta_Heading}</Markdown>
      <Button data={smallCta_Cta} className={styles.cta1}/>
      <Markdown components={{'p': 'h3'}} className={styles.heading2}>{smallCta_Heading2}</Markdown>
      <Button data={smallCta_Cta2} className={styles.cta2}/>
    </section>
  );
}
export default SmallCtaSection;