import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Heart,
  GraduationCap,
  Users,
  Home,
  HandHelping,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Impact & Why Girl Child Education - Ibaadurahman CBO",
  description:
    "Discover why we focus on girls' education and the impact of our programs in Mandera County, Kenya.",
};

const benefits = [
  {
    icon: TrendingUp,
    text: "Reduces inequality by enabling marginalized groups to share in economic growth.",
  },
  {
    icon: TrendingUp,
    text: "Increases productivity and earnings; each additional year of schooling raises individual wages by around 10 percent on average worldwide.",
  },
  {
    icon: GraduationCap,
    text: "Drives economic competitiveness by building a skilled, knowledgeable workforce.",
  },
  {
    icon: Heart,
    text: "Improves health and nutrition, lowering child and maternal mortality and enhancing family wellbeing.",
  },
  {
    icon: Heart,
    text: "Reduces women's fertility rates, leading to better-spaced and healthier pregnancies.",
  },
  {
    icon: Users,
    text: "Increases women's labor force participation and earnings, benefiting families and communities.",
  },
  {
    icon: GraduationCap,
    text: "Creates intergenerational benefits, as educated mothers are more likely to send their children to school.",
  },
  {
    icon: Users,
    text: "Strengthens democracy and social cohesion, as societies with smaller education gaps tend to be more democratic.",
  },
];

const impactStats = [
  {
    icon: Users,
    value: "300+",
    label: "Active Members",
    description: "Contributing monthly to humanitarian causes",
  },
  {
    icon: Heart,
    value: "30",
    label: "Orphan Families",
    description: "Supported annually since 2010",
  },
  {
    icon: Home,
    value: "12",
    label: "Households Housed",
    description: "80 people sheltered in Moyale, Ethiopia",
  },
  {
    icon: HandHelping,
    value: "200",
    label: "IDP Women Helped",
    description: "With food and essential items",
  },
];

const stories = [
  {
    title: "From a Deserted Facility to a Home for Girls in Elwak",
    summary:
      "How the community donated land with a closed boys' orphanage, how Ibaadurahman secured permission, and how renovations began to convert it into a girls' home.",
  },
  {
    title: "Housing Hope: Supporting IDP Families in Moyale",
    summary:
      "The construction of houses for 12 IDP households and support offered to 200 IDP women in Moyale, Ethiopia.",
  },
  {
    title: "A Decade of Idd Support for Orphan Families",
    summary:
      "Food distribution to 30 orphan families during Idd celebrations since 2010, bringing joy and relief to the most vulnerable.",
  },
  {
    title: "Fundraising Drive for Ibaadurahman Children's Home",
    summary:
      "The fundraising goal of Ksh 100,000,000 and how people across the world can join future events to support the cause.",
  },
];

export default function ImpactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        tag="Our Impact"
        title="Why Girl Child Education Matters"
        description="Education is central to development and the improvement of a society's welfare, acting as a powerful equalizer and opening doors out of poverty."
      />

      {/* Why We Focus on Girls */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Focus
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Why We Focus on Girls
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Investing in girls&apos; education improves personal health and
                nutrition, reduces poverty and inequality, and supports
                long-term economic growth and social cohesion.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                In Mandera County, where no girls&apos; orphanages exist,
                investing in orphan and vulnerable girls&apos; education is both
                a moral responsibility and a strategic pathway to transform
                entire communities.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/hero-1.jpg"
                alt="Girls in education"
                width={600}
                height={450}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3 text-center">
            Benefits of Girls&apos; Education
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Research consistently shows that educating girls creates a ripple
            effect of positive outcomes across generations.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-3 text-center">
            Our Impact So Far
          </h2>
          <p className="text-center text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
            Through our interventions, we have supported displaced families,
            provided food assistance, and established the foundation of a
            dedicated girls&apos; orphanage.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 p-6 text-center"
              >
                <stat.icon className="h-8 w-8 text-primary-foreground mx-auto mb-3" />
                <p className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-primary-foreground">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-primary-foreground/60">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3 text-center">
            Stories of Change
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real stories from the communities we serve, showcasing the
            transformative power of compassion and collective action.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <div
                key={story.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/30"
              >
                <CheckCircle className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                  {story.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {story.summary}
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
              <Link href="/get-involved">
                Help Us Create More Impact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
