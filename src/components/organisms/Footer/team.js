"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";
import Img from "@/utils/Img";

const Team = ({ team }) => {
	const [showMore, setShowMore] = useState(0);
	const maxPeople = 6;
	const peopleToExpand = team.length - maxPeople;

	return (
		<>
			{team.map((person, i) => (
				<Link
					href={`/pl/zespol/${person.slug.current}`}
					className={styles.person}
					key={i}
					style={{ display: !showMore && i + 1 > maxPeople ? "none" : "" }}
				>
					<div className={`${styles.personBorder} personBorder`}>
						<Img
							data={person.img}
							className={`${styles.personBorder}`}
						/>
					</div>
					<span>{person.name}</span>
				</Link>
			))}
			<button onClick={() => setShowMore(!showMore)}>
				{showMore ? `Pokaż mniej` : `Pokaż więcej (${peopleToExpand})`}
			</button>
		</>
	);
};
export default Team;
