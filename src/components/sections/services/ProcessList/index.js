import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';

const ProcessList = ({ data: { ProcessList } }) => {
  return (
    <section className={styles.processList}>
      {ProcessList.map((item, index) => (
        <div
          key={index}
          className={styles.card}
        >
          <p className={`${styles.number} personBorder`}>{index + 1}</p>
          <div className={styles.headingWrapper}>
            <Img
              data={item.img}
              className={styles.img}
              sizes="(max-width: 1199px) 100vw, 50vw)"
            />
            <Markdown.h3 className={styles.heading}>{item.heading}</Markdown.h3>
          </div>
          <div className={styles.descriptionWrapper}>
            <Markdown>{item.subheading}</Markdown>
            <Markdown>{item.paragraph}</Markdown>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProcessList;
