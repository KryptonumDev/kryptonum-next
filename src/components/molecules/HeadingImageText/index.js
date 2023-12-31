import Button from '@/components/atoms/Button';
import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Img from '@/components/atoms/Img';
import Markdown from '@/components/atoms/Markdown';
import Link from 'next/link';
import { isExternal } from 'util/types';
import styles from './styles.module.scss';

const HeadingImageText = ({ data: { heading, image, blocks }, parentStyles, decoration = true }) => {
  return (
    <div className={parentStyles ? ` ${styles.wrapper} ${parentStyles.wrapper}` : `${styles.wrapper}`}>
      <div className={`${styles.headingWrapper}`}>
        <DecorativeHeading
          type='h3'
          decoration={decoration}
        >
          {heading}
        </DecorativeHeading>
      </div>
      <div className={`${styles.imageWrapper}`}>
        <Img
          className={styles.image}
          data={image}
          sizes='(max-width: 1199px) 100vw, 50vw'
        ></Img>
      </div>
      <div className={styles.descriptionWrapper}>
        {blocks.map(({ description }, index) => {
          return (
            <Markdown
              components={{
                a: ({ href, children }) =>
                  isExternal ? <Button href={href}>{children}</Button> : <Link href={href} />,
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
