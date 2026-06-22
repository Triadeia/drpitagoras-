"use client";

import { FormEvent, useMemo, useState } from "react";

const WHATSAPP = "5571997238027";

const photos = [
  { id: "1_b_7Ic4lPbyQWA1c3-NL45vFi2NPYVVe", title: "Biblioteca publica", label: "Antes e depois" },
  { id: "1kfWKgsYbPOlEQ_Asf9NxAveymKeLHgFe", title: "Sala renovada", label: "Depois" },
  { id: "1lRNTk6GG8pfYJZLWYgNq7vy88E8bLu8d", title: "Espaco de leitura", label: "Depois" },
  { id: "1XEq6f2zJ4jX_ySE42XD7mA4NE-JB_VFk", title: "Fachada recuperada", label: "Comparacao" },
  { id: "105BYboTYcQuzvti3rIi42u3wJeJALFTK", title: "Ambiente reformado", label: "Depois" },
  { id: "1eexKiZ3bJfw1VylMQqEwbml_yg_kWT8Z", title: "Area interna", label: "Depois" },
  { id: "1rrSUXWEikZC1AZNEJ7x5RfJ8s8YQ6vQD", title: "Acervo e mobiliario", label: "Depois" },
  { id: "1SnqWVR7Sr8emPSNkoP31lUjg1KhA-yTE", title: "Banheiros e estrutura", label: "Antes e depois" },
  { id: "1A7Eck0x-HLGRgQc4tujdmnx_tveQg4G3", title: "Espaco infantil", label: "Depois" },
  { id: "1HEIVJXjNFHzGnGqo92W34yRraohfynMH", title: "Auditorio", label: "Depois" },
  { id: "1vAnJ1uPdA07ui-BvMPushHAonTuIirT1", title: "Area externa", label: "Antes e depois" },
  { id: "1AWm0-oCruq35QYmkeNx4hxmod6cOyP3A", title: "Sala de estudos", label: "Depois" },
];

function driveImage(id: string, size = 1600) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

