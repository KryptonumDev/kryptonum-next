import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import Form from "@/components/organisms/forms/QuickForm";
import fetchData from "@/utils/fetchData";
import styles from "./styles.module.scss";

const QuickForm = async ({ data: { heading, subheading, cta }, isPortableContent = false }) => {
	const {
		global: { quickForm_Paragraph, quickForm_Person },
	} = await query();
	return (
		<section
			className={isPortableContent ? `${styles.portable} ${styles.wrapper}` : styles.wrapper}
		>
			<header>
				<DecorativeHeading type="h2">{heading}</DecorativeHeading>
				<Markdown className={styles.subheading}>{subheading}</Markdown>
			</header>
			<Form cta={cta} applyAdditionalStyles={true} />
			<div className={styles.info}>
				<p>{quickForm_Paragraph}</p>
				<div className={styles.person}>
					<p className={`${styles.strong} strong`}>{quickForm_Person.name}</p>
					<Img
						data={quickForm_Person.img}
						className={`${styles.img} personBorder`}
					/>
					{quickForm_Person.tel && (
						<a href={`tel:${quickForm_Person.tel.replace(/\s/g, "")}`}>{quickForm_Person.tel}</a>
					)}
				</div>
			</div>
		</section>
	);
};
export default QuickForm;

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
	query {
  global: Global(id: "global") {
    quickForm_Paragraph
    quickForm_Person {
      name
      img {
        asset {
          altText
					url
					metadata {
						dimensions {
							height
							width
						}
					}
        }
      }
			tel
    }
  } 
}
  `);
	return data;
};
