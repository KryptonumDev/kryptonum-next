import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';
import Markdown from '@/components/atoms/Markdown';

const HeadingWithIconDescriptionList = ({ data: { IconDescriptionList, heading } }) => {
  return (
    <section className={styles.headingWithIconDescriptionList}>
      <header>
        <DecorativeHeading
          type='h3'
          className={styles.heading}
        >
          {heading}
        </DecorativeHeading>
      </header>
      <div className={styles.content}>
        {IconDescriptionList.map((item, index) => (
          <div
            className={styles.item}
            key={index}
          >
            <div className={styles.iconWrapper}>
              <Img
                data={item.icon}
                className={styles.icon}
              />
            </div>
            <Markdown className={styles.description}>{item.description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeadingWithIconDescriptionList;
