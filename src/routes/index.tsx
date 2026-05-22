import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { History } from "@/components/site/History";
import { Founder } from "@/components/site/Founder";
import { Practice } from "@/components/site/Practice";
import { Team } from "@/components/site/Team";
import { Publications } from "@/components/site/Publications";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Guimarães Advogados — Direito Público, Privado e Digital" },
      {
        name: "description",
        content:
          "Escritório de advocacia com 14 anos de atuação estratégica em Direito Empresarial, Digital, LGPD, Público e Civil. Excelência acadêmica e atendimento individualizado.",
      },
      { property: "og:title", content: "Gabriel Guimarães Advogados" },
      {
        property: "og:description",
        content:
          "Atuação estratégica em Direito Público e Privado. Excelência acadêmica e inovação jurídica.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <History />
      <Founder />
      <Practice />
      <Team />
      <Publications />
      <Footer />
    </main>
  );
}
