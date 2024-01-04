'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import { Label } from '@/components/atoms/Label';
import { regex } from '@/global/constants';
import styles from './styles.module.scss';

const ContactForm = ({ cta }) => {

	const plain = <Plain />;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [submitProccessing, setSubmitProccessing] = useState(false);

  const onSubmit = (data) => {
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
        disabled={submitProccessing}
        svg={plain}
      >
        {cta || 'Wyślij wiadomość'}
      </Button>
      <AnimatePresence>
        {isEmailSent === 'success' && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <div className={styles.grid}>
              <h2>
                Formularz został <strong>wysłany</strong>!
              </h2>
              <p>
                Spodziewaj się od nas odpowiedzi do <strong>24 h!</strong>
              </p>
              <Button
                type='button'
                theme='secondary'
                onClick={() => setIsEmailSent(false)}
              >
                Wypełnij ponownie
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isEmailSent === 'failed' && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <div className={styles.grid}>
              <h2>
                <strong>Błąd</strong> serwera!
              </h2>
              <p>
                Spróbuj ponownie później lub skontaktuj się z nami <strong>telefonicznie</strong>.
              </p>
              <Button
                disabled={submitProccessing}
                type='button'
                theme='secondary'
                onClick={() => setIsEmailSent(false)}
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

export default ContactForm;
