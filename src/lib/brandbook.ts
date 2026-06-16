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
        lead: "A paleta da Receita Certa precisa operar como sistema de decisão: azul para autoridade serena, laranja para mobilização, verde para validação e tons neutros para leitura de dados.",
        points: [
          { title: "Navy Receita Certa", text: "Base de navegação, títulos institucionais, hero sections, documentos e fundos de comando. Comunica governo, maturidade e controle." },
          { title: "Azul de presença", text: "Links, indicadores ativos, filtros, estados selecionados, gráficos e mapas. Nunca deve competir com alerta ou prova crítica." },
          { title: "Laranja de mobilização", text: "Chamadas de ação, prioridade operacional, rito de participação, convite de líder e momentos de campanha em campo." },
          { title: "Verde de validação", text: "Usar somente quando houver avanço, entrega validada, fonte anexada, cadastro confirmado ou status concluído." },
        ],
      },
      {
        id: "aplicacao",
        title: "Aplicação por contexto",
        lead: "A mesma cor muda de função conforme o ambiente: painel, material público, liderança ou documento interno. O design deve reduzir ruído e aumentar confiança.",
        points: [
          { title: "Painel", text: "Fundo claro, sidebar navy, cards brancos e cor apenas nos sinais de status. O operador precisa escanear risco, prioridade e próxima ação." },
          { title: "Documentos", text: "Headers navy com tipografia grande, corpo branco, metadados discretos e alerta laranja para números que exigem validação." },
          { title: "Campo", text: "Peças impressas e WhatsApp devem preservar contraste alto. O laranja chama a pessoa para agir; o azul sustenta a seriedade do convite." },
        ],
      },
      {
        id: "guardrail",
        title: "Cor não substitui evidência",
        lead: "Nenhuma cor pode fazer uma afirmação parecer validada quando ela ainda não tem fonte. Verde sem documento vira risco político e jurídico.",
        points: [
          { title: "Regra de validação", text: "Todo status verde precisa apontar para fonte, data, responsável e evidência arquivada no Drive ou matriz de provas." },
          { title: "Regra de alerta", text: "Números como 84%, TCM, TSE, UTI, atendimentos e educação usam alerta até a fonte primária estar anexada." },
        ],
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
        lead: "A tipografia do movimento deve ser clara antes de ser bonita. O título dá a tese; o subtítulo explica o porquê; o corpo entrega método, prova e ação.",
        points: [
          { title: "H1", text: "Frases de direção: 'Receita Certa de quem constrói', 'A Bahia é de quem constrói o interior', 'Prova antes de promessa'." },
          { title: "H2", text: "Capítulos e argumentos. Deve nomear uma decisão estratégica, não uma categoria genérica." },
          { title: "Corpo", text: "Texto com frases médias, exemplos concretos, evidência e território. Evitar parágrafos longos sem respiro." },
          { title: "Mono", text: "Usado para códigos, DOC-001, status, tags, datas, fontes e metadados verificáveis." },
        ],
      },
      {
        id: "interface",
        title: "Interface compacta para operação",
        lead: "Painel de campanha não é landing page. É ferramenta de guerra organizada: nome, bairro, prova, responsável, prazo e próxima ação precisam aparecer rápido.",
        points: [
          { title: "Cards", text: "Títulos curtos, métrica dominante, nota abaixo e ícone funcional. Sem texto ornamental." },
          { title: "Tabelas", text: "Colunas de decisão: item, território, responsável, status, fonte e ação. Evitar tabelas que só armazenam informação." },
          { title: "Formulários", text: "Campos com labels claros, validação visível e estados de erro. Cada envio precisa explicar o que foi salvo e onde." },
        ],
      },
      {
        id: "legibilidade",
        title: "Legibilidade popular",
        lead: "A comunicação precisa funcionar para equipe técnica, líder comunitário, eleitor no WhatsApp e imprensa. Uma frase só é boa se atravessa todos esses ambientes.",
        points: [
          { title: "Sem jargão vazio", text: "Trocar 'stakeholder', 'framework' e 'awareness' por liderança, método, prova, presença e confiança." },
          { title: "Sem grito visual", text: "Não usar caixa alta em frases longas. A força vem da prova, não do volume." },
        ],
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
        lead: "A marca Dr. Pitágoras deve aparecer como assinatura de comando, não como enfeite. Ela identifica quem assume responsabilidade pelo método.",
        points: [
          { title: "Painel", text: "Usar na sidebar e telas de marca. Deve ser legível no primeiro viewport e manter área de respiro." },
          { title: "Documentos", text: "A assinatura aparece no topo ou rodapé, acompanhada de data, versão e status de validação." },
          { title: "Conteúdo público", text: "A marca não substitui a mensagem. Peças devem priorizar tese, rosto, território e prova." },
        ],
      },
      {
        id: "restricoes",
        title: "Não distorcer, não improvisar",
        lead: "A consistência da marca é um sinal de disciplina. Improviso visual comunica improviso de gestão.",
        points: [
          { title: "Proibido", text: "Não aplicar sombra pesada, contorno decorativo, gradiente fora da paleta, compressão horizontal ou uso sobre imagem sem contraste." },
          { title: "Proteção", text: "Manter respiro mínimo equivalente à altura do ponto da marca. Nunca colar em borda, avatar, selo ou faixa partidária." },
        ],
      },
      {
        id: "assinaturas",
        title: "Assinaturas de campanha",
        lead: "A marca pode conviver com o método Receita Certa, desde que cada assinatura tenha função clara.",
        points: [
          { title: "Dr. Pitágoras", text: "Pessoa pública, biografia, comando e responsabilidade." },
          { title: "Receita Certa", text: "Método, movimento e sistema de prova." },
          { title: "Receita Certa de quem constrói", text: "Linha narrativa para pertencimento, liderança e mobilização territorial." },
        ],
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
        lead: "A iconografia deve ser reconhecível em um segundo. Ícone bom reduz explicação e cria memória visual por repetição.",
        points: [
          { title: "Saúde", text: "Cruz, coração, estetoscópio ou pulso. Usar com cuidado, sem explorar sofrimento." },
          { title: "Educação", text: "Livro, escola, lápis, caderno ou medalha. Conectar sempre a aprendizagem e futuro." },
          { title: "Interior", text: "Mapa, pin, estrada, casa, praça ou território. Evitar caricatura rural." },
          { title: "Trabalho", text: "Ferramenta, engrenagem, comércio ou produção. Mostrar dignidade de quem constrói." },
          { title: "Cuidado público", text: "Mão, escudo, check, abrigo ou presença. Deve indicar responsabilidade, não paternalismo." },
        ],
      },
      {
        id: "sistema",
        title: "Sistema de uso",
        lead: "Ícones devem acompanhar palavras e dados. Sozinhos, viram decoração; com contexto, viram navegação.",
        points: [
          { title: "Botões", text: "Usar ícones de ação conhecidos: copiar, enviar, baixar, filtrar, buscar, salvar, abrir." },
          { title: "Status", text: "Check para validado, alerta para pendente, relógio para em revisão, link para fonte." },
        ],
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
        lead: "A fotografia do movimento existe para provar presença. O eleitor precisa reconhecer lugar, gente e transformação.",
        points: [
          { title: "Território", text: "Mostrar praça, rua, escola, UBS, hospital, comércio, estrada e bairro com contexto visível." },
          { title: "Rosto", text: "Retratar pessoas com dignidade e consentimento. O rosto dá escala humana à entrega." },
          { title: "Entrega", text: "Toda imagem de obra ou serviço deve mostrar funcionamento real: gente usando, servidor trabalhando, fila andando." },
        ],
      },
      {
        id: "antes-depois",
        title: "Antes e depois verificável",
        lead: "Antes/depois é uma das provas mais fortes, mas só funciona quando o enquadramento é honesto.",
        points: [
          { title: "Mesmo ângulo", text: "Repetir ponto geográfico, direção, distância e referência visual." },
          { title: "Data e fonte", text: "Toda comparação deve registrar data, local, autor da imagem e fonte do arquivo." },
          { title: "Sem exagero", text: "Não escurecer o antes nem embelezar artificialmente o depois." },
        ],
      },
      {
        id: "consentimento",
        title: "Consentimento e dignidade",
        lead: "Histórias reais exigem autorização, cuidado com vulnerabilidade e linguagem que não explore sofrimento.",
        points: [
          { title: "Saúde", text: "Paciente só aparece com consentimento claro. Prefira profissionais, espaços, equipamentos e depoimentos autorizados." },
          { title: "Crianças", text: "Evitar exposição identificável sem autorização formal dos responsáveis." },
        ],
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
        lead: "Um componente só está pronto quando prevê estado vazio, carregando, sucesso, erro, foco, responsividade e próxima ação.",
        points: [
          { title: "Métricas", text: "Valor grande, rótulo claro, nota de contexto e variação quando existir." },
          { title: "Listas", text: "Nome, território, status e ação principal. Não esconder decisão em menus longos." },
          { title: "Formulários", text: "Campos obrigatórios, validação imediata, feedback pós-envio e indicação de onde o dado foi salvo." },
        ],
      },
      {
        id: "lideranca",
        title: "Área do líder é ferramenta de campo",
        lead: "A área do líder deve funcionar no celular, em rua, reunião, visita e WhatsApp. Menos ornamentação, mais cadência.",
        points: [
          { title: "Apoiador", text: "Cadastro rápido com nome, telefone, bairro, origem, tags e observação." },
          { title: "Check-in", text: "Registro de presença com tipo de ação, local, descrição, anexo e pontuação." },
          { title: "Gamificação", text: "Pontos só fazem sentido quando conectados a missão real: cadastrar, visitar, validar, mobilizar." },
        ],
      },
      {
        id: "documentos",
        title: "Documentos do Movimento",
        lead: "Documento não é arquivo morto. É prova, memória e material de alinhamento.",
        points: [
          { title: "Metadados", text: "Título, tipo, categoria, território, data, fonte, status, resumo, tags e link do Drive." },
          { title: "Busca", text: "Filtrar por tipo, categoria, status, território e palavra-chave." },
          { title: "Upload", text: "Enviar arquivo sem expor credenciais no frontend. Quando Drive não estiver configurado, salvar localmente e informar fallback." },
        ],
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
        points: [
          { title: "84%", text: "Só publicar com instituto, data, universo, margem, registro quando aplicável e arquivo anexado." },
          { title: "TCM", text: "Contas aprovadas exigem acórdão, exercício, número do processo e link oficial." },
          { title: "TSE", text: "Resultado eleitoral exige link, eleição, cargo, município, votação e percentual." },
          { title: "Saúde e educação", text: "Entregas precisam de fonte administrativa, foto, data, local e responsável técnico." },
        ],
      },
      {
        id: "conduta",
        title: "A crítica mira método, não humilha pessoas",
        lead: "A narrativa pode ser firme sem virar agressão. O inimigo é a política sem resultado, não a dignidade de um grupo ou pessoa.",
        points: [
          { title: "Permitido", text: "Criticar ausência de fonte, promessa sem entrega, abandono do interior, ineficiência e falta de método." },
          { title: "Proibido", text: "Insulto pessoal, ataque a família, exposição de vulnerável, ironia cruel, discriminação ou acusação sem prova." },
        ],
      },
      {
        id: "lgpd",
        title: "LGPD e comunidade",
        lead: "Comunidade forte não nasce de disparo ilegal. Nasce de consentimento, relação e saída simples.",
        points: [
          { title: "Opt-in", text: "Todo apoiador precisa saber por que está entrando, o que vai receber e como sair." },
          { title: "Dados mínimos", text: "Coletar apenas o necessário para mobilização: nome, contato, bairro, origem e consentimento." },
        ],
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
        points: [
          { title: "Big ideal", text: "Receita Certa de quem constrói: a Bahia só muda quando quem vive, trabalha e sustenta o interior deixa de ser plateia e vira sujeito da decisão." },
          { title: "Causa compartilhada", text: "O movimento organiza pessoas cansadas de promessa bonita e convida cada território a provar, participar e propagar." },
          { title: "Inimigo comum", text: "A política sem resultado: aparece no período eleitoral, fala de futuro, usa o interior como voto e some antes da entrega." },
        ],
      },
      {
        id: "promessa",
        title: "Promessa pública do movimento",
        lead: "Não oferecer salvação. Oferecer método, cuidado e verificação. A confiança vem depois da prova.",
        points: [
          { title: "O que defendemos", text: "Resultado verificável, saúde com estrutura, educação com aprendizagem, cidade com presença e liderança com responsabilidade." },
          { title: "O que recusamos", text: "Promessa sem fonte, número sem documento, espetáculo sem entrega e campanha que trata o eleitor como audiência." },
          { title: "Como participamos", text: "Cada líder cadastra, escuta, registra, valida fonte, convida comunidade e transforma demanda em ação acompanhável." },
        ],
      },
      {
        id: "frase",
        title: "Não foi sorte. Foi Receita Certa.",
        lead: "A narrativa conecta biografia, gestão, saúde e território em uma frase simples: resultado não aparece por acaso.",
        points: [
          { title: "Uso correto", text: "Usar quando houver prova ao lado: obra, indicador, depoimento, antes/depois, documento ou entrega verificável." },
          { title: "Uso incorreto", text: "Nunca publicar a frase isolada como autoelogio. Sem evidência, ela vira slogan comum." },
        ],
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
        lead: "A marca combina cuidado humano, organização institucional e coragem de enfrentar problemas que a política comum normalizou.",
        points: [
          { title: "Curador", text: "Enxerga a dor real, respeita quem sofre e fala de saúde, família e dignidade sem exploração." },
          { title: "Governante", text: "Organiza recurso, prazo, equipe, indicador, prestação de contas e método." },
          { title: "Herói", text: "Entra onde havia descrença e mostra que resultado pode vencer cinismo." },
        ],
      },
      {
        id: "risco",
        title: "Riscos de desequilíbrio",
        lead: "Arquétipo forte precisa de freio. Heroísmo demais vira vaidade; governante demais vira frieza; curador demais vira paternalismo.",
        points: [
          { title: "Equilíbrio", text: "Toda fala pública deve combinar uma dor humana, uma ação concreta e uma prova verificável." },
          { title: "Antídoto", text: "Trocar 'eu fiz' por 'a cidade viu', 'o serviço funciona', 'a fonte está aqui'." },
        ],
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
        points: [
          { title: "Calma", text: "Não grita para parecer forte. Fala como quem conhece o problema, tem documento e sabe o próximo passo." },
          { title: "Concreta", text: "Troca 'vamos transformar' por 'qual problema, em qual bairro, com qual entrega e qual fonte'." },
          { title: "Respeitosa", text: "Reconhece a dor do eleitor, não usa sofrimento como cenário e não ridiculariza adversários ou grupos." },
          { title: "Firme", text: "Não foge de contraste: promessa sem fonte não serve, número sem documento não sai, o interior não aceita ser anexo." },
        ],
      },
      {
        id: "modelos",
        title: "Modelos de fala",
        lead: "A equipe precisa de fórmulas simples para manter consistência em WhatsApp, discurso, legenda, resposta pública e painel.",
        points: [
          { title: "Legenda curta", text: "Problema real + prova + convite. Ex.: 'A saúde não se mede por discurso. Mede-se por atendimento, estrutura e fonte. Veja o documento.'" },
          { title: "Resposta a ataque", text: "Não personalizar. Ex.: 'A pergunta correta não é quem grita mais. É qual entrega tem fonte, data e resultado verificável.'" },
          { title: "Mensagem de líder", text: "Reconhecer o bairro, perguntar a demanda, registrar, explicar o próximo passo e convidar para acompanhar." },
        ],
      },
      {
        id: "nao-usar",
        title: "O que não usar",
        lead: "Evite soberba, promessa absoluta, números sem fonte, ironia cruel e frases que pareçam marketing sem chão.",
        points: [
          { title: "Evitar", text: "'Vamos revolucionar', 'nunca visto', 'maior da história', 'todo mundo sabe', 'acabou o problema'." },
          { title: "Substituir por", text: "'O dado precisa de fonte', 'a entrega pode ser verificada', 'o método começa pelo diagnóstico', 'o interior constrói'." },
          { title: "Regra de ouro", text: "Se a frase poderia ser dita por qualquer candidato, ela ainda não é Receita Certa." },
        ],
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
        lead: "O vocabulário é o motor de repetição do movimento. Palavras certas criam reconhecimento; palavras genéricas dissolvem a identidade.",
        points: [
          { title: "Método", text: "Receita Certa, diagnóstico, plano, execução, transparência, resultado verificável, fonte, prova, cadência." },
          { title: "Pertencimento", text: "Quem constrói, interior, comunidade, território, liderança local, representação real, dignidade pública." },
          { title: "Cuidado", text: "Saúde com estrutura, gente bem cuidada, presença, escuta, serviço funcionando, profissional respeitado." },
          { title: "Prova", text: "Documento, data, fonte primária, responsável, antes/depois, indicador, acervo, matriz de evidências." },
        ],
      },
      {
        id: "frases",
        title: "Frases proprietárias",
        lead: "Frases proprietárias devem ser repetidas com contexto e prova, não espalhadas como bordões vazios.",
        points: [
          { title: "Receita Certa de quem constrói", text: "Linha-mãe para campanha, liderança, comunidade e pertencimento." },
          { title: "A Bahia é de quem constrói o interior", text: "Tese territorial e grande ideal." },
          { title: "Não foi sorte. Foi Receita Certa", text: "Usar junto de entrega verificável." },
          { title: "Sem documento, sem número público", text: "Guardrail interno e cultura de prova." },
          { title: "Resultado é a única ideologia que importa", text: "Contraste contra polarização sem entrega." },
        ],
      },
      {
        id: "proibidas",
        title: "Palavras e enquadramentos proibidos",
        lead: "Algumas palavras puxam a campanha para arrogância, marketing vazio ou risco jurídico.",
        points: [
          { title: "Promessa vazia", text: "Evitar 'revolução', 'milagre', 'salvação', 'garantido', 'acabaremos com tudo'." },
          { title: "Ataque pessoal", text: "Evitar apelidos, humilhação, insinuação sem prova, exposição de família e linguagem discriminatória." },
          { title: "Número solto", text: "Não usar percentuais, rankings ou superlativos sem fonte, data e contexto." },
        ],
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
        points: [
          { title: "Problema externo", text: "Serviço público irregular, interior invisível, saúde pressionada, educação com lacunas e política distante." },
          { title: "Problema interno", text: "Desconfiança: 'todo mundo promete, ninguém entrega'." },
          { title: "Problema filosófico", text: "Quem constrói a Bahia não deveria ser tratado como anexo da capital." },
        ],
      },
      {
        id: "plano",
        title: "Plano em três passos",
        lead: "A jornada precisa ser simples para virar comportamento.",
        points: [
          { title: "Conhecer", text: "Apresentar origem, método, Candeias e histórias reais." },
          { title: "Verificar", text: "Mostrar documentos, fontes, antes/depois e matriz de evidências." },
          { title: "Participar", text: "Entrar como líder, apoiador, multiplicador, fonte local ou guardião de prova." },
        ],
      },
      {
        id: "cta",
        title: "Chamadas de ação",
        lead: "A chamada nunca deve ser apenas 'vote'. Antes do voto, vem pertencimento e ação organizada.",
        points: [
          { title: "Para líder", text: "Cadastre sua rede, registre demandas, valide provas e organize seu bairro." },
          { title: "Para eleitor", text: "Conheça a Receita Certa, veja as fontes, participe da comunidade." },
        ],
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
        lead: "Truelines não são slogans. São frases que a equipe usa para decidir se uma peça ainda pertence ao movimento.",
        points: [
          { title: "Resultado importa", text: "Toda comunicação deve apontar para entrega, fonte, melhoria ou método." },
          { title: "O interior constrói", text: "O território é protagonista, não cenário de campanha." },
          { title: "Saúde é cuidado real", text: "Sem ideologizar a dor do paciente; mostrar estrutura e profissional." },
          { title: "Método vence improviso", text: "Diagnóstico, plano, execução e validação precisam aparecer." },
          { title: "Representação precisa voltar com entrega", text: "Liderança boa não pede apenas voto; organiza resposta." },
        ],
      },
      {
        id: "teste",
        title: "Teste editorial",
        lead: "Antes de publicar, a peça passa por cinco perguntas.",
        points: [
          { title: "Perguntas", text: "Tem território? Tem prova? Tem pessoa real? Tem próxima ação? Evita promessa sem fonte?" },
          { title: "Se falhar", text: "Volta para briefing. A pressa não pode atropelar a cultura de prova." },
        ],
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
        points: [
          { title: "Candeias Prova", text: "Mostrar a origem verificável: o que mudou, quais fontes sustentam e quem viveu a transformação." },
          { title: "A Bahia que Pode Ser", text: "Conectar Candeias a outros territórios sem arrogância: ouvir, comparar, adaptar e registrar demandas." },
          { title: "Receita Certa para a Bahia", text: "Transformar prova em plataforma: método, propostas, lideranças e matriz de acompanhamento." },
        ],
      },
      {
        id: "espiral",
        title: "Espiral de engajamento",
        lead: "O movimento cresce em ciclos: conhecer, confiar, participar, propagar e defender.",
        points: [
          { title: "Conhecer", text: "Conteúdo simples, biografia, tese e primeiro contato." },
          { title: "Confiar", text: "Provas, fontes, documentos, depoimentos e consistência." },
          { title: "Participar", text: "Cadastro, check-in, reunião, demanda e missão de liderança." },
          { title: "Propagar", text: "Líder leva a mensagem para sua rede com material pronto e fonte anexada." },
        ],
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
        points: [
          { title: "Problema", text: "Nomear a dor real com território e público afetado." },
          { title: "Evidência", text: "Anexar fonte primária, foto, relatório, acórdão, dados oficiais ou depoimento autorizado." },
          { title: "Responsável", text: "Toda proposta tem dono técnico, dono jurídico e dono de comunicação." },
          { title: "Status", text: "Hipótese, em validação, validado, publicado ou arquivado." },
        ],
      },
      {
        id: "publicacao",
        title: "Do documento ao conteúdo",
        lead: "A proposta só vira peça pública depois de passar por tradução narrativa e revisão de risco.",
        points: [
          { title: "Tradução", text: "Transformar dado em história sem alterar a verdade do dado." },
          { title: "Revisão", text: "Checar fonte, contexto, LGPD, autorização de imagem e risco eleitoral." },
          { title: "Publicação", text: "Toda peça publicada deve apontar para prova ou documento interno rastreável." },
        ],
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
