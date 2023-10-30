'use server'
import DecorativeHeading from "../../atoms/DecorativeHeading";
import CtaWithVerticalImageClient from "../Client/CtaWithVerticalImageClient";

const CtaWithVerticalImage = ({ data}) => {
	return (
		<CtaWithVerticalImageClient data={data}>
			<DecorativeHeading type="h4">{data.heading}</DecorativeHeading>
		</CtaWithVerticalImageClient>
	);
};
export default CtaWithVerticalImage;
