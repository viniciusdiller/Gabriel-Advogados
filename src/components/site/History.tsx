export function History() {
  return (
    <section id="historia" className="py-32 bg-background">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Nossa História
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy leading-tight">
            Justiça com propósito, estratégia com visão.
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80 animate-fade-in" style={{animationDelay: '0.1s'}}>
          <p>
            Fundado sobre o tripé da <span className="text-navy font-medium">excelência acadêmica</span>,
            inovação tecnológica e atendimento humanizado, o escritório
            Gabriel Guimarães Advogados nasceu para oferecer mais do que
            soluções jurídicas: oferecemos clareza, antecipação e direção.
          </p>
          <p>
            Acreditamos que advogar é, sobretudo, prevenir. Por isso,
            trabalhamos lado a lado com empreendedores, gestores e famílias
            buscando não apenas o êxito judicial, mas a{" "}
            <span className="text-navy font-medium">
              prevenção de riscos e a geração sustentável de riqueza
            </span>{" "}
            — sempre alinhados ao verdadeiro propósito da justiça.
          </p>
          <blockquote className="mt-8 border-l-4 border-gold pl-6 italic font-serif text-2xl text-navy">
            "A boa advocacia não começa no tribunal — começa na decisão que
            evitou o conflito."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
