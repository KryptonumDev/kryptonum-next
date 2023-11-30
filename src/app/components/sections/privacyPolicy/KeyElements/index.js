import DecorativeHeading from '@/app/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/utils/markdown';

const KeyElements = ({ heading, list }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ol className={styles.wrapper}>
        {list.map((item, i) => (
          <li className={styles.item} key={i}>
            <Markdown>{item}</Markdown>
          </li>
        ))}
      </ol>
    </section>
  );
}
export default KeyElements;