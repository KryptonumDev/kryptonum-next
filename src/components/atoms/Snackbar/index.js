'use client';
import { useState } from 'react';
import styles from './styles.module.scss';

const Snackbar = ({ status, message, href, children, ...props }) => {
  const [snackbars, setSnackbars] = useState([]);

  const icons = {
    success: successIcon(),
  };

  const snackbarContent = (id) => (
    <>
      {icons[status]}
      <p className={styles.message}>{message}</p>
      <div className={styles.exit}>{closeButton(id)}</div>
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

    href && navigator.clipboard.writeText(href);
  };

  const closeButton = (id) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      onClick={() => {
        setSnackbars((prevSnackbars) => prevSnackbars.filter((snackbar) => snackbar.id !== id));
      }}
    >
      <path
        d='M12.6673 3.33338L3.33398 12.6667M3.33394 3.33334L12.6672 12.6666'
        stroke='#EFF0F3'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );

  return (
    <>
      {snackbars.length > 0 && (
        <div className={styles.snackbars}>
          {snackbars.map((item) => (
            <div
              key={item.id}
              className={styles.item}
            >
              {item.content}
            </div>
          ))}
        </div>
      )}
      <button
        {...props}
        onClick={() => {
          handleSnackbars();
        }}
      >
        {children}
      </button>
    </>
  );
};
export default Snackbar;

const successIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='none'
  >
    <g
      strokeWidth='1.5'
      clipPath='url(#a)'
    >
      <circle
        cx='8.001'
        cy='8'
        r='6.667'
        stroke='url(#b)'
      />
      <path
        stroke='url(#c)'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m5.666 8.333 1.333 1.334 3.334-3.334'
      />
    </g>
    <defs>
      <linearGradient
        id='b'
        x1='14.417'
        x2='.541'
        y1='1.333'
        y2='2.217'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
      <linearGradient
        id='c'
        x1='10.245'
        x2='5.407'
        y1='6.333'
        y2='6.765'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
      <clipPath id='a'>
        <path
          fill='#fff'
          d='M0 0h16v16H0z'
        />
      </clipPath>
    </defs>
  </svg>
);
