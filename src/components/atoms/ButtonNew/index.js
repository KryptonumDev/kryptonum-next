import Link from "next/link";
import styles from "./styles.module.scss";
import { ArrowRight } from "../Icons";

const ButtonNew = ({ data, theme = "secondary", href, className, children, ...props }) => {
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
          <a
            className={linkClassName}
            href={href}
            target="_blank"
            rel="noreferrer"
            {...props}
          >
            <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
            <ArrowRight />
          </a>
        ) : (
          <Link
            className={linkClassName}
            href={href}
            {...props}
          >
            <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
            <ArrowRight />
          </Link>
        )
      ) : (
        <button
          className={linkClassName}
          type="submit"
          {...props}
        >
          <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
          <ArrowRight />
        </button>
      )}
    </>
  );
};
export default ButtonNew;
