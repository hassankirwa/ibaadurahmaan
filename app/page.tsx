import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSlider from "@/components/home/hero-slider";
import ImpactStats from "@/components/home/impact-stats";
import WhatWeDo from "@/components/home/what-we-do";
import FeaturedProject from "@/components/home/featured-project";
import HowToHelp from "@/components/home/how-to-help";
import Partners from "@/components/home/partners";
import CTABanner from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <ImpactStats />
      <WhatWeDo />
      <FeaturedProject />
      <HowToHelp />
      <Partners />
      <CTABanner />
      <Footer />
    </main>
  );
}
