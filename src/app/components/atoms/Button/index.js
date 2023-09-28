import Link from "next/navigation";
import { ArrowTopRight } from "../Icons";
import styles from "./styles.module.scss";

const Button = ({ theme = "secondary", children, to, className, ...props }) => {
  const isExternal = to && to.startsWith("https://");
  return (
    <>
      {to ? (
        isExternal ? (
          <a
            className={
              theme === "secondary"
                ? `${styles.wrapper} ${styles.secondary} ${className}`
                : `${styles.wrapper} ${styles.primary} ${className}`
            }
            as="a"
            href={to}
            target="_blank"
            rel="noreferrer"
            {...props}
          >
            <span data-text={theme === "secondary" ? children : undefined}>
              {children}
            </span>
            <ArrowTopRight />
          </a>
        ) : (
          <a
            className={
              theme === "secondary"
                ? `${styles.wrapper} cta ${styles.secondary} ${className}`
                : `${styles.wrapper} cta ${styles.primary} ${className}`
            }
            as={Link}
            href={to}
            {...props}
          >
            <span data-text={theme === "secondary" ? children : undefined}>
              {children}
            </span>
            <ArrowTopRight />
          </a>
        )
      ) : (
        <a
          className={
            theme === "secondary"
              ? `${styles.wrapper} cta ${styles.secondary} ${className}`
              : `${styles.wrapper} cta ${styles.primary} ${className}`
          }
          as="button"
          type="submit"
          {...props}
        >
          <span data-text={theme === "secondary" ? children : undefined}>
            {children}
          </span>
          <ArrowTopRight />
        </a>
      )}
    </>
  );
};

export default Button;
