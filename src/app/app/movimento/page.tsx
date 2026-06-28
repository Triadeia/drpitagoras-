import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpenText, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Movimento Receita Certa | Dr. Pitagoras",
  description: "Hub público e estratégico do movimento Receita Certa: manifesto, antes/depois, provas e participação.",
};

const movementLinks = [
  {
    href: "/app/movimento/antes-depois",
    icon: BadgeCheck,
    label: "Antes e depois",
    text: "Comparativos visuais de Candeias: prova antes de promessa.",
  },
  {
    href: "/app/marca/documentos/doc-001",
    icon: BookOpenText,
    label: "Manifesto de origem",
    text: "De uma nova Candeias para uma nova Bahia.",
  },
  {
    href: "/app/marca/documentos/doc-003",
    icon: ShieldCheck,
    label: "Receita Certa",
    text: "Diagnóstico, plano, execução e resultado mensurável.",
  },
  {
    href: "https://wa.me/5571997238027?text=Vim%20do%20site",
    icon: MessageCircle,
    label: "Entrar no WhatsApp",
    text: "Assinar o movimento e falar com a equipe.",
  },
];

export default function MovimentoHubPage() {
  return (
    <main className="brandbook-page">
      <section className="brandbook-section-hero">
        <span className="brand-kicker">Movimento Receita Certa</span>
        <h1>Prova, método e participação.</h1>
        <p>
          Esta área organiza a narrativa pública do movimento sem substituir o painel de gestão.
          O eleitor vê provas; a equipe opera pelo painel.
        </p>
      </section>

      <section className="brandbook-section-list">
        <div className="brandbook-card-grid">
          {movementLinks.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="brandbook-card"
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                <div>
                  <span>MOVIMENTO / Receita Certa</span>
                  <item.icon size={19} />
                </div>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
                <footer>
                  <span>Abrir</span>
                  <ArrowRight size={15} />
                </footer>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
