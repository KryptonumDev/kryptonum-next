import Img from "@/utils/Img";
import ReactMarkdown from "react-markdown";
import styles from './styles.module.scss';

const CardGrid = ({ data: { blocks } }) => {
	return (
		<div className={styles.wrapper}>
			{blocks.map(({ title, description, icon }, i) => (
				<div className={styles.item} key={i}>
					{icon ? <Img data={icon} className={styles.icon} /> : <p className={styles.icon} width={60} height={60}>{i}</p>}
          
					<ReactMarkdown className={styles.title} components={{ p: "h3" }}>
						{title}
					</ReactMarkdown>
					<ReactMarkdown className={styles.description}>{description}</ReactMarkdown>
				</div>
			))}
		</div>
	);
};
export default CardGrid;
