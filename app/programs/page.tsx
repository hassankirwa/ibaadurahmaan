import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import {
  GraduationCap,
  Briefcase,
  HeartPulse,
  Droplets,
  Users,
  Home,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs - Ibaadurahman CBO",
  description:
    "Discover our programs in education, women empowerment, health, water, youth development, humanitarian aid, and advocacy.",
};

const programs = [
  {
    icon: GraduationCap,
    title: "Orphan Girls' Protection & Education",
    description:
      "We operate and plan girls' orphanages that provide safe shelter, food, clothing, and holistic care to orphaned and vulnerable girls. Our education model prioritizes Quran memorization for newly admitted girls aged approximately 6-8 years, followed by formal secular schooling in nearby or partner schools. Each child receives psychosocial support, religious guidance, life skills training and mentoring to build confidence and resilience. We also offer scholarships and support for girls staying with their families to ensure they remain in school and pursue their dreams.",
    color: "bg-primary/10 text-primary",
    borderColor: "border-primary/20",
  },
  {
    icon: Briefcase,
    title: "Women Empowerment & Livelihoods",
    description:
      "Our women and youth empowerment program works with widows and vulnerable youth to make families economically self-reliant. We plan and implement income-generating projects including a bakery project to provide jobs for widows and generate income to sustain the orphanage's running costs, a poultry farm to supply Mandera South constituency and beyond, and greenhouse farming to supply vegetables for the center and the wider community. We complement these with microfinance support, entrepreneurship training and skills development for women and youth.",
    color: "bg-accent/10 text-accent",
    borderColor: "border-accent/20",
  },
  {
    icon: HeartPulse,
    title: "Health, Hygiene & Sanitation",
    description:
      "We work to provide vulnerable girls and women with affordable basic healthcare, menstrual hygiene products and improved sanitation. Our planned initiatives include provision of sanitary pads to all adolescent school girls in Mandera County to improve their attendance and performance in education. We also intend to support access to clean water through the construction of water wells and reservoirs for poor households in Mandera County and Elwak municipality.",
    color: "bg-rose-100 text-rose-600",
    borderColor: "border-rose-200",
  },
  {
    icon: Droplets,
    title: "Water & Environmental Protection",
    description:
      "Ibaadurahman integrates environmental protection with service delivery through tree planting and responsible resource management where possible. Our water projects aim to provide clean and reliable water sources for vulnerable households, reducing the burden on women and girls who often walk long distances to fetch water.",
    color: "bg-emerald-100 text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description:
      "We engage youth through entrepreneurship training, vocational skills programs and life skills development. By working with local polytechnics and training centers, we help young people gain marketable skills that reduce vulnerability to crime, substance abuse and radicalization.",
    color: "bg-indigo-100 text-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    icon: Home,
    title: "IDP Support & Humanitarian Aid",
    description:
      "We have constructed houses for 12 households totaling 80 people affected by inter-clan clashes in Moyale town, Ethiopia. We have also supported 200 internally displaced women in Moyale with food and non-food items to stabilize their families. Our humanitarian support continues to respond to emerging crises affecting women and children in our operational areas.",
    color: "bg-amber-100 text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    icon: Scale,
    title: "Advocacy & Child Protection",
    description:
      "We advocate for the rights of the girl child and women by engaging communities, schools, religious leaders and government institutions. Our work includes awareness campaigns on prevention of girl child abuse and exploitation, training on self-protection for school-going girls and capacity building for stakeholders who handle child protection cases. We coordinate with county and national government agencies to strengthen the child protection system.",
    color: "bg-primary/10 text-primary",
    borderColor: "border-primary/20",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        tag="Our Programs"
        title="What We Do"
        description="Our programs are designed to protect orphaned girls, uplift widows, and strengthen vulnerable families through education, shelter, health, and economic empowerment."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="flex flex-col gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`rounded-2xl border bg-card p-8 md:p-10 transition-shadow hover:shadow-lg ${program.borderColor}`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${program.color}`}
                  >
                    <program.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/5 text-xs font-bold text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
