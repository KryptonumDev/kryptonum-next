import Img from "@/components/atoms/Img";
import { generateTableOfContent } from "@/utils/functions";
import Link from "next/link";
import { Share } from "../../atoms/Icons";
import ReadingTime from "../../atoms/ReadingTime";
import PortableContent from "../../organisms/PortableContent";
import ContentSection from "./contentSection";
import styles from "./styles.module.scss";

const Content = ({ contentRaw, author, share }) => {
  author = author[0];

  const link = (
    <Link href={`/pl/zespol/${author.slug.current}`} className={styles.author}>
      <Img data={author.img} className={`${styles.img} personBorder`} sizes="156px" quality={100}/>
      <p>Autor: {author.name}</p>
    </Link>
  );

  const shareIcon = <Share />;

  const content = generateTableOfContent(contentRaw);

  return (
    <ContentSection
			link={link}
			shareIcon={shareIcon}
			share={share}
			content={content}
		>
      <div>
        <ReadingTime content={contentRaw} />
        <PortableContent data={contentRaw} />
      </div>
    </ContentSection>
  );
};
export default Content;
