import HeadingImageText from "@/app/components/molecules/HeadingImageText";
import styles from './styles.module.scss';

const HumansAndMice = () => {

  const headingContent="Ludzie i myszy – **testujemy pełną parą**";
  const image = {
    		asset: {
			altText: "asdsadsadsad",
			url: "/Frame 26081370.png",
			metadata: {
				dimensions: {
					height: 1000,
					width: 2000,
				},
			},
		},
  }

  const description = [
    "Pora solidnie przetestować wszystko, co do tej pory wypracowaliśmy. To właśnie tutaj pojawiają się ludzie i myszy (no, OK, same klawiatury też wystarczą) gotowi przeklikać wszystkie zakamarki strony internetowej lub aplikacji.",
    "Logowanie, odzyskiwanie hasła, sprawdzanie różnych przeglądarek czy odpalanie strony na słabym necie – testy UX nie są zwykłym scrollowankiem.",
    "Zaprzęgniemy do akcji dobre praktyki budowania interfejsów cyfrowych, heurystyki Nielsena, zasady Gestalt i piramidę potrzeb UX, by zaprojektować intuicyjną stronę internetową. Nigdy więcej frustrujących formularzy, linków prowadzących donikąd czy zamulających filmów wideo!",
    "Testerzy mają full zadań do wykonania, a my śledzimy każdy ich ruch, by nie przeoczyć żadnej przeszkody, o którą może się potknąć świetny UX."
  ]

  return (
    <HeadingImageText
      headingType="h4"
      headingDecoration={true}
      headingContent={headingContent}
      image = {image}
      description={description}
      className={styles.headingImageText}
      imageWrapperClassName={styles.imageWrapper}
      headingWrapperClassName={styles.headingWrapper}
    >

    </HeadingImageText>
  )
}
export default HumansAndMice;