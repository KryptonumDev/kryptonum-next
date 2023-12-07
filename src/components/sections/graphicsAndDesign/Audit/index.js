import Button from "@/components/atoms/Button";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import styles from "./styles.module.scss";

const Audit = ({
	data: { audit_Paragraph, audit_Paragraph2, audit_Paragraph3, audit_Cta, audit_Img },
}) => {
	return (
		<section className={styles.section}>
			<Markdown className={styles.paragraph}>{audit_Paragraph}</Markdown>
			<Markdown className={styles.paragraph2}>{audit_Paragraph2}</Markdown>
			<div className={styles.column}>
				<div className={styles.copy}>
					<Markdown className={styles.paragraph3}>{audit_Paragraph3}</Markdown>
					<Button data={audit_Cta}
            className={styles.cta}
					/>
				</div>
        <div className={styles.imgWrapper}>
				<Img
					data={audit_Img}
					className={styles.img}
				/>
        </div>
			</div>
		</section>
	);
};
export default Audit;
