import fetchData from '@/utils/fetchData';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';
import Markdown from '@/components/atoms/Markdown';

const Testimonials = async ({ heading, list }) => {
  let { testimonials } = await query();
  list?.length > 0 && (testimonials = list);

  return (
    <section className={styles.Testimonials}>
      <header>
        <DecorativeHeading type='h2'>{heading || 'Sprawdź opinie **zadowolonych klientów**'}</DecorativeHeading>
      </header>
      <div className={styles.wrapper}>
        {testimonials.map(({ name, text, img }, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.author}>
              <Img data={img} sizes='56px' />
              <p>{name}</p>
            </div>
            <Markdown className={styles.text}>{text}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const query = async () => {
  const { body: { data } } = await fetchData(/* GraphQL */`
    query {
      testimonials: allTestimonials(limit: 3, sort: { _createdAt: ASC }) {
        name
        text
        img {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                height
                width
              }
            }
          }
        }
      }
    }
  `);
  return data;
};