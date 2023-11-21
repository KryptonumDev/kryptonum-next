import Markdown from "@/utils/markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import ShowcaseClient from "../../organisms/ShowcaseClient";
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "./logos";
import styles from "./styles.module.scss";

const Showcase = ({
	data: {
		showcase_Heading,
		showcase_Paragraph,
		showcase_List,
		showcase_SummaryLeft,
		showcase_SummaryRight,
	},
}) => {
	const decorativeHeading = (
		<DecorativeHeading
			type="h2"
		>
			{showcase_Heading}
		</DecorativeHeading>
	);

	const markdown = <Markdown className={styles.paragraph}>{showcase_Paragraph}</Markdown>;

	const logos = (
		<>
			<Logo1 />
			<Logo2 />
			<Logo3 />
			<Logo4 />
			<Logo5 />
		</>
	);

	return (
		<ShowcaseClient
      decorativeHeading={decorativeHeading}
			markdown={markdown}
			logos={logos}
			showcase_SummaryLeft={showcase_SummaryLeft}
			showcase_SummaryRight={showcase_SummaryRight}
		>
			{showcase_List.map((item, i) => (
				<div
					className={styles.item}
					key={i}
				>
					<Markdown className={styles.title}>{item.title}</Markdown>
					<Markdown className={styles.description}>{item.description}</Markdown>
				</div>
			))}
		</ShowcaseClient>
	);
};
export default Showcase;
