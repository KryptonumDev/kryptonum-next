import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import Button from "../../atoms/Button";
import styles from "./styles.module.scss";

const TextComponent = ({ data: { heading, blocks }, breakLine }) => {
  return (
    <div className={breakLine ? `${styles.wrapper} ${styles.breakLine}` : styles.wrapper}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <div className={styles.divWrapper}>
        {blocks?.map((item, i) => {
          item.description;
          return (
            <div className={styles.item} key={i}>
              {item.icon ? (
                <div className={styles.imageWrapper}>
                  <Img data={item.icon} className={`${styles.icon} personBorder`} sizes="200px" quality={100} />
                </div>
              ) : (
                <Markdown className={styles.title}>{item.title}</Markdown>
              )}
              <Markdown
                className={styles.description}
                components={{
                  li: ({ children, ordered }) => (
                    <li>
                      {!ordered && <BulletListIcon />}
                      <span>{children}</span>
                    </li>
                  ),
                  a: ({ href, children }) => (
                    <Button theme="secondary" href={href}>
                      {children}
                    </Button>
                  ),
                }}
              >
                {item.description}
              </Markdown>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BulletListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path stroke="#EFF0F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6"></path>
  </svg>
);
export default TextComponent;
