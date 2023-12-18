import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Markdown from "@/components/atoms/Markdown";
import styles from "./styles.module.scss";

const KeyElements = ({ heading, list, paragraph }) => {
  return (
    <section className={styles.wrapper}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
      <ol>
        {list.map((item, i) => (
          <li key={i}>
            <Markdown
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {item}
            </Markdown>
          </li>
        ))}
      </ol>
      {paragraph && <Markdown className={styles.paragraph}>{paragraph}</Markdown>}
    </section>
  );
};

export default KeyElements;
