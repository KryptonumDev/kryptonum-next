import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';
import Link from 'next/link';
import fetchData from '@/utils/fetchData';
import CopyToClipboard from '@/components/atoms/Snackbar';
import Map from './map';

const Footer = async () => {
  const {
    team,
    global: { address, projects, contactPerson, instagram, facebook, tiktok, linkedin },
    locationPages,
  } = await query();

  return (
    <footer className={`${styles.footer} max-width`}>
      <div className={styles.columns}>
        <div className={styles.team}>
          <Link
            href='/pl/zespol'
            className={styles.heading}
          >
            Zespół
          </Link>
          <ul>
            {team.map(({ name, slug: { current: slug }, img }, i) => (
              <li key={i}>
                <Link href={`/pl/zespol/${slug}`}>
                  <Img
                    data={img}
                    width={32}
                    height={32}
                    sizes='32px'
                    className='personBorder'
                  />
                  <p>{name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.projects}>
          <Link
            href='/pl/portfolio'
            className={styles.heading}
          >
            Projekty
          </Link>
          <ul>
            {projects.map(({ name, slug: { current: slug } }, i) => (
              <li key={i}>
                <Link href={`/pl/portfolio/${slug}`}>
                  <p>{name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.services}>
          <div>
            <Link
              href='/pl/web-development'
              className={styles.heading}
            >
              Web Development
            </Link>
            <Link href='/pl/web-development/strony-internetowe'>Strony internetowe</Link>
            <Link href='/pl/web-development/aplikacje-internetowe'>Aplikacje internetowe</Link>
            <Link href='/pl/web-development/sklepy-internetowe'>Sklepy internetowe</Link>

            <Link
              href='/pl/marketing-360'
              className={styles.heading}
              data-desktop='false'
              data-first='true'
            >
              Marketing 360°
            </Link>
            <Link
              href='/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie'
              className={styles.heading}
              data-desktop='false'
            >
              Opieka Agencyjna
            </Link>
            <Link
              href='/pl/warsztaty-discovery'
              className={styles.heading}
              data-desktop='false'
            >
              Warsztaty strategiczne
            </Link>
          </div>
          <div>
            <Link
              href='/pl/grafika-design'
              className={styles.heading}
            >
              Grafika & design
            </Link>
            <Link href='/pl/grafika-design/projektowanie-logo'>Logo</Link>
            <Link href='/pl/grafika-design/audyt-ux-ui'>Audyty</Link>
            <Link href='/pl/grafika-design/identyfikacja-wizualna-marki'>Identyfikacja wizualna</Link>
            <Link href='/pl/grafika-design/branding'>Branding</Link>
            <Link href='/pl/grafika-design/projektowanie-ui'>Projektowanie UI</Link>
            <Link href='/pl/grafika-design/projektowanie-ux'>Projektowanie UX</Link>
          </div>
          <div>
            <Link
              href='/pl/marketing-360'
              className={styles.heading}
            >
              Marketing 360°
            </Link>
            <Link
              href='/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie'
              className={styles.heading}
            >
              Opieka Agencyjna
            </Link>
            <Link
              href='/pl/warsztaty-discovery'
              className={styles.heading}
            >
              Warsztaty strategiczne
            </Link>
          </div>
        </div>
        <div className={styles.contact}>
          <p className={styles.heading}>{address}</p>
          <Link
            href={`/pl/zespol/${contactPerson.slug.current}`}
            className={styles.contactPerson}
          >
            <Img
              data={contactPerson.img}
              width={48}
              height={48}
              sizes='48px'
              className='personBorder'
            />
            <p>{contactPerson.name}</p>
          </Link>
          {contactPerson.email && (
            <div>
              <a href={`mailto:${contactPerson.email}`}>{contactPerson.email}</a>
              <CopyToClipboard text={contactPerson.email} />
            </div>
          )}
          {contactPerson.tel && (
            <div>
              <a href={`tel:${contactPerson.tel}`}>{contactPerson.tel}</a>
              <CopyToClipboard text={contactPerson.tel} />
            </div>
          )}
        </div>
        <div className={styles.knowledge}>
          <Link
            href='/pl/blog'
            className={styles.heading}
          >
            Blog
          </Link>
          <Link
            href='/pl/akademia'
            className={styles.heading}
          >
            Ciekawostki
          </Link>
        </div>
        <Map pages={locationPages} />
      </div>
      <div className={styles.info}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Kryptonum</p>
        <div className={styles.socials}>
          {instagram && (
            <a
              href={instagram}
              target='_blank'
              rel='noopener'
              aria-label='Instagram'
            >
              <Instagram />
            </a>
          )}
          {facebook && (
            <a
              href={facebook}
              target='_blank'
              rel='noopener'
              aria-label='Facebook'
            >
              <Facebook />
            </a>
          )}
          {tiktok && (
            <a
              href={tiktok}
              target='_blank'
              rel='noopener'
              aria-label='TikTok'
            >
              <Tiktok />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target='_blank'
              rel='noopener'
              aria-label='LinkedIn'
            >
              <Linkedin />
            </a>
          )}
        </div>
        <p className={styles.links}>
          <Link href='/pl/mapa-strony'>Mapa strony</Link>
          <Link href='/pl/polityka-prywatnosci'>Polityka prywatności</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const query = async () => {
  const {
    body: { data },
  } = await fetchData(/* GraphQL */ `
    query {
      team: allTeamMember(sort: { _createdAt: ASC }) {
        name
        slug {
          current
        }
        img {
          asset {
            altText
            url
            metadata {
              lqip
              dimensions {
                height
                width
              }
            }
          }
        }
      }
      locationPages: allLocationPage {
        name
        slug {
          current
        }
      }
      global: Global(id: "global") {
        address
        contactPerson: footer_ContactPerson {
          name
          slug {
            current
          }
          email
          tel
          img {
            asset {
              altText
              url
              metadata {
                lqip
                dimensions {
                  height
                  width
                }
              }
            }
          }
        }
        projects: footer_Projects {
          name
          slug {
            current
          }
        }
        instagram
        facebook
        tiktok
        linkedin
      }
    }
  `);
  return data;
};

const Instagram = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    fill='none'
  >
    <rect
      width='20'
      height='20'
      fill='#EFF0F3'
      rx='4'
    ></rect>
    <rect
      width='20'
      height='20'
      fill='#EFF0F3'
      rx='4'
    ></rect>
    <rect
      width='20'
      height='20'
      fill='#EFF0F3'
      rx='4'
    ></rect>
    <path
      fill='#010104'
      d='M15 6.072a1.071 1.071 0 11-2.143 0 1.071 1.071 0 012.143 0z'
    ></path>
    <path
      fill='#010104'
      fillRule='evenodd'
      d='M10 13.572a3.571 3.571 0 100-7.143 3.571 3.571 0 000 7.143zm0-1.429a2.143 2.143 0 100-4.286 2.143 2.143 0 000 4.286z'
      clipRule='evenodd'
    ></path>
    <path
      fill='#010104'
      fillRule='evenodd'
      d='M2.857 9.715c0-2.4 0-3.6.467-4.518a4.286 4.286 0 011.873-1.872c.917-.468 2.117-.468 4.517-.468h.572c2.4 0 3.6 0 4.517.468a4.286 4.286 0 011.873 1.872c.467.917.467 2.117.467 4.518v.571c0 2.4 0 3.6-.467 4.517a4.286 4.286 0 01-1.873 1.873c-.917.467-2.117.467-4.517.467h-.572c-2.4 0-3.6 0-4.517-.467a4.286 4.286 0 01-1.873-1.873c-.467-.917-.467-2.117-.467-4.517v-.571zm6.857-5.429h.572c1.223 0 2.055.001 2.698.054.627.05.947.144 1.17.257.538.274.975.711 1.249 1.249.114.223.207.544.258 1.17.052.643.053 1.475.053 2.699v.571c0 1.224 0 2.056-.053 2.699-.051.626-.144.946-.258 1.17a2.858 2.858 0 01-1.249 1.248c-.223.114-.543.207-1.17.258-.643.053-1.475.054-2.698.054h-.572c-1.223 0-2.055-.002-2.698-.054-.627-.051-.947-.144-1.17-.258a2.858 2.858 0 01-1.249-1.248c-.114-.224-.206-.544-.258-1.17-.052-.643-.053-1.475-.053-2.699v-.571c0-1.224 0-2.056.053-2.699.052-.626.144-.947.258-1.17a2.857 2.857 0 011.249-1.249c.223-.113.543-.206 1.17-.257.643-.053 1.475-.054 2.698-.054z'
      clipRule='evenodd'
    ></path>
  </svg>
);
const Facebook = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    fill='none'
  >
    <g clipPath='url(#a)'>
      <path
        fill='#EFF0F3'
        d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
      ></path>
      <path
        fill='#010104'
        d='M13.893 12.89l.443-2.89h-2.774V8.125c0-.79.388-1.563 1.63-1.563h1.261v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V10h-2.54v2.89h2.54v6.988a10.04 10.04 0 003.124 0v-6.987h2.33z'
      ></path>
    </g>
    <defs>
      <clipPath id='a'>
        <path
          fill='#fff'
          d='M0 0h20v20H0z'
        ></path>
      </clipPath>
    </defs>
  </svg>
);
const Tiktok = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    fill='none'
  >
    <path
      fill='url(#a)'
      d='M14.314 7.22a7.801 7.801 0 004.563 1.466V5.4c-.322 0-.643-.034-.958-.101v2.587a7.803 7.803 0 01-4.564-1.466v6.707c0 3.354-2.71 6.074-6.052 6.074a6.009 6.009 0 01-3.37-1.028 6.024 6.024 0 004.328 1.828c3.343 0 6.053-2.72 6.053-6.075V7.22zm1.182-3.315a4.587 4.587 0 01-1.182-2.682V.801h-.908a4.601 4.601 0 002.09 3.104zM6.048 15.599a2.774 2.774 0 01-.565-1.682 2.774 2.774 0 013.608-2.648v-3.36a6.083 6.083 0 00-.958-.055v2.615a2.774 2.774 0 00-3.609 2.648 2.78 2.78 0 001.524 2.482z'
    ></path>
    <path
      fill='#EFF0F3'
      d='M13.355 6.42a7.803 7.803 0 004.564 1.466V5.299a4.577 4.577 0 01-2.423-1.394 4.601 4.601 0 01-2.09-3.104H11.02v13.125a2.774 2.774 0 01-2.769 2.77 2.76 2.76 0 01-2.204-1.097 2.78 2.78 0 01-1.523-2.482 2.774 2.774 0 013.61-2.648V7.854c-3.285.068-5.926 2.76-5.926 6.072 0 1.654.658 3.152 1.725 4.247a6.009 6.009 0 003.37 1.028c3.343 0 6.052-2.72 6.052-6.075V6.42z'
    ></path>
    <path
      fill='#EFF0F3'
      d='M17.919 5.298v-.7a4.55 4.55 0 01-2.423-.694 4.572 4.572 0 002.423 1.394zM13.406.8a4.698 4.698 0 01-.05-.377V0h-3.294v13.126a2.774 2.774 0 01-2.769 2.769 2.75 2.75 0 01-1.246-.297 2.762 2.762 0 002.204 1.097 2.774 2.774 0 002.77-2.77V.8h2.385zM8.133 7.853v-.745a6.089 6.089 0 00-.83-.056c-3.343 0-6.053 2.72-6.053 6.074a6.074 6.074 0 002.683 5.046 6.065 6.065 0 01-1.725-4.247c0-3.311 2.641-6.004 5.925-6.072z'
    ></path>
    <defs>
      <linearGradient
        id='a'
        x1='18.877'
        x2='2.538'
        y1='0.801'
        y2='2.073'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#4A4A57'></stop>
        <stop
          offset='1'
          stopColor='#383842'
        ></stop>
      </linearGradient>
    </defs>
  </svg>
);
const Linkedin = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    fill='none'
  >
    <path
      fill='#EFF0F3'
      d='M18.524 0H1.476A1.476 1.476 0 000 1.476v17.048A1.476 1.476 0 001.476 20h17.048A1.476 1.476 0 0020 18.524V1.476A1.476 1.476 0 0018.524 0zM5.96 17.038H2.954V7.486h3.007v9.552zM4.456 6.162a1.726 1.726 0 111.736-1.724 1.702 1.702 0 01-1.736 1.724zm12.588 10.884H14.04v-5.218c0-1.54-.654-2.014-1.499-2.014-.891 0-1.766.672-1.766 2.053v5.179H7.767V7.493h2.891v1.324h.04c.29-.588 1.306-1.592 2.858-1.592 1.677 0 3.49.996 3.49 3.912l-.002 5.909z'
    ></path>
  </svg>
);
