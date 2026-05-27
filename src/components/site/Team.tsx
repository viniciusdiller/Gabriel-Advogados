const team = [
  {
    name: "Dra. Renata Sousa",
    role: "Especialista em Direito Civil e Tribunais",
    initials: "RS",
  },
  {
    name: "Heloísa Braga",
    role: "Gestão Pública e Privada",
    initials: "HB",
  },
  {
    name: "Guilherme Coutinho",
    role: "Pesquisa Jurídica",
    initials: "GC",
  },
  {
    name: "Gabriela Alvarenga",
    role: "Marketing e Conteúdo",
    initials: "GA",
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-32 bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.72_0.11_80/0.08),_transparent_70%)]" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold/90">
              Nossa Equipe
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
            Profissionais que pensam, pesquisam e atuam.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, idx) => (
            <article
              key={m.name}
              className="group text-center p-8 border border-navy-foreground/15 rounded-sm hover:border-gold/50 hover:bg-navy-foreground/5 transition-all hover:shadow-[0_20px_50px_-25px_oklch(0.72_0.11_80/0.5)] animate-fade-in"
              style={{animationDelay: `${idx * 0.15}s`}}
            >
              <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-gold/25 to-gold/10 border-2 border-gold/40 flex items-center justify-center font-serif text-3xl text-gold group-hover:scale-110 group-hover:from-gold/40 group-hover:to-gold/20 group-hover:border-gold/60 transition-all group-hover:shadow-[0_15px_40px_-10px_oklch(0.72_0.11_80/0.4)]">
                {m.initials}
              </div>
              <h3 className="mt-6 font-serif text-xl group-hover:text-gold transition-colors">{m.name}</h3>
              <p className="mt-2 text-sm text-navy-foreground/50 group-hover:text-navy-foreground/70 transition-colors">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
