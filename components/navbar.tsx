"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Work",
    href: "/programs",
    children: [
      { label: "Programs", href: "/programs" },
      { label: "Projects", href: "/projects" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="./images/logo.png"
            alt="Ibaadurahman CBO Logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <div className="hidden sm:block">
            <p
              className={`font-serif text-lg font-bold leading-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              Ibaadurahman
            </p>
            <p
              className={`text-xs transition-colors ${
                isScrolled
                  ? "text-muted-foreground"
                  : "text-card/80"
              }`}
            >
              Community Based Organization
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.children ? setOpenDropdown(link.label) : undefined
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-card hover:text-card/80"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute left-0 top-full pt-1">
                  <div className="rounded-lg border border-border bg-card p-1 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-md px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            <Link href="/get-involved">Donate Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            isScrolled ? "text-foreground" : "text-card"
          }`}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children &&
                  link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-md px-6 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <Link href="/get-involved" onClick={() => setIsMobileOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
