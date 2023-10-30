import Img from "@/utils/Img";
import styles from './styles.module.scss';
import Markdown from "@/utils/markdown";

const CardGrid = ({ data: { blocks } }) => {
	return (
		<div className={styles.wrapper}>
			{blocks.map(({ title, description, icon }, i) => (
				<div className={styles.item} key={i}>
					{icon ? <Img data={icon} className={styles.icon} /> : <p className={styles.icon} width={60} height={60}>{i}</p>}
          
					<Markdown className={styles.title} components={{ p: "h3" }}>
						{title}
					</Markdown>
					<Markdown className={styles.description}>{description}</Markdown>
				</div>
			))}
		</div>
	);
};
export default CardGrid;
