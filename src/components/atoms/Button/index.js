import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Button = ({ data, theme = "secondary", href, className, children, ...props }) => {
  if (data) {
    theme = data.theme;
    href = data.href;
    children = data.text;
  }

  const isExternal = href && href.startsWith("https://");

  const linkClassName = `${styles.wrapper} ${isExternal ? "" : "cta"} ${
    theme === "secondary" ? styles.secondary : styles.primary
  } ${className || ""} `;

  return (
    <>
      {href ? (
        isExternal ? (
          <a className={linkClassName} href={href} target="_blank" rel="noreferrer" {...props}>
            <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
            <ArrowRight />
          </a>
        ) : (
          <Link className={linkClassName} href={href} {...props}>
            <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
            <ArrowRight />
          </Link>
        )
      ) : (
        <button className={linkClassName} type="submit" {...props}>
          <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
          <ArrowRight />
        </button>
      )}
    </>
  );
};

export default Button;

export const ArrowRight = () => {
  const id = React.useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        stroke={`url(#${id})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.336 10h13.333m0 0l-5-5m5 5l-5 5"
      ></path>
      <defs>
        <linearGradient id={id} x1="16.419" x2="2.586" y1="5" y2="6.175" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD282"></stop>
          <stop offset="1" stopColor="#90F4E8"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
