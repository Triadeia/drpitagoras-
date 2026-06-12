# 📤 Instruções para Push no GitHub

O repositório **drpitagoras** está pronto para ser enviado ao GitHub.

## ✅ Status Atual

```bash
$ git log --oneline
438f309 Initial commit: Dr. Pitágoras - Receita Certa 2026 movement structure
```

**Arquivos inclusos:**
- ✅ Estrutura Next.js 16 + React 19 + TypeScript (painel/)
- ✅ Documentação do Movimento (MOVIMENTO.md)
- ✅ 30 Peças de Copy Prontas (COPY-30-PECAS.md)
- ✅ Configuração Vercel (vercel.json)
- ✅ README completo

## 🚀 Push para GitHub

### Opção 1: Via CLI (SSH - Recomendado)

```bash
# 1. Adicionar remote
git remote add origin git@github.com:Triadeia/drpitagoras-.git

# 2. Fazer push do main
git branch -M main
git push -u origin main

# 3. Verificar
git remote -v
```

### Opção 2: Via CLI (HTTPS)

```bash
# 1. Adicionar remote
git remote add origin https://github.com/Triadeia/drpitagoras-.git

# 2. Fazer push
git branch -M main
git push -u origin main
```

### Opção 3: Via GitHub Desktop

1. Abra GitHub Desktop
2. File → Add Local Repository
3. Selecione `/tmp/drpitagoras`
4. Publish to GitHub
5. Nome: `drpitagoras-`
6. Descrição: "Painel do movimento Receita Certa - Dr. Pitágoras 2026"
7. Organization: Triadeia
8. Public ✅

---

## 🔧 Após o Push

### 1. Verificar no GitHub

```bash
# Clonar de volta para testar
cd ~/tmp
git clone git@github.com:Triadeia/drpitagoras-.git
cd drpitagoras-
npm install
npm run check
```

### 2. Configurar Vercel

```bash
# Fazer deploy na Vercel
cd ~/painel
vercel --prod

# OU via GitHub:
# 1. Ir para vercel.com
# 2. New Project
# 3. Selecionar repositório Triadeia/drpitagoras-
# 4. Framework: Next.js
# 5. Root Directory: painel
# 6. Deploy
```

### 3. Resultado Esperado

- 🌍 **URL Vercel:** `https://drpitagoras.vercel.app`
- 📊 **Painel:** Dashboard autenticado
- 📱 **Movimento:** Página com história e valores
- 🎯 **Propostas:** Propostas para ALBA
- ❤️ **Apoie:** Call-to-action para movimento

---

## ⚙️ Variáveis de Ambiente (Vercel)

Após criar o projeto no Vercel, adicionar no Settings:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
```

---

## 📋 Checklist Final

- [ ] Repository criado em `Triadeia/drpitagoras-`
- [ ] Push realizado com sucesso
- [ ] Vercel conectado ao repositório
- [ ] Variáveis de ambiente configuradas
- [ ] Primeiro deploy realizado
- [ ] URL pública acessível

---

## 🔗 Links Finais

Após tudo pronto:

- **GitHub:** `https://github.com/Triadeia/drpitagoras-`
- **Vercel:** `https://drpitagoras.vercel.app`
- **Manifesto Local:** `http://localhost:3000` (dev)

---

**"De uma nova Candeias para uma nova Bahia."**
