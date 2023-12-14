import Markdown from '@/utils/markdown';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import styles from './styles.module.scss';

const MasonryList = ({ 
  heading,
  paragraph,
  paragraph2,
  list
}) => {
  return (
    <section className={styles.section}> 
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      {(paragraph && paragraph2) && (
        <>
          <Markdown className={styles.paragraph}>{paragraph}</Markdown>
          <Markdown className={styles.paragraph2}>{paragraph2}</Markdown>
        </>
      )}
      <ul className={styles.wrapper}>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
export default MasonryList;