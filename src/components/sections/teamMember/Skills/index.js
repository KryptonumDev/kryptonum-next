
import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Markdown from '@/components/atoms/markdown';
import styles from './styles.module.scss';

const Skills = ({ data }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">**Skille**:</DecorativeHeading>
      <Markdown>{data}</Markdown>
    </section>
  );
}
export default Skills;