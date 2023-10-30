import HeadingImageText from "@/app/components/molecules/HeadingImageText";
import styles from "./styles.module.scss";

const HeadingImageTextList = ({ data }) => {
	return (
		<section>
			{data.map((headingImageText, index) => (
				<HeadingImageText
					data={headingImageText}
					parentStyles={index === 0 ? styles : undefined}
					key={index}
				/>
			))}
		</section>
	);
};
export default HeadingImageTextList;
