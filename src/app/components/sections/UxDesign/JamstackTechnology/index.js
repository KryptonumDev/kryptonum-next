import IconTitleDescriptionTable from "@/app/components/molecules/IconTitleDescriptionTable";
import styles from './styles.module.scss';
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";

const JamstackTechnology = ({ data }) => {
	return (
		<section className={styles.section}>
      <header>
        <DecorativeHeading type="h4">{data.heading}</DecorativeHeading>
      </header>
			<IconTitleDescriptionTable data={data}></IconTitleDescriptionTable>
		</section>
	);
};
export default JamstackTechnology;
