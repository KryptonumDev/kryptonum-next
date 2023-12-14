import DecorativeHeading from "../../atoms/DecorativeHeading";
import { SliderArrowLeft, SliderArrowRight } from "../../atoms/Icons";
import SliderSection from "./sliderSection";

const Slider = ({ data }) => {
	const arrowLeft = <SliderArrowLeft />;
	const arrowRight = <SliderArrowRight />;

	return (
		<SliderSection data={data} arrowLeft={arrowLeft} arrowRight={arrowRight}>
			<DecorativeHeading type="h3">{data.heading}</DecorativeHeading>
		</SliderSection>
	);
};
export default Slider;
