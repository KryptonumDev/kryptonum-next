import HeadingImageText from "@/app/components/molecules/HeadingImageText";
import styles from './styles.module.scss';

const IsItOver = () => {
  const headingContent = "I to **koniec**?"
  const image = { 
    asset: {
      altText: "asdsadsadsad",
      url: "/Frame 26081372.svg",
      metadata: {
        dimensions: {
          height: 603,
          width: 302,
        },
      },
    },
  }
  const description = [
    "Projektowanie UX nie kończy się wraz z uruchomieniem strony, sklepu internetowego czy aplikacji. Trzeba niezmiennie trzymać rękę na pulsie, analizować, wyciągać wnioski, zmieniać i testować. W tym też Ci pomożemy!"
  ]

  return (
    <HeadingImageText
    headingType="h4"
    headingDecoration={true}
    headingContent={headingContent}
    image={image}
    description={description}
    className={styles.headingImageText}
    imageWrapperClassName={styles.imageWrapper}
    headingWrapperClassName={styles.headingWrapper}
    />
    )
}
export default IsItOver;