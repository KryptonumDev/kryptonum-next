import { removeMarkdown } from "@/utils/functions";
import Script from "next/script";
import { Fragment } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Icon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 12L10.5 8L6.5 4" stroke="#EFF0F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const createBreadcrumbs = (breadCrumbs) => {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Kryptonum",
      "item": "https://kryptonum.eu/pl",
    }
  ]

  breadCrumbs.forEach((el, index) => {
    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": el.name,
      "item": "https://kryptonum.eu/" + el.link,
    })
  });

  return items;
}

const Breadcrumbs = ({portfolio, breadcrumbs}) => {
	
  if (breadcrumbs?.length < 1 || !breadcrumbs) {
    return null;
  }

  const breadCrumbsItems = createBreadcrumbs(breadcrumbs);
  return (
    <nav className={portfolio ? `${styles.portfolio} ${styles.wrapper}` : styles.wrapper}>
    {breadCrumbsItems.length > 1 && (
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadCrumbsItems
        })}
      </Script>
    )}
    <ul>
      <li><a href="/pl">Strona główna</a></li>
      <li><Icon /></li>
      {breadcrumbs?.map((el, index) => (
        <Fragment key={index}>
          {breadcrumbs.length - 1 !== index ? <>
            <li><Link href={el.link}>{removeMarkdown(el.name)}</Link></li>
            <li><Icon /></li>
          </> :
            <li>{removeMarkdown(el.name)}</li>
          }
        </Fragment>
      ))}
    </ul>
  </nav>
  );
}

export default Breadcrumbs;