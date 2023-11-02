import DecorativeHeading from "../../atoms/DecorativeHeading";
import { SliderArrowLeft, SliderArrowRight } from "../../atoms/Icons";
import SliderClient from "../Client/SliderClient";

const Slider = ({ data }) => {
	const arrowLeft = <SliderArrowLeft />;
	const arrowRight = <SliderArrowRight />;

	return (
		<SliderClient data={data} arrowLeft={arrowLeft} arrowRight={arrowRight}>
			<DecorativeHeading type="h3">{data.heading}</DecorativeHeading>
		</SliderClient>
	);
};
export default Slider;
