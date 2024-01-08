import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';
import Button from '@/components/atoms/Button';
import CtaSectionPill from '../CtaSectionPill';

const ProcessList = ({ data: { ProcessList } }) => {
  let ctaSectionPillCounter = 0;

  return (
    <section className={styles.processList}>
      {ProcessList.map(({ heading, subheading, img, paragraph, callToAction, callToActionSectionPill }, i) => (
        <div
          className={styles.process}
          key={i}
        >
          {heading && (
            <>
              <div className={styles.heading}>
                <p className={`${styles.numerator} personBorder`}>{i + 1 - ctaSectionPillCounter}</p>
                <Markdown.h2>{heading}</Markdown.h2>
              </div>
              <Markdown className={styles.subheading}>{subheading}</Markdown>
              <Img
                data={img}
                className={styles.img}
              />
              <div className={styles.blocks}>
                <Markdown>{paragraph}</Markdown>
                {callToAction?.text && (
                  <Button
                    data={callToAction}
                    className={styles.button}
                  />
                )}
              </div>
            </>
          )}
          {callToActionSectionPill?.heading &&
            (() => {
              ctaSectionPillCounter++;
              return (
                <CtaSectionPill
                  data={callToActionSectionPill}
                  className={styles.ctaSectionPill}
                />
              );
            })()}
        </div>
      ))}
    </section>
  );
};

export default ProcessList;
