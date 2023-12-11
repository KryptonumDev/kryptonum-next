import Img from "@/utils/Img";
import Link from "next/link";
import styles from "./styles.module.scss";
import { removeMarkdown } from "@/utils/functions";
import Button from "../../atoms/Button";

const CuriosityEntry = ({ data }) => {
	return (
		<div className={styles.wrapper}>
			<Link
				href={`/pl/akademia/${data.slug.current}`}
				aria-label={removeMarkdown(data.title)}
				className={styles.link}
				tabIndex="-1"
			></Link>
			<div>
				<Img
					data={data.img}
					className={styles.img}
          sizes="(max-width: 989px) 100vw, 33vw"
				/>
			</div>
			<div className={styles.copy}>
				<div className={styles.categories}>
					{data.categories.map((category, i) => (
						<Link
							href={`/pl/akademia/kategoria/${category.slug.current}`}
							key={i}
						>
							{category.name}
						</Link>
					))}
				</div>
				<h3 className={styles.title}>{removeMarkdown(data.title)}</h3>
				<p className={styles.subtitle}>{removeMarkdown(data.subtitle)}</p>
				<Button
					theme="secondary"
					href={`/pl/akademia/${data.slug.current}`}
				>
					Czytaj więcej
				</Button>
			</div>
		</div>
	);
};

export default CuriosityEntry;
