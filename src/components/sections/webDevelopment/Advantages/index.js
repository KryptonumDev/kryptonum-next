import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import SimpleCtaSection from "../../SimpleCtaSection";
import AdvantagesSection from "./advantagesSection";

const Advantages = ({ heading, advantages, simpleCtaSection }) => {
	const ctaSection = (
		<SimpleCtaSection
			data={simpleCtaSection}
		/>
	);

	return (
		<AdvantagesSection
			advantages={advantages}
			simpleCtaSection={ctaSection}
		>
			<DecorativeHeading type="h2">{heading}</DecorativeHeading>
		</AdvantagesSection>
	);
};
export default Advantages;
