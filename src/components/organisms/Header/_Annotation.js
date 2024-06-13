'use client';
import { useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.scss';

export default function Annotation({ CloseIcon, children, rawContent }) {
  const ref = useRef(null);

  const close = () => {
    if (ref.current) {
      ref.current.style.display = 'none';
    }
  };

  const handleClose = useCallback(() => {
    close();
    localStorage.setItem('annotation', JSON.stringify({
      rawContent,
      timestamp: new Date().getTime(),
    }));
  }, [rawContent]);

  useEffect(() => {
    const storedAnnotation = localStorage.getItem('annotation');
    if (storedAnnotation) {
      const parsedAnnotation = JSON.parse(storedAnnotation);
      const currentTime = new Date().getTime();
      const expiration = 24 * 60 * 60 * 1000 * 1 // One day
      if (parsedAnnotation.rawContent !== rawContent || (currentTime - parsedAnnotation.timestamp >= expiration)) {
        localStorage.removeItem('annotation');
      } else {
        close();
      }
    }
  }, [rawContent]);

  return (
    <aside
      className={styles['Annotation']}
      ref={ref}
    >
      <div className="max-width">
        {children}
        <button
          aria-label='Zamknij informację'
          onClick={() => handleClose()}
        >
          {CloseIcon}
        </button>
      </div>
    </aside>
  );
}
