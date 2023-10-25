import Img from "@/utils/Img";
import styles from "./styles.module.scss";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Button from "@/app/components/atoms/Button";
import Markdown from "@/utils/markdown";
import { isExternal } from "util/types";
import Link from "next/link";

const HeadingImageText = ({
	headingType,
	headingDecoration,
	headingContent,
	image,
	description,
	className,
	imageWrapperClassName,
	headingWrapperClassName,
}) => {
	return (
		<div className={`${className} ${styles.wrapper}`}>
			<div className={`${styles.headingWrapper} ${headingWrapperClassName}`}>
				<DecorativeHeading type={headingType} decoration={headingDecoration}>
					{headingContent}
				</DecorativeHeading>
			</div>
			<div className={`${styles.imageWrapper} ${imageWrapperClassName}`}>
				<Img className={styles.image} data={image} sizes="(max-width:1199) 100vw, (min-width: 1200px) 50vw"></Img>
			</div>
			<div className={styles.descriptionWrapper}>
				{description.map((paragraph, index) => {
					return (
						<Markdown
							components={{
								a: ({ href, children }) =>
									isExternal ? <Button children={children} to={href} /> : <Link href={href} />,
							}}
							key={index}
						>
							{paragraph}
						</Markdown>
					);
				})}
			</div>
		</div>
	);
};
export default HeadingImageText;
