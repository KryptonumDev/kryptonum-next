import Link from "next/navigation";
import { ArrowTopRight } from "../Icons";
import styles from "./styles.module.scss";

const Button = ({ theme = "secondary", children, to, className, ...props }) => {
  const isExternal = to && to.startsWith("https://");
  const linkClassName = isExternal
    ? `${styles.wrapper} ${
        theme === "secondary" ? styles.secondary : styles.primary
      } ${className}`
    : `${styles.wrapper} cta ${
        theme === "secondary" ? styles.secondary : styles.primary
      } ${className}`;

  const linkProps = isExternal
    ? { as: "a", href: to, target: "_blank", rel: "noreferrer", ...props }
    : { as: Link, href: to, ...props };
  return (
    <a className={linkClassName} {...linkProps}>
      <span data-text={theme === "secondary" ? children : undefined}>
        {children}
      </span>
      <ArrowTopRight />
    </a>
  );
};

export default Button;
