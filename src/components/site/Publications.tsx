import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    tag: "Direito Digital",
    date: "Maio · 2026",
    title: "A Inteligência Artificial (IA) e a Justiça do Trabalho",
    excerpt:
      "Como a adoção de modelos de IA pela Justiça redefine o devido processo legal e a função jurisdicional.",
  },
  {
    tag: "LGPD",
    date: "Abril · 2026",
    title: "LGPD no Agronegócio: Avanços e Desafios",
    excerpt:
      "A maturidade do tratamento de dados no campo e os desafios regulatórios para uma cadeia produtiva conectada.",
  },
  {
    tag: "Privacidade",
    date: "Março · 2026",
    title: "Meta AI no WhatsApp: O Impacto à luz da Privacidade",
    excerpt:
      "Uma análise crítica sobre limites, consentimento e proteção de dados pessoais em assistentes de IA integrados.",
  },
];

export function Publications() {
  return (
    <section id="publicacoes" className="py-28 bg-secondary">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Publicações & Pesquisa
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy leading-tight">
              Produção autoral que constrói autoridade.
            </h2>
          </div>
          <a
            href="#contato"
            className="text-sm font-medium text-navy hover:text-gold inline-flex items-center gap-2"
          >
            Ver todas as publicações <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, idx) => (
            <article
              key={a.title}
              className="group bg-background border border-border rounded-sm p-8 flex flex-col hover:border-gold/60 hover:shadow-[0_20px_50px_-25px_oklch(0.22_0.05_255/0.35)] hover:bg-navy/2 transition-all animate-fade-in"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                <span className="text-gold font-medium">{a.tag}</span>
                <span className="h-px w-6 bg-border" />
                <span>{a.date}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy leading-snug group-hover:text-gold transition-all group-hover:translate-x-1">
                {a.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70 flex-1">
                {a.excerpt}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-gold">
                Ler artigo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
