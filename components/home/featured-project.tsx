"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedProject() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero6.jpeg"
              alt="Elwak Girls' Orphanage Project"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                Featured Project
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Flagship Initiative
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Girl Child Support & Orphanage Project &mdash; Elwak
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              In Mandera County, there are established boys&apos; orphanages but
              not a single girls&apos; orphanage, leaving girls highly
              vulnerable to abuse, early marriage, and neglect.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ibaadurahman has taken over a disused boys&apos; orphanage facility
              in Elwak, Mandera South, to renovate and convert it into a
              dedicated girls&apos; orphanage with dormitories, a kitchen, and a
              large compound. The project includes a girls&apos; mosque,
              classrooms, dining hall, perimeter wall, and integrated
              income-generating activities.
            </p>

            {/* Budget highlight */}
            <div className="mt-8 rounded-xl bg-card border border-border p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">
                  Fundraising Progress
                </span>
                <span className="text-sm font-bold text-primary">
                  Ksh 1M / 7M
                </span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000"
                  style={{ width: isVisible ? "14.3%" : "0%" }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Ksh 6,000,000 budget gap remaining for renovation, equipment,
                and bedding
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <Link href="/get-involved">
                  Support This Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="/projects">View the Project Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
