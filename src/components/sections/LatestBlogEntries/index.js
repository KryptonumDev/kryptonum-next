import Button from '@/components/atoms/Button';
import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import LatestBlogEntry from '@/components/molecules/LatestBlogEntry';

const LatestBlogEntries = ({ data, heading, exclude = null, smallEntry = false }) => {
  return (
    <section
      className={styles.LatestBlogEntries}
      data-small={smallEntry}
    >
      <header>
        <DecorativeHeading type='h2'>{heading || 'Zobacz nasze **najnowsze posty** na blogu'}</DecorativeHeading>
        <Button
          theme='secondary'
          href='/pl/blog'
          className={styles.cta}
        >Przejdź do bloga</Button>
      </header>
      <div className={styles.wrapper}>
        {data.filter((entry) => entry.slug.current !== exclude).map((entry, i) => (
          i < 2 && (
            <LatestBlogEntry data={entry} key={i} />
          )
        ))}
      </div>
    </section>
  );
};

export default LatestBlogEntries;