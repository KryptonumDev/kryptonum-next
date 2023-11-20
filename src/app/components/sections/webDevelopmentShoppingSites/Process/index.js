import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";
import Button from "@/app/components/atoms/Button";

const Process = ({ data: { process_Heading, process_Claim, process_List } }) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h2">{process_Heading}</DecorativeHeading>
				<Markdown className={styles.paragraph}>{process_Claim}</Markdown>
			</header>
			<div className={styles.wrapper}>
				{process_List.map((item, i) => (
					<div
						className={styles.item}
						key={i}
					>
						<Markdown
							className={styles.heading}
							components={{ p: "h3" }}
						>
							{item.heading}
						</Markdown>
						<Markdown className={styles.subheading}>{item.subheading}</Markdown>
						<div className={styles.copy}>
							<Markdown className={styles.paragraph}>{item.paragraph}</Markdown>
							<Markdown className={styles.secondParagraph}>{item.secondParagraph}</Markdown>
						</div>
						<Markdown className={styles.secondHeading}>{item.secondHeading}</Markdown>
						{item.cta.href && (
							<div className={styles.ctaWrapper}>
								<Button
									theme={item.cta.theme}
									to={item.cta.href}
								>
									{item.cta.text}
								</Button>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};
export default Process;
