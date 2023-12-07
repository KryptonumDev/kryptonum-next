"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

const TechnologyClient = ({
	markdown,
	arrowDown,
	decorativeHeading,
	markdown2,
	markdown3,
	children,
}) => {
	const [showMore, setShowMore] = useState(false);
	return (
		<section className={styles.section}>
			<header>{decorativeHeading}</header>
			<div className={styles.content}>
				{markdown}
				<button
					onClick={() => setShowMore(!showMore)}
					className={showMore ? styles.showedMore : ""}
				>
					<span>{showMore ? "Pokaż mniej" : "Pokaż więcej"}</span>
					{arrowDown}
				</button>
				<div
					className={styles.text}
					style={{ display: showMore ? "block" : "none" }}
				>
					{markdown2}
				</div>
			</div>
			{markdown3}
			<div className={styles.images}>{children}</div>
		</section>
	);
};
export default TechnologyClient;
