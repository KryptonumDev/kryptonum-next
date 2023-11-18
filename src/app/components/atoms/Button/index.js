import Link from "next/link";
import { ArrowTopRight } from "../Icons";
import styles from "./styles.module.scss";

const Button = ({
  data,
  theme = "secondary",
  children,
  to, 
  className, 
  ...props }) => {
  if (data) {
    theme = data.theme;
    to = data.href;
    children = data.text;
  }

  const isExternal = to && to.startsWith('https://');
  
  const linkClassName = `${styles.wrapper} ${isExternal ? '' : 'cta'} ${
    theme === "secondary" ? styles.secondary : styles.primary
  } ${className || ""} `;

  return (
    <>
      {to ? (
        isExternal ? (
          <a
            className={linkClassName}
            href={to}
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
            href={to}
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