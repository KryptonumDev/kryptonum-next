'use client';
import { useState } from 'react';
import styles from './styles.module.scss';

const CopyToClipboard = ({ text }) => {
  const [snackbars, setSnackbars] = useState([]);

  const snackbarContent = (id) => (
    <>
      <SuccessIcon />
      <p className={styles.message}>Tekst został skopiowany</p>
      <button
        className={styles.exit}
        onClick={() => setSnackbars((prevSnackbars) => prevSnackbars.filter((snackbar) => snackbar.id !== id))}
      >
        <CloseButton />
      </button>
      <div className={styles.indicator}></div>
    </>
  );

  const removeSnackbar = (id) => {
    setTimeout(() => {
      setSnackbars((prevSnackbars) => prevSnackbars.filter((snackbar) => snackbar.id !== id));
    }, 5000);
  };

  const handleSnackbars = () => {
    const id = crypto.randomUUID();

    const newSnackbar = {
      id: id,
      content: snackbarContent(id),
    };

    setSnackbars([...snackbars, newSnackbar]);
    removeSnackbar(newSnackbar.id);

    text && navigator.clipboard.writeText(text);
  };

  return (
    <>
      {snackbars.length > 0 && (
        <div className={styles.snackbars}>
          {snackbars.map(({ id, content }) => (
            <div key={id} className={styles.item}>
              {content}
            </div>
          ))}
        </div>
      )}
      <button
        className={styles.button}
        onClick={() => handleSnackbars()}
      >
        Skopiuj
      </button>
    </>
  );
};
export default CopyToClipboard;

const SuccessIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='url(#SuccessIcon)'>
    <g strokeWidth='1.5'>
      <circle cx='8.001' cy='8' r='6.667'></circle>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5.666 8.333l1.333 1.334 3.334-3.334'
      ></path>
    </g>
    <defs>
      <linearGradient
        id='SuccessIcon'
        x1='14.417'
        x2='0.541'
        y1='1.333'
        y2='2.217'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282'></stop>
        <stop offset='1' stopColor='#90F4E8'></stop>
      </linearGradient>
    </defs>
  </svg>
);

const CloseButton = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    {...props}
  >
    <path
      d='M12.6673 3.33338L3.33398 12.6667M3.33394 3.33334L12.6672 12.6666'
      stroke='#EFF0F3'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);