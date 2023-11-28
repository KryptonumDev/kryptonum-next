
import DecorativeHeading from '@/app/components/atoms/DecorativeHeading';
import styles from './styles.module.scss'
import Markdown from '@/utils/markdown';

const Skills = ({ data }) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">**Skille**:</DecorativeHeading>
      <Markdown>{data}</Markdown>
    </section>
  );
}
export default Skills;