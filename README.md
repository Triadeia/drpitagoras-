# Dr. Pitágoras - Receita Certa 2026

**Movimento político da candidatura de Dr. Pitágoras à Assembleia Legislativa da Bahia**

📍 **Candidato:** Dr. Pitágoras Ibiapina  
🎯 **Cargo:** Deputado Estadual (ALBA)  
📅 **Eleição:** 4 de outubro de 2026  
🏠 **Base Territorial:** Candeias, RMS (Recôncavo Metropolitano)  

---

## 📋 O Movimento Receita Certa

**Grande Tese:** "De uma nova Candeias para uma nova Bahia."

O movimento Receita Certa se baseia no legado comprovado de 8 anos de gestão municipal:
- ✅ Primeira UTI de Candeias (10 leitos)
- ✅ 27 escolas reformadas
- ✅ 1+ milhão de atendimentos de saúde
- ✅ 84% de aprovação popular (Datafolha 2024)

**Diferencial:** Método replicável baseado em diagnóstico → plano → execução → resultado.

---

## 🎨 Painel Digital

Este repositório contém:

### `/painel` - Next.js + React + TypeScript
- Dashboard empresarial/político
- Integração com as 11 entregas do movimento
- Design System baseado em Receita Certa
- Cores: Verde + Branco + Azul-Marinho
- Deploy em Vercel (produção)

### Documentação
- `DESIGN.md` - Design System
- `BRAND.md` - Identidade visual Receita Certa
- `PROPOSTAS.md` - Propostas para a ALBA
- `MANIFESTO.md` - Manifesto oficial do movimento

---

## 🚀 Como começar

### Desenvolvimento Local

```bash
cd painel
npm install
npm run dev
```

Acesse `http://localhost:3000`

### Build para Produção

```bash
npm run build
npm start
```

### Verificações

```bash
npm run typecheck   # TypeScript check
npm run lint        # ESLint
npm run test        # Testes unitários
npm run check       # Tudo junto
```

---

## 📦 Estrutura do Projeto

```
drpitagoras/
├── painel/                    # Next.js 16 + React 19 + TypeScript
│   ├── src/
│   │   ├── app/               # App Router (Next.js)
│   │   │   ├── app/           # Dashboard autenticado
│   │   │   │   ├── dashboard/
│   │   │   │   ├── movimento/
│   │   │   │   ├── propostas/
│   │   │   │   └── apoie/
│   │   │   ├── page.tsx       # Home (landing)
│   │   │   ├── layout.tsx     # Layout raiz
│   │   │   └── api/           # API routes
│   │   ├── components/        # Componentes React
│   │   ├── lib/               # Utilitários
│   │   ├── styles/            # CSS global
│   │   └── env.ts             # Variáveis de ambiente
│   ├── public/                # Ativos estáticos
│   ├── package.json           # Dependências
│   ├── tsconfig.json          # TypeScript
│   ├── next.config.ts         # Configuração Next.js
│   └── tailwind.config.ts     # Tailwind CSS
├── vercel.json                # Configuração Vercel
└── README.md                  # Este arquivo

```

---

## 🎯 Páginas Principais

| Página | Rota | Descrição |
|--------|------|-----------|
| Home | `/` | Landing page do movimento |
| Dashboard | `/app/dashboard` | Painel principal (autenticado) |
| Movimento | `/app/movimento` | Histórico e valores |
| Propostas | `/app/propostas` | Propostas para ALBA |
| Apoie | `/app/apoie` | Call-to-action: voto + movimento |

---

## 🔐 Autenticação & Banco de Dados

- **Autenticação:** Supabase Auth
- **Banco de Dados:** Supabase PostgreSQL
- **Variáveis de Ambiente:** `.env.local`

### Setup Supabase

```bash
# Copiar template de ambiente
cp .env.example .env.local

# Adicionar credenciais Supabase
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

---

## 📱 Design System

**Cores Receita Certa:**
- Verde (Esperança/Ação): `#10b981`
- Branco (Clareza/Limpeza): `#ffffff`
- Azul-Marinho (Confiança/Seriedade): `#1e3a5f`
- Cinza (Neutro): `#64748b`

**Tipografia:**
- Headings: Francy (ou similar)
- Body: Geist (Google Fonts)
- Mono: Geist Mono

**Espaçamento:** Sistema de grid 8px (Tailwind)

---

## 🎬 Copy & Marketing

**30 peças prontas:** Hooks, reels, stories, textos de captação

Localização: Documentação do movimento (arquivos Markdown)

**Canais:**
- Instagram Reels/TikTok (conexão emocional)
- WhatsApp (opt-in comunitário)
- YouTube (profundidade/manifesto)
- Corpo a corpo regional (presencial)

---

## ✅ Compliance & Conformidade

**TSE - Resolução 23.610/2019:**
- ✅ Sem propaganda eleitoral antecipada (até 16/08/2026)
- ✅ Sem pedido explícito de voto (antes de 16/08)
- ✅ Identificação de responsável em toda peça
- ✅ Sem uso de bens públicos para campanha

**LGPD - Lei 13.709/2018:**
- ✅ WhatsApp com opt-in claro
- ✅ Dados com base legal documentada
- ✅ Descadastramento facilitado
- ✅ Política de privacidade pública

---

## 🔗 Links Importantes

- 📺 **Vercel Deploy:** [drpitagoras.vercel.app](https://drpitagoras.vercel.app)
- 🐙 **GitHub:** [github.com/Triadeia/drpitagoras-](https://github.com/Triadeia/drpitagoras-)
- 📋 **Estratégia:** [Receita Certa 2026 - Documento Completo](./ESTRATEGIA.md)

---

## 👥 Time

- **Candidato:** Dr. Pitágoras Ibiapina
- **Organização:** Triadeia Company
- **Desenvolvimento:** Claude Code + AIOS Agents
- **Design:** Design System Receita Certa

---

## 📄 Licença

UNLICENSED (Campanha Política Protegida)

---

## 🚀 Próximos Passos

- [ ] Deploy inicial na Vercel
- [ ] Integração com WhatsApp (backend)
- [ ] Páginas de propostas detalhadas
- [ ] Sistema de captação de apoiadores
- [ ] Analytics + tracking (TSE compliant)
- [ ] Publicação do manifesto
- [ ] Goes live: **16 de agosto de 2026**

---

**"De uma nova Candeias para uma nova Bahia."**

Receita Certa • Movimento Dr. Pitágoras 2026
