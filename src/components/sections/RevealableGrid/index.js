import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const RevealableGrid = ({ data: { heading, description, icons, grid, isSign } }) => {
  return (
    <section className={styles.windowsShowcase}>
      <div className={styles.windowsDescription}>
        <header>
          <DecorativeHeading
            type='h3'
            className={styles.heading}
          >
            {heading}
          </DecorativeHeading>
        </header>
        <Markdown className={isSign ? `${styles.description} ${styles.signDescription}` : styles.description}>
          {description}
        </Markdown>
        <div className={styles.logoShowcase}>
          {icons &&
            icons.map((icon, index) => (
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
      <div className={isSign ? `${styles.windows} ${styles.signWidnows}` : styles.windows}>
        {grid.map((grid, index) => (
          <div
            className={styles.windowWrapper}
            key={index}
          >
            {grid.img && (
              <Img
                data={grid.img}
                className={isSign ? styles.signImg : styles.windowImg}
                sizes='250px'
              />
            )}
            <Markdown className={styles.windowTitle}>{grid.title}</Markdown>
            <Markdown className={styles.windowDescription}>{grid.description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};
export default RevealableGrid;
