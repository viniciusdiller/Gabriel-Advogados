import { useState, type FormEvent } from "react";
import { Mail, Phone, Instagram, Facebook, Scale, MapPin } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.936L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer id="contato" className="bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.11_80/0.12),_transparent_60%)]" />
      <div className="container-x py-28 relative">
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
                <a
                  href="https://wa.me/5521997090424"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy-foreground/20 hover:border-gold hover:text-gold transition-colors"
                >
                  <WhatsAppIcon className="h-5 w-5" />
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
