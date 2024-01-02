import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Img from '@/components/atoms/Img';

const WindowsShowcase = ({ data: { heading, description, icons, windows } }) => {
  return (
    <section className={styles.windowsShowcase}>
      <div className={styles.windowsDescription}>
        <header>
          <DecorativeHeading type='h3' className={styles.heading}>{heading}</DecorativeHeading>
        </header>
        <Markdown className={styles.description}>{description}</Markdown>
        <div className={styles.logoShowcase}>
          {icons.map((icon, index) => (
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
      <div className={styles.windows}>
        {windows.map((window, index) => (
          <div
            className={styles.windowWrapper}
            key={index}
          >
            {window.img && (
              <Img
                data={window.img}
                className={styles.windowImg}
              />
            )}
            <p className={styles.windowDescription}>{window.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WindowsShowcase;
