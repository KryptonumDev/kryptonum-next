import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";
import StylescapeSection from "./stylescapeSection";

const Stylescape = ({ data: { heading, paragraph, stylescapes, elements } }) => {
	const header = (
		<header className={styles.header}>
			<DecorativeHeading type="h2">{heading}</DecorativeHeading>
			<Markdown className={styles.paragraph}>{paragraph}</Markdown>
		</header>
	);

	const mappedStylescapes = (
		<>
			{stylescapes && stylescapes.map((stylescape, i) => (
				<Img
					data={stylescape}
					className={`${styles.img} img`}
					key={i}
					sizes="130vw"
				/>
			))}
		</>
	);
	return (
		<StylescapeSection stylescapes={mappedStylescapes} header={header}>
			{elements && (
				<div className={styles.elements}>
					{elements.map((item, i) => (
						<div
							className={styles.item}
							key={i}
						>
							<Markdown className={styles.title}>{item.title}</Markdown>
							<Img
								data={item.img}
								className={`${styles.img} img`}
								key={i}
								sizes="(max-width: 599px) 100vw, (max-width: 999px) 50vw, 30vw"
							/>
						</div>
					))}
				</div>
			)}
		</StylescapeSection>
	);
};
export default Stylescape;
