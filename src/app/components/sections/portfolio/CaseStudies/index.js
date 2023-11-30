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
							loading={i === 0 ? "eager" : "lazy"}
							className={styles.img}
						/>
					</div>
					<div className={styles.copy}>
						<h3>{caseStudy.name}</h3>
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
