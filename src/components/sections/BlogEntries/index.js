import { formatDateToPolishLocale } from "@/utils/functions";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import BlogEntry from "../../organisms/BlogEntry";
import Pagination from "../../organisms/Pagination";
import styles from "./styles.module.scss";

const BlogEntries = ({ 
	urlBasis, 
  totalCount, 
  blogEntries, 
  page, 
  heading,
	itemsPerPage,
	isCategoryPagination = false
}) => {
	blogEntries.map((entry) => {
		entry._createdAt = formatDateToPolishLocale(entry._createdAt);
	});
	return (
		<section
			className={styles.section}
			id="wpisy"
		>
			<DecorativeHeading type="h2">{`${
				heading || `**Najświeższe** artykuły`
			} (${totalCount})`}</DecorativeHeading>
			<div className={styles.section}>
				{blogEntries.map((entry, i) => (
					<BlogEntry
						data={entry}
						key={i}
					/>
				))}
			</div>
			<Pagination
				currentPage={page}
				itemCount={totalCount}
				urlBasis={urlBasis}
				urlID="#wpisy"
				itemsPerPage={itemsPerPage}
				isCategoryPagination={isCategoryPagination}
			/>
		</section>
	);
};
export default BlogEntries;
