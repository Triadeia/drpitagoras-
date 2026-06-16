import {
  BadgeCheck,
  BookOpenText,
  Camera,
  Component,
  FileText,
  Flame,
  GalleryVerticalEnd,
  Landmark,
  MessageSquareText,
  Palette,
  PenTool,
  ShieldCheck,
  Sparkles,
  Target,
  Type,
} from "lucide-react";
import { movementDocuments } from "@/lib/movement-documents";

export type BrandSection = {
  slug: string;
  group: "Fundamentos" | "Narrativa" | "Sistema";
  title: string;
  shortTitle: string;
  description: string;
  icon: typeof Palette;
  chapters: Array<{
    id: string;
    title: string;
    lead: string;
    points?: Array<{ title: string; text: string }>;
  }>;
};

export const brandSections: BrandSection[] = [
  {
    slug: "paleta-cores",
    group: "Fundamentos",
    title: "Cor que organiza confiança, ação e presença pública.",
    shortTitle: "Paleta de Cores",
    description: "Azul institucional, laranja de energia e verdes de progresso aplicados com função política.",
    icon: Palette,
    chapters: [
      {
        id: "tokens",
        title: "Tokens principais",
        lead: "O azul estrutura autoridade e serenidade. O laranja marca movimento e prioridade. O verde deve aparecer apenas quando há avanço, validação ou ação concluída.",
        points: [
          { title: "Navy Receita Certa", text: "Base de navegação, títulos institucionais e fundos de comando." },
          { title: "Azul de presença", text: "Links, indicadores, cards de dados e destaques operacionais." },
          { title: "Laranja de mobilização", text: "Chamadas, trilhas ativas e momentos de convocação." },
        ],
      },
      {
        id: "guardrail",
        title: "Cor não substitui evidência",
        lead: "Nunca use verde para sugerir fato não validado. Status visual precisa acompanhar fonte, data e responsável.",
      },
    ],
  },
  {
    slug: "tipografia",
    group: "Fundamentos",
    title: "Uma voz visual firme, legível e popular.",
    shortTitle: "Tipografia",
    description: "Hierarquia tipográfica para painel, documentos, conteúdo e material de rua.",
    icon: Type,
    chapters: [
      {
        id: "hierarquia",
        title: "Títulos carregam direção, texto carrega prova",
        lead: "Use títulos curtos e concretos. Textos longos devem ganhar respiro, subtítulos e listas de evidência.",
      },
      {
        id: "interface",
        title: "Interface compacta para operação",
        lead: "Painel de liderança precisa ser escaneável: métricas, nomes, bairros, status e próxima ação antes de qualquer explicação.",
      },
    ],
  },
  {
    slug: "logomarca",
    group: "Fundamentos",
    title: "Dr. Pitágoras como primeiro sinal de presença.",
    shortTitle: "Logomarca",
    description: "Uso da assinatura principal, versões reversas, área de proteção e contexto de campanha.",
    icon: PenTool,
    chapters: [
      {
        id: "uso",
        title: "Assinatura principal",
        lead: "A marca aparece com clareza no primeiro contato. Em painéis, ocupa a navegação; em peças públicas, deve dividir espaço com a mensagem, sem competir com a prova.",
      },
      {
        id: "restricoes",
        title: "Não distorcer, não improvisar",
        lead: "Não aplicar sombra pesada, contorno decorativo, cores fora da paleta ou reduzir até perder leitura.",
      },
    ],
  },
  {
    slug: "iconografia",
    group: "Fundamentos",
    title: "Ícones simples para cinco pilares de ação.",
    shortTitle: "Ícones dos 5 Pilares",
    description: "Saúde, educação, interior, trabalho e cuidado público como linguagem recorrente.",
    icon: GalleryVerticalEnd,
    chapters: [
      {
        id: "pilares",
        title: "Os cinco pilares",
        lead: "Cada ícone deve representar uma ação reconhecível: cuidar, aprender, construir, circular e proteger. Evite ilustrações abstratas quando o eleitor precisa entender rápido.",
      },
    ],
  },
  {
    slug: "fotografia",
    group: "Fundamentos",
    title: "Imagem real antes de imagem bonita.",
    shortTitle: "Fotografia & Ilustração",
    description: "Critérios para fotos, cenas de rua, equipamentos públicos, antes/depois e retratos.",
    icon: Camera,
    chapters: [
      {
        id: "realidade",
        title: "Mostrar o lugar, a pessoa e a entrega",
        lead: "Fotografia deve revelar território, escala e presença humana. Evite imagens genéricas, cortes que escondem contexto ou estética de banco de imagem.",
      },
      {
        id: "consentimento",
        title: "Consentimento e dignidade",
        lead: "Histórias reais exigem autorização, cuidado com vulnerabilidade e linguagem que não explore sofrimento.",
      },
    ],
  },
  {
    slug: "componentes",
    group: "Sistema",
    title: "Componentes que aceleram decisão de campanha.",
    shortTitle: "Componentes & UI",
    description: "Cards, métricas, tabelas, formulários e estados para painel e área do líder.",
    icon: Component,
    chapters: [
      {
        id: "contrato",
        title: "Cada componente tem um contrato",
        lead: "Default, hover, foco, ativo, carregando, vazio e erro precisam estar previstos. Nada deve depender de improviso visual.",
      },
      {
        id: "lideranca",
        title: "Área do líder é ferramenta de campo",
        lead: "Apoiadores, check-in, metas e mural precisam ficar a dois cliques. O design serve à cadência de rua.",
      },
    ],
  },
  {
    slug: "guardrails",
    group: "Sistema",
    title: "Força narrativa com responsabilidade jurídica e moral.",
    shortTitle: "Guardrails de Marca",
    description: "Limites para números, ataques, promessas, depoimentos, LGPD e comunicação eleitoral.",
    icon: ShieldCheck,
    chapters: [
      {
        id: "prova",
        title: "Sem documento, sem número público",
        lead: "Todo dado forte precisa de fonte primária, data, responsável e contexto. Sem validação, vira hipótese interna.",
      },
      {
        id: "conduta",
        title: "A crítica mira método, não humilha pessoas",
        lead: "Evite insultos, exposição indevida, ataques a grupos e qualquer comunicação que reduza dignidade do eleitor ou adversário.",
      },
    ],
  },
  {
    slug: "manifesto",
    group: "Narrativa",
    title: "Novo movimento, nova narrativa.",
    shortTitle: "Manifesto Político",
    description: "A promessa pública da Receita Certa: método, cuidado e resultado verificável.",
    icon: Flame,
    chapters: [
      {
        id: "tese",
        title: "A Bahia é de quem constrói o interior",
        lead: "O movimento nasce da ideia de que esperança precisa de obra, método e presença. O interior não pede favor; pede representação real.",
      },
      {
        id: "frase",
        title: "Não foi sorte. Foi Receita Certa.",
        lead: "A narrativa conecta biografia, gestão, saúde e território em uma frase simples: resultado não aparece por acaso.",
      },
    ],
  },
  {
    slug: "arquetipo",
    group: "Narrativa",
    title: "O médico gestor que cuida com método.",
    shortTitle: "Arquétipo de Marca",
    description: "Curador, governante e herói em equilíbrio para a voz pública do Dr. Pitágoras.",
    icon: Sparkles,
    chapters: [
      {
        id: "mix",
        title: "Curador, governante e herói",
        lead: "O curador cuida da dor real. O governante organiza recursos. O herói entra onde a política comum não resolveu.",
      },
    ],
  },
  {
    slug: "voz-tom",
    group: "Narrativa",
    title: "Calma, concreta e impossível de confundir.",
    shortTitle: "Voz & Tom",
    description: "Como falar em posts, discursos, painel, mensagens de líder e respostas públicas.",
    icon: MessageSquareText,
    chapters: [
      {
        id: "atributos",
        title: "Concreta, respeitosa e firme",
        lead: "A voz evita abstração vazia. Começa pelo problema real, apresenta evidência e termina com uma ação ou compromisso.",
      },
      {
        id: "nao-usar",
        title: "O que não usar",
        lead: "Evite soberba, promessa absoluta, números sem fonte, ironia cruel e frases que pareçam marketing sem chão.",
      },
    ],
  },
  {
    slug: "vocabulario",
    group: "Narrativa",
    title: "Palavras que repetem a direção do movimento.",
    shortTitle: "Vocabulário",
    description: "Termos preferenciais, termos proibidos e frases proprietárias da campanha.",
    icon: BookOpenText,
    chapters: [
      {
        id: "preferenciais",
        title: "Vocabulário proprietário",
        lead: "Receita Certa, resultado verificável, cuidar do interior, representação real, método, presença, prova e dignidade pública.",
      },
    ],
  },
  {
    slug: "brandscript",
    group: "Narrativa",
    title: "A jornada do eleitor que quer acreditar com prova.",
    shortTitle: "BrandScript",
    description: "Herói, problema, guia, plano, chamada, sucesso e risco da narrativa política.",
    icon: Target,
    chapters: [
      {
        id: "heroi",
        title: "O eleitor é o herói",
        lead: "O cidadão quer viver em um território cuidado, mas está cansado de promessa sem entrega. A campanha oferece método, não salvadorismo.",
      },
      {
        id: "plano",
        title: "Plano em três passos",
        lead: "Conhecer a história, verificar as entregas e participar da rede de líderes e apoiadores.",
      },
    ],
  },
  {
    slug: "truelines",
    group: "Narrativa",
    title: "Cinco verdades que sustentam a comunicação.",
    shortTitle: "Truelines",
    description: "Verdades-mãe para conteúdo, fala pública, roteiro e mobilização territorial.",
    icon: BadgeCheck,
    chapters: [
      {
        id: "verdades",
        title: "As cinco verdades",
        lead: "Resultado importa. O interior constrói. Saúde é cuidado real. Método vence improviso. Representação precisa voltar com entrega.",
      },
    ],
  },
  {
    slug: "arcos-narrativos",
    group: "Narrativa",
    title: "Do cansaço com promessa à participação organizada.",
    shortTitle: "Arcos Narrativos",
    description: "Ciclos conhecer, confiar, participar e propagar para 90 dias de campanha.",
    icon: Landmark,
    chapters: [
      {
        id: "90-dias",
        title: "Três ciclos de 90 dias",
        lead: "Candeias Prova, A Bahia que Pode Ser e Receita Certa para a Bahia. Cada ciclo precisa de história, prova e ação territorial.",
      },
    ],
  },
  {
    slug: "propostas",
    group: "Sistema",
    title: "Proposta pública sempre acompanhada de evidência.",
    shortTitle: "Propostas & Evidência",
    description: "Matriz para promessas, entregas, fontes, status jurídico e materiais publicados.",
    icon: FileText,
    chapters: [
      {
        id: "matriz",
        title: "Matriz de prova",
        lead: "Toda proposta deve responder: qual problema resolve, que evidência sustenta, quem valida, qual território impacta e qual material público será usado.",
      },
    ],
  },
];

