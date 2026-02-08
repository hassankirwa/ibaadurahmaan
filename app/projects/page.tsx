import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Circle,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects - Ibaadurahman CBO",
  description:
    "Explore our flagship Elwak Girls' Orphanage project, completed projects, and future plans.",
};

const budgetItems = [
  { label: "Renovation of the facility", amount: "Ksh 1,500,000" },
  { label: "Full bakery equipment", amount: "Ksh 4,000,000" },
  { label: "Poultry farm equipment and chicks", amount: "Ksh 1,000,000" },
  { label: "Greenhouse", amount: "Ksh 200,000" },
  { label: "Assorted seedlings", amount: "Ksh 100,000" },
  { label: "Beds and bedding", amount: "Ksh 200,000" },
];

const fundraisingBreakdown = [
  { label: "Debt repayment", amount: "Ksh 5,000,000" },
  {
    label: "Infrastructure and facility improvement",
    amount: "Ksh 30,000,000",
  },
  {
    label: "Educational and vocational programs",
    amount: "Ksh 40,000,000",
  },
  {
    label: "Expansion of poultry, baking, greenhouses & microfinance",
    amount: "Ksh 25,000,000",
  },
];

const completedProjects = [
  {
    title: "Housing for IDPs in Moyale, Ethiopia",
    description:
      "Constructed houses for 12 households, benefiting about 80 people affected by inter-clan clashes.",
  },
  {
    title: "IDP Women Support in Moyale, Ethiopia",
    description:
      "Supported 200 internally displaced women with food and non-food items to stabilize their livelihoods.",
  },
  {
    title: "Orphan Family Support During Idd",
    description:
      "Provided food support to about 30 orphan families in Mandera County during Idd ul-Fitr and Idd ul-Adha every year since 2010.",
  },
  {
    title: "Takeover of Elwak Orphanage Facility",
    description:
      "Successfully took over a previously deserted public boys' orphanage facility in Elwak and prepared it for conversion into a girls' orphanage.",
  },
];

const proposedProjects = [
  "Establish fully operational girls' orphanages in all seven sub-counties of Mandera County.",
  "Construct and operate a model girls' orphanage and school complex in Mandera South.",
  "Provide sanitary pads to all adolescent school girls in Mandera County.",
  "Construct water wells and reservoirs for poor households in Mandera County and Elwak.",
  "Scale up bakery, poultry and greenhouse projects to employ more widows and sustain the orphanage.",
  "Expand microfinance and entrepreneurship training to more women and youth.",
];

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        tag="Our Projects"
        title="Making a Real Difference"
        description="From our flagship Elwak orphanage to humanitarian aid across the region, see how we are transforming lives."
      />

      {/* Flagship Project */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/elwak-project.jpg"
                alt="Elwak Girls' Orphanage and Children's Home"
                width={700}
                height={500}
                className="w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  Flagship Project
                </span>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Elwak Girls&apos; Orphanage & Children&apos;s Home
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                We have taken over a disused boys&apos; orphanage in Elwak,
                Mandera South, and are renovating it into a fully functional
                girls&apos; orphanage and children&apos;s home. The facility
                currently consists of three dormitories, a kitchen, four toilets
                and a spacious compound.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Our plan is to refurbish the buildings, construct a girls&apos;
                mosque within the compound and fully furnish the dormitories to
                accommodate about 100 girls per dormitory. The center will
                include classrooms and a dining hall, integrated with women and
                youth empowerment projects for long-term sustainability.
              </p>

              {/* Budget */}
              <div className="rounded-xl border border-border bg-secondary p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Project Budget Summary
                </h3>
                <div className="flex flex-col gap-2">
                  {budgetItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="font-semibold text-foreground">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                  <div className="mt-2 border-t border-border pt-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-foreground">
                      Total Cost
                    </span>
                    <span className="font-bold text-primary">
                      Ksh 7,000,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Cash at hand</span>
                    <span className="font-semibold text-emerald-600">
                      Ksh 1,000,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-foreground">
                      Budget gap
                    </span>
                    <span className="font-bold text-destructive">
                      Ksh 6,000,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Fundraising & Expansion Plan
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                The organization seeks to raise a total of{" "}
                <strong className="text-foreground">Ksh 100,000,000</strong> to
                finalize infrastructure, strengthen educational and vocational
                programs and expand income-generating initiatives.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {fundraisingBreakdown.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="text-sm text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-2xl font-bold text-primary font-serif">
                  {item.amount}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10"
            >
              <Link href="/get-involved">
                Support Our Goal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Completed Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {completedProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposed Projects */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Proposed Projects
          </h2>
          <div className="flex flex-col gap-4">
            {proposedProjects.map((project, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <Circle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
