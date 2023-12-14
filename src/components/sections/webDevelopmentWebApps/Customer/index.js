import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Markdown from '@/components/atoms/markdown';
import styles from './styles.module.scss';

const Customer = ({
  data: {
    customer_Heading,
    customer_WhatHeading,
    customer_WhatList,
    customer_WhatParagraph,
    customer_WhatSecondParagraph,
    customer_WhoHeading,
    customer_WhoList,
    customer_WhoAnnotation,
  }
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{customer_Heading}</DecorativeHeading>
      <Markdown className={styles.whatHeading}>{customer_WhatHeading}</Markdown>
      <div className={styles.whatList}>
        {customer_WhatList.map((item, i) => (
          <div className={styles.item} key={i}>
            <Markdown>{item.title}</Markdown>
          </div>
        ))}
      </div>
      <div className={styles.wrapper}>
        <Markdown className={styles.whatParagraph}>{customer_WhatParagraph}</Markdown>
        <Markdown className={styles.whatParagraph}>{customer_WhatSecondParagraph}</Markdown>
      </div>
      <Markdown className={styles.whoHeading}>{customer_WhoHeading}</Markdown>
      <div className={styles.whoList}>
        {customer_WhoList.map((item, i) => (
          <div className={styles.item} key={i}>
            <Markdown>{item.title}</Markdown>
          </div>
        ))}
      </div>
      <Markdown className={styles.whoAnnotation}>{customer_WhoAnnotation}</Markdown>
    </section>
  );
}
export default Customer;