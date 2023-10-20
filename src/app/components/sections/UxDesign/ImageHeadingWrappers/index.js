import Workshops from "@/app/components/organisms/Workshops";
import RontgenArea from "@/app/components/organisms/RontgenArea";
import UxPuzzles from "@/app/components/organisms/UxPuzzles";
import HumansAndMice from "@/app/components/organisms/HumansAndMice";
import IsItOver from "@/app/components/organisms/IsItOver";

const ImageHeadingWrappers = () => {
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
export default ImageHeadingWrappers;