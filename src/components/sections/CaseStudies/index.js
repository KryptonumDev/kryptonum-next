import Button from '@/components/atoms/Button';
import Img from '@/components/atoms/Img';
import fetchData from '@/utils/fetchData';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Link from 'next/link';

const CaseStudies = async ({ data, heading, isTeamCaseStudies = false }) => {
  const body = await query();
  if (data) {
    body.data.caseStudies = data;
  }

  return (
    <section
      className={styles.CaseStudies}
      data-narrow={isTeamCaseStudies}
    >
      {heading && (
        <header>
          <DecorativeHeading type='h2'>{heading}</DecorativeHeading>
        </header>
      )}
      <div className={styles.wrapper}>
        {body.data.caseStudies.map(({ img, name, slug: { current: slug }}, i) => (
          <Link
            key={i}
            href={`/pl/portfolio/${slug}`}
            className={styles.item}
          >
            <div className={styles.img}>
              <Img
                key={i}
                data={img}
                sizes='(max-width: 1200px) 25vw, 50vw'
              />
            </div>
            <p className={styles.name}>{name}</p>
          </Link>
        ))}
        <div className={styles.item}>
          <Button
            theme='secondary'
            href='/pl/portfolio'
            className={styles.button}
          >Przejdź do projektów</Button>
        </div>
      </div>
    </section>
  );
};

const query = async () => {
  const { body } = await fetchData(/* GraphQL */ `
    query {
      caseStudies: allCaseStudyEntries(limit: 7, sort: { _updatedAt: ASC }) {
        name
        slug {
          current
        }
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
  return body;
};

export default CaseStudies;