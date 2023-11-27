import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import Button from "@/app/components/atoms/Button";
import styles from "./styles.module.scss";

const FaqTime = ({
	data: { 
		img,
		heading, 
		paragraph, 
		cta,
		listHeading,
		list,
		additionalStyles 
	},
}) => {
	return (
		<section className={`${styles.answer} ${additionalStyles}`}>
			<Img
				data={img}
				className={styles.img}
			/>
			<div className={styles.copy}>
				<Markdown
					components={{ p: "h3" }}
					className={styles.heading}
				>
					{heading}
				</Markdown>
				<Markdown className={styles.paragraph}>{paragraph}</Markdown>
				<Button data={cta}
					className={styles.cta}
				/>
			</div>
			<p className={styles.listHeading}>{listHeading}</p>
			<ul className={styles.list}>
				{list.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</section>
	);
};
export default FaqTime;
