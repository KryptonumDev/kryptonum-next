import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";
import Img from "@/utils/Img";
import Link from "next/link";
import Form from "@/app/components/organisms/forms/FastContact";

const Hero = ({ heading, subheading, contact }) => {
	return (
		<section className={styles.section}>
			<div>
				<DecorativeHeading>{heading}</DecorativeHeading>
				<Markdown className={styles.subheading}>{subheading}</Markdown>
				<Form />
			</div>
			<div className={styles.contact}>
				{contact.map((item, i) => (
					<div
						className={styles.item}
						key={i}
					>
						<p>{item.title}</p>
						<div>
							<Link href={`/pl/zespol/${item.person.slug.current}`}>
								<Img
									data={item.person.img}
									className={`${styles.img} personBorder`}
								/>
							</Link>
							<p>
								{item.person.email && (
									<a href={`mailto:${item.person.email}`}>{item.person.email}</a>
								)}
								{item.person.tel && (
									<a href={`tel:${item.person.tel?.replace(/\s/g, "")}`}>{item.person.tel}</a>
								)}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Hero;