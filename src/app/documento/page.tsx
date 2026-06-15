import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata = {
  title: "Documento Completo | Receita Certa",
  description: "Documento estratégico completo do movimento Receita Certa 2026.",
};

function readDocument(fileName: string) {
  return fs.readFileSync(path.join(process.cwd(), fileName), "utf8");
}

export default function DocumentoPage() {
  const document = [
    readDocument("Estrategia_Movimento_ReceitaCerta_2026_PARTE1.md"),
    readDocument("Estrategia_Movimento_ReceitaCerta_2026_PARTE2.md"),
  ].join("\n\n---\n\n");

  return (
    <main className="document-page">
      <header className="document-topbar">
        <Link href="/" className="document-back">
          <ArrowLeft size={17} />
          Voltar ao painel
        </Link>
        <span>
          <FileText size={15} />
          Documento estratégico integral
        </span>
      </header>

      <div className="document-layout">
        <aside className="document-aside">
          <span>RECEITA CERTA 2026</span>
          <strong>Movimento Dr. Pitágoras</strong>
          <p>Parte 1 + Parte 2, publicadas integralmente em uma única leitura.</p>
          <div>
            <b>Versão</b>
            <span>V1.0 · Junho 2026</span>
          </div>
        </aside>

        <article className="document-article">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{document}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
