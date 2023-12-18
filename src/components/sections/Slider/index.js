import DecorativeHeading from "../../atoms/DecorativeHeading";
import { SliderArrowLeft, SliderArrowRight } from "../../atoms/Icons";
import SliderSection from "./sliderSection";

const Slider = ({ data }) => {
	const arrowLeft = <SliderArrowLeft />;
	const arrowRight = <SliderArrowRight />;

	return (
		<SliderSection
			data={data}
			arrowLeft={arrowLeft}
			arrowRight={arrowRight}
		>
			<DecorativeHeading type="h3">{data.heading}</DecorativeHeading>
		</SliderSection>
	);
};
export default Slider;

export const SliderArrowRight = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="none"
	>
		<path
			stroke="#EFF0F3"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M5 12h14m0 0l-7-7m7 7l-7 7"
		></path>
	</svg>
);
