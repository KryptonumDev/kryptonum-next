import DecorativeHeading from "../../atoms/DecorativeHeading";
import Pagination from "../../organisms/Pagination";
import styles from "./styles.module.scss";
import CuriosityEntry from "../../organisms/CuriosityEntry";

const CuriosityEntries = ({ 
	page,
	totalCount, 
	urlBasis, 
	curiosityEntries, 
	heading 
}) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">
				{heading || `Arena **ciekawostek** (${totalCount})`}
			</DecorativeHeading>
			<div className="wrapper">
				{curiosityEntries.map((entry, i) => (
					<CuriosityEntry
						data={entry}
						key={i}
					/>
				))}
			</div>
			<Pagination
				currentPage={page}
				itemCount={totalCount}
				urlBasis={urlBasis}
			/>
		</section>
	);
};

export default CuriosityEntries;
