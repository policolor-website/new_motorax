"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";

const serviceItems = [
  { href: "/servicii/reparatie-ambreiaje", label: "Reparație ambreiaje" },
  { href: "/servicii/schimbare-ulei-si-filtru", label: "Schimbare ulei și filtru" },
  { href: "/servicii/service-amortizoare", label: "Service amortizoare" },
  { href: "/servicii/schimbare-kit-transmisie", label: "Schimbare kit transmisie" },
  { href: "/servicii/sincronizare-carburatoare", label: "Sincronizare carburatoare" },
  { href: "/servicii/schimbare-distributie", label: "Schimbare distribuție" },
  { href: "/servicii/mecanica-motor", label: "Operații de mecanică a motorului" },
];

const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/servicii", label: "Servicii", children: serviceItems },
  { href: "/brand-uri", label: "Mărci" },
  { href: "/evenimente", label: "Hotel Moto" },
  { href: "/blog", label: "Sfaturi" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/95 backdrop-blur-md py-3 border-b border-gold/20" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group min-w-0 shrink">
          <img src={brand.logo} alt={brand.name} className="h-9 sm:h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const linkClass = `text-sm tracking-wide transition-colors duration-300 ${active ? "text-gold" : "text-white hover:text-gold"}`;
            if (!item.children) {
              return (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.href} className="relative group">
                <div className="flex items-center gap-1">
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                  <ChevronDown size={14} className={`transition-all duration-300 group-hover:rotate-180 ${active ? "text-gold" : "text-white group-hover:text-gold"}`} />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-ink/95 backdrop-blur-md border border-gold/20 rounded-xl py-2 min-w-[260px] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-5 py-3 text-sm transition-colors duration-200 ${pathname === child.href ? "text-gold" : "text-white hover:text-gold hover:bg-gold/5"}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={brand.phoneLink} className={`flex items-center gap-2 text-sm transition-colors ${scrolled ? "text-ash hover:text-gold" : "text-white hover:text-gold"}`}>
            <Phone size={14} />
            <span>Programare Service</span>
          </a>
        </div>

        <button
          className="lg:hidden w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-ink/95 mt-3 mx-4 rounded-xl p-6 animate-fade-up border border-gold/20">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between text-white hover:text-gold text-base py-2"
                  >
                    {item.label}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="flex flex-col gap-1 pl-4 pb-2">
                      <Link href={item.href} className="text-gold text-sm block py-1.5">
                        Toate operațiile
                      </Link>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="text-white hover:text-gold text-sm block py-1.5">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="text-white hover:text-gold text-base block py-2">
                  {item.label}
                </Link>
              )
            )}
            <a href={brand.phoneLink} className="flex items-center gap-2 text-gold text-sm mt-4 pt-4 border-t border-gold/10">
              <Phone size={14} /> Programare Service
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
