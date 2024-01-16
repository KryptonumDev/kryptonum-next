import { ChevronDown, ChevronLeft, KryptonumLogo } from "@/atoms/Icons";
import Img from "@/components/atoms/Img";
import { formatDateToPolishLocale, removeMarkdown } from "@/utils/functions";
import Navigation from "./navigation";
import styles from "./styles.module.scss";

const Nav = () => {
	return (
		<Navigation
			kryptonumLogo={kryptonumLogo}
			chevronDown={chevronDown}
			chevronLeft={chevronLeft}
			servicesContents={servicesContents}
			projectsContents={projectsContents}
			teamContents={teamContents}
			blogContents={blogContents}
		>
			<>
				<div className={styles.curiosities}>
					<h3>
						<NavLink href="/pl/akademia">Zobacz akademię</NavLink>
					</h3>
					{curiosityEntries.map((curiosity, i) => (
						<NavLink
							href={`/pl/akademia/${curiosity.slug.current}`}
							key={i}
							className={styles.link}
						>
							<div className={`${styles.imgWrapper}`}>
								<Img
									data={curiosity.img}
									className={styles.img}
									sizes="200px"
									quality={100}
								/>
							</div>
							<p>{removeMarkdown(curiosity.title)}</p>
						</NavLink>
					))}
				</div>
				<div className={styles.categories}>
					<h3>Kategorie:</h3>
					<div className={styles.wrapper}>
						{curiosityCategories.map((category, i) => (
							<NavLink
								href={`/pl/akademia/kategoria/${category.slug.current}`}
								key={i}
							>
								{category.name}
							</NavLink>
						))}
					</div>
				</div>
				<div className={styles.authors}>
					<h3>Twórcy:</h3>
					<div className={styles.wrapper}>
						{academyAuthors.map((person, i) => (
							<NavLink
								href={`/pl/zespol/${person.slug.current}`}
								key={i}
								className={styles.person}
							>
								<div className={`${styles.imageWrapper} personBorder`}>
									<Img
										data={person.img}
										className={`${styles.personBorder} ${styles.img}`}
										sizes="120px"
										quality={100}
									/>
								</div>
								<p>{person.name}</p>
							</NavLink>
						))}
					</div>
				</div>
			</>
		</Navigation>
	);
};

export default Nav;
