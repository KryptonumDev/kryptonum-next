import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const CooperationGrid = ({ data: { heading, description, icons, grid } }) => {
  return (
    <section className={styles.cooperatioGrid}>
      <header>
        <DecorativeHeading
          type='h3'
          className={styles.heading}
        >
          {heading}
        </DecorativeHeading>
        <Markdown className={styles.description}>{description}</Markdown>
        <div className={styles.logoShowcase}>
          {icons &&
            icons.map(({icon, description}, index) => (
              <div
                className={styles.item}
                key={index}
              >
                <Img
                  data={icon}
                  className={styles.icon}
                />
                <p className={styles.iconDescription}>{description}</p>
              </div>
            ))}
        </div>
      </header>
      <div className={styles.grid}>
        {grid.map(({img, title} , index) => (
          <div
            className={styles.item}
            key={index}
          >
            {img && (
              <Img
                data={img}
                className={styles.img}
                sizes='(max-width: 1349px) 250px, 20vw'
              />
            )}
            <p className={styles.description}>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CooperationGrid;
