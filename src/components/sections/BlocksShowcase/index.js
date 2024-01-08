import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const BlocksShowcase = ({ data: { heading, description, blocks } }) => {
  return (
    <section className={styles.blocksShowcase}>
      <div className={styles.blocksDescription}>
        <header>
          <DecorativeHeading
            type='h3'
            className={styles.heading}
          >
            {heading}
          </DecorativeHeading>
        </header>
        <Markdown className={styles.description}>{description}</Markdown>
      </div>
      <div className={styles.blocks}>
        {blocks.map((item, index) => (
          <div
            className={styles.blocksWrapper}
            key={index}
          >
            {item.img && (
              <div className={styles.imageWrapper}>
                <Img
                  data={item.img}
                  className={styles.blockImg}
                  sizes="200px"
                />
              </div>
            )}
            <p className={styles.blockDescription}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BlocksShowcase;