export const directoryItems = brandSections.flatMap((section) => [
  {
    id: `page-${section.slug}`,
    name: section.shortTitle,
    category: "Página",
    group: section.group,
    description: section.description,
    href: `/app/marca/${section.slug}`,
  },
  ...section.chapters.map((chapter) => ({
    id: `${section.slug}-${chapter.id}`,
    name: chapter.title,
    category: "Capítulo",
    group: section.group,
    description: chapter.lead,
    href: `/app/marca/${section.slug}#${chapter.id}`,
  })),
]);

export const movementDocumentDirectoryItems = movementDocuments.map((document) => ({
  id: `movement-${document.id}`,
  name: `${document.code} — ${document.title}`,
  category: "Documento do Movimento",
  group: "Movimento",
  description: document.summary,
  href: `/app/marca/documentos/${document.id}`,
}));

export const assetDirectory = [
  { id: "asset-logo-white", name: "Logo Dr. Pitagoras branco", category: "Asset", group: "Fundamentos", description: "Assinatura para fundos escuros e navegação.", href: "/logo_pitagoras_branco.png" },
  { id: "asset-logo-color", name: "Logo Dr. Pitagoras colorido", category: "Asset", group: "Fundamentos", description: "Assinatura para fundos claros e apresentações.", href: "/logo_pitagoras_color.png" },
  { id: "asset-schema", name: "Schema Supabase liderança", category: "Backend", group: "Sistema", description: "Tabelas e políticas para líder, apoiadores, metas e check-ins.", href: "/app/marca/propostas#matriz" },
];

export function getBrandSection(slug: string) {
  return brandSections.find((section) => section.slug === slug);
}
