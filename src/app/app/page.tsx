import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpenCheck, LayoutDashboard, Megaphone, UserPlus } from "lucide-react";

export const metadata: Metadata = {
  title: "App Receita Certa | Dr. Pitagoras",
  description: "Hub de navegação para painel, movimento, obras, brandbook e operação política do Dr. Pitagoras.",
};

const appLinks = [
  {
    href: "/painel",
    icon: LayoutDashboard,
    label: "Painel de gestão política",
    text: "Comando completo de campanha, território, provas, conteúdo e inteligência.",
  },
  {
    href: "/painel/apoiadores",
    icon: UserPlus,
    label: "Apoiadores e lideranças",
    text: "Cadastro operacional de lideranças, apoiadores e check-ins de campo.",
  },
  {
    href: "/app/movimento",
    icon: Megaphone,
    label: "Movimento",
    text: "Tese, narrativa, antes/depois e caminhos públicos da Receita Certa.",
  },
  {
    href: "/obras",
    icon: BadgeCheck,
    label: "Obras e antes/depois",
    text: "Experiência pública focada em prova visual, comparativos e conversão.",
  },
  {
    href: "/app/marca",
    icon: BookOpenCheck,
    label: "Brandbook",
    text: "Documentos, paleta, voz, componentes e doutrinas do movimento.",
  },
];

export default function AppHubPage() {
  return (
    <main className="brandbook-page">
      <section className="brandbook-section-hero">
        <span className="brand-kicker">Receita Certa / App</span>
        <h1>O sistema do movimento em um só lugar.</h1>
        <p>
          Volte para o painel de gestão política, consulte a área de movimento, abra as provas de Candeias
          ou navegue pelo brandbook sem misturar operação com landing page.
        </p>
      </section>

      <section className="brandbook-section-list">
        <div className="brandbook-card-grid">
          {appLinks.map((item) => (
            <Link key={item.href} href={item.href} className="brandbook-card">
              <div>
                <span>APP / Receita Certa</span>
                <item.icon size={19} />
              </div>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
              <footer>
                <span>Abrir</span>
                <ArrowRight size={15} />
              </footer>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
