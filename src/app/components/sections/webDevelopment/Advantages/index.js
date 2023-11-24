import SimpleCtaSection from "../../SimpleCtaSection";
import AdvantagesClient from "../../client/AdvantagesClient";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";

const Advantages = ({ heading, advantages, simpleCtaSection }) => {
	const ctaSection = (
		<SimpleCtaSection
			data={simpleCtaSection}
		/>
	);

	return (
		<AdvantagesClient
			advantages={advantages}
			simpleCtaSection={ctaSection}
		>
			<DecorativeHeading type="h2">{heading}</DecorativeHeading>
		</AdvantagesClient>
	);
};
export default Advantages;
