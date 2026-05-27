import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy text-navy-foreground"
    >
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.11_80/0.18),_transparent_55%)]" />

      <div className="container-x relative pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold/90">
              Advocacia · Desde 2010
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
            Atuação <em className="not-italic text-gold">estratégica</em> em
            <br className="hidden sm:block" /> Direito Público e Privado.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-navy-foreground/75 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            14 anos de experiência unindo excelência acadêmica, inovação digital
            e atendimento individualizado na defesa dos seus direitos.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a
              href="https://wa.me/5521997090424"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-gold-foreground hover:bg-gold/90 shadow-[0_10px_40px_-10px_oklch(0.72_0.11_80/0.6)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_60px_-5px_oklch(0.72_0.11_80/0.8)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar Consultoria
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#atuacao"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-navy-foreground/25 px-7 py-4 text-sm font-medium text-navy-foreground hover:border-gold hover:text-gold hover:bg-navy/40 transition-all"
            >
              Conhecer áreas de atuação
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl border-t border-navy-foreground/15 pt-10 animate-fade-in" style={{animationDelay: '0.5s'}}>
            {[
              ["14+", "Anos de atuação"],
              ["Dr.", "Doutor em Ciência Política"],
              ["UFF", "Formação acadêmica"],
              ["6", "Áreas estratégicas"],
            ].map(([k, v], i) => (
              <div key={v} className="animate-fade-in" style={{animationDelay: `${0.5 + i * 0.1}s`}}>
                <dt className="font-serif text-3xl text-gold">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-navy-foreground/60">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
