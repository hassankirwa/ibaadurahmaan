import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

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

          {/* Resources */}
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-card/10 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-card/50">
            &copy; {new Date().getFullYear()} Ibaadurahman Community Based
            Organization. All rights reserved.
          </p>
          <p className="text-xs text-card/50">
            Registered CBO &mdash; Mandera County, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
