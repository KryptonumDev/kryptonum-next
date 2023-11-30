import Img from "@/utils/Img";
import Link from "next/link";
import styles from './styles.module.scss'

export default function CaseStudy({ data: { img, name, slug } }) {
	return (
		<Link href={`/pl/portfolio/${slug.current}`} className={styles.link}>
			<Img
				data={img}
				className={styles.img}
			/>
			<p>{name}</p>
		</Link>
	);
}
