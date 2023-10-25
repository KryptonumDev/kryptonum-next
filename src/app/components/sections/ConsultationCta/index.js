import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";
import ConsultationCtaForm from "@/app/components/organisms/forms/ConsultationCtaForm";
import fetchData from "@/utils/fetchData";
import Img from "@/utils/Img";

const ConsultationCta = async ({
	data: { heading, subheading, cta },
	isPortableContent = false,
}) => {
	const {
		global: { quickForm_Paragraph, quickForm_Person },
	} = await query();
	return (
		<section className={isPortableContent ? `${styles.portable} ${styles.section}` : styles.section}>
			<header>
				<DecorativeHeading type="h4">{heading}</DecorativeHeading>
				<Markdown className={styles.subheading}>{subheading}</Markdown>
			</header>
      <ConsultationCtaForm cta={cta}/>
			<div className={styles.info}>
        <p>{quickForm_Paragraph}</p>
        <div className={styles.person}>
          <p className={styles.strong}>{quickForm_Person.name}</p>
          <Img
					data={quickForm_Person.img}
            className={`${styles.img} personBorder`}
						width={120}
						height={120}
          />
          {quickForm_Person.tel && (
            <a href={`tel:${quickForm_Person.tel.replace(/\s/g, '')}`}>{quickForm_Person.tel}</a>
          )}
        </div>
      </div>
		</section>
	);
};
export default ConsultationCta;

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
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
  `);
	return data;
};
