"use client";

import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  FileCheck2,
  FileText,
  Gauge,
  LayoutDashboard,
  Map,
  Menu,
  Megaphone,
  MessageCircleMore,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  contentItems,
  doctrines,
  phases,
  priorities,
  proofPoints,
  territories,
} from "@/lib/campaign-data";

type View = "dashboard" | "movimento" | "conteudo" | "territorio" | "provas" | "operacao" | "inteligencia";

const navigation: Array<{ id: View; label: string; icon: typeof Gauge }> = [
  { id: "dashboard", label: "Visão geral", icon: LayoutDashboard },
  { id: "movimento", label: "Movimento", icon: Megaphone },
  { id: "conteudo", label: "Conteúdo", icon: Play },
  { id: "territorio", label: "Território", icon: Map },
  { id: "provas", label: "Matriz de provas", icon: BadgeCheck },
  { id: "operacao", label: "Operação", icon: CalendarDays },
  { id: "inteligencia", label: "Inteligência", icon: BookOpenCheck },
];

const viewTitles: Record<View, [string, string]> = {
  dashboard: ["Comando da campanha", "Decisões, riscos e prioridades do movimento em um só lugar."],
  movimento: ["Arquitetura do movimento", "Tese, doutrinas, personas e ciclos da Receita Certa."],
  conteudo: ["Central de conteúdo", "Do roteiro à publicação, com coerência ideológica e fonte."],
  territorio: ["Expansão territorial", "Força local, lideranças e próximos núcleos de mobilização."],
  provas: ["Matriz de provas", "Toda afirmação pública precisa nascer acompanhada de evidência."],
  operacao: ["Operação 90 dias", "Ritmo de execução, responsáveis e marcos críticos."],
  inteligencia: ["Base de inteligência", "Acervo editorial consolidado de Instagram, YouTube e podcasts."],
};

function Pill({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "orange" | "green" | "red" | "slate" }) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}

function MetricCard({ icon: Icon, label, value, note, tone = "blue" }: { icon: typeof Gauge; label: string; value: string; note: string; tone?: string }) {
  return (
    <article className="metric-card">
      <div className={`metric-icon metric-${tone}`}><Icon size={19} /></div>
      <div className="metric-copy">
        <p>{label}</p>
        <strong>{value}</strong>
        <span>{note}</span>
      </div>
    </article>
  );
}

