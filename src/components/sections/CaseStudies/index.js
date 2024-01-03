import Button from '@/components/atoms/Button';
import Img from '@/components/atoms/Img';
import fetchData from '@/utils/fetchData';
import DecorativeHeading from '../../atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';
import Link from 'next/link';

const CaseStudies = async ({ data, heading, cta, isTeamCaseStudies = false  }) => {
  const body = await query();
  if (data) {
    body.data.caseStudies = data;
  }

  return (
    <section className={styles.wrapper}>
      {heading && (
        <header>
          <DecorativeHeading type='h3'>{heading}</DecorativeHeading>
        </header>
      )}
      <div className={isTeamCaseStudies ? `${styles.caseStudies} ${styles.caseStudiesSmall}` : `${styles.caseStudies}`}>
        {body.data.caseStudies.map((caseStudy, i) => (
          <div
            className={styles.caseStudy}
            key={i}
          >
            <div className={styles.imageWrapper}>
              <Link
                key={i}
                href={`/pl/portfolio/${caseStudy.slug.current}`}
              >
                <Img
                  data={caseStudy.img}
                  key={i}
                  className={styles.img}
                  sizes='(max-width: 1200px) 25vw, 50vw'
                />
              </Link>
            </div>
            <Markdown className={styles.imageDescription}>{caseStudy.name}</Markdown>
          </div>
        ))}
        <div className={`${styles.caseStudy} ${styles.lastTile}`}>
          <div className={styles.buttonWrapper}>
            <Button
              theme='secondary'
              href='/pl/portfolio'
              data={cta}
              className={styles.button}
            >
              {cta || 'Przejdź do projektów'}
            </Button>
          </div>
          <div></div>
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
