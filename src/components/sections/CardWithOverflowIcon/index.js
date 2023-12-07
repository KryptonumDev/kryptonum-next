import ListWithOverflowIcon from "../../organisms/ListWithOverflowIcon";
import styles from "./styles.module.scss";

const CardWithOverflowIcon = ({ cardData }) => {
	const data = {
		blocks: [cardData]
	}
	return (
		<section>
			<ListWithOverflowIcon data={data} className={styles.wrapper} itemClassName={styles.item}></ListWithOverflowIcon>
		</section>
	);
};
export default CardWithOverflowIcon;