function DashboardView() {
  return (
    <>
      <section className="metric-grid">
        <MetricCard icon={Target} label="Ciclo atual" value="Dia 18 / 90" note="Fase Candeias Prova" />
        <MetricCard icon={Play} label="Acervo mapeado" value="120+" note="93 Reels + vídeos e podcasts" tone="orange" />
        <MetricCard icon={Map} label="Municípios ativos" value="6" note="Meta estratégica: 15" tone="green" />
        <MetricCard icon={ShieldCheck} label="Provas validadas" value="0 / 6" note="Prioridade crítica" tone="red" />
      </section>

      <section className="dashboard-grid">
        <div className="stack">
          <article className="panel hero-panel">
            <div className="hero-copy">
              <div className="eyebrow light"><Sparkles size={14} /> Receita Certa 2026</div>
              <h2>A Bahia é de quem<br /><em>constrói o interior.</em></h2>
              <p>O painel transforma estratégia política em cadência operacional, sem perder a prova, o território e o cuidado.</p>
              <button className="primary-button">Abrir plano de 90 dias <ArrowRight size={17} /></button>
            </div>
            <div className="hero-signal" aria-label="Progresso da campanha">
              <svg viewBox="0 0 120 120" role="img">
                <circle cx="60" cy="60" r="48" className="ring-base" />
                <circle cx="60" cy="60" r="48" className="ring-progress" pathLength="100" />
              </svg>
              <div><strong>38%</strong><span>prontidão</span></div>
            </div>
          </article>

          <article className="panel">
            <div className="panel-heading">
              <div><span className="section-kicker">AGORA</span><h3>Prioridades de comando</h3></div>
              <button className="text-button">Ver operação <ChevronRight size={16} /></button>
            </div>
            <div className="priority-list">
              {priorities.map((item) => (
                <div className="priority-row" key={item.title}>
                  <span className="priority-score">{item.score}</span>
                  <div className="priority-main"><strong>{item.title}</strong><span>{item.owner} · {item.due}</span></div>
                  <Pill tone={item.priority === "Crítica" ? "red" : item.priority === "Alta" ? "orange" : "slate"}>{item.priority}</Pill>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="stack">
          <article className="panel risk-panel">
            <div className="risk-header"><AlertTriangle size={19} /><span>ALERTA DE REPUTAÇÃO</span></div>
            <h3>Nenhum proof point está documentalmente fechado.</h3>
            <p>Antes de publicar 84%, 1 milhão de atendimentos ou “todas as escolas”, anexe fonte primária e aprovação jurídica.</p>
            <button className="risk-button">Ir para matriz de provas</button>
          </article>

          <article className="panel">
            <div className="panel-heading compact"><div><span className="section-kicker">CICLOS</span><h3>Plano de campanha</h3></div></div>
            <div className="phase-list">
              {phases.map((phase, index) => (
                <div className="phase-item" key={phase.name}>
                  <div className="phase-number">0{index + 1}</div>
                  <div className="phase-content">
                    <div><strong>{phase.name}</strong><span>{phase.range}</span></div>
                    <div className="progress"><i style={{ width: `${phase.progress}%` }} /></div>
                  </div>
                  <span className="phase-value">{phase.progress}%</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel quote-panel">
            <MessageCircleMore size={22} />
            <blockquote>“Não foi sorte. Não foi discurso. Foi Receita Certa.”</blockquote>
            <span>Trecho do manifesto do movimento</span>
          </article>
        </div>
      </section>
    </>
  );
}

function MovementView() {
  return (
    <section className="content-grid two-thirds">
      <div className="stack">
        <article className="panel manifesto">
          <span className="section-kicker">GRANDE IDEAL</span>
          <h2>A Bahia é de quem<br /><em>constrói o interior.</em></h2>
          <p>Devolver ao baiano do interior a dignidade de ser representado por alguém que conhece sua realidade e já governou de verdade.</p>
        </article>
        <article className="panel">
          <div className="panel-heading"><div><span className="section-kicker">SISTEMA</span><h3>Doutrinas centrais</h3></div><Pill>6 em destaque</Pill></div>
          <div className="doctrine-grid">
            {doctrines.map(([code, text]) => <div className="doctrine-card" key={code}><span>{code}</span><strong>{text}</strong></div>)}
          </div>
        </article>
      </div>
      <div className="stack">
        <article className="panel">
          <span className="section-kicker">ARQUÉTIPOS</span>
          <h3>Identidade do líder</h3>
          <div className="archetype-chart">
            <div className="donut"><div><strong>45%</strong><span>Curador</span></div></div>
            <ul>
              <li><i className="blue-dot" /> Curador <strong>45%</strong></li>
              <li><i className="orange-dot" /> Governante <strong>35%</strong></li>
              <li><i className="slate-dot" /> Herói <strong>20%</strong></li>
            </ul>
          </div>
        </article>
        <article className="panel">
          <span className="section-kicker">INIMIGO ABSTRATO</span>
          <h3>A política sem resultado</h3>
          <p className="body-muted">O sistema que usa o interior como voto, promete com elegância e desaparece antes da entrega.</p>
          <div className="contrast-row"><X size={17} /><span>Promessa sem fonte</span></div>
          <div className="contrast-row positive"><Check size={17} /><span>Resultado verificável</span></div>
        </article>
      </div>
    </section>
  );
}

function ContentView() {
  const [filter, setFilter] = useState("Todos");
  const visible = filter === "Todos" ? contentItems : contentItems.filter((item) => item.phase === filter);
  return (
    <article className="panel">
      <div className="toolbar">
        <div className="filter-tabs">{["Todos", "Conhecer", "Confiar", "Propagar"].map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <button className="primary-button small">Novo conteúdo</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Peça</th><th>Formato</th><th>Fase</th><th>Doutrina</th><th>Status</th></tr></thead>
          <tbody>
            {visible.map((item) => (
              <tr key={item.code}>
                <td><span className="table-code">{item.code}</span><strong>{item.title}</strong></td>
                <td>{item.format}</td><td><Pill>{item.phase}</Pill></td><td><span className="mono">{item.doctrine}</span></td>
                <td><Pill tone={item.status === "Pronto" ? "green" : item.status.includes("Validar") ? "red" : "orange"}>{item.status}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function TerritoryView() {
  return (
    <section className="content-grid territory-grid">
      <article className="panel map-card">
        <div className="panel-heading"><div><span className="section-kicker">BAHIA</span><h3>Mapa de presença</h3></div><Pill tone="orange">Dados operacionais</Pill></div>
        <div className="abstract-map">
          <span className="map-pin pin-1"><i />Candeias</span><span className="map-pin pin-2"><i />Simões Filho</span>
          <span className="map-pin pin-3"><i />Entre Rios</span><span className="map-pin pin-4"><i />Brejões</span>
          <svg viewBox="0 0 500 360" aria-hidden="true"><path d="M213 18l54 25 55-7 25 31 49 9 35 44-18 45 27 44-35 53-44 5-35 61-75-8-53 23-50-34-62-7-16-56-42-38 21-61-12-49 47-31 35-49z" /></svg>
        </div>
      </article>
      <article className="panel">
        <div className="panel-heading"><div><span className="section-kicker">NÚCLEOS</span><h3>Força territorial</h3></div></div>
        <div className="territory-list">
          {territories.map((item) => (
            <div className="territory-item" key={item.city}>
              <div><strong>{item.city}</strong><span>{item.region} · {item.leaders} lideranças</span></div>
              <div className="strength"><i style={{ width: `${item.strength}%` }} /></div><b>{item.strength}</b>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

function ProofView() {
  return (
    <article className="panel">
      <div className="proof-banner"><ShieldCheck size={23} /><div><strong>Regra editorial absoluta</strong><span>Sem documento, sem número público. Sem aprovação jurídica, sem impulsionamento.</span></div></div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Reivindicação</th><th>Fonte esperada</th><th>Responsável</th><th>Estado</th></tr></thead>
          <tbody>{proofPoints.map((item) => <tr key={item.claim}><td><strong>{item.claim}</strong></td><td>{item.source}</td><td>{item.owner}</td><td><Pill tone="red">{item.state}</Pill></td></tr>)}</tbody>
        </table>
      </div>
    </article>
  );
}

function OperationView() {
  return (
    <section className="content-grid two-thirds">
      <article className="panel">
        <div className="panel-heading"><div><span className="section-kicker">90 DIAS</span><h3>Linha de execução</h3></div></div>
        <div className="timeline">
          {phases.map((phase, index) => <div className="timeline-item" key={phase.name}><span>0{index + 1}</span><div><strong>{phase.name}</strong><p>{phase.range} · {phase.status}</p><div className="progress"><i style={{ width: `${phase.progress}%` }} /></div></div></div>)}
        </div>
      </article>
      <div className="stack">
        <article className="panel checklist-card">
          <span className="section-kicker">PRONTIDÃO</span><h3>Checklist de rua</h3>
          {["Jurídico-eleitoral", "Identidade e conteúdo", "Digital e comunidade", "Territorial e presencial", "Narrativa e crise"].map((item, index) => <div className="check-row" key={item}><span className={index === 1 ? "done" : ""}>{index === 1 && <Check size={13} />}</span><strong>{item}</strong></div>)}
        </article>
        <article className="panel lgpd-card"><FileCheck2 size={23} /><div><strong>WhatsApp com opt-in</strong><span>Consentimento, saída simples e zero disparo ilegal.</span></div></article>
      </div>
    </section>
  );
}

function IntelligenceView() {
  const sources = [
    { icon: Play, name: "Instagram Reels", count: "93 itens", detail: "Links, datas, transcrições e legendas", color: "orange" },
    { icon: FileText, name: "Transcrições extras", count: "23 linhas", detail: "Acervo editorial complementar", color: "blue" },
    { icon: Activity, name: "Podcasts", count: "4 longos", detail: "Mais de 7 horas de conversa", color: "green" },
    { icon: BookOpenCheck, name: "YouTube", count: "Documento-base", detail: "Aparições e falas públicas catalogadas", color: "slate" },
  ];
  return (
    <>
      <section className="source-grid">{sources.map(({ icon: Icon, ...item }) => <article className="panel source-card" key={item.name}><div className={`metric-icon metric-${item.color}`}><Icon size={19} /></div><div><span>{item.count}</span><strong>{item.name}</strong><p>{item.detail}</p></div></article>)}</section>
      <section className="content-grid two-thirds intelligence-lower">
        <article className="panel">
          <div className="panel-heading"><div><span className="section-kicker">SINAIS</span><h3>Linguagem recorrente</h3></div></div>
          <div className="word-cloud"><b>cuidar</b><span>resultado</span><strong>Candeias</strong><i>saúde</i><span>trabalho</span><b>Bahia</b><i>interior</i><strong>experiência</strong><span>coragem</span></div>
        </article>
        <article className="panel insight-card">
          <Sparkles size={23} /><span className="section-kicker">LEITURA ESTRATÉGICA</span>
          <h3>A voz mais autêntica é concreta.</h3>
          <p>As falas mais fortes combinam origem local, trabalho médico, entregas físicas e reconhecimento de pessoas e territórios.</p>
        </article>
      </section>
    </>
  );
}

export function CampaignDashboard() {
  const [view, setView] = useState<View>("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [title, subtitle] = viewTitles[view];
  const viewContent = useMemo(() => {
    if (view === "movimento") return <MovementView />;
    if (view === "conteudo") return <ContentView />;
    if (view === "territorio") return <TerritoryView />;
    if (view === "provas") return <ProofView />;
    if (view === "operacao") return <OperationView />;
    if (view === "inteligencia") return <IntelligenceView />;
    return <DashboardView />;
  }, [view]);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="brand-lockup">
          <div className="logo-wrap"><Image src="/logo_pitagoras_branco.png" alt="Dr. Pitagoras" width={190} height={32} priority unoptimized /></div>
          <span>COMANDO 2026</span>
        </div>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><X /></button>
        <div className="movement-badge"><i /><div><strong>Receita Certa</strong><span>Movimento oficial</span></div></div>
        <nav>
          <span className="nav-label">NAVEGAÇÃO</span>
          {navigation.map((item) => <button key={item.id} className={view === item.id ? "active" : ""} onClick={() => { setView(item.id); setMenuOpen(false); }}><item.icon size={18} /><span>{item.label}</span>{view === item.id && <ChevronRight className="nav-arrow" size={15} />}</button>)}
        </nav>
        <div className="sidebar-footer">
          <div className="status-line"><CircleDot size={14} /><span>Ambiente estratégico</span></div>
          <p>Dados demonstrativos identificados. Provas eleitorais pendentes de validação.</p>
        </div>
      </aside>
      {menuOpen && <button className="backdrop" onClick={() => setMenuOpen(false)} aria-label="Fechar navegação" />}
      <main>
        <header className="topbar">
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu /></button>
          <div className="search-box"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no comando..." /><kbd>⌘ K</kbd></div>
          <div className="topbar-meta"><Pill tone="green">Operação ativa</Pill><div className="avatar">TC</div><div className="user-copy"><strong>Triade Company</strong><span>Administração</span></div></div>
        </header>
        <div className="page">
          <header className="page-header">
            <div><span className="eyebrow"><BarChart3 size={14} /> Painel estratégico · 12 jun 2026</span><h1>{title}</h1><p>{subtitle}</p></div>
            <div className="page-actions"><button className="secondary-button"><Users size={16} /> Equipe</button><button className="primary-button"><Activity size={16} /> Registrar atualização</button></div>
          </header>
          {query && <div className="search-notice">Busca local preparada para integração: <strong>{query}</strong></div>}
          {viewContent}
          <footer className="app-footer"><span>RECEITA CERTA · DR. PITAGORAS 2026</span><span>Resultado verificável antes da publicação.</span></footer>
        </div>
      </main>
    </div>
  );
}
