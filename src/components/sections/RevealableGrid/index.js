import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const RevealableGrid = ({ data: { heading, description, icons, grid, isSign } }) => {
  return (
    <section className={styles.windowsShowcase}>
      <div className={styles.windowsDescription}>
        <header>
          <DecorativeHeading type='h3' className={styles.heading}>
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
      <div className={styles.grid}>
        {grid.map(({ img, title, description }, i) => (
          <div
            className={styles.item}
            tabIndex={0}
            key={i}
          >
            {img && (
              <Img
                data={img}
                className={styles.img}
                sizes='250px'
              />
            )}
            <Markdown className={styles.title}>{title}</Markdown>
            <Markdown className={styles.description}>{description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};
export default RevealableGrid;
