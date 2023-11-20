import DecorativeHeading from '@/app/components/atoms/DecorativeHeading';
import styles from './styles.module.scss'
import Markdown from '@/utils/markdown';
import Roadmap from '../../homepage/Roadmap';
import ConsultationForm from '../../ConsultationForm';
import { Fragment } from 'react';
import Img from '@/utils/Img';

const Process = ({
  data: {
    process_Heading,
    process_List,
    roadmap_Heading,
    roadmap_List,
    roadmap_Cta,
    quickForm,
  }
}) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2">{process_Heading}</DecorativeHeading>
      </header>
      <div className={styles.wrapper}>
        {process_List.map((item, i) => (
          <Fragment key={i}>
            <div className={styles.item}>
              <Markdown className={styles.claim} components={{ p: 'h3' }}>{item.claim}</Markdown>
              <Markdown className={styles.heading} components={{ p: 'h4' }}>{item.heading}</Markdown>
              <Markdown className={styles.subheading}>{item.subheading}</Markdown>
              <Img data={item.img}
                className={styles.img}
              />
              <Markdown className={styles.paragraph}>{item.paragraph}</Markdown>
            </div>
            {i === 2 && (
              <>
                <Roadmap
                  heading={roadmap_Heading}
                  list={roadmap_List}
                  cta={roadmap_Cta}
                />
                <ConsultationForm
                  data={quickForm}
                />
              </>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
export default Process;