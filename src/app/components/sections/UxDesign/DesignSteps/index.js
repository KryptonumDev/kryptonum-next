import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import IconTitleDescriptionTable from "@/app/components/molecules/IconTitleDescriptionTable";
import styles from './styles.module.scss';

const DesignSteps = ({ data }) => {
	return (
		<section className={styles.section}>
			<header>
				<DecorativeHeading type="h4">{data.heading}</DecorativeHeading>
			</header>
			<IconTitleDescriptionTable data={data}></IconTitleDescriptionTable>
		</section>
	);
};
export default DesignSteps;
