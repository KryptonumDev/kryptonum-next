import fetchData from "@/utils/fetchData";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import CuriosityEntry from "../../organisms/CuriosityEntry";
import styles from "./styles.module.scss";

const LatestCuriosityEntries = async ({ heading, exclude = null }) => {
	const { curiosityEntries } = await query();

	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h2">
					{heading || `Spieszysz się? Skubnij **ciekawostkę** na raz!`}
				</DecorativeHeading>
				<p>Oto nasz TOP3:</p>
			</header>
			<div className="wrapper">
				{curiosityEntries
					.filter((entry) => entry.slug.current !== exclude)
					.map(
						(entry, i) =>
							i < 3 && (
								<CuriosityEntry
									data={entry}
									key={i}
								/>
							),
					)}
			</div>
		</section>
	);
};

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      curiosityEntries: allCuriosityEntries(
        limit: 4
        sort: { _createdAt: DESC }
      ) {
        title
        subtitle
        slug {
          current
        }
        categories {
          name
          slug {
            current
          }
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
        _createdAt
      }
    }
  `);
  return data;
};

export default LatestCuriosityEntries;
