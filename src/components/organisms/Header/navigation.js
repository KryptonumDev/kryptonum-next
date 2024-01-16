"use client"
import Button from "@/atoms/Button";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const Navigation = ({
  kryptonumLogo,
  chevronDown,
  chevronLeft,
  projectsContents,
  servicesContents,
  teamContents,
  blogContents,
  children
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
          nav.classList.add(`${styles.fixed}`, "fixed" );
          scrollDistance = 0;
        } else if (nav.classList.contains(styles.fixed)) {
          scrollDistance += prevScrollPos - currentScrollPos;
          if (scrollDistance * -1 >= navHeight) {
            nav.classList.remove(`${styles.fixed}`, "fixed");
            scrollDistance = 0;
          }
        }
        if (currentScrollPos === 0) {
          nav.classList.remove(styles.fixed);
        }
      }
    };
    setNavOpened(false);

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
    }
  };

  const handleOverlay = () => {
    const nav = navRef.current;
    nav.removeAttribute("data-tab");
    setNavOpened(false);
  };

  const handleNavToggle = () => {
    const nav = navRef.current;
    if (!nav.classList.contains(styles.fixed)) {
      window.scrollTo({ top: 0 });
    }
    setNavOpened(!navOpened);
    nav.removeAttribute("data-tab");
  };

  return (
    <>
      <nav
        className={`${styles.mainWrapper} nav`}
        aria-expanded={navOpened}
        ref={navRef}
      >
        <a href="#main" className={styles.skipToMainContent}>
          Przejdź do głównego kontentu
        </a>
        <div className={`${styles.maxWidth} max-width`}>
          {kryptonumLogo}
          <button
            className={styles.navToggle}
            onClick={() => handleNavToggle()}
            aria-label="Nawigacja"
          >
            <span></span>
            <span></span>
          </button>
          <div className={`${styles.navList} navList`}>
            <ul>
              <li className={`${styles.navCtaMobile} navCtaMobile`}>
                <Button href="/pl/kontakt" onClick={() => handleOverlay()}>
                  Darmowa konsultacja
                </Button>
              </li>
              <li className={`${styles.navListItem} ${styles.services}`}>
                <button onClick={(e) => handleNavLinks(e, "services")}>
                  <span>Usługi</span>
                  {chevronDown}
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} max-width`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        {chevronLeft}
                      </button>
                      <span>Usługi</span>
                    </div>
                    {servicesContents}
                  </div>
                </ul>
              </li>
              <li className={`${styles.navListItem} ${styles.caseStudies}`}>
                <button onClick={(e) => handleNavLinks(e, "caseStudies")}>
                  <span>Projekty</span>
                  {chevronDown}
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} max-width`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        {chevronLeft}
                      </button>
                      <span>Projekty</span>
                    </div>
                    {projectsContents}
                  </div>
                </ul>
              </li>
              <li className={`${styles.navListItem} ${styles.team}`}>
                <button onClick={(e) => handleNavLinks(e, "team")}>
                  <span>Zespół</span>
                  {chevronDown}
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} max-width`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        {chevronLeft}
                      </button>
                      <span>Zespół</span>
                    </div>
                    {teamContents}
                  </div>
                </ul>
              </li>
              <li className={`${styles.navListItem} ${styles.blog}`}>
                <button onClick={(e) => handleNavLinks(e, "blog")}>
                  <span>Blog</span>
                  {chevronDown}
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} max-width`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        {chevronLeft}
                      </button>
                      <span>Blog</span>
                    </div>
                    {blogContents}
                  </div>
                </ul>
              </li>
              <li className={`${styles.navListItem} ${styles.academy}`}>
                <button onClick={(e) => handleNavLinks(e, "academy")}>
                  <span>Akademia</span>
                  {chevronDown}
                </button>
                <ul className={styles.navList2}>
                  <div className={`${styles.maxWidth} max-width`}>
                    <div className={styles.backBtn}>
                      <button onClick={(e) => handleNavLinks(e)}>
                        {chevronLeft}
                      </button>
                      <span>Akademia</span>
                    </div>
                    {children}
                  </div>
                </ul>
              </li>
            </ul>
          </div>
          <Button
            href="/pl/kontakt"
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

export default Navigation;
