"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/experiences", label: "Experiencias" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

export function Navbar() {
  const pathname = usePathname();

  return <NavbarContent pathname={pathname} />;
}

export function NavbarFallback() {
  return <NavbarContent pathname={null} />;
}

function NavbarContent({ pathname }: { pathname: string | null }) {
  const isHome = pathname === "/";

  return (
    <header className={`site-header${isHome ? " site-header--home" : ""}`}>
      <Link className="home-brand" href="/" aria-label="Wanderlust Explorer, inicio">
        <span className="home-brand__mark" aria-hidden="true">W</span>
        <span className="home-brand__name">
          <span>Wanderlust</span>
          <span>Explorer</span>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Navegación principal">
        {navigationLinks.map(({ href, label }) => {
          const isActive = pathname !== null && (href === "/" ? isHome : pathname.startsWith(href));

          return (
            <Link
              key={href}
              className={`site-nav__link${isActive ? " site-nav__link--active" : ""}`}
              href={href}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}