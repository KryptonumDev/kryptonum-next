import styles from "./styles.module.scss";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Markdown from "@/utils/markdown";
import Img from "@/utils/Img";
import { ArrowDown } from "@/app/components/atoms/Icons";
import TechnologyClient from "@/app/components/organisms/TechnologyClient";

const Technology = ({
	data: { technology_Heading, technology_Paragraph, technology_Content, technology_Img },
}) => {
	const markdown = <Markdown>{technology_Content.split("\n\n").slice(0, 3).join("\n\n")}</Markdown>;

	const arrowDown = <ArrowDown />;

	const decorativeHeading = <DecorativeHeading type="h2">{technology_Heading}</DecorativeHeading>;

	const markdown2 = <Markdown>{technology_Content.split("\n\n").slice(3).join("\n\n")}</Markdown>;

	const markdown3 = <Markdown className={styles.paragraph}>{technology_Paragraph}</Markdown>;

	return (
		<TechnologyClient
			markdown={markdown}
			arrowDown={arrowDown}
			decorativeHeading={decorativeHeading}
			markdown2={markdown2}
			markdown3={markdown3}
		>
			{technology_Img.map((img, i) => (
				<Img
					data={img}
					className={styles.img}
					key={i}
				/>
			))}
		</TechnologyClient>
	);
};
export default Technology;
