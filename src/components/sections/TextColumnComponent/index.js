import Markdown from "@/components/atoms/markdown";
import Button from "../../atoms/Button";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const TextColumnComponent = ({ data: { heading, items } }) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h2">{heading}</DecorativeHeading>
			</header>
			<div className={styles.wrapper}>
				{items.map((item, i) => (
					<div
						className={styles.item}
						key={i}
					>
						<Markdown
							className={styles.description}
							components={{
								a: ({ href, children }) => (
									<Button
										theme="secondary"
										href={href}
									>
										{children}
									</Button>
								),
							}}
						>
							{item}
						</Markdown>
					</div>
				))}
			</div>
		</section>
	);
};
export default TextColumnComponent;
