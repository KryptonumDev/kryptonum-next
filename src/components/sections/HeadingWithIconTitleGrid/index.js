import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const HeadingWithIconTitleGrid = ({ data: { heading, titleAndImageGrid } }) => {
  return (
    <section className={styles.headingWithIconTitleGrid}>
      <header>
        <DecorativeHeading
          type='h3'
          className={styles.heading}
        >
          {heading}
        </DecorativeHeading>
      </header>
      <div className={styles.items}>
        {titleAndImageGrid.map((item, index) => (
          <div
            className={styles.item}
            key={index}
          >
            <div className={styles.imageWrapper}>
              <Img
                className={styles.img}
                data={item.img}
                sizes="48px"
              />
            </div>
            <Markdown className={styles.title}>{item.title}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeadingWithIconTitleGrid;
