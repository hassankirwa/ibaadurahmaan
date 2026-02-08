import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import {
  Eye,
  Target,
  Shield,
  CheckCircle,
  MapPin,
  Users,
  Scale,
  Sparkles,
  Ban,
  UserCheck,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Ibaadurahman CBO",
  description:
    "Learn about Ibaadurahman Community Based Organization, our mission, vision, values, and governance structure.",
};

const values = [
  {
    icon: Shield,
    text: "No child should be without the basic necessities of life regardless of their life circumstances.",
  },
  { icon: Eye, text: "Transparency" },
  { icon: Scale, text: "Neutrality" },
  { icon: Sparkles, text: "Independence" },
  { icon: CheckCircle, text: "Professionalism" },
  { icon: Ban, text: "Non-discrimination" },
  {
    icon: UserCheck,
    text: "Free and direct access to girls and women",
  },
];

const objectives = [
  "Provide a protective environment for orphaned and vulnerable girls and women so that they develop to their full potential and live with dignity.",
  "Establish girls' orphanages in all the seven sub-counties of Mandera County, starting with Elwak in Mandera South.",
  "Establish and manage girls' schools within the orphanages, promoting both Islamic and secular education.",
  "Work with vulnerable girls and women for their economic and social development and provide mental and psychosocial care.",
  "Provide legal aid and support to victims of abuse, exploitation and trafficking, and help them access justice.",
  "Advocate for the rights of girls and women, and strengthen child protection systems with county and national governments.",
  "Provide affordable basic healthcare and sanitary pads to vulnerable girls and women.",
  "Provide clean and reliable water supply to poor and vulnerable households.",
  "Train women in entrepreneurship and vocational skills, and support them with microfinance to start and grow businesses.",
  "Source funds from donors, well-wishers and partners to sustain and expand programs.",
];

const challenges = [
  "Limited access to both secular and Islamic education",
  "Child labor, neglect and trafficking",
  "Gender-based violence, including rape and exploitation",
  "Early marriage, female genital mutilation and high maternal mortality",
  "Poverty, poor nutrition, limited access to water, hygiene and health care",
  "Risk of prostitution, drug abuse and discriminatory customary laws",
];

const subCounties = [
  "Mandera East",
  "Mandera North",
  "Mandera South",
  "Mandera West",
  "Banisa",
  "Kutulo",
  "Lafey",
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        tag="Who We Are"
        title="About Ibaadurahman"
        description="A community-based organization founded by like-minded Muslim women to support orphans, widows, and the most vulnerable people in Mandera County, Kenya."
      />

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <div className="prose max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Ibaadurahman Community Based Organization is a registered CBO
              based in Mandera County, Kenya. The organization began as an
              informal initiative in April 2010 when a group of charitable
              Muslim women came together to provide food to thirty orphan
              families during Idd ul-Fitr and Idd ul-Adha.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              In May 2020, the initiative was formally registered as a community
              based organization to expand support to orphans, widows, and
              vulnerable families and to help them become self-sufficient
              members of society. Today, Ibaadurahman has approximately 300
              registered members who voluntarily contribute funds every month
              for humanitarian causes.
            </p>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Our Context &mdash; Mandera County
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            Mandera County&apos;s economy is predominantly pastoralist, with
            livestock contributing about 72 percent of household income. The
            county has seven sub-counties. Historically, Mandera has been
            affected by marginalization, recurrent inter-clan clashes and
            natural disasters, leading to loss of life and leaving many orphans
            and widows. While boys&apos; orphanages exist, there has not been a
            single girls&apos; orphanage in all the sub-counties, making the
            girl child particularly vulnerable, neglected and disadvantaged.
          </p>

          <h3 className="font-serif text-xl font-bold text-foreground mb-4">
            Key Challenges Facing Girls
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {challenges.map((challenge) => (
              <div
                key={challenge}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <div className="h-2 w-2 rounded-full bg-destructive" />
                </div>
                <p className="text-sm text-muted-foreground">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* Vision */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                We value our orphans and are committed to treating them with
                dignity and respect.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Helping orphans, widows and vulnerable members of our society to
                live in comfortable and improved livelihoods.
              </p>
            </div>
          </div>

          {/* Values */}
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
            Our Core Values
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.text}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Our Objectives
          </h2>
          <div className="flex flex-col gap-4">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Governance & Structure
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 mb-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Ibaadurahman is governed by a Board of Directors consisting of 15
              members who provide strategic leadership and oversight across all
              programs. The Board appoints project steering committees and
              project managers, sets organizational goals and objectives, and
              ensures necessary resources and stakeholder engagement.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Steering committees demonstrate senior-level commitment, allocate
              resources, resolve escalated risks and support project managers to
              achieve agreed results. Project managers monitor progress, manage
              resources, control risks and scope, and maintain effective
              communication with all stakeholders.
            </p>
          </div>

          {/* Accountability */}
          <h3 className="font-serif text-xl font-bold text-foreground mb-4">
            Accountability & Transparency
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            We uphold transparency, professionalism and non-discrimination as
            core organizational values. Members contribute monthly and receive
            regular updates on projects and financial utilization through
            meetings and reports. We also work closely with government and
            development partners to align our interventions with local
            priorities.
          </p>

          {/* Areas of Operation */}
          <h3 className="font-serif text-xl font-bold text-foreground mb-4">
            Areas of Operation
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-4">
            Our primary area of operation is Mandera County, Kenya, across its
            seven sub-counties. We also implement cross-border humanitarian
            support where needed, as demonstrated by housing support and aid to
            internally displaced families in Moyale, Ethiopia.
          </p>
          <div className="flex flex-wrap gap-3">
            {subCounties.map((county) => (
              <span
                key={county}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                <MapPin className="h-3 w-3" />
                {county}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
