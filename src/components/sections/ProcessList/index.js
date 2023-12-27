import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';

const ProcessList = ({ data: { ProcessList } }) => {
  return (
    <section className={styles.processList}>
      {ProcessList.map(({ heading, subheading, img, paragraph }, i) => (
        <div
          className={styles.process}
          key={i}
        >
          <div className={styles.heading}>
            <p className={`${styles.numerator} personBorder`}>{i + 1}</p>
            <Markdown.h2>{heading}</Markdown.h2>
          </div>
          <Markdown className={styles.subheading}>{subheading}</Markdown>
          <Img
            data={img}
            className={styles.img}
          />
          <div className={styles.blocks}>
            <Markdown>{paragraph}</Markdown>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProcessList;
