import Img from "@/utils/Img";
import { removeMarkdown } from "@/utils/functions";
import Link from "next/link";
import styles from "./styles.module.scss";

const CaseStudies = ({ data }) => {
	return (
		<section className={styles.section}>
			{data.map((caseStudy, i) => (
				<Link
					className={styles.item}
					key={i}
					href={`/pl/portfolio/${caseStudy.slug.current}`}
				>
					<div className={styles.imgWrapper}>
						<Img
							data={caseStudy.img}
							priority={i === 0 ? true : false}
							className={styles.img}
							sizes="100vw"
						/>
					</div>
					<div className={styles.copy}>
						<h2 className={styles.caseStudyName}>{caseStudy.name}</h2>
						<ul className={styles.categories}>
							{caseStudy.categories.map((category, i) => (
								<li key={i}>{category.name}</li>
							))}
						</ul>
					</div>
					<h2>{removeMarkdown(caseStudy.heading)}</h2>
				</Link>
			))}
		</section>
	);
};
export default CaseStudies;
