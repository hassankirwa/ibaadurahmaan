"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, UserCheck, Handshake, Users } from "lucide-react";

const helpItems = [
  {
    icon: Heart,
    title: "Donate",
    description:
      "Donate to our ongoing campaigns and specific projects such as renovation, beds and bedding, and education programs.",
  },
  {
    icon: UserCheck,
    title: "Sponsor an Orphan Girl",
    description:
      "Sponsor an orphan girl to cover her shelter, food, education, and healthcare needs.",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Partner with us as a corporate, foundation, mosque, NGO or government agency to amplify our impact.",
  },
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Volunteer your skills in fundraising, mentorship, training and advocacy to support our mission.",
  },
];

export default function HowToHelp() {
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
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Make a Difference
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            How You Can Help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every contribution, whether financial or through your time and
            skills, directly transforms the lives of vulnerable girls and women
            in Mandera County.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {helpItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-8 text-center transition-all duration-500 hover:shadow-xl hover:border-primary/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-primary/0 transition-all group-hover:bg-primary" />
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <item.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-serif text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10"
          >
            <Link href="/get-involved">Get Involved Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
