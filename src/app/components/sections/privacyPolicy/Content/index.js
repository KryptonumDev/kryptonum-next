import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import ReadingTime from "@/app/components/atoms/ReadingTime";
import TableOfContent from "@/app/components/molecules/TableOfContent";
import PortableContent from "@/app/components/organisms/PortableContent";
import styles from "./styles.module.scss";
import { generateTableOfContent } from "@/utils/functions";
import PrivacyPolicyContentClient from "@/app/components/organisms/PrivacyPolictContentClient";

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
