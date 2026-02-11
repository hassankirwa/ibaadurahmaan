import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/ibaadurahman",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ibaadurahman",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@ibaadurahman",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.12V9.01a6.27 6.27 0 0 0-.86-.06 6.33 6.33 0 0 0-6.33 6.33A6.33 6.33 0 0 0 9.49 21.6a6.33 6.33 0 0 0 6.33-6.33V8.72a8.16 8.16 0 0 0 3.77.98V6.69z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ibaadurahman",
    icon: Youtube,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/ibaadurahman",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const footerLinks = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/programs" },
    { label: "Projects", href: "/projects" },
    { label: "Impact", href: "/impact" },
  ],
  getInvolved: [
    { label: "Donate", href: "/get-involved" },
    { label: "Sponsor a Girl", href: "/get-involved" },
    { label: "Partner With Us", href: "/get-involved" },
    { label: "Volunteer", href: "/get-involved" },
  ],
  resources: [
    { label: "Governance", href: "/about#governance" },
    { label: "Stories", href: "/impact#stories" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Ibaadurahman CBO Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full bg-card/10 p-0.5"
              />
              <div>
                <p className="font-serif text-lg font-bold text-card">
                  Ibaadurahman
                </p>
                <p className="text-xs text-card/60">
                  Community Based Organization
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-card/70 mb-6">
              Empowering orphaned girls, widows, and vulnerable families in
              Mandera County, Kenya to live with dignity and self-reliance.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@ibaadurrahmancbo.or.ke"
                className="flex items-center gap-2 text-sm text-card/70 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@ibaadurrahmancbo.or.ke
              </a>
              <a
                href="tel:+254758904885"
                className="flex items-center gap-2 text-sm text-card/70 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +254 758 904 885
              </a>
              <span className="flex items-center gap-2 text-sm text-card/70">
                <MapPin className="h-4 w-4 shrink-0" />
                P.O. Box 13-70300, Mandera, Kenya
              </span>
            </div>
          </div>

          {/* Organization */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card/50">
              Organization
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.organization.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card/50">
              Get Involved
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card/50">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <h3 className="mt-8 mb-4 text-sm font-semibold uppercase tracking-wider text-card/50">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-card/10 text-card/70 transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-card/10 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-card/50">
            &copy; {new Date().getFullYear()} Ibaadurahman Community Based
            Organization. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-card/50">
              Registered CBO &mdash; Mandera County, Kenya
            </p>
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-card/40 transition-colors hover:text-primary"
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
