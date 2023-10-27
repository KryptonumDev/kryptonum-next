import Button from "@/app/components/atoms/Button";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Img from "@/utils/Img";
import Markdown from "@/utils/markdown";
import Link from "next/link";
import { isExternal } from "util/types";
import styles from "./styles.module.scss";

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
				<Img className={styles.image} data={image} sizes="(max-width: 1199px) 100vw, (min-width: 1200px) 50vw"></Img>
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
