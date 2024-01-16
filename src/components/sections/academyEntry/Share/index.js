import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';

const share = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=`,
  twitter: `https://twitter.com/intent/tweet?url=`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=`,
  pinterest: `https://pinterest.com/pin/create/link/?url=`,
}

const baseUrl = `https://kryptonum.eu/pl/akademia/`;

const shareLink = (platform, url) => {
  return share[platform] + baseUrl + url;
}

const Share = ({ heading, img, url }) => {
  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <div className={styles.wrapper}>
          <a href={shareLink('facebook', url)} target="_blank" rel="noreferrer">
            <Facebook />
            <span>Facebook</span>
          </a>
          <a href={shareLink('linkedin', url)} target="_blank" rel="noreferrer">
            <Linkedin />
            <span>Linkedin</span>
          </a>
          <a href={shareLink('pinterest', url)} target="_blank" rel="noreferrer">
            <Pinterest />
            <span>Pinterest</span>
          </a>
        </div>
      </header>
      <Img
        data={img}
        className={styles.img}
        sizes="(max-width: 899px) 50vw, 600px"
      />
    </section>
  );
}

export default Share;

const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      fill="url(#facebook)"
      d="M18.52 30.205V17.454h4.147l.616-4.993H18.52v-3.18c0-1.44.387-2.427 2.38-2.427h2.526V2.403a32.304 32.304 0 00-3.7-.198c-3.665 0-6.182 2.322-6.182 6.583v3.664h-4.12v4.992h4.129v12.761h4.967z"
    />
    <defs>
      <linearGradient
        id="facebook"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
      >
        <stop
          offset="0%"
          stopColor="#30BB78"
        />
        <stop
          offset="100%"
          stopColor="#73F5E6"
        />
      </linearGradient>
    </defs>
  </svg>
);

const Linkedin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="64"
    fill="none"
    viewBox="0 0 70 64"
  >
    <path
      fill="#EFF0F3"
      fillRule="evenodd"
      d="M12.83 5.44c-2.173 0-3.934 1.712-3.934 3.82v45.694c0 2.11 1.762 3.82 3.933 3.82h45.359c2.172 0 3.934-1.711 3.934-3.82V9.26c0-2.108-1.761-3.82-3.934-3.82H12.829zm12.242 20.623v24.01h-7.965v-24.01h7.965zm.525-7.426c0 2.304-1.73 4.148-4.506 4.148h-.052c-2.673 0-4.402-1.844-4.402-4.148 0-2.357 1.78-4.149 4.507-4.149 2.724 0 4.4 1.792 4.453 4.149zm11.847 31.436H29.48v.001s.105-21.758 0-24.01h7.965v3.398c1.059-1.636 2.954-3.962 7.178-3.962 5.24 0 9.17 3.431 9.17 10.806v13.767h-7.965V37.23c0-3.228-1.153-5.43-4.034-5.43-2.201 0-3.512 1.485-4.087 2.919-.21.512-.263 1.23-.263 1.947v13.407z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const Pinterest = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="64"
    fill="none"
    viewBox="0 0 70 64"
  >
    <path
      fill="#EFF0F3"
      d="M6.23 33.334c0 11.465 6.895 21.315 16.76 25.646-.078-1.955-.013-4.302.488-6.43.539-2.273 3.603-15.257 3.603-15.257s-.894-1.788-.894-4.43c0-4.15 2.404-7.249 5.4-7.249 2.547 0 3.777 1.913 3.777 4.204 0 2.56-1.633 6.39-2.473 9.937-.701 2.97 1.49 5.393 4.42 5.393 5.305 0 8.878-6.814 8.878-14.887 0-6.137-4.133-10.73-11.651-10.73-8.494 0-13.785 6.334-13.785 13.409 0 2.44.72 4.16 1.846 5.492.518.612.59.858.402 1.56-.134.516-.443 1.756-.57 2.247-.187.71-.761.963-1.402.701-3.912-1.597-5.734-5.881-5.734-10.697 0-7.954 6.708-17.492 20.011-17.492 10.69 0 17.727 7.736 17.727 16.04 0 10.984-6.107 19.19-15.108 19.19-3.023 0-5.867-1.634-6.841-3.49 0 0-1.626 6.452-1.97 7.697-.594 2.16-1.756 4.317-2.818 5.999a27.977 27.977 0 007.936 1.148c15.462 0 27.999-12.536 27.999-28.001 0-15.464-12.537-28-28-28s-28 12.536-28 28z"
    ></path>
  </svg>
);