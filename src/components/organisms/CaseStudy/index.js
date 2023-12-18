import Img from "@/components/atoms/Img";
import Link from "next/link";
import styles from './styles.module.scss';

export default function CaseStudy({ data: { img, name, slug } }) {
	return (
		<Link href={`/pl/portfolio/${slug.current}`} className={styles.link}>
			<Img
				data={img}
				className={styles.img}
				sizes="(max-width: 962px) 50vw, 25vw"
			/>
			<p>{name}</p>
		</Link>
	);
}
