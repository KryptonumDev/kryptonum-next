import styles from './styles.module.scss';
import DecorativeHeading from '@/app/components/atoms/DecorativeHeading';
import Markdown from '@/utils/markdown';

const ColumnText = ({ heading, paragraph }) => {
  return (
    <section className={styles.wrapper}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
    </section>
  );
}
export default ColumnText;