import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';

const HeadingDescriptionWithBlocksList = ({ data: { heading, description, blocks } }) => {
  return (
    <section className={styles.headingDescriptionWithBlocksList}>
      <header>
        <DecorativeHeading
          type='h3'
          className={styles.heading}
        >
          {heading}
        </DecorativeHeading>
      </header>
      <Markdown className={styles.description}>{description}</Markdown>
      <div className={styles.pill}>
        {blocks.map((block, index) => (
          <div className={styles.itemWrapper} key={index}>
            <div
              className={styles.item}
              
            >
              <Img
                data={block.img}
                className={styles.img}
                sizes="20px"
                quality={100}
              />
              <Markdown className={styles.blockDescription}>{block.description}</Markdown>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeadingDescriptionWithBlocksList;
