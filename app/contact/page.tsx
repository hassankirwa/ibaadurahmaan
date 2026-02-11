"use client";

import React from "react"

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/ibaadurahman",
    icon: Facebook,
    handle: "@ibaadurahman",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ibaadurahman",
    icon: Instagram,
    handle: "@ibaadurahman",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@ibaadurahman",
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.12V9.01a6.27 6.27 0 0 0-.86-.06 6.33 6.33 0 0 0-6.33 6.33A6.33 6.33 0 0 0 9.49 21.6a6.33 6.33 0 0 0 6.33-6.33V8.72a8.16 8.16 0 0 0 3.77.98V6.69z" />
      </svg>
    ),
    handle: "@ibaadurahman",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ibaadurahman",
    icon: Youtube,
    handle: "@ibaadurahman",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/ibaadurahman",
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    handle: "@ibaadurahman",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ibaadurrahmancbo.or.ke",
    href: "mailto:info@ibaadurrahmancbo.or.ke",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 758 904 885",
    href: "tel:+254758904885",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "P.O. Box 13-70300, Mandera, Kenya",
    href: null,
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.ibaadurrahmancbo.or.ke",
    href: "https://www.ibaadurrahmancbo.or.ke",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <Navbar />
      <PageHeader
        tag="Contact Us"
        title="Get in Touch"
        description="For partnership, media or donation inquiries, please get in touch and our team will respond as soon as possible."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-all hover:border-primary/30 hover:shadow-md group"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <social.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {social.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-primary p-8">
                <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">
                  Location
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  Mandera Township, Mandera County, Kenya. We operate across all
                  seven sub-counties of Mandera and also implement cross-border
                  humanitarian support.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mb-6" />
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      Message Sent
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out. Our team will get back to you
                      as soon as possible.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-muted-foreground mb-8">
                      Fill out the form below and we will get back to you
                      promptly.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-1.5 block text-sm font-medium text-foreground"
                          >
                            Full Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-sm font-medium text-foreground"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          required
                          className="bg-background resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full sm:w-auto"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
