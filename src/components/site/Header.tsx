import { useEffect, useState, useRef } from "react";
import { Scale, Menu, X } from "lucide-react";

const links = [
  { href: "#historia", label: "História" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#equipe", label: "Equipe" },
  { href: "#publicacoes", label: "Publicações" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const tops = [document.querySelector("#top")];

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(`#${id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    [...tops, ...sections].forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const target = el.getBoundingClientRect().top + window.scrollY - offset;
      const start = window.scrollY;
      const distance = target - start;
      const duration = 1000; // 1 segundo para scroll mais controlado
      let start_time: number | null = null;

      const scroll = (timestamp: number) => {
        if (!start_time) start_time = timestamp;
        const elapsed = timestamp - start_time;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_20px_-4px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-3 group"
        >
          <div
            className={`flex items-center justify-center h-9 w-9 rounded-sm transition-colors duration-300 ${
              scrolled ? "bg-navy" : "bg-navy/90"
            }`}
          >
            <Scale className="h-[18px] w-[18px] text-gold" strokeWidth={1.5} />
          </div>
          <div className="leading-tight">
            <div
              className={`font-serif text-base font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-navy" : "text-navy"
              }`}
            >
              Gabriel Guimarães
            </div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
              Advogados
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-navy"
                    : "text-foreground/60 hover:text-navy"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gold/10" />
                )}
                <span className="relative z-10">{l.label}</span>
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[2px] bg-gold rounded-full transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="#contato"
          onClick={(e) => handleNavClick(e, "#contato")}
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-[13px] font-semibold text-gold-foreground hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 hover:scale-105"
        >
          Fale Conosco
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-navy transition-colors hover:bg-muted"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="container-x py-5 flex flex-col gap-1">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`relative py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-navy bg-gold/10"
                      : "text-foreground/70 hover:text-navy hover:bg-muted/50"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:bg-gold/90 transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
