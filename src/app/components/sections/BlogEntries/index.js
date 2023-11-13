import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import BlogEntry from "../../organisms/BlogEntry";
import Pagination from "../../organisms/Pagination";
import { formatDateToPolishLocale } from "@/utils/functions";

const BlogEntries = ({ urlBasis, 
  totalCount, 
  blogEntries, 
  page, 
  heading, 
  itemCount 
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
				pageItemCount={itemCount}
			/>
		</section>
	);
};
export default BlogEntries;
