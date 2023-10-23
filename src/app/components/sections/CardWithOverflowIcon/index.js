import Img from "@/utils/Img";
import ReactMarkdown from "react-markdown";
import styles from './styles.module.scss';

const CardWithOverflowIcon = ({ data: { icon, heading, description } }) => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.card}>
				<Img data={icon} className={styles.icon}></Img>
        <ReactMarkdown className={styles.heading} components={{ p:'h2'}}>{heading}</ReactMarkdown>
        <ReactMarkdown className={styles.description}>{description}</ReactMarkdown>
			</div>
		</section>
	);
};
export default CardWithOverflowIcon;