import Img from "@/utils/Img";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";
import Link from "next/link";
import { formatDateToPolishLocale } from "@/utils/functions";

const EntryHero = ({ 
  title, 
  subtitle, 
  categories, 
  categorySlug, 
  _createdAt, 
  img, 
  author 
}) => {
  _createdAt = formatDateToPolishLocale(_createdAt);
	return (
		<section className={`${styles.wrapper} hero`}>
			<header className={author ? styles.hasAuthor : ""}>
				<DecorativeHeading>{title}</DecorativeHeading>
				<Markdown className={styles.subtitle}>{subtitle}</Markdown>
				{author && (
					<Link
						href={`/pl/zespol/${author[0].slug.current}`}
						className={styles.author}
					>
						<Img
							data={author[0].img}
							className={`personBorder ${styles.authorImg}`}
						/>
						<span>{author[0].name}</span>
					</Link>
				)}
				<div className={styles.categories}>
					{categories.map((category, i) => (
						<Link
							key={i}
							href={`${categorySlug}${category.slug.current}`}
						>
							{category.name}
						</Link>
					))}
				</div>
				<p className={styles.createdAt}>{_createdAt}</p>
			</header>
			<Img
				data={img}
				className={styles.img}
			/>
		</section>
	);
};
export default EntryHero;
