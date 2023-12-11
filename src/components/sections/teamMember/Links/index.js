import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const Links = ({ data }) => {
	return (
		<section className={styles.section}>
			<DecorativeHeading type="h2">**Zajrzyj** do mnie:</DecorativeHeading>
			<div className={styles.wrapper}>
				{data.map((link, i) => (
					<a
						href={link.href}
						target="_blank"
						rel="noreferrer"
						className={styles.item}
						key={i}
					>
						<Img
							data={link.img}
							className={styles.img}
							sizes="56px"
						/>
						<p>{link.text}</p>
					</a>
				))}
			</div>
		</section>
	);
};
export default Links;