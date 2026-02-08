"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Home, Heart, HandHelping } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "300+",
    label: "Registered Members",
    description: "Contributing monthly for humanitarian work",
  },
  {
    icon: Heart,
    value: "30",
    label: "Orphan Families Supported",
    description: "Annually during Idd celebrations since 2010",
  },
  {
    icon: Home,
    value: "80",
    label: "People Housed",
    description: "12 households sheltered in Moyale, Ethiopia",
  },
  {
    icon: HandHelping,
    value: "200",
    label: "IDP Women Supported",
    description: "With food and non-food items in Moyale",
  },
];

export default function ImpactStats() {
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
    <section ref={ref} className="relative -mt-20 z-30">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-card p-6 shadow-2xl md:grid-cols-4 md:gap-6 md:p-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
