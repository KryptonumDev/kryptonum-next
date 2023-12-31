import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import ConsultationCtaForm from "@/components/organisms/forms/ConsultationCtaForm";
import fetchData from "@/utils/fetchData";
import styles from "./styles.module.scss";

const ConsultationForm = async ({ data: { heading, subheading, cta, buttonContents }, isPortableContent = false }) => {
  const {
    global: { quickForm_Paragraph, quickForm_Person },
  } = await query();
  
  return (
    <section className={isPortableContent ? `${styles.section} ${styles.portable}` : styles.section}>
      <header>
        <DecorativeHeading type="h3">{heading}</DecorativeHeading>
        <Markdown className={styles.subheading}>{subheading}</Markdown>
      </header>
      <ConsultationCtaForm cta={cta ? cta : buttonContents} />
      <div className={styles.info}>
        <p>{quickForm_Paragraph}</p>
        <div className={styles.person}>
          <p className="strong">{quickForm_Person.name}</p>
          <Img
            data={quickForm_Person.img}
            className={`${styles.img} personBorder`}
            sizes="150px"
            quality={100}
          />
          {quickForm_Person.tel && (
            <a href={`tel:${quickForm_Person.tel.replace(/\s/g, "")}`}>{quickForm_Person.tel}</a>
          )}
        </div>
      </div>
    </section>
  );
};
export default ConsultationForm;

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
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
