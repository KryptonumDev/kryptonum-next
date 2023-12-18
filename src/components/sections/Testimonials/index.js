import DecorativeHeading from "../../atoms/DecorativeHeading";
import { Quote } from "../../atoms/Icons";
import TestimonialsSection from "./testimonialsSection";

const Testimonials = ({ heading, testimonials }) => {
	const quote = <Quote />;

	return (
		<TestimonialsSection
			testimonials={testimonials}
			quote={quote}
			arrowLeft={ArrowLeft}
			arrowRight={ArrowRight}
		>
			<DecorativeHeading type="h3">{heading || "Zobacz, co mówią **klienci**"}</DecorativeHeading>
		</TestimonialsSection>
	);
};

export default Testimonials;

const ArrowLeft = (
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
			d="M19 12H5m0 0l7 7m-7-7l7-7"
		></path>
	</svg>
);

const ArrowRight = (
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