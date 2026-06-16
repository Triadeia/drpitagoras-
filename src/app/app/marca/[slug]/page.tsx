import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldAlert } from "lucide-react";
import { notFound } from "next/navigation";
import { BrandSpecimens } from "@/components/brandbook-specimens";
import { brandSections, getBrandSection } from "@/lib/brandbook";

export function generateStaticParams() {
  return brandSections.map((section) => ({ slug: section.slug }));
}

export default async function BrandSectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = getBrandSection(slug);
  if (!section) notFound();

  const currentIndex = brandSections.findIndex((item) => item.slug === section.slug);
  const previous = brandSections[currentIndex - 1];
  const next = brandSections[currentIndex + 1];

  return (
    <main className="brandbook-page">
      <Link href="/app/marca" className="brand-back"><ArrowLeft size={16} /> Voltar ao brandbook</Link>
      <article>
        <header className="brandbook-section-hero">
          <span className="brand-kicker">{section.group} / {section.shortTitle}</span>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
        </header>

        <div className="brandbook-reading-layout">
          <div className="brandbook-reading">
            {section.slug === "manifesto" ? (
              <section className="brand-manifesto-card">
                <blockquote>A Bahia é de quem constrói o interior.</blockquote>
                <p>Não é slogan vazio. É uma regra de comunicação: toda esperança precisa aparecer acompanhada de obra, método e prova.</p>
              </section>
            ) : null}

            {section.chapters.map((chapter, index) => (
              <section key={chapter.id} id={chapter.id} className="brand-chapter">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{chapter.title}</h2>
                <p>{chapter.lead}</p>
                {chapter.points ? (
                  <div className="brand-point-list">
                    {chapter.points.map((point, pointIndex) => (
                      <div key={point.title} className="brand-point-row">
                        <b>{String(pointIndex + 1).padStart(2, "0")}</b>
                        <div><h3>{point.title}</h3><p>{point.text}</p></div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}

            <BrandSpecimens slug={section.slug} />

            {section.slug === "guardrails" || section.slug === "propostas" ? (
              <section className="brand-alert">
                <ShieldAlert size={22} />
                <div>
                  <h3>Regra de publicação</h3>
                  <p>Número, denúncia, depoimento, antes/depois e promessa pública só saem com fonte, consentimento quando aplicável e revisão responsável.</p>
                </div>
              </section>
            ) : null}
          </div>

          <aside className="brandbook-aside">
            <span>Nesta página</span>
            {section.chapters.map((chapter) => <a key={chapter.id} href={`#${chapter.id}`}>{chapter.title}</a>)}
            {["paleta-cores", "tipografia", "componentes", "propostas"].includes(section.slug) ? <a href="#especimes">Espécimes</a> : null}
          </aside>
        </div>

        <footer className="brandbook-pager">
          {previous ? <Link href={`/app/marca/${previous.slug}`}><ArrowLeft size={16} /><span><small>Anterior</small>{previous.shortTitle}</span></Link> : <span />}
          {next ? <Link href={`/app/marca/${next.slug}`}><span><small>Próximo</small>{next.shortTitle}</span><ArrowRight size={16} /></Link> : null}
        </footer>
      </article>
    </main>
  );
}
