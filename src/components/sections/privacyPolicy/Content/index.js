import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import ReadingTime from "@/components/atoms/ReadingTime";
import PortableContent from "@/components/organisms/PortableContent";
import { generateTableOfContent } from "@/utils/functions";
import ContentSection from "./contentSection";

const Content = ({ heading, _rawContent }) => {
  
	const content = generateTableOfContent(_rawContent);

	const header = (
		<header>
			<DecorativeHeading type="h2">{heading}</DecorativeHeading>
		</header>
	);

	return (
		<ContentSection
			content={content}
			header={header}
		>
			<div>
				<ReadingTime content={_rawContent} />
				<PortableContent data={_rawContent} />
			</div>
		</ContentSection>
	);
};
export default Content;
