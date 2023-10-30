"use client";
import Button from "@/atoms/Button";
import { ChevronDown, ChevronLeft, KryptonumLogo } from "@/atoms/Icons";
import Img from "@/utils/Img";
import { removeMarkdown, scrollLock } from "@/utils/functions";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const Nav = ({
  caseStudies,
  team,
  blogEntries,
  blogCategories,
  curiosityEntries,
  curiosityCategories,
  blogAuthors,
  academyAuthors,
}) => {
  const [navOpened, setNavOpened] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const navHeight = nav.offsetHeight;
    let prevScrollPos = window.scrollY;
    let currentScrollPos = prevScrollPos;
    let scrollDistance = 0;
    const handleScroll = () => {
      if (!nav.getAttribute("data-tab")) {
        prevScrollPos = currentScrollPos;
        currentScrollPos = window.scrollY;
        if (currentScrollPos < prevScrollPos && currentScrollPos > navHeight) {
          nav.classList.add(styles.fixed);
          scrollDistance = 0;
        } else if (nav.classList.contains(styles.fixed)) {
          scrollDistance += prevScrollPos - currentScrollPos;
          if (scrollDistance * -1 >= navHeight) {
            nav.classList.remove(styles.fixed);
            scrollDistance = 0;
          }
        }
        if (currentScrollPos === 0) {
          nav.classList.remove(styles.fixed);
        }
      }
    };
    setNavOpened(false);
    scrollLock(false);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleEscapeKey = (e) => {
    const nav = navRef.current;
    if (e.key === "Escape") {
      nav.removeAttribute("data-tab");
      setNavOpened(false);
      scrollLock(false);
    }
  };

  const handleNavLinks = (e, item) => {
    const nav = navRef.current;
    item
      ? nav.getAttribute("data-tab") === item
        ? nav.removeAttribute("data-tab")
        : nav.setAttribute("data-tab", item)
      : nav.removeAttribute("data-tab");

    if (e.currentTarget.getAttribute("aria-current") === "page") {
      setNavOpened(false);
      scrollLock(false);
    }
  };

  const handleOverlay = () => {
    const nav = navRef.current;
    nav.removeAttribute("data-tab");
    setNavOpened(false);
    scrollLock(false);
  };

  const handleNavToggle = () => {
    const nav = navRef.current;
    if (!nav.classList.contains(styles.fixed)) {
      window.scrollTo({ top: 0 });
    }
    setNavOpened(!navOpened);
    scrollLock(!navOpened);
    nav.removeAttribute("data-tab");
  };

  const uniqueAuthors = (data) => {
    const uniqueAuthors = {};
    data.forEach((node) => {
      const author = node.author[0];
      const key = author.name;
      if (!uniqueAuthors[key]) {
        uniqueAuthors[key] = author;
      }
    });
    return Object.values(uniqueAuthors);
  };

  blogAuthors = uniqueAuthors(blogAuthors);
  academyAuthors = uniqueAuthors(academyAuthors);

  return (
    <>
      <nav
        className={`${styles.mainWrapper}`}
        aria-expanded={navOpened}
        ref={navRef}
      >
        <a href="#main" className={styles.skipToMainContent}>
          Przejdź do głównego kontentu
        </a>
        <div className={`${styles.maxWidth} maxWidth`}>
          <Link
            href="/pl"
            aria-label="Strona główna"
            onClick={(e) => handleNavLinks(e)}
          >
            <KryptonumLogo />
          </Link>
          <button
            className={styles.navToggle}
            onClick={() => handleNavToggle()}
            aria-label="Nawigacja"
          >
            <span></span>
            <span></span>
          </button>
          <div className={styles.navList}>
            <ul>
              <li className={styles.navCtaMobile}>
                <Button to="/pl/kontakt" onClick={(e) => handleNavLinks(e)}>
                  Darmowa konsultacja
                </Button>
              </li>
              <li className={`${styles.navListItem} ${styles.services}`}>
                <button onClick={(e) => handleNavLinks(e, "services")}>
                  <span>Usługi</span>
                  <ChevronDown />
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} maxWidth`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Usługi</span>
                    </div>
                    <li>
                      <h3>
                        <Link
                          href="/pl/web-development"
                          onClick={(e) => handleNavLinks(e)}
                        >
                          Web Development
                        </Link>
                      </h3>
                      <ul className={styles.navList3}>
                        <li>
                          <Link
                            href="/pl/web-development-strony-internetowe"
                            onClick={(e) => handleNavLinks(e)}
                          >
                            Strony internetowe
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pl/web-development-aplikacje-internetowe"
                            onClick={(e) => handleNavLinks(e)}
                          >
                            Aplikacje internetowe
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pl/web-development-sklepy-internetowe"
                            onClick={(e) => handleNavLinks(e)}
                          >
                            Sklepy internetowe
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h3>
                        <Link
                          href="/pl/grafika-design"
                          onClick={(e) => handleNavLinks(e)}
                        >
                          Grafika & design
                        </Link>
                      </h3>
                      <ul className={styles.navList3}>
                        <li>
                          <Link
                            href="/pl/grafika-design-projektowanie-logo"
                            onClick={(e) => handleNavLinks(e)}
                          >
                            Logo
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pl/grafika-design-audyt-ux-ui"
                            onClick={(e) => handleNavLinks(e)}
                          >
                            Audyty
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pl/grafika-design-identyfikacja-wizualna-marki"
                            onClick={(e) => handleNavLinks(e)}
                          >
                            Identyfikacja wizualna i branding
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h3>
                        <Link
                          href="/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie"
                          onClick={(e) => handleNavLinks(e)}
                        >
                          Opieka agencyjna
                        </Link>
                      </h3>
                    </li>
                    <li>
                      <h3>
                        <Link
                          href="/pl/warsztaty-discovery"
                          onClick={(e) => handleNavLinks(e)}
                        >
                          Warsztat strategiczny
                        </Link>
                      </h3>
                    </li>
                  </div>
                </ul>
              </li>
              <li className={`${styles.navListItem} ${styles.caseStudies}`}>
                <button onClick={(e) => handleNavLinks(e, "caseStudies")}>
                  <span>Projekty</span>
                  <ChevronDown />
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} maxWidth`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Projekty</span>
                    </div>
                    <h3 className={styles.navList2Subpage}>
                      <Link
                        href="/pl/portfolio"
                        onClick={(e) => handleNavLinks(e)}
                      >
                        Przejdź do projektów
                      </Link>
                    </h3>
                    <div className={styles.wrapper}>
                      {caseStudies.map((caseStudy, i) => (
                        <Link
                          href={`/pl/portfolio/${caseStudy.slug.current}`}
                          key={i}
                          onClick={(e) => handleNavLinks(e)}
                        >
                          <div className={styles.imgWrapper}>
                            <Img
                              data={caseStudy.img}
                              className={styles.img}
                              sizes="(max-width: 1149px) 50vw, (min-width: 1150px) 25vw"
                            />
                          </div>
                          <p>{caseStudy.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ul>
              </li>
              <li className={`${styles.navListItem} ${styles.team}`}>
                <button onClick={(e) => handleNavLinks(e, "team")}>
                  <span>Zespół</span>
                  <ChevronDown />
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} maxWidth`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Zespół</span>
                    </div>
                    <h3 className={styles.navList2Subpage}>
                      <Link
                        href="/pl/zespol"
                        onClick={(e) => handleNavLinks(e)}
                      >
                        Przejdź do: nasz zespół
                      </Link>
                    </h3>
                    <div className={styles.wrapper}>
                      {team.map((person, i) => (
                        <Link
                          href={`/pl/zespol/${person.slug.current}`}
                          key={i}
                          onClick={(e) => handleNavLinks(e)}
                          className={styles.person}
                        >
                          <div
                            className={`${styles.personBorder} personBorder`}
                          >
                            <Img
                              data={person.img}
                              width={96}
                              height={96}
                              className={`${styles.img}`}
                            />
                          </div>
                          <p>{person.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ul>
              </li>
              <li className={`${styles.navListItem} ${styles.blog}`}>
                <button onClick={(e) => handleNavLinks(e, "blog")}>
                  <span>Blog</span>
                  <ChevronDown />
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} maxWidth`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Blog</span>
                    </div>
                    <div className={styles.entries}>
                      <h3>
                        <Link
                          href="/pl/blog"
                          onClick={(e) => handleNavLinks(e)}
                        >
                          Zobacz bloga
                        </Link>
                      </h3>
                      {blogEntries.map((entry, i) => (
                        <div className={styles.entry} key={i}>
                          <Link
                            href={`/pl/blog/${entry.slug.current}`}
                            className={styles.link}
                            aria-label={removeMarkdown(entry.title)}
                            onClick={(e) => handleNavLinks(e)}
                          ></Link>
                          <div className={`${styles.imgWrapper}`}>
                            <Img
                              data={entry.img}
                              className={styles.img}
                              height={200}
                              width={200}
                            />
                          </div>
                          <div className={styles.copy}>
                            <div className={styles.copyTop}>
                              <Link
                                href={`/pl/zespol/${entry.author[0]?.slug?.current}`}
                                onClick={(e) => handleNavLinks(e)}
                                className={styles.person}
                              >
                                <div
                                  className={`${styles.img} ${styles.personBorder} personBorder`}
                                >
                                  <Img
                                    data={entry.author[0]?.img}
                                    height={32}
                                    width={32}
                                    className={styles.img}
                                  />
                                </div>
                                <span>{entry.author[0]?.name}</span>
                              </Link>
                              <span>{entry._createdAt}</span>
                            </div>
                            <p>{removeMarkdown(entry.title)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={styles.categories}>
                      <h3>Kategorie:</h3>
                      <div className={styles.wrapper}>
                        {blogCategories.map((category, i) => (
                          <Link
                            href={`/pl/blog/kategoria/${category.slug.current}`}
                            key={i}
                            onClick={(e) => handleNavLinks(e)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className={styles.authors}>
                      <h3>Twórcy:</h3>
                      <div className={styles.wrapper}>
                        {blogAuthors.map((person, i) => (
                          <Link
                            href={`/pl/zespol/${person.slug.current}`}
                            key={i}
                            onClick={(e) => handleNavLinks(e)}
                            className={styles.person}
                          >
                            <div
                              className={`${styles.imageWrapper} personBorder`}
                            >
                              <Img
                                data={person.img}
                                width={96}
                                height={96}
                                className={`${styles.personBorder} ${styles.img}`}
                              />
                            </div>
                            <p>{person.name}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className={`${styles.navListItem} ${styles.academy}`}>
                <button onClick={(e) => handleNavLinks(e, "academy")}>
                  <span>Akademia</span>
                  <ChevronDown />
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} maxWidth`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Akademia</span>
                    </div>
                    <div className={styles.curiosities}>
                      <h3>
                        <Link
                          href="/pl/akademia"
                          onClick={(e) => handleNavLinks(e)}
                        >
                          Zobacz akademię
                        </Link>
                      </h3>
                      {curiosityEntries.map((curiosity, i) => (
                        <Link
                          href={`/pl/akademia/${curiosity.slug.current}`}
                          key={i}
                          className={styles.link}
                          onClick={(e) => handleNavLinks(e)}
                        >
                          <div className={`${styles.imgWrapper}`}>
                            <Img
                              data={curiosity.img}
                              height={188}
                              width={188}
                              className={styles.img}
                            />
                          </div>
                          <p>{removeMarkdown(curiosity.title)}</p>
                        </Link>
                      ))}
                    </div>
                    <div className={styles.categories}>
                      <h3>Kategorie:</h3>
                      <div className={styles.wrapper}>
                        {curiosityCategories.map((category, i) => (
                          <Link
                            href={`/pl/akademia/kategoria/${category.slug.current}`}
                            key={i}
                            onClick={(e) => handleNavLinks(e)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className={styles.authors}>
                      <h3>Twórcy:</h3>
                      <div className={styles.wrapper}>
                        {academyAuthors.map((person, i) => (
                          <Link
                            href={`/pl/zespol/${person.slug.current}`}
                            key={i}
                            onClick={(e) => handleNavLinks(e)}
                            className={styles.person}
                          >
                            <div
                              className={`${styles.imageWrapper} personBorder`}
                            >
                              <Img
                                data={person.img}
                                width={96}
                                height={96}
                                className={`${styles.personBorder} ${styles.img}`}
                              />
                            </div>
                            <p>{person.name}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
          <Button
            to="/pl/kontakt"
            className={styles.navCta}
            onClick={(e) => handleNavLinks(e)}
          >
            Darmowa konsultacja
          </Button>
        </div>
      </nav>
      <div
        className={styles.overlay}
        aria-hidden="true"
        onMouseOver={() => handleOverlay()}
      ></div>
    </>
  );
};

export default Nav;
