import Button from "@/components/atoms/Button";
import Img from "@/utils/Img";
import fetchData from "@/utils/fetchData";
import styles from "./styles.module.scss";
import DecorativeHeading from "../../atoms/DecorativeHeading";

const CaseStudies = async ({ data, heading, cta }) => {
	let body = await query();
	if (data) {
		body.data.caseStudies = data;
	}

	return (
		<section className={styles.wrapper}>
			{heading && (
				<header>
					<DecorativeHeading type="h3">{heading}</DecorativeHeading>
				</header>
			)}
			<div>
				{body.data.caseStudies.map((caseStudy, i) => (
					<div className={styles.caseStudy} key={i}>
						<Img
							data={caseStudy.img}
							key={i}
							className={styles.img}
							loading={i == 0 ? "eager" : "lazy"}
							sizes="100vw"
						/>
						<Button
							href={`/pl/portfolio/${caseStudy.slug.current}`}
							aria-label={`Sprawdź projekt ${caseStudy.name}`}
							theme="primary"
              className={styles.cta}
						>
							Sprawdź projekt
						</Button>
					</div>
				))}
			</div>
			{
				<Button theme="secondary" href="/pl/portfolio" data={cta}>
					{cta || "Wszystkie projekty"}
				</Button>
			}
		</section>
	);
};

const query = async () => {
	const { body } = await fetchData(`
	query {
    caseStudies: allCaseStudyEntries(limit: 3, sort: {_updatedAt:ASC}) {
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
