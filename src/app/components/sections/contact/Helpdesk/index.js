import DecorativeHeading from '@/app/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/utils/markdown';
import Form from '@/app/components/organisms/forms/FastContact';

const Helpdesk = ({
  data: {
    helpDesk_Heading,
    helpDesk_Subheading,
    helpDesk_Paragraph,
    helpDesk_FormTitle,
  }
}) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2">{helpDesk_Heading}</DecorativeHeading>
        <Markdown className={styles.subheading}>{helpDesk_Subheading}</Markdown>
        <Markdown className={styles.paragraph}>{helpDesk_Paragraph}</Markdown>
      </header>
      <div className={styles.form}>
        <Markdown components={{ 'p': 'h3' }}>{helpDesk_FormTitle}</Markdown>
        <Form className={styles.form}/>
      </div>
    </section>
  );
}
export default Helpdesk;