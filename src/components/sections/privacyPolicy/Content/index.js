import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import ReadingTime from "@/components/atoms/ReadingTime";
import PortableContent from "@/components/organisms/PortableContent";
import PrivacyPolicyContentClient from "@/components/organisms/PrivacyPolictContentClient";
import { generateTableOfContent } from "@/utils/functions";

const Content = ({ heading, _rawContent }) => {
  
	const content = generateTableOfContent(_rawContent);

	const header = (
		<header>
			<DecorativeHeading type="h2">{heading}</DecorativeHeading>
		</header>
	);

	return (
		<PrivacyPolicyContentClient
			content={content}
			header={header}
		>
			<div>
				<ReadingTime content={_rawContent} />
				<PortableContent data={_rawContent} />
			</div>
		</PrivacyPolicyContentClient>
	);
};
export default Content;
