"use client";

import TableOfContent from "@/components/molecules/TableOfContent";
import styles from "./styles.module.scss";

const ContentSection = ({ content, header, children }) => {
	return (
		<section className={styles.section}>
			{header}
			<div className={styles.column}>
				<nav>
					<TableOfContent content={content} />
				</nav>
				{children}
			</div>
		</section>
	);
};
export default ContentSection;
