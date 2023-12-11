import Img from "@/utils/Img";
import { generateTableOfContent } from "@/utils/functions";
import Link from "next/link";
import ReadingTime from "../../atoms/ReadingTime";
import ContentClient from "../../organisms/ContentClient";
import PortableContent from "../../organisms/PortableContent";
import styles from "./styles.module.scss";
import { Share } from "../../atoms/Icons";

const Content = ({ contentRaw, author, share }) => {
	author = author[0];

	const link = (
		<Link
			href={`/pl/zespol/${author.slug.current}`}
			className={styles.author}
		>
			<Img
				data={author.img}
				className={`${styles.img} personBorder`}
				sizes="156px"
			/>
			<p>Autor: {author.name}</p>
		</Link>
	);
	
	const shareIcon=<Share/>

	const content = generateTableOfContent(contentRaw);

	return (
		
			<ContentClient
				link={link}
				shareIcon={shareIcon}
				share={share}
				content={content}
			>
				<div>
					<ReadingTime content={contentRaw} />
					<PortableContent data={contentRaw} />
				</div>
			</ContentClient>

	);
};
export default Content;
