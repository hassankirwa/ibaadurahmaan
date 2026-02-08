import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import {
  Heart,
  UserCheck,
  Briefcase,
  Handshake,
  Megaphone,
  CreditCard,
  Mail,
  Users,
  Globe,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved - Ibaadurahman CBO",
  description:
    "Donate, sponsor, partner or volunteer with Ibaadurahman to support orphaned girls, widows and vulnerable families.",
};

const waysToSupport = [
  {
    icon: Heart,
    title: "One-Time Donation",
    description:
      "Support urgent needs such as renovation, beds, bedding, and classroom equipment.",
  },
  {
    icon: CreditCard,
    title: "Monthly Contribution",
    description:
      "Help cover ongoing costs of food, healthcare, education and staff.",
  },
  {
    icon: UserCheck,
    title: "Sponsor an Orphan Girl",
    description:
      "Meet her shelter, food, clothing, education and healthcare needs.",
  },
  {
    icon: Briefcase,
    title: "Support Income Projects",
    description:
      "Fund specific income-generating projects like the bakery, poultry farm or greenhouse.",
  },
  {
    icon: Handshake,
    title: "Corporate Partnership",
    description:
      "Partner with us as a corporate, foundation, mosque, NGO or government agency.",
  },
  {
    icon: Users,
    title: "Volunteer Your Skills",
    description:
      "Contribute your expertise in fundraising, mentorship, training and advocacy.",
  },
];

const strategies = [
  {
    icon: Users,
    text: "Enrolling more members across different contribution tiers, each paying a one-off registration fee and a monthly contribution.",
  },
  {
    icon: UserCheck,
    text: '"Sponsor an orphan" initiatives targeting individuals and institutions.',
  },
  {
    icon: Globe,
    text: "Online fundraising through platforms such as GoFundMe and social media campaigns.",
  },
  {
    icon: Megaphone,
    text: "Engagement of key opinion leaders and mainstream media to amplify the cause.",
  },
  {
    icon: Landmark,
    text: "Fundraising dinners and events in Kenya and internationally (Europe, Canada, USA).",
  },
  {
    icon: Heart,
    text: "Appeals for Zakat and Sadaqa, and outreach to national and international donors, agencies and institutions.",
  },
];

export default function GetInvolvedPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        tag="Get Involved"
        title="Your Support Changes Lives"
        description="Every contribution, whether financial or through your time and skills, directly transforms the lives of vulnerable girls and women in Mandera County."
      />

      {/* Ways to Support */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3 text-center">
            Ways You Can Support
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose how you would like to make a difference in the lives of
            orphaned girls, widows, and vulnerable families.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {waysToSupport.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <item.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Campaign */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Active Campaign
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Fundraising for Ibaadurahman Children&apos;s Home
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Ibaadurahman is currently mobilizing resources to clear a Ksh
                5,000,000 debt incurred in constructing core facilities and to
                raise Ksh 100,000,000 for infrastructure, education, vocational
                programs and expansion of income-generating initiatives.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our members are already contributing monthly and organizing
                fundraising events, but we need partners and donors to reach
                this goal. Your contribution will help provide a safe, nurturing
                home for orphan girls, enhance education and skills training,
                and create sustainable livelihoods for widows and youth.
              </p>

              {/* Progress bar */}
              <div className="mt-8 rounded-xl bg-card border border-border p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">
                    Overall Goal
                  </span>
                  <span className="text-sm font-bold text-primary">
                    Ksh 100,000,000
                  </span>
                </div>
                <div className="h-4 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full bg-primary w-[1%]" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Help us reach our goal to transform the lives of hundreds of
                  girls and women
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/hero-1.jpg"
                alt="Girls studying"
                width={600}
                height={450}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Mobilization */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3 text-center">
            Resource Mobilization Strategy
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            To bridge funding gaps, Ibaadurahman employs a comprehensive
            resource mobilization strategy.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {strategies.map((strategy) => (
              <div
                key={strategy.text}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <strategy.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {strategy.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <Mail className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80 mb-8">
            Please contact us at{" "}
            <a
              href="mailto:info@ibaadurrahmancbo.or.ke"
              className="underline font-semibold text-primary-foreground"
            >
              info@ibaadurrahmancbo.or.ke
            </a>{" "}
            for donation options, including bank transfers, mobile money and
            international giving.
          </p>
          <a
            href="tel:+254758904885"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Call +254 758 904 885
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
