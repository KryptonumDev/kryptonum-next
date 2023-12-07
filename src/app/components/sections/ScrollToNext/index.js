import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import { ArrowDown, ScrollDown } from "../../atoms/Icons";
import styles from "./styles.module.scss";
import ScrollToNextClient from "../../molecules/ScrollToNextClient";

const ScrollToNext = ({ data: { heading, paragraph, title, link } }) => {
	const markdown = <Markdown>{title}</Markdown>;

	const decorativeHeading = heading ? (
		<DecorativeHeading type="h2">{heading}</DecorativeHeading>
	) : null;

	const scrollDown = <ScrollDown />;

	const image = (
		<Img
			data={link.person.img}
			className={`personBorder ${styles.personBorder}`}
		/>
	);

	return (
		<ScrollToNextClient
			link={link}
			decorativeHeading={decorativeHeading}
			scrollDown={scrollDown}
			markdown={markdown}
			image={image}
		>
			<div className={styles.paragraph}>
				<Markdown>{paragraph}</Markdown>
				<ArrowDown />
			</div>
		</ScrollToNextClient>
	);
};

export default ScrollToNext;
