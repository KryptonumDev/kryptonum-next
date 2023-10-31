import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import Link from "next/link";
import { isExternal } from "util/types";
import styles from "./styles.module.scss";

const HeadingImageText = ({
	data: {
		heading,
		image,
		blocks,
	},
	parentStyles,
	decoration = true
}) => {
	return (
		<div className={parentStyles ? ` ${styles.wrapper} ${parentStyles.wrapper}` : `${styles.wrapper}`}>
			<div className={`${styles.headingWrapper}`}>
				<DecorativeHeading type="h3" decoration={decoration}>
					{heading}
				</DecorativeHeading>
			</div>
			<div className={`${styles.imageWrapper}`}>
				<Img
					className={styles.image}
					data={image}
					sizes="(max-width: 1199px) 100vw, (min-width: 1200px) 50vw"
				></Img>
			</div>
			<div className={styles.descriptionWrapper}>
				{blocks.map(({description}, index) => {
					return (
						<Markdown
							components={{
								a: ({ href, children }) =>
									isExternal ? <Button children={children} to={href} /> : <Link href={href} />,
							}}
							key={index}
						>
							{description}
						</Markdown>
					);
				})}
			</div>
		</div>
	);
};
export default HeadingImageText;
