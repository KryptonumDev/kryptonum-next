import Link from "next/link";
import { useMemo } from "react";
import styles from "./styles.module.scss";

export default function Pagination({
	currentPage,
	itemCount,
	urlBasis,
	urlID = "",
	itemsPerPage = 12,
	isCategoryPagination = false,
}) {
	const pagesCount = useMemo(() => {
		return Math.ceil(itemCount / Number(itemsPerPage));
	}, [itemCount]);

	const buttons = useMemo(() => {
		const arr = [];
		for (let i = 0; i < pagesCount; i++) {
			arr.push(i + 1);
		}
		return arr;
	}, [pagesCount]);

	if (pagesCount < 2) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<Link
				className={
					currentPage == 1 ? `${styles.disabled} ${styles.link}` : `${styles.arrow} ${styles.link}`
				}
				href={
					currentPage >= 3
						? `${urlBasis}${isCategoryPagination ? "" : "/strona"}/${currentPage - 1}${urlID}`
						: `${urlBasis}${urlID}`
				}
			>
				<svg
					width="33"
					height="32"
					viewBox="0 0 33 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.75 24L12.75 16L20.75 8"
						stroke="#EFF0F3"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
			<div className={styles.center}>
				{pagesCount < 6 ? (
					<>
						{buttons.map((el, i) => (
							<Link
								className={
									currentPage === el ? `${styles.link} ${styles.active}` : `${styles.link}`
								}
								key={i}
								href={el >= 2 ? `${urlBasis}${isCategoryPagination ? "" : "/strona"}/${el}${urlID}` : `${urlBasis}${urlID}`}
							>
								{el}
							</Link>
						))}
					</>
				) : (
					<>
						{currentPage > 3 && (
							<Link
								className={`${styles.link}`}
								href={`${urlBasis}${urlID}`}
							>
								{1}
							</Link>
						)}
						{currentPage > 4 && <a className={`${styles.link} ${styles.not}`}>...</a>}

						{buttons.map((el, index) => {
							if (currentPage < 4 && index < 6) {
								// first 4 pages
								return (
									<Link
										className={
											currentPage === el ? `${styles.link} ${styles.active}` : `${styles.link}`
										}
										key={index}
										href={el >= 2 ? `${urlBasis}${isCategoryPagination ? "" : "/strona"}/${el}${urlID}` : `${urlBasis}${urlID}`}
									>
										{el}
									</Link>
								);
							}
							if (currentPage > pagesCount - 3 && index > pagesCount - 7) {
								// last 4 pages
								return (
									<Link
										className={
											currentPage === el ? `${styles.link} ${styles.active}` : `${styles.link}`
										}
										key={index}
										href={`${urlBasis}${isCategoryPagination ? "" : "/strona"}/${el}${urlID}`}
									>
										{el}
									</Link>
								);
							}
							if (index >= currentPage - 3 && index <= currentPage + 1) {
								// all othher pages
								return (
									<Link
										className={
											currentPage === el ? `${styles.link} ${styles.active}` : `${styles.link}`
										}
										key={index}
										href={`${urlBasis}${isCategoryPagination ? "" : "/strona"}/${el}${urlID}`}
									>
										{el}
									</Link>
								);
							}
							return null;
						})}

						{(currentPage === 1 || pagesCount - currentPage > 3) && (
							<a className={`${styles.not}`}>...</a>
						)}
						{(currentPage === 1 || pagesCount - currentPage > 2) && (
							<Link
								className={`${styles.link}`}
								href={`${urlBasis}${isCategoryPagination ? "" : "/strona"}/${pagesCount}${urlID}`}
							>
								{pagesCount}
							</Link>
						)}
					</>
				)}
			</div>
			<Link
				className={
					currentPage >= pagesCount
						? `${styles.disabled} ${styles.link}`
						: `${styles.link} ${styles.arrow}`
				}
				href={
					currentPage < pagesCount
						? `${urlBasis}${isCategoryPagination ? "" : "/strona"}/${currentPage + 1}${urlID}`
						: `${urlBasis}${isCategoryPagination ? "" : "/strona"}/${pagesCount}${urlID}`
				}
			>
				<svg
					width="33"
					height="32"
					viewBox="0 0 33 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.75 24L20.75 16L12.75 8"
						stroke="#EFF0F3"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
		</div>
	);
}
