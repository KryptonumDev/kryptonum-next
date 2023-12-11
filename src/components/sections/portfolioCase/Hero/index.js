import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import Img from "@/utils/Img";
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
      <Img
        data={img}
        className={styles.img}
        priority={true}
        sizes="100vw"
      />
      <Breadcrumbs portfolio={true} breadcrumbs={breadcrumbs} />
      <header>
        <DecorativeHeading>{heading}</DecorativeHeading>
        <div className={styles.categories}>
          <p>{categories_Paragraph}</p>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>{category.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </section>
  );
}
export default Hero;