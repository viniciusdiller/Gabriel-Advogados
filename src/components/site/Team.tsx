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
    <section id="equipe" className="py-28 bg-navy text-navy-foreground">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
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
          {team.map((m) => (
            <article
              key={m.name}
              className="group text-center p-8 border border-navy-foreground/10 rounded-sm hover:border-gold/60 transition-colors"
            >
              <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center font-serif text-3xl text-gold group-hover:scale-105 transition-transform">
                {m.initials}
              </div>
              <h3 className="mt-6 font-serif text-xl">{m.name}</h3>
              <p className="mt-2 text-sm text-navy-foreground/60">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
