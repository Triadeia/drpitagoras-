"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Database,
  Flag,
  Loader2,
  MapPin,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  UserPlus,
  UsersRound,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Source = "loading" | "demo" | "supabase" | "supabase-error" | "offline";

type Leader = {
  id?: string;
  name: string;
  role?: string;
  phone?: string;
  email?: string;
  city?: string;
  neighborhood?: string;
  points?: number;
  level?: string;
  invite_url?: string;
  inviteUrl?: string;
};

type Supporter = {
  id?: string;
  name: string;
  phone?: string;
  city?: string;
  neighborhood?: string;
  status?: string;
  points?: number;
  tags?: string[];
  created_at?: string;
};

type Checkin = {
  id?: string;
  type: string;
  location?: string;
  description?: string;
  text?: string;
  points?: number;
  created_at?: string;
  time?: string;
};

const whatsappHref =
  "https://wa.me/5571997238027?text=Quero%20falar%20com%20a%20equipe%20do%20movimento%20Receita%20Certa.";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function formatWhen(value?: string) {
  if (!value) return "registro recente";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
}

function sourceLabel(source: Source) {
  if (source === "supabase") return "Supabase conectado";
  if (source === "supabase-error") return "Supabase com fallback";
  if (source === "offline") return "Modo offline";
  if (source === "loading") return "Carregando dados";
  return "Modo demo";
}

