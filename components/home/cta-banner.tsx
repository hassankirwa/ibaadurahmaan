import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="/images/water-project.jpg"
        alt="Community water project"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Together, We Can Transform Lives
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 max-w-2xl mx-auto">
          Your support can help build the first girls&apos; orphanage in Mandera
          County, educate vulnerable children, and empower widows to achieve
          self-reliance. Join us in making a lasting difference.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 text-base"
          >
            <Link href="/get-involved">
              Donate Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 text-base bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
