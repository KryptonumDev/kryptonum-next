import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Img from '@/components/atoms/Img';
import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import TechnologySection from './technologySection';

const Technology = ({
  data: {
    technology_Heading,
    technology_Paragraph,
    technology_Content,
    technology_Img,
  },
}) => {
  const markdown = (
    <Markdown>
      {technology_Content.split('\n\n').slice(0, 3)
      .join('\n\n')}
    </Markdown>
  );

  const arrowDown = <ArrowDown />;

  const decorativeHeading = (
    <DecorativeHeading type='h2'>{technology_Heading}</DecorativeHeading>
  );

  const markdown2 = (
    <Markdown>
      {technology_Content.split('\n\n').slice(3)
      .join('\n\n')}
    </Markdown>
  );

  const markdown3 = (
    <Markdown className={styles.paragraph}>{technology_Paragraph}</Markdown>
  );

  return (
    <TechnologySection
      markdown={markdown}
      arrowDown={arrowDown}
      decorativeHeading={decorativeHeading}
      markdown2={markdown2}
      markdown3={markdown3}
    >
      {technology_Img.map((img, i) => (
        <Img
          data={img}
          className={styles.img}
          key={i}
          sizes='250px'
          quality={100}
        />
      ))}
    </TechnologySection>
  );
};

export default Technology;

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="33"
    fill="none"
    viewBox="0 0 32 33"
  >
    <path
      stroke="#EFF0F3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7.662V26.33m0 0l9.333-9.334m-9.334 9.334l-9.333-9.334"
    ></path>
  </svg>
);