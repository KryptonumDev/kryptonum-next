import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import IconTitleDescriptionList from "@/app/components/organisms/IconTitleDescriptionList";
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
