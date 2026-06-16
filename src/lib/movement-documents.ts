export type MovementDocumentStatus = "Publicado" | "Validar fonte" | "Em revisao";

export type MovementDocument = {
  id: string;
  code: string;
  title: string;
  type: string;
  category: string;
  territory: string;
  date: string;
  source: string;
  status: MovementDocumentStatus;
  summary: string;
  tags: string[];
  fileName: string;
  driveUrl?: string;
};

export const movementDocuments: MovementDocument[] = [
  {
    id: "doc-001",
    code: "DOC-001",
    title: "De uma nova Candeias para uma nova Bahia",
    type: "Doutrina estratégica",
    category: "Identidade central",
    territory: "Candeias / Bahia",
    date: "2026-06-16",
    source: "MOVIMENTO.md + doutrinas",
    status: "Validar fonte",
    summary: "Frame de origem do movimento: Candeias como prova viva de um método que pode ser replicado em escala estadual.",
    tags: ["origem", "candeias", "receita-certa", "prova-viva"],
    fileName: "DOC-001-de-uma-nova-candeias-para-uma-nova-bahia.md",
    driveUrl: "https://drive.google.com/file/d/1sdpD3f4AxMfERkYTCNo3Fmc_8xtNjpw2/view?usp=drivesdk",
  },
  {
    id: "doc-002",
    code: "DOC-002",
    title: "A Bahia é de quem constrói o interior",
    type: "Grande ideal",
    category: "Narrativa territorial",
    territory: "Interior da Bahia",
    date: "2026-06-16",
    source: "Estrategia_Movimento_ReceitaCerta_2026_PARTE1.md",
    status: "Validar fonte",
    summary: "Reposiciona o interior como sujeito político, econômico e simbólico da Bahia, com chamada de pertencimento comunitário.",
    tags: ["interior", "pertencimento", "movimento", "public-narrative"],
    fileName: "DOC-002-a-bahia-e-de-quem-constroi-o-interior.md",
    driveUrl: "https://drive.google.com/file/d/1oIbBFH_DnphIyYzZpNJfC8TnEiz6GR6x/view?usp=drivesdk",
  },
  {
    id: "doc-003",
    code: "DOC-003",
    title: "A Receita Certa não é promessa. É método",
    type: "Doutrina operacional",
    category: "Diferenciação competitiva",
    territory: "Candeias / Bahia",
    date: "2026-06-16",
    source: "PAINEL-GESTAO-LIDERANCA-IMPLEMENTACAO.md",
    status: "Validar fonte",
    summary: "Transforma promessa eleitoral em método verificável: diagnóstico, plano, execução, transparência e resultado.",
    tags: ["metodo", "gestao", "resultado-verificavel", "receita-certa"],
    fileName: "DOC-003-a-receita-certa-nao-e-promessa-e-metodo.md",
    driveUrl: "https://drive.google.com/file/d/1FlaDHce5sxVDQ_lrFYpTWI5Dj-RcvEWD/view?usp=drivesdk",
  },
  {
    id: "doc-004",
    code: "DOC-004",
    title: "Quem cuidou de uma cidade pode cuidar de um estado",
    type: "Autoridade narrativa",
    category: "Arquétipo público",
    territory: "Candeias / Bahia",
    date: "2026-06-16",
    source: "MOVIMENTO.md + brandbook",
    status: "Validar fonte",
    summary: "Conecta a figura do médico gestor ao desafio de escala: cuidar como competência pública e não como metáfora vazia.",
    tags: ["cuidado", "medico-gestor", "escala", "arquetipo"],
    fileName: "DOC-004-quem-cuidou-de-uma-cidade-pode-cuidar-de-um-estado.md",
    driveUrl: "https://drive.google.com/file/d/1zoyHHXROfj_SPARgI1-ofCSS-9wRzFvI/view?usp=drivesdk",
  },
  {
    id: "doc-005",
    code: "DOC-005",
    title: "O interior não pede esmola. Pede representação real",
    type: "Tese de mobilização",
    category: "Comunidade e pertencimento",
    territory: "Bahia interiorana",
    date: "2026-06-16",
    source: "MOVIMENTO.md",
    status: "Validar fonte",
    summary: "Troca o papel do interior de pedinte para protagonista organizado, com linguagem de dignidade e autonomia.",
    tags: ["representacao", "dignidade", "interior", "comunidade"],
    fileName: "DOC-005-o-interior-nao-pede-esmola-pede-representacao-real.md",
    driveUrl: "https://drive.google.com/file/d/1sjETV2yBt1y1viDeUs4_m696hXccDhZf/view?usp=drivesdk",
  },
  {
    id: "doc-006",
    code: "DOC-006",
    title: "Resultado é a única ideologia que importa",
    type: "Guardrail político",
    category: "Prova e evidência",
    territory: "Bahia",
    date: "2026-06-16",
    source: "Matriz de provas do painel",
    status: "Validar fonte",
    summary: "Neutraliza polarização estéril e coloca o critério de publicação em obras, indicadores, fontes e validação.",
    tags: ["resultado", "evidencia", "prova", "guardrail"],
    fileName: "DOC-006-resultado-e-a-unica-ideologia-que-importa.md",
    driveUrl: "https://drive.google.com/file/d/1EqZoXz9BJ86E-N1lKjt1VIuJ9SCTWVrQ/view?usp=drivesdk",
  },
  {
    id: "doc-007",
    code: "DOC-007",
    title: "Saúde não é de esquerda nem de direita",
    type: "Doutrina setorial",
    category: "Saúde e cuidado público",
    territory: "Candeias / Bahia",
    date: "2026-06-16",
    source: "Acervo de saúde + doutrinas",
    status: "Validar fonte",
    summary: "Leva a saúde para o terreno técnico-humano: paciente, profissional, estrutura e cuidado acima da disputa ideológica.",
    tags: ["saude", "cuidado", "profissionais", "uti"],
    fileName: "DOC-007-saude-nao-e-de-esquerda-nem-de-direita-e-de-medico.md",
    driveUrl: "https://drive.google.com/file/d/19ypZmoAilv_J2NMIZ2eQD5NrQ0ez5w63/view?usp=drivesdk",
  },
  {
    id: "doc-008",
    code: "DOC-008",
    title: "8 anos. 84%. Candeias mudou",
    type: "Prova de resultado",
    category: "Matriz de evidências",
    territory: "Candeias",
    date: "2026-06-16",
    source: "Pesquisa/relatórios a validar",
    status: "Validar fonte",
    summary: "Organiza o dado de aprovação e as entregas de Candeias como pitch verificável, sempre com fonte e rosto.",
    tags: ["84", "8-anos", "candeias", "evidencia"],
    fileName: "DOC-008-8-anos-84-porcento-candeias-mudou.md",
    driveUrl: "https://drive.google.com/file/d/1c4d4Wuzq369Hr34-9Ybg3803_IqmKHqM/view?usp=drivesdk",
  },
];

export const movementDocumentTypes = Array.from(new Set(movementDocuments.map((document) => document.type)));
export const movementDocumentCategories = Array.from(new Set(movementDocuments.map((document) => document.category)));
export const movementDocumentStatuses = Array.from(new Set([...movementDocuments.map((document) => document.status), "Em revisao"]));

export function getMovementDocument(id: string) {
  return movementDocuments.find((document) => document.id === id || document.code.toLowerCase() === id.toLowerCase());
}
