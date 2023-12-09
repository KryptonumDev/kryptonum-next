"use client";

import Link from "next/link";

const NavLink = ({ href, className, children, ...props }) => {

  const handleNavLinks = () => {
    const nav = document.querySelector('nav.nav');
    nav.removeAttribute("data-tab");
  }

	return (
		<Link
			href={href}
			onClick={() => handleNavLinks()}
			className={className}
			{...props}
		>
			{children}
		</Link>
	);
};

export default NavLink;