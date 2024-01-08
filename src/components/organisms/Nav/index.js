import { ChevronDown, ChevronLeft, KryptonumLogo } from "@/atoms/Icons";
import Img from "@/components/atoms/Img";
import NavLink from "@/components/atoms/NavLink";
import { formatDateToPolishLocale, removeMarkdown } from "@/utils/functions";
import Navigation from "./navigation";
import styles from "./styles.module.scss";

const Nav = ({
	caseStudies,
	team,
	blogEntries,
	blogCategories,
	curiosityEntries,
	curiosityCategories,
	blogAuthors,
	academyAuthors,
}) => {
	const uniqueAuthors = (data) => {
		const uniqueAuthors = {};
		data.forEach((node) => {
			const author = node.author[0];
			const key = author.name;
			if (!uniqueAuthors[key]) {
				uniqueAuthors[key] = author;
			}
		});
		return Object.values(uniqueAuthors);
	};

	blogAuthors = uniqueAuthors(blogAuthors);
	academyAuthors = uniqueAuthors(academyAuthors);

	const kryptonumLogo = (
		<NavLink
			href="/pl"
			aria-label="Strona główna"
		>
			<KryptonumLogo />
		</NavLink>
	);

	const chevronDown = <ChevronDown />;

	const chevronLeft = <ChevronLeft />;

	const servicesContents = (
		<>
			<li>
				<h3>
					<NavLink href="/pl/web-development">Web Development</NavLink>
				</h3>
				<ul className={styles.navList3}>
					<li>
						<NavLink href="/pl/web-development-strony-internetowe">Strony internetowe</NavLink>
					</li>
					<li>
						<NavLink href="/pl/web-development-aplikacje-internetowe">
							Aplikacje internetowe
						</NavLink>
					</li>
					<li>
						<NavLink href="/pl/web-development-sklepy-internetowe">Sklepy internetowe</NavLink>
					</li>
				</ul>
			</li>
			<li>
				<h3>
					<NavLink href="/pl/grafika-design">Grafika & design</NavLink>
				</h3>
				<ul className={styles.navList3}>
					<li>
						<NavLink href="/pl/grafika-design-projektowanie-logo">Logo</NavLink>
					</li>
					<li>
						<NavLink href="/pl/grafika-design-audyt-ux-ui">Audyty</NavLink>
					</li>
					<li>
						<NavLink href="/pl/grafika-design-identyfikacja-wizualna-marki">Identyfikacja wizualna i branding</NavLink>
					</li>
					<li>
						<NavLink href="/pl/grafika-design/branding">Branding</NavLink>
					</li>
					<li>
						<NavLink href="/pl/grafika-design/projektowanie-ui">UI</NavLink>
					</li>
					<li>
						<NavLink href="/pl/grafika-design/projektowanie-ux">UX</NavLink>
					</li>
				</ul>
			</li>
			<li>
				<h3>
					<NavLink href="/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie">
						Opieka agencyjna
					</NavLink>
				</h3>
			</li>
			<li>
				<h3>
					<NavLink href="/pl/warsztaty-discovery">Warsztat strategiczny</NavLink>
				</h3>
			</li>
			<li>
				<h3>
					<NavLink href="/pl/marketing-360">Marketing 360°</NavLink>
				</h3>
			</li>
		</>
	);

	const projectsContents = (
		<>
			<h3 className={styles.navList2Subpage}>
				<NavLink href="/pl/portfolio">Przejdź do projektów</NavLink>
			</h3>
			<div className={styles.wrapper}>
				{caseStudies.map((caseStudy, i) => (
					<NavLink
						href={`/pl/portfolio/${caseStudy.slug.current}`}
						key={i}
					>
						<div className={styles.imgWrapper}>
							<Img
								data={caseStudy.img}
								className={styles.img}
								sizes="(max-width: 1149px) 50vw, 25vw"
							/>
						</div>
						<p>{caseStudy.name}</p>
					</NavLink>
				))}
			</div>
		</>
	);

	const teamContents = (
		<>
			<h3 className={styles.navList2Subpage}>
				<NavLink
					href="/pl/zespol"
				>
					Przejdź do: nasz zespół
				</NavLink>
			</h3>
			<div className={styles.wrapper}>
				{team.map((person, i) => (
					<NavLink
						href={`/pl/zespol/${person.slug.current}`}
						key={i}
						className={styles.person}
					>
						<div className={`${styles.personBorder} personBorder`}>
							<Img
								data={person.img}
								className={`${styles.img}`}
								sizes="96px"
								quality={100}
							/>
						</div>
						<p>{person.name}</p>
					</NavLink>
				))}
			</div>
		</>
	);

	const blogContents = (
		<>
			<div className={styles.entries}>
				<h3>
					<NavLink href="/pl/blog">Zobacz bloga</NavLink>
				</h3>
				{blogEntries.map((entry, i) => (
					<div
						className={styles.entry}
						key={i}
					>
						<NavLink
							href={`/pl/blog/${entry.slug.current}`}
							className={styles.link}
							aria-label={removeMarkdown(entry.title)}
						></NavLink>
						<div className={`${styles.imgWrapper}`}>
							<Img
								data={entry.img}
								className={styles.img}
								sizes="200px"
								quality={100}
							/>
						</div>
						<div className={styles.copy}>
							<div className={styles.copyTop}>
								<NavLink
									href={`/pl/zespol/${entry.author[0]?.slug?.current}`}
									className={styles.person}
								>
									<div className={`${styles.img} ${styles.personBorder} personBorder`}>
										<Img
											data={entry.author[0]?.img}
											className={styles.img}
											sizes="32px"
											quality={100}
										/>
									</div>
									<span>{entry.author[0]?.name}</span>
								</NavLink>
								<span>{formatDateToPolishLocale(entry._createdAt)}</span>
							</div>
							<p>{removeMarkdown(entry.title)}</p>
						</div>
					</div>
				))}
			</div>
			<div className={styles.categories}>
				<h3>Kategorie:</h3>
				<div className={styles.wrapper}>
					{blogCategories.map((category, i) => (
						<NavLink
							href={`/pl/blog/kategoria/${category.slug.current}`}
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
					{blogAuthors.map((person, i) => (
						<NavLink
							href={`/pl/zespol/${person.slug.current}`}
							key={i}
							className={styles.person}
						>
							<div className={`${styles.imageWrapper} personBorder`}>
								<Img
									data={person.img}
									className={`${styles.personBorder} ${styles.img}`}
									sizes="96px"
									quality={100}
								/>
							</div>
							<p>{person.name}</p>
						</NavLink>
					))}
				</div>
			</div>
		</>
	);

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
