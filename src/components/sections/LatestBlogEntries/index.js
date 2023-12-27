import Button from "@/components/atoms/Button";
import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import BlogEntry from "@/components/organisms/BlogEntry";
import styles from "./styles.module.scss";

const LatestBlogEntries = ({
  data,
  heading,
  exclude = null,
  smallEntry = false,
}) => {


  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">
        {heading || "Zobacz nasze najnowsze **posty** na blogu"}
      </DecorativeHeading>
      <div className="wrapper">
        {data
          .filter((entry) => entry.slug.current !== exclude)
          .map(
            (entry, i) =>
              i < 3 && (
                <BlogEntry data={entry} key={i} smallEntry={smallEntry} />
              )
          )}
      </div>
      <Button theme="secondary" href="/pl/blog" className={styles.cta}>
        Przejdź do bloga
      </Button>
    </section>
  );
};

export default LatestBlogEntries;