export function SupporterPanel() {
  const [source, setSource] = useState<Source>("loading");
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [checkins, setCheckins] = useState<Checkin[]>([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState<string | null>(null);

  async function loadPanel() {
    try {
      const [summaryResponse, leadersResponse, supportersResponse, checkinsResponse] = await Promise.all([
        fetch("/api/leader", { cache: "no-store" }),
        fetch("/api/leader/leaders", { cache: "no-store" }),
        fetch("/api/leader/supporters", { cache: "no-store" }),
        fetch("/api/leader/checkins", { cache: "no-store" }),
      ]);

      const [summary, leadersData, supportersData, checkinsData] = await Promise.all([
        summaryResponse.json(),
        leadersResponse.json(),
        supportersResponse.json(),
        checkinsResponse.json(),
      ]);

      setSource((leadersData.source ?? summary.source ?? "demo") as Source);
      setLeaders(leadersData.leaders?.length ? leadersData.leaders : [summary.leader].filter(Boolean));
      setSupporters(supportersData.supporters ?? summary.supporters ?? []);
      setCheckins(checkinsData.checkins ?? summary.activities ?? []);
      setMessage("");
    } catch {
      setSource("offline");
      setMessage("Nao consegui carregar o backend agora. O painel continua pronto para nova tentativa.");
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadPanel();
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const metrics = useMemo(() => {
    const totalPoints = supporters.reduce((sum, item) => sum + Number(item.points ?? 0), 0);
    const activeCities = new Set(supporters.map((item) => item.city).filter(Boolean)).size || 1;
    return [
      { label: "Liderancas", value: String(leaders.length), note: "coordenacao e multiplicadores", icon: UsersRound },
      { label: "Apoiadores", value: String(supporters.length), note: "cadastros capturados", icon: UserPlus },
      { label: "Check-ins", value: String(checkins.length), note: "acoes de campo registradas", icon: MapPin },
      { label: "Pontos", value: String(totalPoints), note: `${activeCities} cidade(s) ativa(s)`, icon: Flag },
    ];
  }, [leaders, supporters, checkins]);

  async function postForm(endpoint: string, form: HTMLFormElement, success: string) {
    const payload = Object.fromEntries(new FormData(form).entries());
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data?.message ?? "Erro ao salvar cadastro.");
    form.reset();
    setMessage(success);
    return data;
  }

  async function handleLeader(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting("leader");
    try {
      const data = await postForm("/api/leader/leaders", event.currentTarget, "Lideranca cadastrada no painel.");
      if (data.leader) setLeaders((items) => [data.leader, ...items]);
      setSource((data.source ?? source) as Source);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Erro ao cadastrar lideranca.");
    } finally {
      setSubmitting(null);
    }
  }

  async function handleSupporter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting("supporter");
    try {
      const form = event.currentTarget;
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/leader/supporters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, status: "Novo cadastro", points: 15, tags: ["Painel", "WhatsApp"] }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.message ?? "Erro ao cadastrar apoiador.");
      form.reset();
      if (data.supporter) setSupporters((items) => [data.supporter, ...items]);
      setSource((data.source ?? source) as Source);
      setMessage("Apoiador cadastrado. Agora a equipe pode chamar no WhatsApp.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Erro ao cadastrar apoiador.");
    } finally {
      setSubmitting(null);
    }
  }

  async function handleCheckin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting("checkin");
    try {
      const data = await postForm("/api/leader/checkins", event.currentTarget, "Check-in registrado para a operacao.");
      if (data.checkin) setCheckins((items) => [data.checkin, ...items]);
      setSource((data.source ?? source) as Source);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Erro ao registrar check-in.");
    } finally {
      setSubmitting(null);
    }
  }

  return (
    <main className="supporter-panel">
      <section className="supporter-hero">
        <nav className="supporter-nav" aria-label="Navegacao do painel">
          <Link href="/" className="supporter-back">Dr. Pitagoras / Receita Certa</Link>
          <div>
            <Link href="/painel">Painel completo</Link>
            <Link href="/obras">LP de obras</Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Atendimento
            </a>
          </div>
        </nav>

        <div className="supporter-hero-grid">
          <div>
            <span className="supporter-kicker">Painel de apoiadores e liderancas</span>
            <h1>Uma operacao simples para transformar apoio em rede organizada.</h1>
            <p>
              Cadastre liderancas, registre apoiadores, acompanhe check-ins e mantenha a equipe olhando para o que importa:
              territorio, compromisso e proxima acao.
            </p>
            <div className="supporter-hero-actions">
              <a href="#cadastros" className="supporter-primary">
                Cadastrar agora <ArrowRight size={18} />
              </a>
              <button type="button" className="supporter-secondary" onClick={loadPanel}>
                <RefreshCw size={17} /> Atualizar dados
              </button>
            </div>
          </div>

          <aside className="supporter-status-card">
            <Database size={23} />
            <span>Backend</span>
            <strong>{sourceLabel(source)}</strong>
            <p>As APIs usam Supabase quando configurado e mantem fallback demonstrativo para nao quebrar a operacao.</p>
          </aside>
        </div>
      </section>

      <section className="supporter-metrics" aria-label="Metricas do painel">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <metric.icon size={21} />
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.note}</p>
          </article>
        ))}
      </section>

      {message ? (
        <div className="supporter-message" role="status">
          <CheckCircle2 size={18} /> {message}
        </div>
      ) : null}

      <section className="supporter-workspace" id="cadastros">
        <div className="supporter-forms">
          <form className="supporter-form" onSubmit={handleLeader}>
            <div className="supporter-form-head">
              <UsersRound size={21} />
              <div><span>Lideranca</span><h2>Cadastrar lider</h2></div>
            </div>
            <label>Nome completo<input name="name" required placeholder="Ex: Ana Souza" /></label>
            <div className="supporter-form-grid">
              <label>WhatsApp<input name="phone" placeholder="(71) 99999-9999" /></label>
              <label>Cidade<input name="city" defaultValue="Candeias" /></label>
            </div>
            <div className="supporter-form-grid">
              <label>Bairro<input name="neighborhood" placeholder="Centro" /></label>
              <label>Papel<input name="role" defaultValue="Lider comunitario" /></label>
            </div>
            <button className="supporter-submit" disabled={submitting === "leader"}>
              {submitting === "leader" ? <Loader2 className="supporter-spin" size={17} /> : <UserPlus size={17} />}
              Salvar lideranca
            </button>
          </form>

          <form className="supporter-form" onSubmit={handleSupporter}>
            <div className="supporter-form-head">
              <UserPlus size={21} />
              <div><span>Apoiador</span><h2>Cadastrar apoiador</h2></div>
            </div>
            <label>Nome completo<input name="name" required placeholder="Ex: Carlos Lima" /></label>
            <div className="supporter-form-grid">
              <label>WhatsApp<input name="phone" required placeholder="(71) 99999-9999" /></label>
              <label>Cidade<input name="city" defaultValue="Candeias" /></label>
            </div>
            <label>Bairro ou comunidade<input name="neighborhood" placeholder="Bairro, distrito ou comunidade" /></label>
            <button className="supporter-submit" disabled={submitting === "supporter"}>
              {submitting === "supporter" ? <Loader2 className="supporter-spin" size={17} /> : <ShieldCheck size={17} />}
              Salvar apoiador
            </button>
          </form>

          <form className="supporter-form supporter-form-dark" onSubmit={handleCheckin}>
            <div className="supporter-form-head">
              <Activity size={21} />
              <div><span>Campo</span><h2>Registrar check-in</h2></div>
            </div>
            <div className="supporter-form-grid">
              <label>Tipo<input name="type" defaultValue="Visita" /></label>
              <label>Local<input name="location" required placeholder="Bairro ou evento" /></label>
            </div>
            <label>Resumo<textarea name="description" placeholder="O que aconteceu, quem participou, proxima acao..." /></label>
            <button className="supporter-submit" disabled={submitting === "checkin"}>
              {submitting === "checkin" ? <Loader2 className="supporter-spin" size={17} /> : <MapPin size={17} />}
              Registrar check-in
            </button>
          </form>
        </div>

        <div className="supporter-lists">
          <article className="supporter-list-card">
            <div className="supporter-list-head">
              <div><span>Rede</span><h2>Apoiadores recentes</h2></div>
              <strong>{supporters.length}</strong>
            </div>
            {supporters.slice(0, 8).map((supporter) => (
              <div className="supporter-row-live" key={`${supporter.phone}-${supporter.name}`}>
                <i>{initials(supporter.name)}</i>
                <div>
                  <strong>{supporter.name}</strong>
                  <span>{supporter.neighborhood ?? "Sem bairro"} / {supporter.city ?? "Candeias"} / {supporter.phone}</span>
                </div>
                <em>{supporter.status ?? "Novo"}</em>
              </div>
            ))}
          </article>

          <article className="supporter-list-card">
            <div className="supporter-list-head">
              <div><span>Lideres</span><h2>Base de liderancas</h2></div>
              <strong>{leaders.length}</strong>
            </div>
            {leaders.slice(0, 6).map((leader) => (
              <div className="supporter-row-live" key={`${leader.email}-${leader.name}`}>
                <i>{initials(leader.name)}</i>
                <div>
                  <strong>{leader.name}</strong>
                  <span>{leader.role ?? leader.level ?? "Lider"} / {leader.neighborhood ?? "territorio"} / {leader.phone ?? "sem telefone"}</span>
                </div>
                <em>{leader.points ?? 0} pts</em>
              </div>
            ))}
          </article>

          <article className="supporter-list-card">
            <div className="supporter-list-head">
              <div><span>Operacao</span><h2>Check-ins recentes</h2></div>
              <strong>{checkins.length}</strong>
            </div>
            {checkins.slice(0, 6).map((checkin, index) => (
              <div className="supporter-row-live" key={`${checkin.id ?? index}-${checkin.type}`}>
                <i><MapPin size={15} /></i>
                <div>
                  <strong>{checkin.type}</strong>
                  <span>{checkin.location ?? checkin.text ?? checkin.description ?? "Atividade registrada"} / {formatWhen(checkin.created_at ?? checkin.time)}</span>
                </div>
                <em>{checkin.points ?? 0} pts</em>
              </div>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
