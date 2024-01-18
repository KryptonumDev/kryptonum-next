"use client";
import TableOfContent from "../../molecules/TableOfContent";
import styles from "./styles.module.scss";

const ContentSection = ({ share, shareIcon, link, content, children }) => {
	const shareData = {
		title: share?.title,
		text: share?.description || "",
		url:
			typeof window !== "undefined"
				? window.location.href.split("?")[0] + "?feature=share"
				: "kryptonum.eu",
	};

	const handleShare = async (e) => {
		const btn = e.currentTarget;
		try {
			await navigator.share(shareData);
		} catch {
			const btnSpan = btn.querySelector("span");
			const btnSpanText = btnSpan.textContent;
			await navigator.clipboard.writeText(shareData.url);
			btnSpan.textContent = "Skopiowano link! 👏🏼";
			setTimeout(() => {
				btnSpan.textContent = btnSpanText;
			}, 3000);
		}
	};

	return (
		<section className={styles.wrapper}>
			<div className={`${styles.column}`}>
				<nav>
					{link}
					{/* <button
            className={`like${likeStatus.liked ? ' liked' : ''}`}
            onClick={() => handleLike()}
            disabled={likeStatus.pending}
          >
            <Heart />
            <span>Polub artykuł</span>
          </button> */}
					<button
						className={styles.share}
						onClick={(e) => handleShare(e)}
					>
						{shareIcon}
						<span>Udostępnij</span>
					</button>
					<div className={styles.overflow}>
						<TableOfContent content={content} />
					</div>
				</nav>
				{children}
			</div>
		</section>
	);
};

export default ContentSection;

// const Heart = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="33"
//     height="32"
//     fill="none"
//     viewBox="0 0 33 32"
//   >
//     <path
//       stroke="url(#heart)"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M28.288 6.147a7.334 7.334 0 00-10.373 0L16.502 7.56l-1.414-1.413A7.335 7.335 0 104.715 16.52l11.787 11.787L28.288 16.52a7.333 7.333 0 000-10.373z"
//     ></path>
//     <defs>
//       <linearGradient
//         id="heart"
//         x1="29.915"
//         x2="0.946"
//         y1="3.998"
//         y2="6.113"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#2DD282"></stop>
//         <stop
//           offset="1"
//           stopColor="#90F4E8"
//         ></stop>
//       </linearGradient>
//     </defs>
//   </svg>
// );