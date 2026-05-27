import {
  Building2,
  ShieldCheck,
  Lightbulb,
  Landmark,
  Users2,
  Gavel,
  ArrowUpRight,
} from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Direito Empresarial & Startups",
    desc: "Estruturação societária, contratos e suporte jurídico para inovação e novos negócios.",
  },
  {
    icon: ShieldCheck,
    title: "Direito Digital & LGPD",
    desc: "Marco Civil da Internet, proteção de dados, compliance e governança digital.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Preventiva",
    desc: "Antecipação de riscos jurídicos e desenho de estratégias para decisões seguras.",
  },
  {
    icon: Landmark,
    title: "Direito Público & Administrativo",
    desc: "Licitações, contratos administrativos, improbidade e relações com o poder público.",
  },
  {
    icon: Users2,
    title: "Civil, Família e Sucessões",
    desc: "Planejamento patrimonial, sucessório e mediação de conflitos familiares.",
  },
  {
    icon: Gavel,
    title: "Contencioso & Resolução de Conflitos",
    desc: "Litígios estratégicos, arbitragem e mediação com foco em resultado.",
  },
];

export function Practice() {
  return (
    <section id="atuacao" className="py-28 bg-background">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Áreas de Atuação
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy leading-tight">
            Soluções jurídicas de alta complexidade,
            <em className="not-italic text-gold"> com olhar estratégico</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {areas.map(({ icon: Icon, title, desc }, idx) => (
            <article
              key={title}
              className="group relative bg-background p-10 transition-all hover:bg-navy hover:text-navy-foreground hover:shadow-[0_20px_50px_-25px_oklch(0.22_0.05_255/0.3)] animate-fade-in"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-navy group-hover:bg-gold group-hover:text-gold-foreground transition-all group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all -translate-x-2 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="font-serif text-2xl mb-3 leading-snug">{title}</h3>
              <p className="text-sm leading-relaxed text-foreground/65 group-hover:text-navy-foreground/70 transition-colors">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
