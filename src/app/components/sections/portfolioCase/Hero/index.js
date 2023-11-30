import Img from "@/utils/Img";
import styles from './styles.module.scss'
import Breadcrumbs from "@/app/components/global/Breadcrumbs";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";

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
    <section className={styles.section}>
      <Img
        data={img}
        className={styles.img}
        loading="eager"
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