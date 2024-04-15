'use client'
import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import Button from '@/components/atoms/Button';

const servicesLinks = [
  [
    {
      name: 'Web Development',
      href: '/pl/web-development',
      heading: true,
    },
    {
      name: 'Strony internetowe',
      href: '/pl/web-development/strony-internetowe',
      heading: false,
    },
    {
      name: 'Aplikacje internetowe',
      href: '/pl/web-development/aplikacje-internetowe',
      heading: false,
    },
    {
      name: 'Sklepy internetowe',
      href: '/pl/web-development/sklepy-internetowe',
      heading: false,
    },
    {
      name: 'Marketing 360°',
      href: '/pl/marketing-360',
      heading: true,
    },
    {
      name: 'Marketing dla administracji',
      href: '/pl/uslugi/marketing-dla-administracji-publicznej',
      heading: false,
    },
    {
      name: 'Opieka Agencyjna',
      href: '/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie',
      heading: true,
    },
    {
      name: 'Warsztaty strategiczne',
      href: '/pl/warsztaty-discovery',
      heading: true,
    },
  ],
  [
    {
      name: 'Grafika & design',
      href: '/pl/grafika-design',
      heading: true,
    },
    {
      name: 'Logo',
      href: '/pl/grafika-design/projektowanie-logo',
      heading: false,
    },
    {
      name: 'Audyty',
      href: '/pl/grafika-design/audyt-ux-ui',
      heading: false,
    },
    {
      name: 'Identyfikacja wizualna',
      href: '/pl/grafika-design/identyfikacja-wizualna-marki',
      heading: false,
    },
    {
      name: 'Branding',
      href: '/pl/grafika-design/branding',
      heading: false,
    },
    {
      name: 'Projektowanie UI',
      href: '/pl/grafika-design/projektowanie-ui',
      heading: false,
    },
    {
      name: 'Projektowanie UX',
      href: '/pl/grafika-design/projektowanie-ux',
      heading: false,
    },
  ]
];

