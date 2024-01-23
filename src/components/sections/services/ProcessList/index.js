import styles from './styles.module.scss';
import CtaSectionPill from '@/components/sections/CtaSectionPill';
import CtaSection from '@/components/sections/CtaSection';
import Testimonials from '@/components/sections/Testimonials';
import Img from '@/components/atoms/Img';
import Markdown from '@/components/atoms/Markdown';
import Button from '@/components/atoms/Button';

const ProcessList = ({ data: { ProcessList } }) => {
  const components = (component) => ({
    ProcessList_array: <ProcessList_Item {...component} />,
    ProcessList_Showcase: <ProcessList_Showcase {...component} />,
    ctaSection: <CtaSection data={component} />,
    ctaSectionPill: <CtaSectionPill data={component} />,
    TestimonialsSection: <Testimonials {...component} />,
  });

  return (
    <div className={styles.ProcessList}>
      {ProcessList.map((component) => {
        return components(component)[component._type];
      })}
    </div>
  );
};

export default ProcessList;

const ProcessList_Item = ({ img, heading, subheading, paragraph }) => (
  <section className={styles.ProcessList_Item}>
    <div className={styles.headingWrapper}>
      <Img
        data={img}
        className={styles.img}
        sizes="(max-width: 1199px) 100vw, 50vw)"
      />
      <Markdown.h3 className={styles.heading}>{heading}</Markdown.h3>
    </div>
    <div className={styles.descriptionWrapper}>
      <Markdown>{subheading}</Markdown>
      <Markdown>{paragraph}</Markdown>
    </div>
  </section>
);

const ProcessList_Showcase = ({ img, paragraph, ctas }) => (
  <section className={styles.ProcessList_Showcase}>
    <div className={styles.img}>
      <MockupFrame />
      <Img
        data={img}
        sizes="(max-width: 1049px) 80vw, 50vw"
      />
    </div>
    <div>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      <div className="cta-wrapper">
        {ctas.map((cta, i) => (
          <Button key={i} data={cta} />
        ))}
      </div>
    </div>
  </section>
);

const MockupFrame = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1066'
    height='638'
    fill='none'
    viewBox='0 0 1066 638'
  >
    <rect
      width='1062.15'
      height='634.614'
      x='2.5'
      y='2.5'
      stroke='url(#MockupFrame)'
      rx='19.5'
    ></rect>
    <path fill='url(#MockupFrame)' d='M47 0h40v2H47z'></path>
    <path fill='url(#MockupFrame)' d='M97 0h40v2H97z'></path>
    <path
      fill='url(#MockupFrame)'
      d='M0 62h40v2H0z'
      transform='rotate(-90 0 62)'
    ></path>
    <defs>
      <linearGradient
        id='MockupFrame'
        x1='1065.15'
        x2='-72.49'
        y1='2'
        y2='192.299'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4A4A57'></stop>
        <stop offset='1' stopColor='#383842'></stop>
        <stop offset='1' stopColor='#383842'></stop>
      </linearGradient>
    </defs>
  </svg>
);