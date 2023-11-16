'use client'

import { Share } from "../../atoms/Icons";
import styles from "./styles.module.scss";
import Link from "next/link";
import Img from "@/utils/Img";
import TableOfContent from "../../molecules/TableOfContent";
import ReadingTime from "../../atoms/ReadingTime";
import PortableContent from "../../organisms/PortableContent";

const Content = ({ contentRaw, author, share }) => {
	author = author[0];
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
		<section className={styles.content}>
			<div className={styles.globalStyles}>
				<div className={styles.column}>
					<nav>
						<Link
							href={`/pl/zespol/${author.slug.current}`}
							className={styles.author}
						>
							<Img
								data={author.img}
								className={`${styles.img} personBorder`}
							/>
							<p>Autor: {author.name}</p>
						</Link>
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
							<Share />
							<span>Udostępnij</span>
						</button>
						<div className={styles.overflow}>
							<TableOfContent content={contentRaw} />
						</div>
					</nav>
					<div>
						<ReadingTime content={contentRaw} />
						<PortableContent data={contentRaw} />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Content;
