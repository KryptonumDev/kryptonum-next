'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import { Label } from '@/components/atoms/Label';
import { regex } from '@/global/constants';
import styles from './styles.module.scss';
import { Checkbox } from '@/components/atoms/Checkbox';

const ContactForm = ({ cta }) => {
  const plain = <Plain />;

  const error = <Error />;

  const success = <Success />;

  const retry = <Retry />;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isNextStep, setIsNextStep] = useState(false);
  const [submitProccessing, setSubmitProccessing] = useState(false);

  const onSubmit = (data) => {
    if (!isNextStep) {
      setIsNextStep(true);
      return;
    }
    setSubmitProccessing(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setIsEmailSent('success');
          setSubmitProccessing(false);
          reset();
        } else {
          setIsEmailSent('failed');
          setSubmitProccessing(false);
        }
      })
      .catch(() => {
        setIsEmailSent('failed');
        setSubmitProccessing(false);
      });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      {!isNextStep && (
        <>
          <Label
            title='Email'
            name='email'
            register={register('email', { required: true, pattern: regex.email })}
            errors={errors}
            type='email'
          />
          <Button
            theme='primary'
            className={styles.button}
          >
            {cta || 'Przejdź dalej'}
          </Button>
        </>
      )}
      {isNextStep && (
        <>
          <Label
            title='Twoje pytanie'
            name='question'
            register={register('question', { required: false })}
            errors={errors}
            type='textarea'
            rows={4}
          />
          <Checkbox
            name='legal'
            register={register('legal', { required: true })}
            errors={errors}
            className={styles.checkbox}
          />
          <Button
            theme='primary'
            className={styles.button}
            disabled={submitProccessing}
            svg={plain}
          >
            {cta || 'Wyślij wiadomość'}
          </Button>
        </>
      )}
      <AnimatePresence>
        {isEmailSent === 'success' && (
          <motion.div
            className={`${styles.overlay} ${styles.success}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <div className={styles.grid}>
              <div className={styles.header}>
                {success}
                <h2>
                  Formularz został <strong>pomyślnie</strong> wysłany!
                </h2>
              </div>
              <p>
                Odpowiedzi spodziewaj się na <strong>podanego maila</strong>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEmailSent === 'failed' && (
          <motion.div
            className={`${styles.overlay} ${styles.failed}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <div className={styles.grid}>
              <div className={styles.header}>
                {error}
                <h2>Jakiś serwer ma czkawkę</h2>
              </div>
              <p>Wyślij formularz jeszcze raz lub spróbuj za jakiś czas</p>
              <Button
                disabled={submitProccessing}
                type='button'
                theme='secondary'
                onClick={() => {
                  setIsEmailSent(false);
                  setIsNextStep(false);
                }}
                svg={retry}
              >
                Spróbuj ponownie
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

const Plain = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='21'
    height='21'
    viewBox='0 0 21 21'
  >
    <path
      d='M16.031 13.9152L17.4614 9.6241C18.711 5.87545 19.3357 4.00112 18.3463 3.01173C17.357 2.02234 15.4826 2.64712 11.734 3.89667L7.44286 5.32704C4.41733 6.33555 2.90457 6.8398 2.47468 7.57926C2.06573 8.28271 2.06573 9.15151 2.47468 9.85496C2.90457 10.5944 4.41733 11.0987 7.44286 12.1072C7.92865 12.2691 8.17155 12.3501 8.37458 12.486C8.57134 12.6177 8.74036 12.7867 8.87208 12.9835C9.00799 13.1865 9.08896 13.4294 9.25089 13.9152C10.2594 16.9407 10.7637 18.4535 11.5031 18.8834C12.2066 19.2923 13.0754 19.2923 13.7788 18.8834C14.5183 18.4535 15.0225 16.9407 16.031 13.9152Z'
      stroke='url(#paint0_linear_996_29584)'
      strokeWidth='1.5'
    />
    <path
      d='M14.0968 8.32047C14.3913 8.02921 14.3939 7.55434 14.1027 7.25983C13.8114 6.96532 13.3366 6.96269 13.042 7.25395L14.0968 8.32047ZM9.4727 12.8936L14.0968 8.32047L13.042 7.25395L8.41793 11.8271L9.4727 12.8936Z'
      fill='url(#paint1_linear_996_29584)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_996_29584'
        x1='18.5221'
        y1='2.52344'
        x2='1.17677'
        y2='3.62824'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_996_29584'
        x1='13.4827'
        y1='7.87296'
        x2='11.0481'
        y2='13.6602'
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

const Error = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
  >
    <path
      d='M7.08358 14.3487C10.9747 7.44955 12.9203 4 16.0013 4C19.0823 4 21.0279 7.44955 24.919 14.3486L25.4039 15.2084C28.6374 20.9415 30.2542 23.808 28.793 25.904C27.3317 28 23.7166 28 16.4862 28H15.5164C8.28605 28 4.67086 28 3.20964 25.904C1.74843 23.808 3.36518 20.9415 6.5987 15.2084L7.08358 14.3487Z'
      stroke='url(#paint0_linear_930_46944)'
      stroke-width='1.5'
    />
    <path
      d='M16 10.6667V17.3334'
      stroke='url(#paint1_linear_930_46944)'
      stroke-width='1.5'
      stroke-linecap='round'
    />
    <circle
      cx='16.0013'
      cy='21.3333'
      r='1.33333'
      fill='url(#paint2_linear_930_46944)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_930_46944'
        x1='28.8346'
        y1='4.00001'
        x2='1.10833'
        y2='5.96224'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#D43477' />
        <stop
          offset='0.520833'
          stop-color='#DA2B53'
        />
        <stop
          offset='1'
          stop-color='#B43636'
        />
        <stop
          offset='1'
          stop-color='#B43636'
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_930_46944'
        x1='16.9812'
        y1='10.6667'
        x2='15.9364'
        y2='10.6767'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#D43477' />
        <stop
          offset='0.520833'
          stop-color='#DA2B53'
        />
        <stop
          offset='1'
          stop-color='#B43636'
        />
        <stop
          offset='1'
          stop-color='#B43636'
        />
      </linearGradient>
      <linearGradient
        id='paint2_linear_930_46944'
        x1='17.2846'
        y1='20'
        x2='14.5094'
        y2='20.1768'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#D43477' />
        <stop
          offset='0.520833'
          stop-color='#DA2B53'
        />
        <stop
          offset='1'
          stop-color='#B43636'
        />
        <stop
          offset='1'
          stop-color='#B43636'
        />
      </linearGradient>
    </defs>
  </svg>
);

const Success = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
  >
    <circle
      cx='16.0013'
      cy='15.9998'
      r='13.3333'
      stroke='url(#paint0_linear_930_46909)'
      stroke-width='1.5'
    />
    <path
      d='M11.332 16.6665L13.9987 19.3332L20.6654 12.6665'
      stroke='url(#paint1_linear_930_46909)'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_930_46909'
        x1='28.8346'
        y1='2.66651'
        x2='1.08205'
        y2='4.43419'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#2DD282' />
        <stop
          offset='1'
          stop-color='#90F4E8'
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_930_46909'
        x1='20.4904'
        y1='12.6665'
        x2='10.8145'
        y2='13.5293'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#2DD282' />
        <stop
          offset='1'
          stop-color='#90F4E8'
        />
      </linearGradient>
    </defs>
  </svg>
);

const Retry = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
  >
    <path
      d='M15.302 6.70863L14.7127 6.11937C12.1092 3.51588 7.88815 3.51588 5.28465 6.11937C2.68116 8.72287 2.68116 12.944 5.28465 15.5475C7.88815 18.151 12.1092 18.151 14.7127 15.5475C16.2268 14.0334 16.8603 11.9724 16.6134 10.0005M15.302 6.70863H11.7665M15.302 6.70863V3.1731'
      stroke='url(#paint0_linear_1162_37315)'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1162_37315'
        x1='16.4154'
        y1='3.1731'
        x2='2.53156'
        y2='3.99609'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#2DD282' />
        <stop
          offset='1'
          stop-color='#90F4E8'
        />
      </linearGradient>
    </defs>
  </svg>
);

export default ContactForm;
