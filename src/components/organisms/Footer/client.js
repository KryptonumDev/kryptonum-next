'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Client = ({
  cities,
  nonEmptyCities,
  Svg,
  pages,
  ClickIcon,
}) => {
  const [ city, setCity ] = useState('Warszawa');

  return (
    <>
      <div className={styles.sketch}>
        {Svg}
        <div className={styles.cities}>
          {nonEmptyCities.map((nonEmptyCity, i) => (
            <button
              onClick={() => setCity(nonEmptyCity)}
              aria-current={city === nonEmptyCity}
              key={i}
              style={{
                left: cities.find(({ name }) => name === nonEmptyCity).left,
                top: cities.find(({ name }) => name === nonEmptyCity).top
              }}
            >{nonEmptyCity}</button>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <p className={styles.instruction}>
          {ClickIcon}
          <span>Kliknij na mapie, by zobaczyć…</span>
        </p>
        {pages.map(({ name, slug: { current: slug } }, i) => (
          <Link
            key={i}
            href={`/pl/${slug}`}
            style={{
              display: !name.includes(city) && 'none'
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Client;