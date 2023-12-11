import Link from "next/link";
import styles from "./styles.module.scss";
import Img from "@/utils/Img";
import { removeMarkdown } from "@/utils/functions";

const EntryCard = ({ data }) => {
	return (
		<div className={styles.entry}>
			<Link
				href={`/pl/blog/${data.slug.current}`}
				className={styles.link}
				aria-label={removeMarkdown(data.title)}
			/>
			<Img
				data={data.img}
				className={styles.img}
        sizes="(max-width: 420px) 50vw, 127px"
			/>
			<div>
				<div className={styles.flex}>
					<Link
						href={`/pl/zespol/${data.author[0].slug.current}`}
						className={styles.author}
					>
						<Img
							data={data.author[0].img}
							className={`personBorder ${styles.authorImg}`}
              sizes="34px"
						/>
						<span>{data.author[0].name}</span>
					</Link>
					<span className={styles.createdAt}>{data._createdAt}</span>
				</div>
				<h3 className={styles.title}>{removeMarkdown(data.title)}</h3>
			</div>
		</div>
	);
};
export default EntryCard;
