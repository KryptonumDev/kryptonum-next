import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import ReadingTime from "@/app/components/atoms/ReadingTime";
import PortableContent from "@/app/components/organisms/PortableContent";
import PrivacyPolicyContentClient from "@/app/components/organisms/PrivacyPolictContentClient";
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
