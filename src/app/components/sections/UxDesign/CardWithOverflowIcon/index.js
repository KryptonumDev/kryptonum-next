import Img from "@/utils/Img";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.scss";
import ListWithOverflowIcon from "../../../molecules/ListWithOverflowIcon";

const CardWithOverflowIcon = ({ cardData }) => {
	return (
		<section>
			<ListWithOverflowIcon data={cardData} className={styles.wrapper} itemClassName={styles.item}></ListWithOverflowIcon>
		</section>
	);
};
export default CardWithOverflowIcon;
