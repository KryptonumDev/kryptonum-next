"use client";
import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  KryptonumLogoSimple,
  Mail,
  Tel,
  Tiktok,
  Whatsapp,
  Youtube,
} from "../../atoms/Icons";
import Link from "next/link";
import Img from "@/utils/Img";
import { removeMarkdown } from "@/utils/functions";
import styles from "./styles.module.scss";

const Footer = ({
  caseStudies,
  team,
  blogEntries,
  global: {
    footer_OfficeCity,
    footer_OfficeStreet,
    footer_ContactName,
    footer_ContactTel,
    footer_ContactEmail,
    footer_LegalLinks,
    footer_Socials,
  },
}) => {
  const [showMore, setShowMore] = useState(0);
  const maxPeople = 6;
  const peopleToExpand = team.length - maxPeople;

  return (
    <footer className={`${styles.wrapper} ${styles.maxWidth} maxWidth`}>
      <ul className={styles.footerWrapper}>
        <li className={styles.info}>
          <Link
            href="/pl"
            aria-label="Strona główna"
            className={styles.footerLogo}
          >
            <KryptonumLogoSimple />
          </Link>
          <h3>
            <Link href="/pl/kontakt">Kontakt</Link>
          </h3>
          <div>
            <p>{footer_OfficeCity}</p>
            <p>{footer_OfficeStreet}</p>
          </div>
          <div>
            <h3>{footer_ContactName}</h3>
            <a href={`tel:${footer_ContactTel.replace(/\s/g, "")}`}>
              <Tel />
              <span>{footer_ContactTel}</span>
            </a>
            <a href={`mailto:${footer_ContactEmail}`}>
              <Mail />
              <span>{footer_ContactEmail}</span>
            </a>
          </div>
        </li>
        <li className={styles.services}>
          <h3>Usługi</h3>
          <Link href="/pl/web-development">Web Development</Link>
          <Link href="/pl/warsztaty-discovery">Warsztat strategiczny</Link>
          <Link href="/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie">
            Opieka agencyjna
          </Link>
          <Link href="/pl/grafika-design">Grafika & design</Link>
        </li>
        <li className={styles.caseStudies}>
          <h3>
            <Link href="/pl/portfolio">Case study</Link>
          </h3>
          {caseStudies.map((caseStudy, i) => (
            <Link href={`/pl/portfolio/${caseStudy.slug.current}`} key={i}>
              {caseStudy.name}
            </Link>
          ))}
        </li>
        <li className={styles.team}>
          <h3>
            <Link href="/pl/zespol">Zespół</Link>
          </h3>
          {team.map((person, i) => (
            <Link
              href={`/pl/zespol/${person.slug.current}`}
              className={styles.person}
              key={i}
              style={{ display: !showMore && i + 1 > maxPeople ? "none" : "" }}
            >
              <div className ={`${styles.personBorder} personBorder`}>
                <Img data={person.img} className={`${styles.personBorder}`} />
              </div>
              <span>{person.name}</span>
            </Link>
          ))}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? `Pokaż mniej` : `Pokaż więcej (${peopleToExpand})`}
          </button>
        </li>
        <li className = {styles.blog}>
          <h3>
            <Link href="/pl/blog">Blog</Link>
          </h3>
          {blogEntries.map((entry, i) => (
            <div className={styles.entry} key={i}>
              <Link
                href={`/pl/blog/${entry.slug.current}`}
                className={styles.link}
                aria-label={removeMarkdown(entry.title)}
              ></Link>
              <div className={styles.thumbnailWrapper}>
                <Img data={entry.img} className={styles.thumbnail} />
                </div>
              <div className={styles.copy}>
                <Link
                  href={`/pl/zespol/${entry.author[0]?.slug.current}`}
                  className={styles.author}
                >
                  <div className={`${styles.blogPersonBorder} personBorder`}>
                  <Img data={entry.author[0]?.img} className={styles.blogImg}/>
                  </div>
                  <span>{entry.author[0]?.name}</span>
                </Link>
                <span>{entry._createdAt}</span>
                <p>{removeMarkdown(entry.title)}</p>
              </div>
            </div>
          ))}
        </li>
      </ul>
      <div className={styles.footerInfo}>
        <p>&copy; {new Date().getFullYear()} Kryptonum</p>
        <div className={styles.social}>
          {footer_Socials.map((social, i) => {
            let SocialComponent = null;
            const name = social.text.toLowerCase();
            if (name === "youtube") {
              SocialComponent = <Youtube />;
            } else if (name === "instagram") {
              SocialComponent = <Instagram />;
            } else if (name === "facebook") {
              SocialComponent = <Facebook />;
            } else if (name === "tiktok") {
              SocialComponent = <Tiktok />;
            } else if (name === "whatsapp") {
              SocialComponent = <Whatsapp />;
            }
            return (
              <a
                href={social.href}
                aria-label={social.text}
                key={i}
                target="_blank"
                rel="noreferrer"
              >
                {SocialComponent}
              </a>
            );
          })}
        </div>
        <div className={styles.legal}>
          {footer_LegalLinks.map((link, i) => (
            <Link href={link.href} key={i}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
