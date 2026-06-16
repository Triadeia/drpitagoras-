"use client";

import Image from "next/image";
import Link from "next/link";
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
  ClipboardList,
  Copy,
  FileCheck2,
  FileText,
  Flag,
  Gauge,
  Hand,
  LayoutDashboard,
  Link as LinkIcon,
  Lock,
  LogOut,
  Map,
  MapPin,
  Menu,
  Megaphone,
  MessageSquare,
  MessageCircleMore,
  Phone,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Upload,
  UserCircle,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import {
  contentItems,
  doctrines,
  leaderActivities,
  leaderAnnouncements,
  leaderGoals,
  leaderProfile,
  phases,
  priorities,
  proofPoints,
  supporters,
  territories,
} from "@/lib/campaign-data";
import { movementDocuments, movementDocumentCategories, movementDocumentStatuses, movementDocumentTypes, type MovementDocument } from "@/lib/movement-documents";

type View = "dashboard" | "lideranca" | "rede" | "checkin" | "metas" | "mural" | "cadastro" | "movimento" | "conteudo" | "territorio" | "provas" | "operacao" | "inteligencia";

const navigation: Array<{ id: View; label: string; icon: typeof Gauge }> = [
  { id: "dashboard", label: "Visão geral", icon: LayoutDashboard },
  { id: "lideranca", label: "Área do líder", icon: Users },
  { id: "rede", label: "Minha rede", icon: UserPlus },
  { id: "checkin", label: "Check-in", icon: MapPin },
  { id: "metas", label: "Metas", icon: Flag },
  { id: "mural", label: "Mural", icon: MessageSquare },
  { id: "cadastro", label: "Login e cadastro", icon: Lock },
  { id: "movimento", label: "Movimento", icon: Megaphone },
  { id: "conteudo", label: "Conteúdo", icon: Play },
  { id: "territorio", label: "Território", icon: Map },
  { id: "provas", label: "Matriz de provas", icon: BadgeCheck },
  { id: "operacao", label: "Operação", icon: CalendarDays },
  { id: "inteligencia", label: "Inteligência", icon: BookOpenCheck },
];

