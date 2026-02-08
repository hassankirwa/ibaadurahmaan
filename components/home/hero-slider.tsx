"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "./images/hero5.png",
    title: "Empowering Orphaned Girls Through Education",
    subtitle:
      "Providing safe shelter, quality education, and nurturing care to the most vulnerable girls in Mandera County, Kenya.",
    cta: { label: "Donate Now", href: "/get-involved" },
    ctaSecondary: { label: "Learn More", href: "/about" },
  },
  {
    image: "./images/hero3.jpg",
    title: "Uplifting Widows & Building Livelihoods",
    subtitle:
      "Training women in entrepreneurship, vocational skills, and supporting them with income-generating projects for lasting self-reliance.",
    cta: { label: "Sponsor a Girl", href: "/get-involved" },
    ctaSecondary: { label: "Our Programs", href: "/programs" },
  },
  {
    image: "/images/hero4.png",
    title: "Humanitarian Aid & Community Resilience",
    subtitle:
      "Constructing homes for displaced families, providing emergency relief, and strengthening vulnerable communities across the region.",
    cta: { label: "Partner With Us", href: "/get-involved" },
    ctaSecondary: { label: "View Projects", href: "/projects" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prev = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute pointer-events-none"
                }`}
              >
                {index === current && (
                  <>
                    <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-card backdrop-blur-sm">
                      Ibaadurahman CBO
                    </span>
                    <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-card md:text-5xl lg:text-6xl text-balance">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed text-card/85 md:text-xl">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8"
                      >
                        <Link href={slide.cta.href}>{slide.cta.label}</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-card/30 text-card hover:bg-card/10 text-base font-semibold px-8 bg-transparent"
                      >
                        <Link href={slide.ctaSecondary.href}>
                          {slide.ctaSecondary.label}
                        </Link>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-4 z-30 flex items-center gap-3 lg:right-8">
        <button
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-card/20 bg-card/10 text-card backdrop-blur-sm transition-all hover:bg-card/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-card/20 bg-card/10 text-card backdrop-blur-sm transition-all hover:bg-card/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-accent"
                : "w-2 bg-card/40 hover:bg-card/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
