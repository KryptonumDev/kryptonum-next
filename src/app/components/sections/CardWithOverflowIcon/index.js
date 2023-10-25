import ListWithOverflowIcon from "../../organisms/ListWithOverflowIcon";
import styles from "./styles.module.scss";

const CardWithOverflowIcon = ({ cardData }) => {
	return (
		<section>
			<ListWithOverflowIcon data={cardData} className={styles.wrapper} itemClassName={styles.item}></ListWithOverflowIcon>
		</section>
	);
};
export default CardWithOverflowIcon;