export default function ObrasLandingPage() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [interest, setInterest] = useState("Quero receber as fotos e materiais das obras");

  const whatsappUrl = useMemo(() => {
    const message = [
      "Ola, equipe do Dr. Pitagoras. Vim pela LP das obras.",
      name ? `Nome: ${name}` : null,
      city ? `Bairro/cidade: ${city}` : null,
      interest ? `Interesse: ${interest}` : null,
    ].filter(Boolean).join("\n");

    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  }, [city, interest, name]);

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="lp-obras">
      <style>{styles}</style>

      <section className="hero">
        <div className="heroGlow" />
        <nav className="topNav">
          <a href="/" className="brand">Dr. Pitagoras</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="navButton">Falar no WhatsApp</a>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy reveal">
            <span className="kicker">Obras feitas / Biblioteca Publica</span>
            <h1>O antes e depois que aparece na vida das pessoas.</h1>
            <p>
              Uma pagina para reunir as fotos da pasta comparacao, apresentar as entregas com clareza e levar o cidadao direto para o atendimento da equipe.
            </p>
            <div className="heroActions">
              <a href="#comparacao" className="primary">Ver as fotos</a>
              <a href="#lead" className="secondary">Receber no WhatsApp</a>
            </div>
          </div>

          <div className="heroVisual reveal delay1">
            <img src={driveImage(photos[0].id, 1800)} alt="Comparativo de obra da Biblioteca Publica" />
            <div className="stamp">ANTES / DEPOIS</div>
          </div>
        </div>
      </section>

      <section className="numbers reveal" aria-label="Resumo das provas visuais">
        <article><strong>12</strong><span>fotos iniciais da pasta comparacao</span></article>
        <article><strong>100%</strong><span>fonte visual do Drive enviado</span></article>
        <article><strong>1 clique</strong><span>lead direto para o WhatsApp</span></article>
      </section>

      <section className="intro reveal">
        <span className="sectionTag">Narrativa visual</span>
        <h2>Quando a pessoa rola, a obra vai se revelando.</h2>
        <p>
          A experiencia foi pensada para campanha politica institucional: fotos grandes, transicoes suaves, texto enxuto e chamadas para conversa. Nada de excesso. A imagem carrega a prova.
        </p>
      </section>

      <section id="comparacao" className="story">
        {photos.slice(0, 6).map((photo, index) => (
          <article className="storyRow reveal" key={photo.id}>
            <div className="storyText">
              <span>0{index + 1}</span>
              <h3>{photo.title}</h3>
              <p>{photo.label} registrado na pasta de comparacao da Biblioteca Publica, com tratamento visual na paleta azul, verde e amarelo do movimento.</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Quero saber mais</a>
            </div>
            <figure className="photoFrame">
              <img src={driveImage(photo.id, 1800)} alt={`${photo.title} - ${photo.label}`} loading="lazy" />
              <figcaption>{photo.label}</figcaption>
            </figure>
          </article>
        ))}
      </section>

      <section className="galleryBlock">
        <div className="intro light reveal">
          <span className="sectionTag">Galeria completa</span>
          <h2>Mais registros da pasta comparacao.</h2>
          <p>Cards com ritmo editorial para redes, reunioes e compartilhamento com apoiadores.</p>
        </div>
        <div className="gallery">
          {photos.map((photo, index) => (
            <figure className="galleryCard reveal" key={`${photo.id}-grid`} style={{ animationDelay: `${index * 35}ms` }}>
              <img src={driveImage(photo.id, 1200)} alt={photo.title} loading="lazy" />
              <figcaption>{photo.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="lead" className="lead reveal">
        <div>
          <span className="kicker">Atendimento da equipe</span>
          <h2>Quer receber os materiais ou indicar uma demanda?</h2>
          <p>Preencha e a conversa abre no WhatsApp 71 99723-8027 com a mensagem pronta.</p>
        </div>
        <form onSubmit={submitLead} className="leadForm">
          <label>
            Nome
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu nome" />
          </label>
          <label>
            Bairro ou cidade
            <input value={city} onChange={(event) => setCity(event.target.value)} placeholder="Ex.: Candeias, Caroba..." />
          </label>
          <label>
            Interesse
            <select value={interest} onChange={(event) => setInterest(event.target.value)}>
              <option>Quero receber as fotos e materiais das obras</option>
              <option>Quero falar com o atendimento</option>
              <option>Quero indicar uma demanda da minha comunidade</option>
              <option>Quero participar do movimento</option>
            </select>
          </label>
          <button type="submit">Enviar para o WhatsApp</button>
        </form>
      </section>
    </main>
  );
}

const styles = `
:root { --blue:#377fbe; --deep:#08213b; --orange:#f7a12f; --green:#49b51f; --yellow:#ffd21f; --paper:#f7fbff; --ink:#10243a; }
.lp-obras { min-height:100vh; background:var(--paper); color:var(--ink); font-family:var(--font-manrope), system-ui, sans-serif; overflow:hidden; }
.lp-obras * { box-sizing:border-box; }
.lp-obras a { text-decoration:none; }
.hero { position:relative; min-height:100vh; padding:24px clamp(18px,4vw,70px) 70px; background:radial-gradient(circle at 82% 12%, rgba(73,181,31,.28), transparent 28%), linear-gradient(135deg, #062448 0%, #0f72bd 58%, #fff 58.2%); }
.heroGlow { position:absolute; inset:auto -12% -22% auto; width:620px; height:620px; border-radius:50%; background:rgba(255,210,31,.24); filter:blur(40px); }
.topNav { position:relative; z-index:2; display:flex; align-items:center; justify-content:space-between; gap:18px; }
.brand { color:white; font-weight:950; font-size:18px; letter-spacing:-.04em; }
.navButton { min-height:42px; display:inline-flex; align-items:center; border-radius:999px; padding:0 18px; background:var(--yellow); color:#09213c; font-size:13px; font-weight:900; box-shadow:0 16px 36px rgba(255,210,31,.25); }
.heroGrid { position:relative; z-index:1; width:min(1220px,100%); margin:0 auto; min-height:calc(100vh - 120px); display:grid; grid-template-columns:1fr .82fr; gap:clamp(28px,6vw,80px); align-items:center; }
.kicker,.sectionTag { display:inline-flex; width:max-content; max-width:100%; align-items:center; border-radius:999px; padding:9px 13px; color:#eaffea; background:rgba(73,181,31,.22); border:1px solid rgba(255,255,255,.16); font:900 11px var(--font-mono), monospace; letter-spacing:.12em; text-transform:uppercase; }
.hero h1 { margin:20px 0 0; color:white; font-size:clamp(45px,8vw,104px); line-height:.88; letter-spacing:-.08em; max-width:820px; }
.hero p { max-width:620px; margin:24px 0 0; color:rgba(255,255,255,.78); font-size:clamp(16px,2vw,21px); line-height:1.58; }
.heroActions { display:flex; flex-wrap:wrap; gap:12px; margin-top:32px; }
.primary,.secondary { min-height:54px; display:inline-flex; align-items:center; justify-content:center; border-radius:15px; padding:0 22px; font-weight:950; }
.primary { background:var(--yellow); color:#08213b; }
.secondary { color:white; border:1px solid rgba(255,255,255,.26); background:rgba(255,255,255,.1); }
.heroVisual { position:relative; border-radius:34px; padding:10px; background:linear-gradient(135deg,var(--yellow),var(--green) 45%,var(--blue)); box-shadow:0 40px 95px rgba(3,22,42,.35); transform:rotate(2deg); }
.heroVisual img { width:100%; aspect-ratio:4/5; object-fit:cover; display:block; border-radius:25px; filter:saturate(1.05) contrast(1.04); }
.stamp { position:absolute; left:28px; right:28px; bottom:28px; min-height:48px; display:grid; place-items:center; border-radius:999px; color:white; background:rgba(8,33,59,.88); font-weight:950; letter-spacing:.08em; }
.numbers { position:relative; z-index:5; width:min(1080px,calc(100% - 36px)); margin:-46px auto 86px; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
.numbers article { min-height:122px; padding:24px; border-radius:24px; background:white; box-shadow:0 26px 70px rgba(7,29,54,.10); border:1px solid rgba(55,127,190,.12); }
.numbers strong { display:block; color:var(--blue); font-size:34px; letter-spacing:-.06em; }
.numbers span { display:block; margin-top:6px; color:#667587; font-size:13px; line-height:1.4; }
.intro { width:min(860px,calc(100% - 36px)); margin:0 auto 44px; text-align:left; }
.intro .sectionTag { color:var(--blue); background:#eaf3fb; border-color:#d8ebfb; }
.intro h2,.lead h2 { margin:14px 0 0; font-size:clamp(34px,5.4vw,70px); line-height:.92; letter-spacing:-.065em; }
.intro p,.lead p { color:#667587; font-size:17px; line-height:1.7; }
.story { width:min(1160px,calc(100% - 36px)); margin:0 auto; }
.storyRow { display:grid; grid-template-columns:.82fr 1.18fr; gap:clamp(22px,5vw,72px); align-items:center; padding:38px 0; }
.storyRow:nth-child(even) .storyText { order:2; }
.storyText { position:sticky; top:96px; align-self:start; }
.storyText span { color:var(--yellow); font-size:76px; font-weight:950; letter-spacing:-.08em; text-shadow:0 12px 30px rgba(255,210,31,.22); }
.storyText h3 { margin:0; font-size:clamp(30px,4vw,56px); line-height:.96; letter-spacing:-.055em; }
.storyText p { color:#667587; line-height:1.72; font-size:16px; }
.storyText a { color:var(--blue); font-weight:950; }
.photoFrame,.galleryCard { position:relative; margin:0; overflow:hidden; background:#08213b; border-radius:30px; box-shadow:0 34px 80px rgba(8,33,59,.14); }
.photoFrame:before,.galleryCard:before { content:""; position:absolute; inset:0; z-index:1; background:linear-gradient(135deg, rgba(15,114,189,.22), transparent 40%, rgba(73,181,31,.18)), linear-gradient(0deg, rgba(8,33,59,.28), transparent 45%); mix-blend-mode:multiply; pointer-events:none; }
.photoFrame:after,.galleryCard:after { content:""; position:absolute; inset:15px; z-index:2; border:2px solid rgba(255,210,31,.88); border-radius:20px; pointer-events:none; }
.photoFrame img { width:100%; min-height:520px; max-height:680px; object-fit:cover; display:block; }
.photoFrame figcaption,.galleryCard figcaption { position:absolute; z-index:3; left:28px; bottom:26px; color:white; background:rgba(8,33,59,.82); border:1px solid rgba(255,255,255,.16); border-radius:999px; padding:10px 14px; font-weight:950; font-size:12px; }
.galleryBlock { margin-top:86px; padding:86px clamp(18px,4vw,70px); color:white; background:linear-gradient(180deg,#08213b,#0a4d8e); }
.intro.light .sectionTag { color:#eaffea; background:rgba(73,181,31,.18); border-color:rgba(255,255,255,.16); }
.intro.light h2 { color:white; }
.intro.light p { color:rgba(255,255,255,.7); }
.gallery { width:min(1220px,100%); margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.galleryCard { border-radius:24px; box-shadow:0 28px 70px rgba(0,0,0,.22); }
.galleryCard img { display:block; width:100%; aspect-ratio:3/4; object-fit:cover; filter:saturate(1.06) contrast(1.03); }
.galleryCard figcaption { left:16px; right:16px; bottom:16px; text-align:center; }
.lead { width:min(1100px,calc(100% - 36px)); margin:82px auto; display:grid; grid-template-columns:.88fr 1.12fr; gap:34px; align-items:center; padding:clamp(24px,5vw,58px); border-radius:34px; color:white; background:linear-gradient(135deg,#0f72bd,#06305c); box-shadow:0 32px 90px rgba(15,114,189,.24); }
.lead .kicker { background:rgba(255,255,255,.12); }
.lead p { color:rgba(255,255,255,.74); }
.leadForm { display:grid; gap:12px; }
.leadForm label { display:grid; gap:7px; color:rgba(255,255,255,.78); font-size:12px; font-weight:850; }
.leadForm input,.leadForm select { min-height:52px; width:100%; border:1px solid rgba(255,255,255,.18); border-radius:14px; background:white; color:#08213b; padding:0 14px; outline:none; }
.leadForm button { min-height:56px; border:0; border-radius:15px; color:#08213b; background:var(--yellow); font-weight:950; cursor:pointer; }
.reveal { animation:reveal both; animation-timeline:view(); animation-range:entry 5% cover 30%; }
.delay1 { animation-delay:120ms; }
@keyframes reveal { from { opacity:0; transform:translateY(34px) scale(.985); filter:blur(8px); } to { opacity:1; transform:translateY(0) scale(1); filter:blur(0); } }
@media (prefers-reduced-motion: reduce) { .reveal { animation:none; } }
@media (max-width: 920px) { .hero { min-height:auto; background:linear-gradient(180deg,#062448,#0f72bd 76%,#fff 76%); } .heroGrid,.numbers,.storyRow,.gallery,.lead { grid-template-columns:1fr; } .heroGrid { min-height:auto; padding-top:74px; } .heroVisual { transform:none; } .storyRow:nth-child(even) .storyText { order:0; } .storyText { position:static; } .photoFrame img { min-height:360px; } }
@media (max-width: 560px) { .topNav { align-items:flex-start; flex-direction:column; } .hero h1 { font-size:46px; } .numbers { margin-top:26px; } .gallery { grid-template-columns:1fr; } }
`;
