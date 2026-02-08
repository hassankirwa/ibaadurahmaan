"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GraduationCap, Briefcase, Droplets, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: GraduationCap,
    title: "Orphan Girls' Protection & Education",
    description:
      "We establish and operate girls' orphanages and schools to ensure access to both Islamic and secular education in a safe, nurturing environment.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Briefcase,
    title: "Women's Economic Empowerment",
    description:
      "We train women in entrepreneurship, vocational and life skills, and support them with microfinance and income-generating projects like bakery, poultry and greenhouses.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Droplets,
    title: "Health, Water & Sanitation",
    description:
      "We improve access to clean water, basic healthcare, menstrual hygiene and sanitation for vulnerable girls and women.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: ShieldAlert,
    title: "Emergency & Social Support",
    description:
      "We support IDPs, build houses for displaced families, and provide nutrition programs for poor households, especially those headed by women.",
    color: "bg-rose-100 text-rose-600",
  },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Mission
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            What We Do
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our programs are designed to protect orphaned girls, uplift widows,
            and strengthen vulnerable families through education, shelter,
            health, and economic empowerment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${pillar.color}`}
              >
                <pillar.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
