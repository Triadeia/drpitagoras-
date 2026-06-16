import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ExternalLink, ShieldAlert } from "lucide-react";
import { notFound } from "next/navigation";
import { movementDocuments } from "@/lib/movement-documents";
import { readMovementDocumentMarkdown } from "@/lib/movement-documents-server";

export function generateStaticParams() {
  return movementDocuments.map((document) => ({ id: document.id }));
}

export default async function MovementDocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const payload = await readMovementDocumentMarkdown(id);
  if (!payload) notFound();

  const { document, markdown } = payload;

  return (
    <main className="brandbook-page movement-document-page">
      <Link href="/app/marca/diretorio" className="brand-back"><ArrowLeft size={16} /> Voltar ao diretório</Link>

      <article className="movement-document-shell">
        <header className="brandbook-section-hero movement-document-hero">
          <span className="brand-kicker">DOCUMENTOS DO MOVIMENTO / {document.code}</span>
          <h1>{document.title}</h1>
          <p>{document.summary}</p>
          <div className="movement-document-meta">
            <span>{document.type}</span>
            <span>{document.category}</span>
            <span>{document.territory}</span>
            <span>{document.status}</span>
          </div>
        </header>

        <section className="brand-alert movement-document-warning">
          <ShieldAlert size={22} />
          <div>
            <h3>Uso editorial com prova</h3>
            <p>Este documento é base estratégica. Números como 84%, TCM, TSE, atendimentos, UTI, educação e obras devem receber fonte primária anexada antes de publicação pública ou impulsionamento.</p>
          </div>
        </section>

        <div className="movement-document-layout">
          <aside className="movement-document-card">
            <span className="section-kicker">METADADOS</span>
            <dl>
              <div><dt>Tipo</dt><dd>{document.type}</dd></div>
              <div><dt>Categoria</dt><dd>{document.category}</dd></div>
              <div><dt>Território</dt><dd>{document.territory}</dd></div>
              <div><dt>Fonte</dt><dd>{document.source}</dd></div>
              <div><dt>Data</dt><dd>{document.date}</dd></div>
            </dl>
            <div className="movement-tags">
              {document.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {document.driveUrl ? <a href={document.driveUrl} target="_blank" rel="noreferrer">Abrir no Drive <ExternalLink size={14} /></a> : null}
          </aside>

          <div className="movement-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
}
