import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import IconTitleDescriptionList from "@/components/organisms/IconTitleDescriptionList";
import styles from './styles.module.scss';

const HeadingWithIconTitleDescriptionList = ({ data }) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h3">{data.heading}</DecorativeHeading>
			</header>
			<IconTitleDescriptionList data={data.IconTitleDescriptionList}/>
		</section>
	);
};
export default HeadingWithIconTitleDescriptionList;
