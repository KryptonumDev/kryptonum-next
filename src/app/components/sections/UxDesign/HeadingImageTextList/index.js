import HumansAndMice from "@/app/components/organisms/HumansAndMice";
import IsItOver from "@/app/components/organisms/IsItOver";
import RontgenArea from "@/app/components/organisms/RontgenArea";
import UxPuzzles from "@/app/components/organisms/UxPuzzles";
import Workshops from "@/app/components/organisms/Workshops";

const HeadingImageTextList = () => {
	return (
		<section>
			<Workshops />
			<RontgenArea />
			<UxPuzzles/>
			<HumansAndMice/>
			<IsItOver/>
			</section>
	);
};
export default HeadingImageTextList;