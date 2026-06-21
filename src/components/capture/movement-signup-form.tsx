"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle, ShieldCheck, UserRound } from "lucide-react";

const whatsappNumber = "5571997238027";
const baseMessage = "Vim do site";

type FormState = "idle" | "loading" | "success" | "error";

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function MovementSignupForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("Candeias");
  const [consent, setConsent] = useState(true);

  const whatsappHref = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || onlyDigits(phone).length < 10 || !consent) {
      setState("error");
      setError("Preencha nome, WhatsApp valido e aceite receber mensagens do movimento.");
      return;
    }

    setState("loading");

    try {
      const response = await fetch("/api/leader/supporters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          neighborhood: neighborhood || "Nao informado",
          city: city || "Candeias",
          status: "Assinou pela LP antes/depois",
          points: 15,
          tags: ["LP", "AntesDepois", "WhatsApp", "Opt-in"],
        }),
      });

      if (!response.ok) throw new Error("Erro ao cadastrar apoiador.");

      setState("success");
      window.location.href = whatsappHref;
    } catch {
      setState("error");
      setError("Nao consegui concluir o cadastro agora. Tente pelo botao de WhatsApp.");
    }
  }

  return (
    <form className="capture-form" onSubmit={handleSubmit}>
      <div className="capture-form-head">
        <div className="capture-form-icon"><UserRound size={22} /></div>
        <div>
          <span>Assinar o movimento</span>
          <h2>Receba as provas, agendas e proximas acoes no WhatsApp.</h2>
        </div>
      </div>

      <label htmlFor="capture-name">Nome completo</label>
      <input
        id="capture-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Digite seu nome"
        autoComplete="name"
        required
      />

      <label htmlFor="capture-phone">WhatsApp</label>
      <input
        id="capture-phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="(71) 99999-9999"
        autoComplete="tel"
        inputMode="tel"
        required
      />

      <div className="capture-form-grid">
        <div>
          <label htmlFor="capture-neighborhood">Bairro</label>
          <input
            id="capture-neighborhood"
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
            placeholder="Seu bairro"
            autoComplete="address-level3"
          />
        </div>
        <div>
          <label htmlFor="capture-city">Cidade</label>
          <input
            id="capture-city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Sua cidade"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <label className="capture-consent" htmlFor="capture-consent">
        <input
          id="capture-consent"
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span>Autorizo receber mensagens do movimento Receita Certa pelo WhatsApp. Posso sair quando quiser.</span>
      </label>

      {error ? <p className="capture-error" role="alert">{error}</p> : null}
      {state === "success" ? (
        <p className="capture-success" role="status"><CheckCircle2 size={17} /> Cadastro recebido. O WhatsApp foi aberto para confirmar sua entrada.</p>
      ) : null}

      <button className="capture-submit" type="submit" disabled={state === "loading"}>
        {state === "loading" ? <Loader2 className="capture-spin" size={18} /> : <MessageCircle size={18} />}
        Entrar no WhatsApp do movimento
      </button>

      <a className="capture-whatsapp-link" href={whatsappHref}>
        <ShieldCheck size={16} />
        Prefiro chamar direto no WhatsApp
      </a>
    </form>
  );
}
