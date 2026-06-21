import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, HeartPulse, MapPin, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";
import { MovementSignupForm } from "@/components/capture/movement-signup-form";

export const metadata: Metadata = {
  title: "Assine o Movimento | Antes e Depois de Candeias",
  description: "Entre no movimento Receita Certa pelo WhatsApp e acompanhe as provas da transformacao de Candeias com Dr. Pitagoras.",
};

const whatsappHref = "https://wa.me/5571997238027?text=Vim%20do%20site";

const proofCards = [
  {
    icon: ClipboardCheck,
    title: "Prova antes de promessa",
    text: "Antes de pedir confianca para a Bahia, o movimento mostra o que ja foi feito em Candeias.",
  },
  {
    icon: ShieldCheck,
    title: "Metodo verificavel",
    text: "Diagnostico, plano, execucao e resultado. A Receita Certa organiza o que a politica comum deixa solto.",
  },
  {
    icon: HeartPulse,
    title: "Cuidado que aparece",
    text: "Saude, escola, rua e equipamento publico precisam ser vistos por quem vive a cidade todos os dias.",
  },
];

const steps = [
  "Assine o movimento pelo formulario ou WhatsApp.",
  "Receba comparativos, fontes e chamadas de acao.",
  "Compartilhe a prova certa com sua comunidade.",
];

export default function AntesDepoisCapturePage() {
  return (
    <main className="capture-page">
      <section className="capture-hero">
        <nav className="capture-nav" aria-label="Navegacao da pagina">
          <Link href="/" className="capture-logo" aria-label="Voltar para a pagina inicial">
            <Image src="/logo_pitagoras_branco.png" alt="Dr. Pitagoras" width={224} height={38} priority unoptimized />
          </Link>
          <a href={whatsappHref} className="capture-nav-cta">
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </nav>

        <div className="capture-hero-grid">
          <div className="capture-hero-copy">
            <span className="capture-kicker">Receita Certa / Movimento oficial</span>
            <h1>Candeias mudou. Agora voce pode ajudar essa prova a chegar mais longe.</h1>
            <p>
              Assine o movimento para receber no WhatsApp os antes e depois, fontes, agendas e acoes de campo do Dr. Pitagoras.
              Aqui a confianca vem depois da prova.
            </p>
            <div className="capture-hero-actions">
              <a href="#assinar" className="capture-primary">
                Assinar o movimento <ArrowRight size={18} />
              </a>
              <a href={whatsappHref} className="capture-secondary">
                Falar no WhatsApp
              </a>
            </div>
            <div className="capture-trust-row" aria-label="Pilares da captura">
              <span><CheckCircle2 size={15} /> Opt-in claro</span>
              <span><CheckCircle2 size={15} /> Sem disparo ilegal</span>
              <span><CheckCircle2 size={15} /> Provas verificaveis</span>
            </div>
          </div>

          <aside className="capture-hero-card" aria-label="Assinatura do movimento">
            <div className="capture-photo-frame">
              <Image
                src="/campanha/pitagoras-eu-to-com.jpeg"
                alt="Dr. Pitagoras em arte de campanha com texto eu to com"
                fill
                sizes="(max-width: 900px) 88vw, 390px"
                priority
                unoptimized
              />
            </div>
            <div className="capture-card-copy">
              <span>Chamada de campo</span>
              <strong>Nao acredite. Compare.</strong>
              <p>As proximas mensagens vao mostrar obras, equipamentos e historias reais de Candeias.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="capture-proof-band" aria-label="Argumentos principais">
        {proofCards.map((card) => (
          <article key={card.title} className="capture-proof-card">
            <card.icon size={24} />
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="capture-story">
        <div>
          <span className="capture-kicker">De uma nova Candeias para uma nova Bahia</span>
          <h2>Uma LP de captura feita para transformar curiosidade em comunidade.</h2>
        </div>
        <p>
          O visitante entra pela imagem, entende o metodo e deixa o contato com consentimento.
          Depois, a equipe pode nutrir esse apoiador com comparativos de antes e depois, fontes e convites de mobilizacao.
        </p>
      </section>

      <section className="capture-steps" aria-label="Como funciona">
        {steps.map((step, index) => (
          <div key={step} className="capture-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </div>
        ))}
      </section>

      <section className="capture-signup-section" id="assinar">
        <div className="capture-signup-copy">
          <span className="capture-kicker">Assinar pelo WhatsApp</span>
          <h2>Entre para a lista do movimento Receita Certa.</h2>
          <p>
            Seu cadastro entra como apoiador da rede. A comunicacao deve ser usada para prova, agenda e mobilizacao,
            com saida simples e respeito ao consentimento.
          </p>
          <div className="capture-location-note">
            <MapPin size={19} />
            <span>Base inicial em Candeias, aberta para quem quer ver a Bahia construida a partir do interior.</span>
          </div>
          <div className="capture-mini-metrics">
            <div><strong>8 anos</strong><span>tempo para verificar</span></div>
            <div><strong>84%</strong><span>usar com fonte validada</span></div>
            <div><strong>1 clique</strong><span>entrada pelo WhatsApp</span></div>
          </div>
        </div>
        <MovementSignupForm />
      </section>

      <section className="capture-final-cta">
        <UsersRound size={30} />
        <h2>Resultado bom nao fica parado. Ele vira movimento.</h2>
        <p>Assine, receba as provas e ajude mais gente a comparar Candeias antes e depois.</p>
        <a href={whatsappHref}>
          <MessageCircle size={18} />
          Entrar agora pelo WhatsApp
        </a>
      </section>
    </main>
  );
}
