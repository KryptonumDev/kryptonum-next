import styles from "./styles.module.scss";
import Link from "next/link";

const TableOfContent = ({ content }) => {
	return (
		<ul className={styles.wrapper}>
			{content.map(({ text, slug, subheadings }, index) => (
				<li key={index}>
					<Link
						href={`#${slug}`}
					>
						<span>{text}</span>
					</Link>
					{subheadings?.length > 0 && (
						<ul>
							{subheadings.map(({ text, slug }, subIndex) => (
								<li key={subIndex}>
									<Link
										href={`#${slug}`}
									>
										<span>{text}</span>
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
};
export default TableOfContent;