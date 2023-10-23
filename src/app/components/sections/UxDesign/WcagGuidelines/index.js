import TextComponent from "@/app/components/molecules/TextComponent";

const WcagGuidelines = () => {

  const headingContent = "Wytyczne WCAG, czyli UX na wysoki połysk";
  const blocks = [
    {
      description: "Czy zdarzyło Ci się widzieć matkę próbującą wciągnąć wózek  z dzieckiem pod wysoki krawężnik? Niezły challenge, prawda? Na stronach internetowych roi się od podobnych przeszkód.",
    }, 
    {
      description: "Jeśli chcesz, by Twoja strona była dostępna dla wszystkich, nie tylko dla wysportowanych osiłków, zaprojektujemy ją zgodnie z zasadami dostępności WCAG."
    }
  ];
  const data = {
    heading: headingContent,
    blocks: blocks
  }

	return (
		<section>
			<TextComponent
      data={data}/>
		</section>
	);
};
export default WcagGuidelines;
