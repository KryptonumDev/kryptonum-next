'use server'
import DecorativeHeading from "../../atoms/DecorativeHeading";
import CtaSectionClient from "../Client/CtaSectionClient";

const CtaSection = ({ data}) => {
	return (
		<CtaSectionClient data={data}>
			<DecorativeHeading type="h3">{data.heading}</DecorativeHeading>
		</CtaSectionClient>
	);
};
export default CtaSection;
