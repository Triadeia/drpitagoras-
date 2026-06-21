export const phases = [
  { name: "Candeias Prova", range: "Semanas 1–4", progress: 72, status: "Em curso" },
  { name: "A Bahia que Pode Ser", range: "Semanas 5–8", progress: 34, status: "Preparação" },
  { name: "Receita Certa para a Bahia", range: "Semanas 9–13", progress: 12, status: "Planejamento" },
];

export const priorities = [
  { title: "Validar fontes dos proof points", owner: "Inteligência", due: "Hoje", priority: "Crítica", score: 98 },
  { title: "Produzir vídeo “A UTI que não existia”", owner: "Conteúdo", due: "14 jun", priority: "Alta", score: 94 },
  { title: "Aprovar manifesto com o candidato", owner: "Direção", due: "15 jun", priority: "Alta", score: 91 },
  { title: "Configurar opt-in da comunidade", owner: "Digital", due: "17 jun", priority: "Alta", score: 88 },
  { title: "Mapear primeiros 50 multiplicadores", owner: "Território", due: "18 jun", priority: "Média", score: 83 },
];

export const contentItems = [
  { code: "N7-001", title: "A UTI que não existia", format: "Reels 60s", phase: "Conhecer", status: "Roteiro", doctrine: "DOC-008" },
  { code: "N7-002", title: "84%: o número que importa", format: "Carrossel", phase: "Confiar", status: "Validar dados", doctrine: "DOC-008" },
  { code: "N7-003", title: "Prometer saúde x entregar UTI", format: "Reels 30s", phase: "Confiar", status: "Briefing", doctrine: "DOC-007" },
  { code: "N7-004", title: "A escola que mudou", format: "Vídeo 90s", phase: "Confiar", status: "Coletar acervo", doctrine: "DOC-003" },
  { code: "N7-005", title: "O interior cansou", format: "Texto", phase: "Propagar", status: "Pronto", doctrine: "DOC-002" },
  { code: "N7-007", title: "O que muda na ALBA?", format: "Infográfico", phase: "Confiar", status: "Revisão jurídica", doctrine: "DOC-010" },
];

export const proofPoints = [
  { claim: "Primeira UTI de Candeias", source: "Hospital Ouro Negro / imprensa", state: "Pendente", owner: "Pesquisa" },
  { claim: "1 milhão+ de atendimentos", source: "Relatório de gestão 2024", state: "Pendente", owner: "Dados" },
  { claim: "84% de aprovação", source: "Pesquisas públicas citadas", state: "Pendente", owner: "Pesquisa" },
  { claim: "Reforma das escolas municipais", source: "Secretaria / acervo antes e depois", state: "Em coleta", owner: "Acervo" },
  { claim: "Vereador mais votado em 2012", source: "TSE", state: "Validar", owner: "Jurídico" },
  { claim: "Reeleito com 52,97% em 2020", source: "TSE", state: "Validar", owner: "Jurídico" },
];

export const territories = [
  { city: "Candeias", region: "RMS", strength: 92, status: "Base consolidada", leaders: 18 },
  { city: "Simões Filho", region: "RMS", strength: 64, status: "Expansão", leaders: 7 },
  { city: "Dias d’Ávila", region: "RMS", strength: 52, status: "Mapeamento", leaders: 5 },
  { city: "Amélia Rodrigues", region: "Portal do Sertão", strength: 43, status: "Aliança local", leaders: 3 },
  { city: "Entre Rios", region: "Litoral Norte", strength: 38, status: "Aliança local", leaders: 3 },
  { city: "Brejões", region: "Vale do Jiquiriçá", strength: 29, status: "Primeiro contato", leaders: 2 },
];

export const doctrines = [
  ["DOC-001", "De uma nova Candeias para uma nova Bahia."],
  ["DOC-002", "A Bahia é de quem constrói o interior."],
  ["DOC-003", "A Receita Certa não é promessa. É método."],
  ["DOC-006", "Resultado é a única ideologia que importa."],
  ["DOC-007", "Saúde não é de esquerda nem de direita."],
  ["DOC-008", "8 anos. 84%. Candeias mudou."],
];

export const leaderProfile = {
  name: "Joao Gabriel",
  role: "Lider da Campanha",
  email: "lider@drpitagoras.com.br",
  phone: "(71) 99723-8027",
  city: "Candeias",
  neighborhood: "Nova Candeias",
  inviteUrl: "https://dr-pitagoras.vercel.app/cadastro/joao-gabriel",
  points: 186,
  level: "Mobilizador Prata",
  loginHint: "lider@drpitagoras.com.br",
  passwordHint: "pitagoras2026",
};

export const supporters = [
  { name: "Maria Clara Santos", phone: "(71) 98814-2210", neighborhood: "Centro", city: "Candeias", status: "Confirmado", points: 34, tags: ["Saude", "Familia"] },
  { name: "Rafael Oliveira", phone: "(71) 98120-3378", neighborhood: "Malemba", city: "Candeias", status: "Contato quente", points: 21, tags: ["Juventude"] },
  { name: "Ana Paula Reis", phone: "(71) 99744-9031", neighborhood: "Urucara", city: "Candeias", status: "Visita marcada", points: 18, tags: ["Educacao"] },
  { name: "Carlos Henrique", phone: "(71) 98602-1198", neighborhood: "Santo Antonio", city: "Candeias", status: "Novo cadastro", points: 12, tags: ["Comercio"] },
  { name: "Juliana Ferreira", phone: "(71) 99935-6450", neighborhood: "Sarandi", city: "Candeias", status: "Observacao", points: 9, tags: ["Comunidade"] },
];

export const leaderGoals = [
  { title: "Cadastrar 25 apoiadores", progress: 20, current: 5, target: 25, reward: 80 },
  { title: "Realizar 3 check-ins de rua", progress: 33, current: 1, target: 3, reward: 45 },
  { title: "Mapear 5 liderancas locais", progress: 40, current: 2, target: 5, reward: 60 },
];

export const leaderActivities = [
  { type: "Cadastro", text: "Maria Clara entrou na rede pelo convite", time: "Hoje, 09:12", points: 12 },
  { type: "Check-in", text: "Visita registrada no bairro Malemba", time: "Ontem, 17:40", points: 18 },
  { type: "Meta", text: "Primeiro grupo de apoiadores iniciado", time: "15 jun, 20:06", points: 25 },
];

export const leaderAnnouncements = [
  { title: "Nova narrativa em campo", text: "Novo movimento, nova narrativa: foco em resultado verificavel e cuidado com o interior.", priority: "Alta" },
  { title: "Prova antes de promessa", text: "Todo material com numeros deve citar fonte e responsavel pela validacao.", priority: "Operacional" },
];
