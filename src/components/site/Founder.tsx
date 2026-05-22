import founder from "@/assets/founder.jpg";
import { GraduationCap, BookOpen, Microscope } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Doutor & Mestre em Ciência Política",
    sub: "Universidade Federal Fluminense (UFF)",
  },
  {
    icon: BookOpen,
    title: "Professor de Graduação e Pós-graduação",
    sub: "Direito Empresarial e Contratos",
  },
  {
    icon: Microscope,
    title: "Coordenador de Pesquisa",
    sub: "Direito e Política no Mundo Digital",
  },
];

export function Founder() {
  return (
    <section className="py-28 bg-secondary">
      <div className="container-x grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -top-4 -left-4 h-full w-full border border-gold/60 rounded-sm hidden md:block" />
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={founder}
              alt="Prof. Dr. Gabriel Siggelkow Guimarães"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-[560px] object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              O Fundador
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy leading-tight">
            Prof. Dr. Gabriel <br /> Siggelkow Guimarães
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-xl">
            Advogado, pesquisador e professor com sólida formação acadêmica e
            atuação destacada nas interseções entre direito, tecnologia e
            política pública. Lidera o escritório com a convicção de que o
            conhecimento aprofundado é o melhor instrumento de defesa.
          </p>

          <ul className="mt-10 space-y-5">
            {credentials.map(({ icon: Icon, title, sub }) => (
              <li key={title} className="flex gap-4 items-start">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-navy text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-medium text-navy">{title}</p>
                  <p className="text-sm text-muted-foreground">{sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
