"use client";

import TableOfContent from "../../molecules/TableOfContent";
import styles from "./styles.module.scss";

const ContentClient = ({ share, shareIcon, link, content, children }) => {
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
		<section className={`content ${styles.wrapper}`}>
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
export default ContentClient;
