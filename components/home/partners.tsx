"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  "Ministry of Education",
  "Ministry of Labour & Social Protection",
  "UNICEF",
  "UNEP",
  "UNESCO",
  "County Government of Mandera",
];

export default function Partners() {
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
    <section ref={ref} className="py-16 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className={`text-center mb-10 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Partners
          </span>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            We collaborate with government institutions, development partners and
            community stakeholders to strengthen child protection and
            women&apos;s empowerment.
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-6 md:gap-10 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded-xl border border-border bg-card px-6 py-4 transition-all hover:shadow-md hover:border-primary/30"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
