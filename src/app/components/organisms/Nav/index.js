'use client'
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChevronDown, ChevronLeft, KryptonumLogo } from '../../atoms/Icons';
import { Clamp, changeImageDimensions, removeMarkdown, scrollLock } from "@/utils/functions";
import Button from "../../atoms/Button";
import Link from "next/link";
import Img from "@/utils/Img";


const Nav = ({caseStudies,
    team,
    blogEntries,
    blogCategories,
    curiosityEntries,
    curiosityCategories,
    blogAuthors,
    academyAuthors
}) => {

  const locationPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const [ navOpened, setNavOpened ] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current;
    const navHeight = nav.offsetHeight;
    let prevScrollPos = window.pageYOffset;
    let currentScrollPos = prevScrollPos;
    let scrollDistance = 0;
    const handleScroll = () => {
      if(!nav.getAttribute('data-tab')){
        prevScrollPos = currentScrollPos;
        currentScrollPos = window.pageYOffset;
        if (currentScrollPos < prevScrollPos && currentScrollPos > navHeight) {
          nav.classList.add('fixed');
          scrollDistance = 0;
        } else if(nav.classList.contains('fixed')) {
          scrollDistance += prevScrollPos - currentScrollPos;
          if (scrollDistance * -1 >= navHeight) {
            nav.classList.remove('fixed');
            scrollDistance = 0;
          }
        }
        if (currentScrollPos === 0) {
          nav.classList.remove('fixed');
        }
      }
    };
    setNavOpened(false);
    scrollLock(false);

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    document.addEventListener("keydown", handleEscapeKey)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [locationPath])

  const handleEscapeKey = (e) => {
    const nav = navRef.current;
    if (e.key === "Escape"){
      nav.removeAttribute('data-tab');
      setNavOpened(false);
      scrollLock(false);
    }
  }

  const handleNavLinks = (e, item) => {
    const nav = navRef.current;
    item
    ? nav.getAttribute('data-tab') === item
      ? nav.removeAttribute('data-tab')
      : nav.setAttribute("data-tab", item)
    : 
      nav.removeAttribute("data-tab")
      
    if(e.currentTarget.getAttribute('aria-current') === 'page'){
      setNavOpened(false);
      scrollLock(false);
    }
  }

  const handleOverlay = () => {
    const nav = navRef.current;
    nav.removeAttribute('data-tab');
    setNavOpened(false);
    scrollLock(false);
  }

  const handleNavToggle = () => {
    const nav = navRef.current;
    if (!nav.classList.contains("fixed")){
      window.scrollTo({ top: 0 });
    }
    setNavOpened(!navOpened);
    scrollLock(!navOpened);
    nav.removeAttribute('data-tab');
  }

  return (
    <>
      <Wrapper className="nav" aria-expanded={navOpened} ref={navRef}>
        <a href="#main" className="skipToMainContent">Przejdź do głównego kontentu</a>
        <div className="max-width">
          <Link href="/pl" aria-label="Strona główna" onClick={(e) => handleNavLinks(e)}>
            <KryptonumLogo />
          </Link>
          <button
            id="nav-toggle"
            onClick={() => handleNavToggle()}
            aria-label="Nawigacja"
          >
            <span></span>
            <span></span>
          </button>
          <div className="navList">
            <ul>
              <li className="navCtaMobile">
                <Button
                  href='/pl/kontakt'
                  onClick={(e) => handleNavLinks(e)}
                >Darmowa konsultacja</Button>
              </li>
              <li className="navList-item services">
                <button onClick={(e) => handleNavLinks(e, 'services')}>
                  <span>Usługi</span>
                  <ChevronDown />
                </button>
                <ul className="navList2">
                  <div className="max-width">
                    <div className="backBtn">
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Usługi</span>
                    </div>
                    <li>
                      <h3><Link href="/pl/web-development" onClick={(e) => handleNavLinks(e)}>Web Development</Link></h3>
                      <ul className="navList3">
                        <li><Link href="/pl/web-development-strony-internetowe" onClick={(e) => handleNavLinks(e)}>Strony internetowe</Link></li>
                        <li><Link href="/pl/web-development-aplikacje-internetowe" onClick={(e) => handleNavLinks(e)}>Aplikacje internetowe</Link></li>
                        <li><Link href="/pl/web-development-sklepy-internetowe" onClick={(e) => handleNavLinks(e)}>Sklepy internetowe</Link></li>
                      </ul>
                    </li>
                    <li>
                      <h3><Link href="/pl/grafika-design" onClick={(e) => handleNavLinks(e)}>Grafika & design</Link></h3>
                      <ul className="navList3">
                        <li><Link href="/pl/grafika-design-projektowanie-logo" onClick={(e) => handleNavLinks(e)}>Logo</Link></li>
                        <li><Link href="/pl/grafika-design-audyt-ux-ui" onClick={(e) => handleNavLinks(e)}>Audyty</Link></li>
                        <li><Link href="/pl/grafika-design-identyfikacja-wizualna-marki" onClick={(e) => handleNavLinks(e)}>Identyfikacja wizualna i branding</Link></li>
                      </ul>
                    </li>
                    <li>
                      <h3><Link href="/pl/opieka-agencyjna-www-serwis-utrzymanie-zabezpieczenie" onClick={(e) => handleNavLinks(e)}>Opieka agencyjna</Link></h3>
                    </li>
                    <li>
                      <h3><Link href="/pl/warsztaty-discovery" onClick={(e) => handleNavLinks(e)}>Warsztat strategiczny</Link></h3>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="navList-item caseStudies">
                <button onClick={(e) => handleNavLinks(e, 'caseStudies')}>
                  <span>Projekty</span>
                  <ChevronDown />
                </button>
                <ul className="navList2">
                  <div className="max-width">
                    <div className="backBtn">
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Projekty</span>
                    </div>
                    <h3 className="navList2-subpage">
                      <Link href="/pl/portfolio" onClick={(e) => handleNavLinks(e)}>Przejdź do projektów</Link>
                    </h3>
                    <div className="wrapper">
                      {caseStudies.map((caseStudy, i) => (
                        <Link
                          href={`/pl/portfolio/${caseStudy.slug.current}`}
                          key={i}
                          onClick={(e) => handleNavLinks(e)}
                        >
                          <Img data = {caseStudy.img}
                            className="img"
                          />
                          <p>{caseStudy.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ul>
              </li>
              <li className="navList-item team">
                <button onClick={(e) => handleNavLinks(e, 'team')}>
                  <span>Zespół</span>
                  <ChevronDown />
                </button>
                <ul className="navList2">
                  <div className="max-width">
                    <div className="backBtn">
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Zespół</span>
                    </div>
                    <h3 className="navList2-subpage">
                      <Link href="/pl/zespol" onClick={(e) => handleNavLinks(e)}>Przejdź do: nasz zespół</Link>
                    </h3>
                    <div className="wrapper">
                      {team.map((person, i) => (
                        <Link
                          href={`/pl/zespol/${person.slug.current}`}
                          key={i}
                          onClick={(e) => handleNavLinks(e)}
                          className="person"
                        >
                          <Img data={person.img}
                            className="img personBorder"
                          />
                          <p>{person.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ul>
              </li>
              <li className="navList-item blog">
                <button onClick={(e) => handleNavLinks(e, 'blog')}>
                  <span>Blog</span>
                  <ChevronDown />
                </button>
                <ul className="navList2">
                  <div className="max-width">
                    <div className="backBtn">
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Blog</span>
                    </div>
                    <div className="entries">
                      <h3><Link href="/pl/blog" onClick={(e) => handleNavLinks(e)}>Zobacz bloga</Link></h3>
                      {blogEntries.map((entry, i) => (
                        <div className="entry" key={i}>
                          <Link
                            href={`/pl/blog/${entry.slug.current}`}
                            className="link"
                            aria-label={removeMarkdown(entry.title)}
                            onClick={(e) => handleNavLinks(e)}
                          ></Link>
                          <Img data={entry.img}
                            className="img"
                          />
                          <div className="copy">
                            <div className="copy-top">
                              <Link
                                href={`/pl/zespol/${entry.author[0]?.slug?.current}`}
                                onClick={(e) => handleNavLinks(e)}
                                className="person"
                              >
                                <Img data={entry.author[0]?.img}
                                  className="personBorder"
                                />
                                <span>{entry.author[0]?.name}</span>
                              </Link>
                              <span>{entry._createdAt}</span>
                            </div>
                            <p>{removeMarkdown(entry.title)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="categories">
                      <h3>Kategorie:</h3>
                      <div className="wrapper">
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
                    <div className="authors">
                      <h3>Twórcy:</h3>
                      <div className="wrapper">
                        {blogAuthors.map((person, i) => (
                          <Link
                            href={`/pl/zespol/${person.slug.current}`}
                            key={i}
                            onClick={(e) => handleNavLinks(e)}
                            className="person"
                          >
                            <Img data={person.img}
                              className="personBorder"
                            />
                            <p>{person.name}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="navList-item academy">
                <button onClick={(e) => handleNavLinks(e, 'academy')}>
                  <span>Akademia</span>
                  <ChevronDown />
                </button>
                <ul className="navList2">
                  <div className="max-width">
                    <div className="backBtn">
                      <button onClick={(e) => handleNavLinks(e)}>
                        <ChevronLeft />
                      </button>
                      <span>Akademia</span>
                    </div>
                    <div className="curiosities">
                      <h3><Link href="/pl/akademia" onClick={(e) => handleNavLinks(e)}>Zobacz akademię</Link></h3>
                      {curiosityEntries.map((curiosity, i) => (
                        <Link
                        href={`/pl/akademia/${curiosity.slug.current}`}
                        key={i}
                        className="link"
                        onClick={(e) => handleNavLinks(e)}
                      >
                          <Img data={curiosity.img} 
                            className="img"
                          />
                          <p>{removeMarkdown(curiosity.title)}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="categories">
                      <h3>Kategorie:</h3>
                      <div className="wrapper">
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
                    <div className="authors">
                      <h3>Twórcy:</h3>
                      <div className="wrapper">
                        {academyAuthors.map((person, i) => (
                          <Link
                            href={`/pl/zespol/${person.slug.current}`}
                            key={i}
                            onClick={(e) => handleNavLinks(e)}
                            className="person"
                          >
                            <Img data = {person.img}
                              className="personBorder"
                            />
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
            href='/pl/kontakt'
            className='nav-cta'
            onClick={(e) => handleNavLinks(e)}
          >Darmowa konsultacja</Button>
        </div>
      </Wrapper>
      <div
        className="overlay"
        aria-hidden="true"
        onMouseOver={() => handleOverlay()}
      ></div>
    </>
  );
}

const Wrapper = styled.nav`
  --nav-height: 94px;
  .skipToMainContent {
    background-color: var(--neutral-950);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    left: 0;
    padding: 8px 13px;
    top: var(--nav-height);
    &:focus-visible {
      opacity: 1;
      pointer-events: auto;
    }
  }
  background-color: var(--neutral-950);
  position: relative;
  z-index: 999;
  border-bottom: 1px solid var(--neutral-800);
  &.fixed {
    position: sticky;
    top: 0%;
    animation: navDown .5s forwards;
  }
  @keyframes navDown {
    0% {transform: translateY(-100%)}
    100% {transform: translateY(0)}
  }
  > .max-width {
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-cta,
  .navCtaMobile a {
    font-size: ${Clamp(16, 11, 20)};
    &[aria-current="page"] {
      svg {
        transform: rotate(180deg);
      }
      &:not(:hover) {
        filter: grayscale(100%);
      }
    }
  }
  .navCtaMobile {
    display: none;
  }
  .navList {
    ul {
      list-style-type: none;
    }
    & > ul {
      display: flex;
      gap: 48px;
    }
    .navList-item {
      > button {
        font-size: ${Clamp(16, 11, 20)};
        span {
          transition: opacity .3s;
        }
        &:hover {
          span {
            opacity: .7;
          }
        }
        padding: 13px 0;
        display: inline-flex;
        align-items: center;
        column-gap: 4px;
        cursor: pointer;
        svg {
          stroke: var(--neutral-200);
          transition: transform .3s;
        }
      }
      &.services .navList2 {
        a {
          transition: opacity .3s;
          &:hover {
            opacity: .7;
          }
        }
        .max-width {
          display: grid;
          grid-template: "one two three" "one two four";
          grid-template-columns: repeat(3, 1fr);
          column-gap: 32px;
        }
        .navList3 {
          li:not(:last-child) {
            margin-bottom: 16px;
          }
        }
        li {
          > a {
            display: inline-block;
            font-size: ${Clamp(16, 20, 20)};
          }
          &:nth-of-type(1) { grid-area: one }
          &:nth-of-type(2) { grid-area: two }
          &:nth-of-type(3) { grid-area: three }
          &:nth-of-type(4) { grid-area: four }
        }
      }
      &.caseStudies .navList2 {
        .wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          a {
            .img img {
              transition: transform .5s var(--easing);
            }
            &:hover {
              .img img {
                transform: scale(1.05);
              }
              p {
                opacity: .7;
              }
            }
            text-align: center;
            font-size: ${22/16}rem;
            p {
              transition: opacity .3s;
              margin-top: 24px;
            }
          }
        }
      }
      &.team .navList2 {
        .wrapper {
          margin: 0 auto;
          max-width: calc(5 * (96px + 48px));
          text-align: center;
          display: flex;
          gap: 24px 48px;
          flex-wrap: wrap;
          justify-content: center;
          p {
            font-size: ${Clamp(16, 22, 22)};
            margin-top: 8px;
            transition: opacity .3s;
          }
        }
      }
      &.blog .navList2 {
        .max-width {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: flex-start;
          gap: 32px;
        }
        .entries {
          > h3 a {
            transition: opacity .3s;
            &:hover {
              opacity: .7;
            }
          }
          .entry {
            &:not(:last-child){
              margin-bottom: 20px;
            }
            position: relative;
            .link {
              position: absolute;
              inset: 0;
              z-index: 1;
              &:hover {
                ~ .img img {
                  transform: scale(1.05);
                }
                ~ .copy h3 {
                  opacity: .7;
                }
              }
            }
            display: grid;
            grid-template-columns: 128px 1fr;
            align-items: start;
            gap: ${Clamp(12, 22, 22)};
            .img {
              border: 1px solid var(--neutral-800);
              img {
                transition: transform .3s;
              }
            }
            .copy {
              overflow: hidden;
              text-overflow: ellipsis;
              .copy-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                a {
                  display: grid;
                  grid-template-columns: auto auto;
                  align-items: center;
                  gap: 4px;
                  z-index: 2;
                  .personBorder {
                    width: 32px;
                    height: 32px;
                  }
                  @media (max-width: 1329px){
                    & + span {
                      display: none;
                    }
                  }
                }
              }
              p {
                margin-top: 1rem;
                font-size: 1rem;
                transition: opacity .3s;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
        .categories {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            a {
              background-color: var(--neutral-900);
              padding: 4px 16px;
              border-radius: 2px;
            }
          }
        }
        .authors {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px 32px;
            a {
              display: flex;
              align-items: center;
              gap: 8px;
            }
            .personBorder {
              width: 48px;
              height: 48px;
            }
            p {
              font-size: ${Clamp(16, 20, 20)};
            }
          }
        }
      }
      &.academy .navList2 {
        .max-width {
          display: grid;
          align-items: flex-start;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .curiosities {
          > h3 a {
            transition: opacity .3s;
            &:hover {
              opacity: .7;
            }
          }
          .link {
            &:not(:last-child) {
              margin-bottom: 24px;
            }
            display: grid;
            grid-template-columns: 188px 1fr;
            align-items: start;
            gap: 8px 12px;
            p {
                font-size: 1rem;
            }
            &:hover {
              .img img {
                transform: scale(1.05);
              }
              p {
                opacity: .7;
              }
            }
          }
          p {
            transition: opacity .3s;
          }
          .img {
            border: 1px solid var(--neutral-800);
            img {
              transition: transform .3s;
            }
          }
        }
        .categories {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            a {
              background-color: var(--neutral-900);
              padding: 4px 16px;
              border-radius: 2px;
            }
          }
        }
        .authors {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px 32px;
            a {
              display: flex;
              align-items: center;
              gap: 8px;
            }
            .personBorder {
              width: 48px;
              height: 48px;
            }
            p {
              font-size: ${Clamp(16, 20, 20)};
            }
          }
        }
      }
      &.blog .navList2,
      &.academy .navList2 {
        .categories a {
          transition: background-color .3s;
          &:hover {
            background-color: var(--neutral-800);
          }
        }
      }
      &.team .navList2,
      &.blog .navList2,
      &.academy .navList2 {
        .person {
          p, span {
            transition: opacity .3s;
          }
          .personBorder {
            img {
              transition: transform .3s;
            }
          }
          &:hover {
            .personBorder {
              img {
                transform: scale(1.05);
              }
            }
            p, span {
              opacity: .7;
            }
          }
        }
      }
    }
  }
  .navList2 {
    z-index: 1;
    transform: translateY(-8px);
    visibility: hidden;
    transition: transform .5s var(--easing);
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    max-height: calc(100vh - var(--nav-height) * 2);
    overflow-y: auto;
    border-bottom: 1px solid var(--neutral-800);
    background-color: var(--neutral-950);
    > .max-width {
      padding: 32px 0 96px;
    }
    .navList2-subpage {
      text-align: center;
      font-size: ${Clamp(20, 32, 30)};
      margin-bottom: 32px;
      a {
        transition: opacity .3s;
        &:hover {
          opacity: .7;
        }
      }
    }
    h3 {
      font-size: ${Clamp(20, 32, 30)};
      margin-bottom: 20px;
    }
  }
  #nav-toggle {
    padding: 21.5px 10.5px;
    margin-right: -10.5px;
    cursor: pointer;
    display: none;
    grid-template-columns: 1fr;
    gap: 8px;
    order: 2;
    span {
      display: block;
      width: 34px;
      height: 2px;
      background-color: var(--neutral-200);
      border-radius: 2px;
      transition: transform .3s;
    }
  }
  + .overlay {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 8;
    background-color: rgba(0,0,0,.4);
    backdrop-filter: blur(8px);
    opacity: 0;
    transition: opacity .3s;
    pointer-events: none;
  }
  .backBtn {
    display: none;
    margin: 0 calc(var(--pageMargin) * -1);
    width: calc(100% + var(--pageMargin) * 2);
    align-items: center;
    font-size: ${20/16}rem;
    gap: 4px;
    padding-bottom: 12px;
    margin-bottom: 32px;
    border-bottom: 1px solid var(--neutral-800);
    background-color: var(--neutral-950);
    position: sticky;
    top: 0;
    z-index: 4;
    svg {
      width: 48px;
      height: 48px;
      path {
        stroke-width: 1;
      }
      margin-left: var(--pageMargin);
    }
    span {
      margin: 0 auto;
      padding-right: var(--pageMargin);
    }
  }
  &[data-tab],
  &[aria-expanded="true"] {
    #nav-toggle {
      span {
        &:nth-child(1){
          transform: translateY(5px) rotate(-45deg);
        }
        &:nth-child(2){
          transform: translateY(-5px) rotate(45deg);
        }
      }
    }
    + .overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }
  &[data-tab="services"] .services .navList2,
  &[data-tab="caseStudies"] .caseStudies .navList2,
  &[data-tab="team"] .team .navList2,
  &[data-tab="blog"] .blog .navList2,
  &[data-tab="academy"] .academy .navList2 {
    transform: translateX(0);
    visibility: visible;
  }
  @media (min-width: 1150px){
    &[data-tab="services"] .navList-item.services,
    &[data-tab="caseStudies"] .navList-item.caseStudies,
    &[data-tab="team"] .navList-item.team,
    &[data-tab="blog"] .navList-item.blog,
    &[data-tab="academy"] .navList-item.academy {
      > button {
        span {
          background-image: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 1 !important;
        }
        svg {
          stroke: url(#ChevronDown);
          transform: rotateX(180deg);
        }
      }
    }
  }
  @media (max-width: 1149px){
    #nav-toggle {
      display: grid;
    }
    &[aria-expanded="true"] .navList {
      transform: translateX(0);
      visibility: visible;
    }
    .navList {
      width: 100%;
      position: absolute;
      right: 0;
      top: var(--nav-height);
      height: calc(100vh - var(--nav-height) * 2);
      background-color: var(--neutral-950);
      border-bottom: 1px solid var(--neutral-800);
      box-sizing: content-box;
      overflow-x: hidden;
      transition: transform .5s var(--easing);
      transform: translateY(-13px);
      visibility: hidden;
      & > ul {
        margin: 40px var(--pageMargin) 0;
        flex-direction: column;
        gap: 24px;
      }
      .navCtaMobile a {
        font-size: ${20/16}rem;
      }
      .navList-item {
        > button {
          font-size: ${20/16}rem;
          padding: 0;
          svg {
            transform: rotate(-90deg);
            width: 32px;
            height: 32px;
            path {
              stroke-width: 1;
            }
          }
        }
        &.services .navList2 {
          .max-width {
            display: block;
            > li:not(:first-child){
              margin-top: 32px;
            }
          }
        }
        &.caseStudies .navList2 {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            a {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1rem;
              text-align: left;
              font-size: ${20/16}rem;
              p {
                margin-top: 0;
              }
            }
          }
        }
        &.team .navList2 {
          .wrapper {
            max-width: unset;
            justify-content: start;
            gap: 16px;
            a {
              width: calc(50% - 8px);
            }
          }
        }
        &.blog .navList2 {
          .max-width {
            grid-template-columns: 1fr;
          }
          .categories {
            .wrapper {
              grid-template-columns: 1fr;
            }
          }
          .authors {
            .wrapper {
              gap: 16px;
              a {
                flex-direction: column;
                gap: 8px;
              }
              .personBorder {
                width: 96px;
                height: 96px;
              }
            }
          }
        }
        &.academy .navList2 {
          .max-width {
            grid-template-columns: 1fr;
          }
          .curiosities {
            .link {
              grid-template-columns: 128px 1fr;
              .img {
                max-width: 188px;
              }
            }
          }
          .categories {
            .wrapper {
              grid-template-columns: 1fr;
            }
          }
          .authors {
            .wrapper {
              gap: 16px;
              a {
                flex-direction: column;
                gap: 8px;
              }
              .personBorder {
                width: 96px;
                height: 96px;
              }
            }
          }
        }
      }
    }
    .navList2 {
      top: 0;
      border-bottom: none;
      transform: translateX(-13px);
      max-height: 100%;
      > .max-width {
        padding: 32px 0 96px;
      }
      .navList2-subpage {
        text-align: left;
      }
    }
    .backBtn {
      display: flex;
    }
  }
  @media (max-width: 549px){
    .nav-cta {
      display: none;
    }
    .navCtaMobile {
      display: block;
    }
  }
`
 
export default Nav;