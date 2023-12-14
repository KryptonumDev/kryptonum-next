import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/utils/markdown";
import styles from './styles.module.scss';

const Highlight = ({ heading, paragraph }) => {
  return (
    <section className={styles.wrapper}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
    </section>
  );
}

export default Highlight;