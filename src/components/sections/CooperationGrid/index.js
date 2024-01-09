import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const CooperationGrid = ({ data: { heading, description, icons, grid } }) => {
  return (
    <section className={styles.windowsShowcase}>
      <div className={styles.windowsDescription}>
        <header>
          <DecorativeHeading type='h3' className={styles.heading}>{heading}</DecorativeHeading>
        </header>
        <Markdown className={`${styles.description} ${styles.signDescription}`}>{description}</Markdown>
        <div className={styles.logoShowcase}>
          {icons && icons.map((icon, index) => (
            <div
              className={styles.logoWrapper}
              key={index}
            >
              <Img
                data={icon.icon}
                className={styles.icon}
              />
              <p className={styles.iconDescription}>{icon.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.windows} ${styles.signWidnows}`}>
        {grid.map((grid, index) => (
          <div
            className={styles.windowWrapper}
            key={index}
          >
            {grid.img && (
              <Img
                data={grid.img}
                className={styles.signImg}
                sizes="(max-width: 1349px) 250px, 20vw"
              />
            )}
            <p className={styles.windowDescription}>{grid.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CooperationGrid;
