import Button from '@/components/atoms/Button';
import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import LatestBlogEntry from '@/components/molecules/LatestBlogEntry';

const LatestBlogEntries = ({ data, heading, exclude = null, smallEntry = false }) => {
  return (
    <section className={smallEntry ? `${styles.section} ${styles.smallEntry}` : styles.section}>
      <div className={styles.callToAction}>
        <DecorativeHeading
          type='h2'
          className={styles.heading}
        >
          {heading || 'Zobacz nasze **najnowsze posty** na blogu'}
        </DecorativeHeading>
        <Button
          theme='secondary'
          href='/pl/blog'
          className={styles.cta}
        >
          Przejdź do bloga
        </Button>
      </div>
      {data
        .filter((entry) => entry.slug.current !== exclude)
        .map(
          (entry, i) =>
            i < 2 && (
              <LatestBlogEntry
                data={entry}
                key={i}
              />
            )
        )}
    </section>
  );
};

export default LatestBlogEntries;
