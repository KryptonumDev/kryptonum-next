import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';

const ProsAndConsShowcase = ({ data: { heading, ProsAndConsList } }) => {
  return (
    <section className={styles.prosAndConsShowcase}>
      <header>
        <DecorativeHeading className={styles.heading}>{heading}</DecorativeHeading>
      </header>
      {ProsAndConsList.map((item, index) => (
        <div
          className={styles.prosAndConsItem}
          key={index}
        >
          <Markdown className={styles.prosAndConsItemHeading}>{item.title}</Markdown>
          <div className={styles.prosAndConsWrapper}>
            {item.ProsAndCons.map((attribute, index) => (
              <div
                className={attribute.isPros ? styles.pros : ""}
                key={index}
              >
                {attribute.isPros ? pros : con}
                <Markdown className={styles.prosAndConsItemDescription}>{attribute.content}</Markdown>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProsAndConsShowcase;

const pros = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='21'
    viewBox='0 0 20 21'
    fill='none'
  >
    <circle
      cx='10.0013'
      cy='10.8438'
      r='8.33333'
      stroke='url(#paint0_linear_702_44770)'
      strokeWidth='1.5'
    />
    <path
      d='M7.08203 11.2605L8.7487 12.9272L12.9154 8.7605'
      stroke='url(#paint1_linear_702_44770)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_702_44770'
        x1='18.0221'
        y1='2.5105'
        x2='0.676768'
        y2='3.6153'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_702_44770'
        x1='12.806'
        y1='8.7605'
        x2='6.75857'
        y2='9.29976'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
    </defs>
  </svg>
);

const con = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='21'
    viewBox='0 0 20 21'
    fill='none'
  >
    <circle
      cx='10.0013'
      cy='10.8441'
      r='8.33333'
      stroke='url(#paint0_linear_702_44793)'
      strokeWidth='1.5'
    />
    <path
      d='M12.5 10.844H7.5'
      stroke='url(#paint1_linear_702_44793)'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_702_44793'
        x1='18.0221'
        y1='2.51075'
        x2='0.676768'
        y2='3.61555'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D43477' />
        <stop
          offset='0.520833'
          stopColor='#DA2B53'
        />
        <stop
          offset='1'
          stopColor='#B43636'
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_702_44793'
        x1='12.5'
        y1='11.8252'
        x2='12.4867'
        y2='10.7805'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D43477' />
        <stop
          offset='0.520833'
          stopColor='#DA2B53'
        />
        <stop
          offset='1'
          stopColor='#B43636'
        />
      </linearGradient>
    </defs>
  </svg>
);
