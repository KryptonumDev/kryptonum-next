import Markdown from '@/utils/markdown';
import styles from './styles.module.scss';
import { Error } from '@/app/components/atoms/Icons';

const Note = ({ heading, paragraph, attention }) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown components={{ 'p': 'h3'}}>{heading}</Markdown>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.attention}>
        <Error />
        <Markdown>{attention}</Markdown>
      </div>
    </section>
  );
}

export default Note;