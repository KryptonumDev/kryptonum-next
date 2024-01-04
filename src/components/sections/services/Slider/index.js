import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import SliderSection from './SliderSection';
import styles from './styles.module.scss';

const Slider = ({ data: { heading, slides } }) => {
  const arrowLeft = <ArrowLeft />;

  const arrowRight = <ArrowRight />;

  return (
    <SliderSection
      arrowLeft={arrowLeft}
      arrowRight={arrowRight}
      slides={slides}
    >
      <DecorativeHeading
        type='h2'
        className={styles.heading}
      >
        {heading}
      </DecorativeHeading>
    </SliderSection>
  );
};

const ArrowLeft = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='25'
    height='24'
    viewBox='0 0 25 24'
    fill='none'
  >
    <path
      d='M15.5 5L9.5 12L15.5 19'
      stroke='#EFF0F3'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='25'
    height='24'
    viewBox='0 0 25 24'
    fill='none'
  >
    <path
      d='M9.5 5L15.5 12L9.5 19'
      stroke='#EFF0F3'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Slider;
