import TestimonialsClient from "../Client/TestimonialsClient";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const Testimonials = ({ heading, testimonials }) => {
	return (
		<TestimonialsClient testimonials={testimonials}>
			<DecorativeHeading type="h3">{heading || "Zobacz, co mówią **klienci**"}</DecorativeHeading>
		</TestimonialsClient>
	);
};

export default Testimonials;
