import styles from './styles.module.scss';
import { Error } from '../Icons';
import Button from '../Button';

export const Checkbox = ({ icon, text, name, register, errors, error, className }) => {
  const arrowRightUp = <ArrowRightUp />;

  return (
    <label className={`${className || ''} ${styles.label}`}>
      <input
        type='checkbox'
        {...register}
      />
      <span className={errors[name] ? `${styles.errored} ${styles.checkbox}` : `${styles.checkbox}`} />
      {text ? (
        <p dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <p>
          Zgadzam się na{' '}
          <Button
            href='/pl/polityka-prywatnosci'
            svg={arrowRightUp}
          >
            przetwarzanie moich danych
          </Button>
        </p>
      )}
      {icon}
      {error && (
        <>
          {errors[name] && (
            <span className={styles.error}>
              <Error /> {error}
            </span>
          )}
        </>
      )}
    </label>
  );
};

const ArrowRightUp = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
  >
    <path
      d='M5 15L15 5M15 5H7.5M15 5V12.5'
      stroke='url(#paint0_linear_239_22887)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_239_22887'
        x1='14.8125'
        y1='5'
        x2='4.40528'
        y2='5.66288'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
    </defs>
  </svg>
);
