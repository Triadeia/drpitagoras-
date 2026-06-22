import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  HeartPulse,
  MapPin,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { MovementSignupForm } from "@/components/capture/movement-signup-form";

export const metadata: Metadata = {
  title: "Dr. Pitagoras | Movimento Receita Certa",
  description:
    "Entre para o movimento Receita Certa. Uma landing page para captar apoiadores, parceiros e liderancas politicas do Dr. Pitagoras.",
};

const whatsappHref =
  "https://wa.me/5571997238027?text=Quero%20entrar%20no%20movimento%20Receita%20Certa%20como%20apoiador%20ou%20lideranca.";

const instagramPostUrl = "https://www.instagram.com/p/DN6bZN2Eqke/";
const instagramEmbedUrl = "https://www.instagram.com/p/DN6bZN2Eqke/embed/";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Resultado antes de promessa",
    text: "A conversa com novos parceiros comeca pela prova: Candeias como exemplo real de gestao, cuidado e entrega.",
  },
  {
    icon: UsersRound,
    title: "Rede de liderancas",
    text: "Apoio nao e so curtida. A LP captura quem quer organizar bairro, comunidade, grupo ou cidade em torno da Receita Certa.",
  },
  {
    icon: ShieldCheck,
    title: "Opt-in e consentimento",
    text: "Lead entra pelo formulario e pelo WhatsApp com mensagem clara, respeitando permissao e rastreio de origem.",
  },
];

const partnerProfiles = [
  "Lideranca comunitaria que quer organizar sua regiao",
  "Apoiador que quer receber provas e agendas no WhatsApp",
  "Profissional de saude, educacao ou servico publico que quer participar",
  "Parceiro politico que acredita no interior como protagonista",
];

export default function Home() {
  return (
    <main className="home-lp">
      <section className="home-hero">
        <nav className="home-nav" aria-label="Navegacao principal">
          <Link href="/" className="home-logo" aria-label="Pagina inicial Dr. Pitagoras">
            <Image src="/logo_pitagoras_branco.png" alt="Dr. Pitagoras" width={224} height={38} priority unoptimized />
          </Link>
          <div className="home-nav-actions">
            <Link href="/obras">Ver obras</Link>
            <a href={whatsappHref}>
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </nav>

        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <span className="home-kicker">Receita Certa 2026 / Movimento de apoiadores</span>
            <h1>A Bahia precisa de quem ja provou que sabe cuidar.</h1>
            <p>
              Entre para a rede de apoiadores, parceiros e liderancas politicas do Dr. Pitagoras.
              A Receita Certa nasceu de um metodo simples: diagnostico, plano, execucao e resultado visivel.
            </p>
            <div className="home-hero-actions">
              <a className="home-primary" href="#entrar">
                Quero ser parceiro <ArrowRight size={18} />
              </a>
              <a className="home-secondary" href={instagramPostUrl} target="_blank" rel="noreferrer">
                <PlayCircle size={18} />
                Ver video no Instagram
              </a>
            </div>
            <div className="home-trust-row" aria-label="Pontos de confianca">
              <span><CheckCircle2 size={15} /> Movimento com opt-in</span>
              <span><CheckCircle2 size={15} /> Foco em liderancas</span>
              <span><CheckCircle2 size={15} /> Prova antes de promessa</span>
            </div>
          </div>

          <aside className="home-photo-card" aria-label="Dr. Pitagoras">
            <div className="home-photo">
              <Image
                src="/campanha/pitagoras-eu-to-com.jpeg"
                alt="Dr. Pitagoras em arte de campanha Eu to com"
                fill
                sizes="(max-width: 900px) 88vw, 420px"
                priority
                unoptimized
              />
            </div>
            <div className="home-photo-caption">
              <span>Chamada oficial</span>
              <strong>De uma nova Candeias para uma nova Bahia.</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-video-section" aria-labelledby="video-title">
        <div className="home-video-copy">
          <span className="home-kicker">Video indexado no projeto</span>
          <h2 id="video-title">Assista ao recado e escolha seu papel no movimento.</h2>
          <p>
            Este video entra como peca de abertura da home: primeiro cria presenca, depois conduz para a captura.
            Quem se identifica ja desce para se cadastrar como apoiador ou lideranca.
          </p>
          <a href="#entrar" className="home-inline-cta">
            Entrar na rede agora <ArrowRight size={17} />
          </a>
        </div>
        <div className="home-video-frame">
          <iframe
            src={instagramEmbedUrl}
            title="Video do Instagram do Dr. Pitagoras"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </section>

      <section className="home-pillars" aria-label="Pilares da landing page">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="home-pillar-card">
            <pillar.icon size={24} />
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="home-partners">
        <div>
          <span className="home-kicker">Quem deve entrar</span>
          <h2>Uma pagina para converter curiosidade em compromisso politico.</h2>
        </div>
        <div className="home-partner-list">
          {partnerProfiles.map((profile) => (
            <div key={profile}>
              <CheckCircle2 size={18} />
              <span>{profile}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-signup" id="entrar">
        <div className="home-signup-copy">
          <span className="home-kicker">Captura de parceiros</span>
          <h2>Cadastre seu contato e fale com a equipe pelo WhatsApp.</h2>
          <p>
            O cadastro registra a origem do lead e abre a conversa com o atendimento no numero 71 99723-8027.
            A equipe pode separar apoiador, lideranca, parceiro politico e voluntario de campo.
          </p>
          <div className="home-location-note">
            <MapPin size={19} />
            <span>Base inicial em Candeias, com expansao para quem acredita que a Bahia tambem se constroi pelo interior.</span>
          </div>
          <div className="home-mini-proof">
            <div><strong>8 anos</strong><span>gestao para comparar</span></div>
            <div><strong>84%</strong><span>usar com fonte validada</span></div>
            <div><strong>1 rede</strong><span>apoiadores e liderancas</span></div>
          </div>
        </div>
        <MovementSignupForm />
      </section>

      <section className="home-final-cta">
        <HeartPulse size={31} />
        <h2>Resultado bom nao fica parado. Resultado bom vira movimento.</h2>
        <p>Entre, receba as provas certas e ajude a levar a Receita Certa para mais gente.</p>
        <a href={whatsappHref}>
          <MessageCircle size={18} />
          Falar com o atendimento
        </a>
      </section>
    </main>
  );
}
