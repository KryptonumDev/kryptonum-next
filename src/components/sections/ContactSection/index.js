import Img from '@/components/atoms/Img';
import Markdown from '@/components/atoms/Markdown';
import fetchData from '@/utils/fetchData';
import styles from './styles.module.scss';
import ContactForm from '@/components/organisms/forms/Contact';
import Snackbar from '@/components/atoms/Snackbar';

const Contact = async ({ data: { heading, subheading, cta } }) => {
  const {
    global: { quickForm_Paragraph, quickForm_Person },
  } = await query();

  return (
    <section className={styles.newContact}>
      <div className={styles.contentWrapper}>
        <header>
          <Markdown.h3 type='h3'>{heading}</Markdown.h3>
        </header>
        <Markdown className={styles.subheading}>{subheading}</Markdown>
      </div>
      <ContactForm cta={cta} />
      <div className={styles.info}>
        <p>{quickForm_Paragraph}</p>
        <div className={styles.person}>
          <Img
            data={quickForm_Person.img}
            className={`${styles.img} personBorder`}
            sizes='150px'
            quality={100}
          />
          {quickForm_Person.tel && <p>{quickForm_Person.tel}</p>}
          <Snackbar
            href={`${quickForm_Person.tel.replace(/\s/g, '')}`}
            className={`${styles.copy} personBorder`}
            status='success'
            message="Tekst został skopiowany"
          >
            Skopiuj
          </Snackbar>
        </div>
      </div>
    </section>
  );
};
export default Contact;

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
