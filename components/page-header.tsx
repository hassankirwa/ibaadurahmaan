interface PageHeaderProps {
  tag: string;
  title: string;
  description: string;
}

export default function PageHeader({ tag, title, description }: PageHeaderProps) {
  return (
    <section className="relative bg-foreground pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(193_65%_52%/0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {tag}
        </span>
        <h1 className="mt-3 font-serif text-4xl font-bold text-card md:text-5xl text-balance">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-card/70 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
