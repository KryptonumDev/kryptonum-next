import Link from 'next/link';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';
import { removeMarkdown } from '@/utils/functions';
import ReadingTime from '@/components/atoms/ReadingTime';

const LatestBlogEntry = ({ data }) => {
  return (
    <div className={styles.latestBlogEntry}>
      <Link
        className={styles.entryWrapper}
        href={`/pl/blog/${data.slug.current}`}
        aria-label={removeMarkdown(data.title)}
      >
        <Img
          data={data.img}
          className={styles.img}
          sizes='(max-width: 599px) 100vw, (max-width: 1199px) 50vw, 33vw'
        />
        <div className={styles.descriptionWrapper}>
          <ReadingTime
            content={data.contentRaw}
            className={styles.readingTime}
          />
          <p className={styles.title}>{removeMarkdown(data.title)}</p>
        </div>
      </Link>
    </div>
  );
};
export default LatestBlogEntry;