const HeaderWrapper = ({
  KryptonumLogo,
  ChevronDown,
  servicesImages,
  blogPost,
  nav_Projects,
  teamMembers,
  curiositiesEntries,
  BackBtnIcon,
}) => {
  const [navOpened, setNavOpened] = useState(false);
  const [tab, setTab] = useState(null);
  const headerRef = useRef(null);

  const handleCloseHeader = () => {
    setNavOpened(false);
    setTab(null);
  };
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      setNavOpened(false);
      setTab(null);
    }
  };
  const handleNavLinks = (handleTab) => {
    handleTab
      ? tab === handleTab
        ? setTab(null)
        : setTab(handleTab)
      : setTab(null);
  };
  const handleNavToggle = () => {
    setNavOpened(!navOpened);
    setTab(null);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  });

  return (
    <>
      <header
        className={styles.header}
        aria-expanded={navOpened}
        data-tab={tab}
        ref={headerRef}
      >
        <div className='max-width'>
          <Link
            href='/pl'
            aria-label='Strona główna'
            onClick={() => handleCloseHeader()}
          >
            {KryptonumLogo}
          </Link>
          <nav>
            <div className={`${styles.navItem} ${styles.services}`}>
              <button onClick={() => handleNavLinks('services')}>
                <span>Usługi</span>
                {ChevronDown}
              </button>
              <div className={styles.expand}>
                <BackBtn
                  onClick={() => handleNavLinks()}
                  BackBtnIcon={BackBtnIcon}
                />
                <p className={styles['tab-title']}>Usługi</p>
                <div className={styles.thumbnail}>
                  {servicesImages.map(img => img)}
                </div>
                <div className={styles.linksColumn}>
                  <div>
                    {servicesLinks[0].map(({ href, name, heading }, i) => (
                      <DecorationLink
                        key={i}
                        href={href}
                        {...heading && {
                          className: styles.heading
                        }}
                        data-hover={i + 1}
                        onClick={() => handleCloseHeader()}
                      >
                        {name}
                      </DecorationLink>
                    ))}
                  </div>
                  <div>
                    {servicesLinks[1].map(({ href, name, heading }, i) => (
                      <DecorationLink
                        key={i}
                        href={href}
                        {...heading && {
                          className: styles.heading
                        }}
                        data-hover={servicesLinks[0].length + i + 1}
                        onClick={() => handleCloseHeader()}
                      >
                        {name}
                      </DecorationLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.navItem} ${styles.portfolio}`}>
              <button onClick={() => handleNavLinks('portfolio')}>
                <span>Projekty</span>
                {ChevronDown}
              </button>
              <div className={styles.expand}>
                <BackBtn
                  onClick={() => handleNavLinks()}
                  BackBtnIcon={BackBtnIcon}
                />
                <p className={styles['tab-title']}>Portfolio</p>
                <div className={styles.thumbnail}>
                  {nav_Projects.map(({ img }, i) => (
                    <Fragment key={i}>
                      {img}
                    </Fragment>
                  ))}
                </div>
                <div className={styles.links}>
                  <Button
                    theme='secondary'
                    href='/pl/portfolio'
                    onClick={() => handleCloseHeader()}
                  >Przejdź do projektów</Button>
                  <div>
                    {nav_Projects.map(({ name, slug }, i) => (
                      <DecorationLink
                        key={i}
                        data-hover={i + 1}
                        className={styles.heading}
                        href={`/pl/portfolio/${slug}`}
                        onClick={() => handleCloseHeader()}
                      >{name}</DecorationLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.navItem} ${styles.team}`}>
              <button onClick={() => handleNavLinks('team')}>
                <span>Zespół</span>
                {ChevronDown}
              </button>
              <div className={styles.expand}>
                <BackBtn
                  onClick={() => handleNavLinks()}
                  BackBtnIcon={BackBtnIcon}
                />
                <p className={styles['tab-title']}>Zespół</p>
                <div className={styles.wrapper}>
                  <Button
                    theme='secondary'
                    href='/pl/zespol'
                    onClick={() => handleCloseHeader()}
                  >Przejdź do zespołu</Button>
                  <ul>
                    {teamMembers.map(({ name, slug, img }, i) => (
                      <li key={i}>
                        <Link
                          href={`/pl/zespol/${slug}`}
                          onClick={() => handleCloseHeader()}
                        >
                          {img}
                          <p>{name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${styles.navItem} ${styles.academy}`}>
              <button onClick={() => handleNavLinks('academy')}>
                <span>Akademia</span>
                {ChevronDown}
              </button>
              <div className={styles.expand}>
                <BackBtn
                  onClick={() => handleNavLinks()}
                  BackBtnIcon={BackBtnIcon}
                />
                <p className={styles['tab-title']}>Akademia</p>
                <div className={`${styles.blog} ${styles.block}`}>
                  <Button
                    theme='secondary'
                    href='/pl/blog'
                    onClick={() => handleCloseHeader()}
                  >Przejdź do bloga</Button>
                  <div>
                    <Link
                      href={`/pl/blog/${blogPost.slug.current}`}
                      className={styles.item}
                      onClick={() => handleCloseHeader()}
                    >
                      <div className={styles.img}>{blogPost.img}</div>
                      <p>{blogPost.title}</p>
                    </Link>
                  </div>
                </div>
                <div className={`${styles.curiosities} ${styles.block}`}>
                  <Button
                    theme='secondary'
                    href='/pl/akademia'
                    onClick={() => handleCloseHeader()}
                  >Przejdź do ciekawostek</Button>
                  <div>
                    {curiositiesEntries.map(({ title, slug, img }, i) => (
                      <Link
                        key={i}
                        href={`/pl/akademia/${slug}`}
                        className={styles.item}
                        onClick={() => handleCloseHeader()}
                      >
                        <div className={styles.img}>{img}</div>
                        <p>{title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Button
            theme='secondary'
            href='/pl/kontakt'
            className={styles['nav-cta']}
            onClick={() => handleCloseHeader()}
          >
            Darmowa konsultacja
          </Button>
          <button
            className={styles['nav-toggle']}
            onClick={() => handleNavToggle()}
            aria-label="Nawigacja"
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          className={styles.overlay}
          aria-hidden="true"
          onClick={() => handleCloseHeader()}
        ></div>
      </header>
    </>
  );
};

export default HeaderWrapper;

const BackBtn = ({ BackBtnIcon, ...props }) => (
  <button {...props} className={styles['back-btn']}>
    {BackBtnIcon}
    <span>Wróć</span>
  </button>
)

const DecorationLink = ({ children, className, ...props }) => (
  <Link className={`${styles.decorationLink} ${className || ''}`} {...props}>
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' fill='none'>
      <path
        fill='url(#DecorationLink)'
        d='M7.244 8.077c.049.097 0 .146-.142.146a3.064 3.064 0 01-.579-.07A21.99 21.99 0 014.8 7.431a6.924 6.924 0 01-.792 1.437 19.048 19.048 0 00-1.074 1.87 3.578 3.578 0 00-.442 1.579 1.587 1.587 0 00.504 1.154 1.503 1.503 0 001.079.5c.2-.002.397-.05.574-.142a.518.518 0 00.359-.217.832.832 0 01.216-.141.62.62 0 01.442.212.66.66 0 01.146.575c-.048.336-.287.53-.72.574a2.998 2.998 0 01-2.083-.787 2.798 2.798 0 01-1.22-2.303c.071-.8.398-1.555.933-2.154h-.146a1.012 1.012 0 01-1.08-1.008A1.848 1.848 0 012 7.215a1.866 1.866 0 011.437-.442c.442.048.77.097 1.008.141a3.577 3.577 0 00.442-1.578c.02-.403-.08-.803-.287-1.15a.968.968 0 00-.885-.442 1.083 1.083 0 00-.862.442.363.363 0 01-.442.142 1.61 1.61 0 01-.72-.288 1.26 1.26 0 01-.359-.645 1.176 1.176 0 01.358-.863 1.326 1.326 0 011.008-.362 2.516 2.516 0 011.796 1.079c.547.637.83 1.46.791 2.299a4.033 4.033 0 01-.358 1.512 12.1 12.1 0 012.317 1.017zm-2.945-.862a4.39 4.39 0 00-.791-.07 1.362 1.362 0 00-1.009.357 1.048 1.048 0 00-.358.721c0 .385.168.575.504.575.478.05.957-.357 1.437-1.22a.442.442 0 00.217-.363zm3.537 1.008c-1.002-.528-1.553-1.198-1.653-2.012a2.512 2.512 0 01.504-1.724 2.569 2.569 0 012.158-.792c1.179.142 2.113 1.051 2.803 2.728.38 1.059.835 1.586 1.366 1.583a.831.831 0 00.884-.358c.185-.222.287-.502.288-.791a1.194 1.194 0 00-.575-1.08 1.362 1.362 0 00-.862-.287.208.208 0 01-.146.071.19.19 0 01-.142-.07 1.463 1.463 0 01-.291-.575.707.707 0 01.216-.504.885.885 0 01.792-.213 1.415 1.415 0 011.008.863 4.68 4.68 0 01.442 2.653 5.35 5.35 0 01-1.866 3.665 5.748 5.748 0 01-3.74 1.437 3.312 3.312 0 01-2.517-.791 2.44 2.44 0 01-.791-1.725c0-1.052.694-1.654 2.087-1.795l.035-.283z'
      ></path>
      <defs>
        <linearGradient
          id='DecorationLink'
          x1='14.415'
          x2='0.545'
          y1='2.167'
          y2='3.096'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2DD282'></stop>
          <stop offset='1' stopColor='#90F4E8'></stop>
        </linearGradient>
      </defs>
    </svg>
    <span>{children}</span>
  </Link>
)