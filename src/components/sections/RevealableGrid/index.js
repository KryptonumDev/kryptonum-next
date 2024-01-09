import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const RevealableGrid = ({ data: { heading, description, icons, grid } }) => {
  return (
    <section className={styles.revealableGrid}>
      <header>
        <DecorativeHeading
          type='h3'
          className={styles.heading}
        >
          {heading}
        </DecorativeHeading>

        <Markdown className={styles.description}>
          {description}
        </Markdown>
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
