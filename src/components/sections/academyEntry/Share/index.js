import DecorativeHeading from '@/components/atoms/DecorativeHeading';
import { Facebook, Linkedin, Pinterest } from '@/components/atoms/Icons';
import Img from '@/utils/Img';
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
export default Share