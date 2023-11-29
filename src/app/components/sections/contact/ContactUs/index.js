import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import styles from "./styles.module.scss";
import Markdown from "@/utils/markdown";
import Img from "@/utils/Img";

const ContactUs = ({ data: { contact_Email, contact_Tel, contact_Address, contact_Img } }) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h2">{contact_Email}</DecorativeHeading>
				<Markdown
					className={styles.tel}
					components={{ p: "h3" }}
				>
					{contact_Tel}
				</Markdown>
				<Markdown className={styles.address}>{contact_Address}</Markdown>
			</header>
				<Img
					data={contact_Img}
					className={styles.img}
				/>
		</section>
	);
};
export default ContactUs;
