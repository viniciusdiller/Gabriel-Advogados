import { useState, type FormEvent } from "react";
import { Mail, Phone, Instagram, Facebook, Scale, MapPin } from "lucide-react";

export function Footer() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer id="contato" className="bg-navy text-navy-foreground">
      <div className="container-x py-24">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/90">
                Fale Conosco
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
              Vamos conversar sobre <br />
              o seu caso.
            </h2>
            <p className="mt-6 text-navy-foreground/70 max-w-md leading-relaxed">
              Atendimento individualizado, com sigilo e estratégia desde o
              primeiro contato. Retornamos em até um dia útil.
            </p>

            <form onSubmit={onSubmit} className="mt-10 space-y-5 max-w-lg">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  required
                  placeholder="Seu nome"
                  className="w-full bg-transparent border-b border-navy-foreground/25 py-3 px-1 text-sm placeholder:text-navy-foreground/45 focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full bg-transparent border-b border-navy-foreground/25 py-3 px-1 text-sm placeholder:text-navy-foreground/45 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Conte-nos brevemente como podemos ajudar"
                className="w-full bg-transparent border-b border-navy-foreground/25 py-3 px-1 text-sm placeholder:text-navy-foreground/45 focus:outline-none focus:border-gold transition-colors resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground hover:bg-gold/90 transition-colors"
              >
                {sent ? "Mensagem enviada ✓" : "Enviar mensagem"}
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 lg:pl-12 lg:border-l border-navy-foreground/10">
            <h3 className="font-serif text-xl mb-8 text-gold">
              Canais Diretos
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-gold mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/55">
                    E-mail
                  </p>
                  <a
                    href="mailto:contato@gabrielguimaraes.adv.br"
                    className="text-base hover:text-gold transition-colors"
                  >
                    contato@gabrielguimaraes.adv.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-gold mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/55">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5521997090424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-gold transition-colors"
                  >
                    +55 21 99709-0424
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/55">
                    Atendimento
                  </p>
                  <p className="text-base">Rio de Janeiro · Presencial e remoto</p>
                </div>
              </li>
            </ul>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-wider text-navy-foreground/55 mb-4">
                Acompanhe
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy-foreground/20 hover:border-gold hover:text-gold transition-colors"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy-foreground/20 hover:border-gold hover:text-gold transition-colors"
                >
                  <Facebook className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-navy-foreground/60 text-sm">
            <Scale className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <span>Gabriel Guimarães Advogados</span>
          </div>
          <p className="text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} Gabriel Guimarães Advogados. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
