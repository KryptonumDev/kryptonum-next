"use client";

import Img from "@/components/atoms/Img";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";

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
              sizes="30px"
							quality={100}
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