const viewTitles: Record<View, [string, string]> = {
  dashboard: ["Comando da campanha", "Decisões, riscos e prioridades do movimento em um só lugar."],
  lideranca: ["Painel do líder", "Entrada mínima para liderança, rede, metas, pontos e cadência de rua."],
  rede: ["Minha rede", "Cinco eleitores demonstrativos para testar cadastro, busca e acompanhamento."],
  checkin: ["Check-in diário", "Registro rápido de presença territorial, visita, reunião e ação local."],
  metas: ["Gamificação e metas", "Missões, pontos e progresso para manter liderança em movimento."],
  mural: ["Mural de avisos", "Comunicados curtos para alinhar narrativa, prova e operação."],
  cadastro: ["Login e cadastro", "Fluxo inicial para líderes e novos apoiadores entrarem vinculados à campanha."],
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
              <Link className="primary-button" href="/documento">Ler documento completo <ArrowRight size={17} /></Link>
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

function LeaderOverviewView() {
  const completedGoals = leaderGoals.filter((goal) => goal.progress >= 100).length;
  return (
    <>
      <section className="leader-hero">
        <div className="leader-id">
          <div className="leader-avatar">JG</div>
          <div>
            <span>Area do Lider</span>
            <h2>{leaderProfile.name}</h2>
            <p>{leaderProfile.level} em {leaderProfile.city}</p>
          </div>
        </div>
        <div className="leader-points">
          <Star size={20} />
          <strong>{leaderProfile.points}</strong>
          <span>pontos</span>
        </div>
        <button className="secondary-button"><LogOut size={16} /> Sair</button>
      </section>

      <section className="invite-band">
        <div><LinkIcon size={22} /><div><strong>Link de cadastro de apoiadores</strong><span>Compartilhe para vincular novos eleitores automaticamente.</span></div></div>
        <code>{leaderProfile.inviteUrl}</code>
        <button className="copy-button"><Copy size={16} /> Copiar</button>
      </section>

      <section className="metric-grid">
        <MetricCard icon={Users} label="Apoiadores" value={String(supporters.length)} note="5 exemplos pre-carregados" tone="green" />
        <MetricCard icon={Trophy} label="Metas concluidas" value={String(completedGoals)} note={`${leaderGoals.length} missoes ativas`} tone="orange" />
        <MetricCard icon={Flag} label="Metas em andamento" value={String(leaderGoals.length)} note="Cadencia semanal" />
        <MetricCard icon={BarChart3} label="Taxa de conclusao" value="31%" note="Progresso medio das missoes" tone="slate" />
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading"><div><span className="section-kicker">REDE</span><h3>Eleitores recentes</h3></div><Pill tone="green">Pronto para Supabase</Pill></div>
          <div className="supporter-list">
            {supporters.slice(0, 5).map((supporter) => (
              <div className="supporter-row" key={supporter.phone}>
                <div className="mini-avatar">{supporter.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</div>
                <div><strong>{supporter.name}</strong><span>{supporter.neighborhood} · {supporter.phone}</span></div>
                <Pill tone={supporter.status === "Confirmado" ? "green" : "blue"}>{supporter.status}</Pill>
              </div>
            ))}
          </div>
        </article>
        <article className="panel">
          <div className="panel-heading"><div><span className="section-kicker">ATIVIDADE</span><h3>Movimento recente</h3></div></div>
          <div className="activity-list">
            {leaderActivities.map((activity) => (
              <div className="activity-row" key={activity.text}>
                <span>+{activity.points}</span>
                <div><strong>{activity.type}</strong><p>{activity.text}</p><small>{activity.time}</small></div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

function NetworkView() {
  return (
    <article className="panel">
      <div className="toolbar leader-toolbar">
        <div className="search-box inline"><Search size={16} /><input placeholder="Buscar por nome, telefone ou bairro..." /></div>
        <button className="primary-button"><UserPlus size={16} /> Cadastrar apoiador</button>
      </div>
      <div className="leader-stats-row">
        <MetricCard icon={Users} label="Total de apoiadores" value={String(supporters.length)} note="rede inicial" />
        <MetricCard icon={ClipboardList} label="Com observacoes" value="1" note="precisam retorno" tone="orange" />
        <MetricCard icon={Megaphone} label="Com demandas" value="0" note="fila limpa" tone="slate" />
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Eleitor</th><th>Contato</th><th>Bairro</th><th>Status</th><th>Pontos</th></tr></thead>
          <tbody>
            {supporters.map((supporter) => (
              <tr key={supporter.phone}>
                <td><strong>{supporter.name}</strong></td>
                <td>{supporter.phone}</td>
                <td>{supporter.neighborhood}</td>
                <td><Pill tone={supporter.status === "Confirmado" ? "green" : "blue"}>{supporter.status}</Pill></td>
                <td><span className="mono">{supporter.points}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function CheckinView() {
  return (
    <section className="leader-form-wrap">
      <article className="panel leader-form">
        <div className="form-title"><MapPin /><div><h3>Check-in Diario</h3><p>Registre suas atividades de lideranca.</p></div></div>
        <label>Tipo de atividade</label>
        <div className="activity-type-grid">
          {[[Users, "Reuniao"], [Hand, "Visita"], [Megaphone, "Acao local"], [MessageCircleMore, "Outros"]].map(([Icon, label]) => {
            const TypedIcon = Icon as typeof Gauge;
            return <button className={label === "Visita" ? "active" : ""} key={String(label)}><TypedIcon size={22} />{String(label)}</button>;
          })}
        </div>
        <label>Local</label>
        <div className="input-line"><MapPin size={16} /><input placeholder="Onde voce esta? Ex: Bairro Centro, Associacao, feira" /></div>
        <button className="text-button location-button">Usar minha localizacao atual</button>
        <label>Descricao</label>
        <textarea placeholder="Descreva brevemente o que foi feito..." />
        <label>Fotos ou arquivos</label>
        <div className="upload-box"><Upload size={28} /><strong>Clique ou arraste arquivos aqui</strong><span>Maximo 5MB por arquivo</span></div>
        <button className="primary-button full">Confirmar check-in</button>
      </article>
    </section>
  );
}

function GoalsView() {
  return (
    <section className="content-grid two-thirds">
      <article className="panel">
        <div className="panel-heading"><div><span className="section-kicker">GAMEFICACAO</span><h3>Missoes do lider</h3></div><Pill tone="orange">{leaderProfile.level}</Pill></div>
        <div className="goal-list">
          {leaderGoals.map((goal) => (
            <div className="goal-row" key={goal.title}>
              <div><strong>{goal.title}</strong><span>{goal.current} de {goal.target} · recompensa {goal.reward} pontos</span></div>
              <div className="progress"><i style={{ width: `${goal.progress}%` }} /></div>
              <b>{goal.progress}%</b>
            </div>
          ))}
        </div>
      </article>
      <article className="panel score-card">
        <Trophy size={30} />
        <span className="section-kicker">PLACAR</span>
        <h3>{leaderProfile.points} pontos</h3>
        <p>Faltam 64 pontos para o nivel Mobilizador Ouro.</p>
        <div className="progress"><i style={{ width: "74%" }} /></div>
      </article>
    </section>
  );
}

function MuralView() {
  return (
    <section className="mural-grid">
      {leaderAnnouncements.map((item) => (
        <article className="panel announcement-card" key={item.title}>
          <Pill tone={item.priority === "Alta" ? "orange" : "blue"}>{item.priority}</Pill>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
      <article className="panel announcement-card quiet">
        <Pill tone="green">Proximo</Pill>
        <h3>Treinamento de lideres</h3>
        <p>Modulo rapido para abordagem de apoiadores, prova documental e cadastro pelo link.</p>
      </article>
    </section>
  );
}

function AccessView() {
  return (
    <section className="access-grid">
      <article className="panel access-card">
        <div className="form-title"><Lock /><div><h3>Login do lider</h3><p>Acesso demonstrativo pronto para integrar ao Supabase Auth.</p></div></div>
        <label>E-mail</label>
        <div className="input-line"><UserCircle size={16} /><input defaultValue={leaderProfile.loginHint} /></div>
        <label>Senha</label>
        <div className="input-line"><Lock size={16} /><input defaultValue={leaderProfile.passwordHint} type="password" /></div>
        <button className="primary-button full">Entrar no painel</button>
      </article>
      <article className="panel access-card">
        <div className="form-title"><UserPlus /><div><h3>Cadastro de novo apoiador</h3><p>Entrada vinculada automaticamente ao lider Joao Gabriel.</p></div></div>
        <label>Nome completo</label>
        <input className="plain-input" placeholder="Nome do eleitor" />
        <label>Telefone</label>
        <div className="input-line"><Phone size={16} /><input placeholder="(71) 99999-9999" /></div>
        <label>Bairro</label>
        <input className="plain-input" placeholder="Bairro" />
        <button className="secondary-button full">Cadastrar na rede</button>
      </article>
    </section>
  );
}

function MovementView() {
  return (
    <>
      <section className="content-grid two-thirds">
        <div className="stack">
          <article className="panel manifesto">
            <span className="section-kicker">GRANDE IDEAL</span>
            <h2>Receita Certa<br /><em>de quem constrói.</em></h2>
            <p>Devolver ao baiano do interior a dignidade de ser representado por alguém que conhece sua realidade, organiza comunidade e prova resultado antes de pedir confiança.</p>
          </article>
          <article className="panel">
            <div className="panel-heading"><div><span className="section-kicker">SISTEMA</span><h3>Doutrinas centrais</h3></div><Pill>6 em destaque</Pill></div>
            <div className="doctrine-grid">
              {doctrines.map(([code, text]) => <Link href={`/app/marca/documentos/${code.toLowerCase()}`} className="doctrine-card" key={code}><span>{code}</span><strong>{text}</strong></Link>)}
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
      <MovementDocumentsPanel />
    </>
  );
}

function MovementDocumentsPanel() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("Todos");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const [categoryFilter, setCategoryFilter] = useState("Todos");
  const [uploads, setUploads] = useState<MovementDocument[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = window.localStorage.getItem("drp-movement-documents");
    return saved ? JSON.parse(saved) as MovementDocument[] : [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [notice, setNotice] = useState("Documentos-base carregados. Upload pronto para Drive quando as credenciais estiverem configuradas.");

  const allDocuments = useMemo(() => [...movementDocuments, ...uploads], [uploads]);
  const filteredDocuments = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return allDocuments.filter((document) => {
      const haystack = `${document.code} ${document.title} ${document.summary} ${document.territory} ${document.tags.join(" ")}`.toLocaleLowerCase("pt-BR");
      return (!normalized || haystack.includes(normalized))
        && (typeFilter === "Todos" || document.type === typeFilter)
        && (statusFilter === "Todos" || document.status === statusFilter)
        && (categoryFilter === "Todos" || document.category === categoryFilter);
    });
  }, [allDocuments, categoryFilter, query, statusFilter, typeFilter]);

  async function handleUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/movement/documents", { method: "POST", body: formData });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "Falha ao enviar documento.");

      const nextDocument = payload.document as MovementDocument;
      const nextUploads = [...uploads, nextDocument];
      setUploads(nextUploads);
      window.localStorage.setItem("drp-movement-documents", JSON.stringify(nextUploads));
      setNotice(payload.driveConfigured ? "Documento enviado ao Google Drive e salvo no painel." : "Drive ainda sem credenciais na Vercel. Documento salvo localmente como fallback.");
      form.reset();
      setIsOpen(false);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Nao foi possivel enviar o documento.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <article className="panel movement-documents-panel">
      <div className="panel-heading">
        <div>
          <span className="section-kicker">DOCUMENTOS DO MOVIMENTO</span>
          <h3>Receita Certa de quem constrói</h3>
          <p className="body-muted">Cada arquivo carrega metadados, território, fonte, status de validação e link de prova.</p>
        </div>
        <div className="document-actions">
          <Link className="secondary-button" href="/app/marca/diretorio"><BookOpenCheck size={16} /> Diretório público</Link>
          <button className="primary-button" onClick={() => setIsOpen(true)} type="button"><Upload size={16} /> Adicionar documento</button>
        </div>
      </div>

      <div className="proof-banner compact"><ShieldCheck size={19} /><div><strong>{notice}</strong><span>Credenciais esperadas: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY e GOOGLE_DRIVE_FOLDER_ID.</span></div></div>

      <div className="document-filters">
        <div className="search-box inline"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por titulo, tag, territorio ou fonte..." /></div>
        <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
          {["Todos", ...movementDocumentTypes].map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
          {["Todos", ...movementDocumentCategories].map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          {["Todos", ...movementDocumentStatuses].map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      {filteredDocuments.length ? (
        <div className="movement-document-list">
          {filteredDocuments.map((document) => (
            <div className="movement-document-row" key={`${document.id}-${document.fileName}`}>
              <div className="document-code"><FileText size={17} /><span>{document.code}</span></div>
              <div className="document-main">
                <Link href={document.id.startsWith("doc-") ? `/app/marca/documentos/${document.id}` : document.driveUrl ?? "#"}>{document.title}</Link>
                <p>{document.summary}</p>
                <div>{document.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="document-meta">
                <strong>{document.territory}</strong>
                <Pill tone={document.status === "Publicado" ? "green" : document.status === "Em revisao" ? "orange" : "red"}>{document.status}</Pill>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state"><FileText size={34} /><strong>Nenhum documento encontrado</strong><p>Ajuste os filtros ou adicione um novo arquivo do movimento.</p></div>
      )}

      {isOpen ? (
        <div className="modal-layer" role="dialog" aria-modal="true">
          <form className="document-modal" onSubmit={handleUpload}>
            <div className="panel-heading compact"><div><span className="section-kicker">NOVO DOCUMENTO</span><h3>Adicionar ao movimento</h3></div><button type="button" onClick={() => setIsOpen(false)}><X size={18} /></button></div>
            <label>Titulo *</label>
            <input name="title" className="plain-input" required placeholder="Ex.: Ata de reunião territorial" />
            <div className="form-grid">
              <div><label>Tipo *</label><input name="type" className="plain-input" required placeholder="Relatório, prova, ata..." /></div>
              <div><label>Categoria estratégica</label><input name="category" className="plain-input" placeholder="Evidência, comunidade..." /></div>
            </div>
            <div className="form-grid">
              <div><label>Território</label><input name="territory" className="plain-input" placeholder="Candeias, Recôncavo..." /></div>
              <div><label>Fonte</label><input name="source" className="plain-input" placeholder="Responsável ou origem" /></div>
            </div>
            <label>Resumo</label>
            <textarea name="summary" className="plain-input" placeholder="O que este documento comprova ou organiza?" />
            <label>Tags</label>
            <input name="tags" className="plain-input" placeholder="saude, prova, candeias" />
            <label>Arquivo *</label>
            <input name="file" className="plain-input" type="file" required />
            <button className="primary-button full" disabled={isSending}>{isSending ? "Enviando..." : "Enviar documento"}</button>
          </form>
        </div>
      ) : null}
    </article>
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
    if (view === "lideranca") return <LeaderOverviewView />;
    if (view === "rede") return <NetworkView />;
    if (view === "checkin") return <CheckinView />;
    if (view === "metas") return <GoalsView />;
    if (view === "mural") return <MuralView />;
    if (view === "cadastro") return <AccessView />;
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
          <Link className="document-link" href="/app/marca"><BookOpenCheck size={18} /><span>Brandbook completo</span><ArrowRight className="nav-arrow" size={15} /></Link>
          <Link className="document-link" href="/documento"><FileText size={18} /><span>Documento completo</span><ArrowRight className="nav-arrow" size={15} /></Link>
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
