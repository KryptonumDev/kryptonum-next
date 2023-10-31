'use server'
import DecorativeHeading from "../../atoms/DecorativeHeading";
import CtaWithVerticalImageClient from "../Client/CtaWithVerticalImageClient";

const CtaWithVerticalImage = ({ data}) => {
	return (
		<CtaWithVerticalImageClient data={data}>
			<DecorativeHeading type="h3">{data.heading}</DecorativeHeading>
		</CtaWithVerticalImageClient>
	);
};
export default CtaWithVerticalImage;
