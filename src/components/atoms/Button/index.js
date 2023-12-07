import Link from "next/link";
import { ArrowTopRight } from "../Icons";
import styles from "./styles.module.scss";

const Button = ({
  data,
  theme = "secondary",
  children,
  href, 
  className, 
  ...props }) => {
  if (data) {
    theme = data.theme;
    href = data.href;
    children = data.text;
  }

  const isExternal = href && href.startsWith('https://');
  
  const linkClassName = `${styles.wrapper} ${isExternal ? '' : 'cta'} ${
    theme === "secondary" ? styles.secondary : styles.primary
  } ${className || ""} `;

  return (
    <>
      {href ? (
        isExternal ? (
          <a
            className={linkClassName}
            href={href}
            target="_blank"
            rel="noreferrer"
            {...props}
          >
            <span data-text={theme === 'secondary' ? children : undefined}>{children}</span>
            <ArrowTopRight />
          </a>
        ) : (
          <Link
            className={linkClassName}
            href={href}
            {...props}
          >
            <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
            <ArrowTopRight />
          </Link>
        )
      ) : (
        <button
          className={linkClassName}
          type="submit"
          {...props}
        >
          <span data-text={theme === 'secondary' ? children : undefined}>{children}</span>
          <ArrowTopRight />
        </button>
      )}
    </>
  )
};

export default Button;