import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Component, ShieldCheck } from "lucide-react";
import { brandSections } from "@/lib/brandbook";

export default function BrandbookHome() {
  return (
    <main className="brandbook-page">
      <section className="brandbook-hero">
        <div>
          <span className="brand-kicker">Dr. Pitágoras Brandbook 2026</span>
          <h1>Receita Certa para transformar esperança em realidade política.</h1>
          <p>Fonte única para marca, narrativa, componentes, liderança e substância documentada do movimento.</p>
          <div className="brandbook-actions">
            <Link href="/app/marca/diretorio" className="primary-button">Explorar diretório <ArrowRight size={16} /></Link>
            <Link href="/app/marca/manifesto" className="secondary-button">Abrir manifesto</Link>
          </div>
        </div>
        <div className="brandbook-logo-card">
          <Image src="/logo_pitagoras_branco.png" alt="Dr. Pitagoras" width={260} height={50} priority unoptimized />
          <span>Novo movimento, nova narrativa</span>
        </div>
      </section>

      <section className="brandbook-principles">
        {[
          [ShieldCheck, "Prova antes de promessa", "Toda afirmação pública nasce com fonte, contexto e responsável."],
          [Component, "Produto e marca juntos", "Painel, área do líder e documentação usam o mesmo sistema visual."],
          [BookOpenText, "Brandbook navegável", "15 pilares com capítulos, diretório, assets e exemplos de aplicação."],
        ].map(([Icon, title, text]) => {
          const ItemIcon = Icon as typeof ShieldCheck;
          return (
            <article key={String(title)} className="panel brandbook-principle">
              <ItemIcon size={22} />
              <h2>{String(title)}</h2>
              <p>{String(text)}</p>
            </article>
          );
        })}
      </section>

      <section className="brandbook-section-list">
        <div className="brandbook-section-heading">
          <div>
            <span className="brand-kicker">15 pilares estruturados</span>
            <h2>Tokens, componentes, voz, narrativa e substância política.</h2>
          </div>
          <Link href="/app/marca/diretorio">Ver todos</Link>
        </div>
        <div className="brandbook-card-grid">
          {brandSections.map((section, index) => (
            <Link key={section.slug} href={`/app/marca/${section.slug}`} className="brandbook-card">
              <div>
                <span>{String(index + 1).padStart(2, "0")} / {section.group}</span>
                <section.icon size={19} />
              </div>
              <h3>{section.shortTitle}</h3>
              <p>{section.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
