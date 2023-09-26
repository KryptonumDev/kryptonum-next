import StyledAnchor from "./StyledAnchor";
import Link from "next/navigation";
import { ArrowTopRight } from "../Icons";

const Button = ({theme = 'secondary', children, to, className, ...props}) => {
  const isExternal = to && to.startsWith('https://');
  return (
    <>
      {to ? (
        isExternal ? (
          <StyledAnchor
            as='a'
            className={`cta `}
            href={to}
            target="_blank"
            rel="noreferrer"
            {...props}
          >
            <span data-text={theme === 'secondary' ? children : undefined}>{children}</span>
            <ArrowTopRight />
          </StyledAnchor>
        ) : (
          <StyledAnchor
            as={Link}
            className={`cta ${theme}${className ? ` ${className}` : ''}`}
            to={to}
            {...props}
          >
            <span data-text={theme === "secondary" ? children : undefined}>{children}</span>
            <ArrowTopRight />
          </StyledAnchor>
        )
      ) : (
        <StyledAnchor
          as='button'
          className={`cta ${theme}${className ? ` ${className}` : ''}`}
          type="submit"
          {...props}
        >
          <span data-text={theme === 'secondary' ? children : undefined}>{children}</span>
          <ArrowTopRight />
        </StyledAnchor>
      )}
    </>
  )
}

export default Button;