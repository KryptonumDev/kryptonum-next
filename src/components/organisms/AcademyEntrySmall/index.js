import Img from "@/components/atoms/Img";
import { removeMarkdown } from "@/utils/functions";
import Link from "next/link";
import styles from "./styles.module.scss";

const AcademyEntrySmall = ({ data }) => {
	return (
		<section className={styles.entry}>
			<Link
				href={`/pl/akademia/${data.slug.current}`}
				className={styles.link}
				aria-label={removeMarkdown(data.title)}
			/>
			<Img
				data={data.img}
				className={styles.img}
				sizes="127px"
				quality={100}
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
							quality={100}
						/>
						<span>{data.author[0].name}</span>
					</Link>
					<span className={styles.createdAt}>{data._createdAt}</span>
				</div>
				<h3 className={styles.title}>{removeMarkdown(data.title)}</h3>
			</div>
		</section>
	);
};
export default AcademyEntrySmall;
