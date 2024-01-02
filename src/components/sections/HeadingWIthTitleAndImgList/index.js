import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';

const HeadingWithTitleAndImgList = ({ data: { heading, TitleAndImage } }) => {
  return (
    <section className={styles.headingWithTitleAndImgList}>
      <header>
        <DecorativeHeading type='h3'>{heading}</DecorativeHeading>
      </header>
      <div className={styles.titleAndImagesList}>
        {TitleAndImage.map((item, index) => (
          <div
            key={index}
            className={`${styles[`item-${index + 1}`]} ${styles.item}`}
          >
            {item.title && (
              <Markdown
                key={index}
                className={styles.title}
              >
                {item.title}
              </Markdown>
            )}
            {item.img && (
              <Img
                key={index}
                data={item.img}
                className={styles.image}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadingWithTitleAndImgList;
