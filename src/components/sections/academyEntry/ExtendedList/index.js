import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from './styles.module.scss';

const ExtendedList = ({
  data: {
    heading,
    subtitle,
    extendedList
  }
}) => {
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      {subtitle && <Markdown className={styles.subtitle}>{subtitle}</Markdown>}
      <div className={styles.list}>
        {extendedList.map((list, i) => (
          <div className={styles.listItem} key={i}>
            {list.paragraph && (
              <Markdown className={styles.paragraph}>{list.paragraph}</Markdown>
            )}
            <div className={styles.wrapper}>
              {list.item.map((item, i) => (
                <div className={styles.wrapperItem} key={i}>
                  <Img
                    data={item.img}
                    className={styles.img}
                  />
                  <Markdown className={styles.paragraph}>{item.paragraph}</Markdown>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ExtendedList;