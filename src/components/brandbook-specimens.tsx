import { AlertTriangle, CheckCircle2, Clock3, XCircle } from "lucide-react";
import type { BrandSection } from "@/lib/brandbook";

export function BrandSpecimens({ slug }: { slug: BrandSection["slug"] }) {
  if (slug === "paleta-cores") return <ColorSpecimens />;
  if (slug === "tipografia") return <TypeSpecimens />;
  if (slug === "componentes") return <ComponentSpecimens />;
  if (slug === "propostas") return <ProofTable />;
  return null;
}

function ColorSpecimens() {
  const colors = [
    ["Navy Receita Certa", "#173d63", "Autoridade, navegação e fundo institucional"],
    ["Azul de presença", "#377fbe", "Links, métricas e indicadores"],
    ["Laranja mobilizador", "#f7a12f", "Convocação e prioridade"],
    ["Verde de avanço", "#238b65", "Concluído, validado e em progresso"],
  ];
  return (
    <section id="especimes" className="brand-specimen-section">
      <h2>Tokens vivos</h2>
      <div className="brand-specimen-grid">
        {colors.map(([name, color, use]) => (
          <article key={name} className="brand-specimen">
            <div className="brand-token-swatch" style={{ background: color }} />
            <h3>{name}</h3>
            <p>{use}</p>
            <code>{color}</code>
          </article>
        ))}
      </div>
    </section>
  );
}

function TypeSpecimens() {
  return (
    <section id="especimes" className="brand-specimen-section">
      <h2>Espécimes tipográficos</h2>
      <div className="brand-type-stack">
        <article className="brand-specimen">
          <span>Display</span>
          <p className="brand-display-line">A Bahia é de quem constrói o interior.</p>
        </article>
        <article className="brand-specimen">
          <span>Interface</span>
          <p>Metas, apoiadores, territórios e evidências precisam ser lidos rápido, inclusive em campo.</p>
        </article>
        <article className="brand-specimen">
          <span>Mono</span>
          <p className="brand-mono-line">DOC-008 / Candeias mudou / Validar fonte</p>
        </article>
      </div>
    </section>
  );
}

function ComponentSpecimens() {
  const states = [
    [CheckCircle2, "Validado", "Fonte confirmada e pronta para publicação.", "green"],
    [AlertTriangle, "Em revisão", "Precisa de checagem antes de virar peça pública.", "orange"],
    [Clock3, "Em coleta", "Evidência ainda está sendo organizada.", "blue"],
    [XCircle, "Bloqueado", "Não publicar até resolver fonte ou risco jurídico.", "red"],
  ] as const;
  return (
    <section id="especimes" className="brand-specimen-section">
      <h2>Estados operacionais</h2>
      <div className="brand-specimen-grid">
        {states.map(([Icon, title, text, tone]) => (
          <article key={title} className="brand-specimen">
            <div className={`metric-icon metric-${tone}`}><Icon size={20} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProofTable() {
  return (
    <section id="especimes" className="brand-specimen-section">
      <h2>Matriz de evidência</h2>
      <div className="table-wrap brand-proof-table">
        <table>
          <thead><tr><th>Afirmação</th><th>Fonte</th><th>Status</th><th>Ação</th></tr></thead>
          <tbody>
            {[
              ["84% de aprovação", "Pesquisa citada", "Validar", "Anexar fonte"],
              ["Primeira UTI de Candeias", "Hospital / imprensa", "Em coleta", "Confirmar data"],
              ["Receita Certa", "Plano de gestão", "Pronto", "Usar em manifesto"],
            ].map((row) => (
              <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
