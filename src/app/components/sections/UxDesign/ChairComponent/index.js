import styles from './styles.module.scss';
import Consultation from '@/app/components/molecules/UxDesign/Consultation';

const ChairComponent = () => {
  const buttonContext = "Pogadajmy!";
  const buttonMobileContext="Pogadajmy!";
  const headingContext = "Chcesz mieć stronę, która ugości jak należy każdego użytkownika?";
  const image = {
		asset: {
			altText: "Aasdasd",
			url: "/Tron 1.svg",
			metadata: {
				dimensions: {
					height: 500,
					width: 430,
				},
			},
		},
	};


  return (
    <section className={styles.wrapper}>
      <Consultation
      className={styles.consultation}
      image={image}
      buttonContext={buttonContext}
      buttonMobileContext={buttonMobileContext}
      headingContext={headingContext}
      imageWrapperClassName={styles.imageWrapper}
      imageClassName={styles.image}
      buttonClassName={styles.button}></Consultation>
    </section>
  )
}
export default ChairComponent;