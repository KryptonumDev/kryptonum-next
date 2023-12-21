import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Breadcrumbs from "@/global/Breadcrumbs";
import styles from './styles.module.scss';

const Hero = ({
  data: {
    heading,
    categories_Paragraph,
    categories,
    img,
  },
  breadcrumbs
}) => {
  return (
    <section className={`${styles.section}`}>
      <div className={styles.imageWrapper}>
      <Img
        data={img}
        className={styles.img}
        priority={true}
        sizes="100vw"
      />
      </div>
      <Breadcrumbs portfolio={true} breadcrumbs={breadcrumbs} />
      <header>
        <DecorativeHeading type="h1">{heading}</DecorativeHeading>
        <div className={styles.categories}>
          <p>{categories_Paragraph}</p>
          <ul>
            {categories?.map((category, i) => (
              <li key={i}>{category.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </section>
  );
}
export default Hero;