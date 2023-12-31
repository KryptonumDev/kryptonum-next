import Img from "@/components/atoms/Img";
import { formatDateToPolishLocale } from "@/utils/functions";
import Link from "next/link";
import { useMemo } from "react";
import AcademyEntrySmall from "../../organisms/AcademyEntrySmall";
import CaseStudy from "../../organisms/CaseStudy";
import EntryCard from "../../organisms/SitemapEntryCard";
import styles from "./styles.module.scss";

export default function Grid({
	team,
	blogEntries,
	WebDevelopment,
	Agency,
	GraphicsDesign,
	Workshop,
	caseStudies,
	curiosityEntries,
}) {
	const postsByCategory = useMemo(() => {
		const arr = [];

		blogEntries.forEach((post) => {

			post._createdAt = formatDateToPolishLocale(post._createdAt);

			post.categories.forEach((category) => {
				const categoryIndex = arr.findIndex((item) => item.category.name === category.name);
				if (categoryIndex === -1) {
					arr.push({
						category: category,
						posts: [post],
					});
				} else {
					arr[categoryIndex].posts.push(post);
				}
			});
		});

		return arr;
	}, [blogEntries]);

	const curiositiesByCategories = useMemo(() => {
		const arr = [];
		curiosityEntries.forEach((post) => {
			post._createdAt = formatDateToPolishLocale(post._createdAt);
			post.categories.forEach((category) => {
				const categoryIndex = arr.findIndex((item) => item.category.name === category.name);
				if (categoryIndex === -1) {
					arr.push({
						category: category,
						posts: [post],
					});
				} else {
					arr[categoryIndex].posts.push(post);
				}
			});
		});
		return arr;
	}, [curiosityEntries]);

	return (
		<section className={styles.section}>
			<Link
				className={styles.bigLink}
				href="/pl"
			>
				Strona główna
			</Link>
			<Link
				className={styles.bigLink}
				href="/pl/kontakt"
			>
				Szybki kontakt
			</Link>
			<Link
				className={styles.bigLink}
				href="/pl/brief-z-kryptonum"
			>
				Formularz rozbudowany
			</Link>
			<div>
				<Link
					className={styles.bigLink}
					href="/pl/zespol"
				>
					Zespół
				</Link>
				<div className={styles.teamGrid}>
					{team.map((person, i) => (
						<Link
							href={`/pl/zespol/${person.slug.current}`}
							key={i}
							className={styles.item}
						>
							<Img
              data={person.img}
								className={`${styles.img} personBorder`}
								sizes="156px"
								quality={100}
							/>
							<p>{person.name}</p>
						</Link>
					))}
				</div>
			</div>
			<div>
				<Link
					className={`${styles.bigLink} ${styles.title}`}
					href="/pl/blog"
				>
					Blog
				</Link>
				{postsByCategory.map((el, i) => (
					<div key={i}>
						<Link
							className={styles.medLink}
							href={`/pl/blog/kategoria/${el.category.slug.current}`}
						>
							{el.category.name} ({el.posts.length})
						</Link>
						<div className={styles.categoryCards}>
							{el.posts.map((entry, i) => (
								<EntryCard
									data={entry}
									key={i}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<Link
					className={styles.bigLink}
					href="/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie"
				>
					<Img
          data={Agency.hero_Img}
						className={`${styles.img} ${styles.mainImg}`}
						sizes="(max-width: 962px) 100vw, 50vw"
					/>
					<span>Opieka agencyjna</span>
				</Link>
			</div>
			<div>
				<Link
					className={styles.bigLink}
					href="/pl/web-development"
				>
					<Img
          data={WebDevelopment.hero_Img}
						className={`${styles.img} ${styles.mainImg}`}
						sizes="(max-width: 962px) 100vw, 50vw"
					/>
					<span>Web Development</span>
				</Link>
				<Link
					className={styles.medLink}
					href="/pl/web-development/aplikacje-internetowe"
				>
					Aplikacje internetowe
				</Link>
				<Link
					className={styles.medLink}
					href="/pl/web-development/sklepy-internetowe"
				>
					Sklepy internetowe
				</Link>
				<Link
					className={styles.medLink}
					href="/pl/web-development/strony-internetowe"
				>
					Strony internetowe
				</Link>
			</div>
			<div>
				<Link
					className={styles.bigLink}
					href="/pl/grafika-design"
				>
					<Img
          data={GraphicsDesign.hero_Img}
						className={`${styles.img} ${styles.mainImg}`}
						sizes="(max-width: 962px) 100vw, 50vw"
					/>
					<span>Grafika & design & kreacja</span>
				</Link>
				<Link
					className={styles.medLink}
					href="/pl/grafika-design-audyt-ux-ui"
				>
					Audyty
				</Link>
				<Link
					className={styles.medLink}
					href="/pl/grafika-design-identyfikacja-wizualna-marki"
				>
					Identyfikacja wizualna i branding
				</Link>
				<Link
					className={styles.medLink}
					href="/pl/grafika-design-projektowanie-logo"
				>
					Logo
				</Link>
			</div>
			<div>
				<Link
					className={styles.bigLink}
					href="/pl/warsztaty-discovery"
				>
					<Img
          data={Workshop.hero_Img}
          className={`${styles.img} ${styles.mainImg}`}
					sizes="(max-width: 962px) 100vw, 50vw"
					/>
					<span>Warsztat strategiczny</span>
				</Link>
			</div>
			<div>
				<Link
					className={styles.bigLink}
					href="/pl/portfolio"
				>
					Case study
				</Link>
				{caseStudies.map((entry, i) => (
					<CaseStudy
						data={entry}
						key={i}
					/>
				))}
			</div>
			<div>
				<Link
					className={styles.bigLink}
					href="/pl/akademia"
				>
					Akademia
				</Link>
				{curiositiesByCategories.map((el, i) => (
					<div key={i}>
						<Link
							className={styles.medLink}
							href={`/pl/akademia/kategoria/${el.category.slug.current}`}
						>
							{el.category.name} ({el.posts.length})
						</Link>
						<div className={styles.categoryCards}>
							{el.posts.map((entry, i) => (
								<AcademyEntrySmall
									data={entry}
									key={i}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<Link
				className={styles.bigLink}
				href="/pl/polityka-prywatnosci"
			>
				Polityka prywatności
			</Link>
		</section>
	);
}
