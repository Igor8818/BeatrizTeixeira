import {
  Briefcase,
  Building2,
  HeartHandshake,
  Sprout,
  Landmark,
  Laptop,
  Scale,
  ShieldCheck,
  Users,
  GraduationCap,
  Award,
} from 'lucide-react';

// ============================================================================
// DADOS REAIS — DRA. BEATRIZ TEIXEIRA FIGUEIREDO
// Instagram: @beatrizfigueiredoadv | Escritório: @fvadvogadosassociados (Desde 1990)
// UESC | Pós-graduanda PUC/RS | FGV | Lattes CNPq ID: 1920374097568395
// ============================================================================

export const PROFILE_INFO = {
  name: 'Dra. Beatriz Teixeira Figueiredo',
  shortName: 'Dra. Beatriz Figueiredo',
  role: 'Advogada • FV Advogados Associados',
  tagline: 'Ajudo empresas e trabalhadores a entenderem e protegerem seus direitos.',
  education: 'UESC | Pós-graduanda PUC/RS | FGV',
  instagramUrl: 'https://www.instagram.com/beatrizfigueiredoadv/',
  instagramHandle: '@beatrizfigueiredoadv',
  officeName: 'FV Advogados Associados',
  officeShort: 'FV Advogados',
  officeInstagramUrl: 'https://www.instagram.com/fvadvogadosassociados/',
  officeInstagramHandle: '@fvadvogadosassociados',
  officeSince: 'Desde 1990',
  officePhone: '(73) 3211-3550',
  whatsappNumber: '557332113550',
  whatsappUrl: 'https://wa.me/557332113550?text=Ol%C3%A1%2C%20Dra.%20Beatriz%20Figueiredo!%20Gostaria%20de%20agendar%20um%20atendimento.',
  emailOffice: 'contato@fvadvogados.com.br',
  city: 'Itabuna & Ilhéus — Bahia',
  lattesUrl: 'http://lattes.cnpq.br/1920374097568395',
  lattesId: '1920374097568395',
};

export const DEFAULT_LAWYER_PHOTOS = {
  hero: `${import.meta.env.BASE_URL}images/beatriz-figueiredo.jpg`,
  about: `${import.meta.env.BASE_URL}images/beatriz-figueiredo.jpg`,
  contact: `${import.meta.env.BASE_URL}images/beatriz-figueiredo.jpg`,
  fvLogo: `${import.meta.env.BASE_URL}images/fv-logo.jpg`,
};

export const PHOTO_PRESETS = [
  {
    id: 'principal',
    label: 'Retrato Executivo Oficial',
    url: `${import.meta.env.BASE_URL}images/beatriz-figueiredo.jpg`,
  },
];

export const AREAS_ATUACAO = [
  {
    id: 'empresarial-e-trabalhista',
    title: 'Direito Empresarial & Trabalhista',
    shortDesc:
      'Assessoria jurídica estratégica para empresas e trabalhadores: compliance trabalhista, prevenção de passivos, contratos e defesa técnica em demandas laborais.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
    icon: Briefcase,
    fullContent: [
      'Compreender a legislação com clareza é essencial tanto para empresas que buscam crescer com segurança jurídica quanto para trabalhadores que precisam garantir seus direitos fundamentais.',
      'Integrando a equipe do escritório FV Advogados Associados (atuante em Itabuna desde 1990) e com especialização em andamento pela PUC/RS, oferecemos consultoria preventiva empresarial, revisão de rotinas e contratos, além de atuação combativa em processos judiciais.',
      'Também contamos com pesquisa dedicada às condições laborais de profissionais da saúde e à proteção jurídica da maternidade, garantindo um olhar técnico e atualizado para cada caso.'
    ],
    highlights: [
      'Consultoria preventiva e defesa estratégica para empresas e empregadores',
      'Orientação e reclamações trabalhistas: rescisões, vínculo e verbas',
      'Proteção à gestante e mãe trabalhadora (estabilidade e direitos maternos)',
      'Defesa de profissionais da saúde e prevenção ao assédio organizacional'
    ]
  },
  {
    id: 'direito-civil-e-contratos',
    title: 'Direito Cível & Contratos',
    shortDesc:
      'Elaboração e revisão de negócios jurídicos, responsabilidade civil, proteção patrimonial, cobranças, indenizações e resolução estratégica de conflitos.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    icon: Building2,
    fullContent: [
      'Relações civis e comerciais seguras dependem de contratos bem estruturados e de uma atuação jurídica ágil na prevenção e solução de litígios.',
      'Ao lado da banca FV Advogados Associados, atuamos na assessoria cível completa para pessoas físicas e jurídicas, buscando soluções extrajudiciais eficientes ou a defesa firme perante o Poder Judiciário.',
      'Cada contrato e demanda indenizatória é analisado de forma personalizada, protegendo o patrimônio e os interesses dos nossos clientes no sul da Bahia e em todo o país.'
    ],
    highlights: [
      'Elaboração, revisão e gestão de contratos civis e empresariais',
      'Ações de responsabilidade civil, danos materiais e danos morais',
      'Direito do Consumidor: defesa de empresas e consumidores',
      'Negociações extrajudiciais, notificações e acordos estratégicos'
    ]
  },
  {
    id: 'direitos-da-mulher-e-familia',
    title: 'Direito das Famílias & Direitos da Mulher',
    shortDesc:
      'Atendimento acolhedor e sigiloso em demandas familiares, divórcio, guarda, pensão alimentícia, planejamento sucessório e proteção aos direitos da mulher.',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
    icon: HeartHandshake,
    fullContent: [
      'Demandas que envolvem o Direito das Famílias e os Direitos das Mulheres exigem domínio técnico aliado a uma escuta qualificada, sigilo absoluto e agilidade.',
      'Fruto da trajetória contínua no Serviço de Referência dos Direitos da Mulher (SERMULHER/UESC), na capacitação da Patrulha Guardiã e da vivência prática junto à 1ª Vara da Família da Comarca de Itabuna (TJ/BA), nossa atuação une sensibilidade humana e firmeza processual.',
      'Acompanhamos divórcios consensuais ou litigiosos, fixação e revisão de pensão alimentícia, guarda e convivência, inventários e medidas protetivas.'
    ],
    highlights: [
      'Divórcio consensual ou litigioso, união estável e partilha de bens',
      'Pensão alimentícia, guarda compartilhada ou unilateral e convivência',
      'Inventários, partilhas e planejamento sucessório familiar',
      'Medidas protetivas e orientação jurídica especializada para mulheres (Projeto SERMÃE)'
    ]
  },
  {
    id: 'direito-agrario-e-credito-rural',
    title: 'Direito Agrário & Crédito Rural',
    shortDesc:
      'Assessoria jurídica ao produtor e à empresa rural, contratos agrários, renegociação de crédito rural, lavoura cacaueira e sustentabilidade no campo.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
    icon: Sprout,
    fullContent: [
      'O sul da Bahia possui forte vocação ligada à cacauicultura e ao agronegócio. Garantir segurança jurídica ao produtor e às empresas rurais é indispensável para preservar o patrimônio e viabilizar o crescimento produtivo.',
      'Com pesquisa aprofundada sobre "Cacau e Crédito Rural: Programa de Recuperação da Lavoura Cacaueira Baiana no Complexo Triunfo-Itumirim, em Una-BA" e atuação em Direito Ambiental e Agrário na UESC, oferecemos consultoria conectada à realidade regional.',
      'Atuamos na análise e renegociação de cédulas de crédito rural, contratos de parceria e arrendamento, regularização de imóveis e adequação socioambiental.'
    ],
    highlights: [
      'Consultoria em Crédito Rural e financiamentos agrícolas na região cacaueira',
      'Contratos agrários: arrendamento, parceria rural e compra e venda',
      'Orientação sobre o Programa de Recuperação da Lavoura Cacaueira',
      'Direito Ambiental aplicado ao campo e sustentabilidade produtiva'
    ]
  }
];

export const CREDENCIAIS_TABS = {
  formacao: {
    label: 'Formação & Pós-Graduação',
    icon: GraduationCap,
    items: [
      {
        period: 'Em Andamento',
        title: 'Pós-Graduação Lato Sensu',
        institution: 'Pontifícia Universidade Católica do Rio Grande do Sul (PUC/RS)',
        description:
          'Especialização focada no aprofundamento das transformações jurídicas contemporâneas, governança corporativa e prática advocatícia estratégica.'
      },
      {
        period: 'Formação Complementar',
        title: 'Extensão & Capacitação Executiva',
        institution: 'Fundação Getulio Vargas (FGV)',
        description:
          'Cursos executivos e aperfeiçoamento contínuo voltados à gestão jurídica, resolução estratégica de disputas e compliance.'
      },
      {
        period: 'Graduação',
        title: 'Bacharel em Direito',
        institution: 'Universidade Estadual de Santa Cruz (UESC)',
        description:
          'Formação jurídica sólida com histórico de liderança acadêmica, premiações de pesquisa e projetos de extensão comunitária de alto impacto regional.'
      }
    ]
  },
  escritorio: {
    label: 'FV Advogados & Prática',
    icon: Building2,
    items: [
      {
        period: 'Desde 1990',
        title: 'Advogada Integrante — FV Advogados Associados',
        institution: 'Itabuna - Bahia • Atendimento Nacional',
        description:
          'Atuação em banca tradicional e consolidada no sul da Bahia há mais de 34 anos, prestando consultoria e contencioso cível, empresarial e trabalhista de excelência.'
      },
      {
        period: 'Prática Jurídica',
        title: 'Experiência em Gabinete e Fazenda Pública',
        institution: '1ª Vara da Fazenda Pública de Itabuna (TJ/BA)',
        description:
          'Atuação prática no acompanhamento e instrução de processos administrativos e judiciais de alta complexidade envolvendo o Poder Público.'
      },
      {
        period: 'Vara de Família & MP/BA',
        title: 'Atuação Institucional em Família e Promotoria',
        institution: '1ª Vara da Família (TJ/BA) e 7ª Promotoria de Justiça de Ilhéus (MP/BA)',
        description:
          'Vivência fundamental na condução de processos sensíveis de família, mediação de conflitos e fiscalização da ordem jurídica.'
      }
    ]
  },
  pesquisa: {
    label: 'Pesquisa & Premiações',
    icon: Award,
    items: [
      {
        period: '1º Lugar UESC',
        title: 'Prêmio de Melhor Trabalho de Extensão',
        institution: '10º Simpósio de Ensino, Extensão e Pesquisa da UESC',
        description:
          'Projeto premiado em primeiro lugar sobre o combate ao cyberbullying, enfrentamento à violência virtual e letramento em cidadania digital.'
      },
      {
        period: 'Atuação Social',
        title: 'Projeto SERMÃE e SERMULHER',
        institution: 'Serviço de Referência dos Direitos da Mulher (DCJUR/UESC)',
        description:
          'Coordenação e oficinas sobre proteção da maternidade no trabalho, estabilidade gestacional e enfrentamento à violência de gênero.'
      },
      {
        period: 'CNPq',
        title: 'Pesquisadora do Grupo CINESTESIA',
        institution: 'Universidade Estadual de Santa Cruz (UESC)',
        description:
          'Pesquisas sobre direitos fundamentais, condições de trabalho na área da saúde e diálogos interdisciplinares do Direito.'
      }
    ]
  }
};

export const ARTIGOS_LATTES = [
  {
    id: 'cacau-credito-rural',
    category: 'Direito Agrário & Economia Regional',
    year: '2026',
    title: 'Cacau e Crédito Rural: Programa de Recuperação da Lavoura Cacaueira',
    excerpt:
      'Estudo sobre os impactos jurídicos e socioeconômicos do crédito rural no Complexo Triunfo-Itumirim, em Una-BA, e os caminhos para produtores rurais.',
    image:
      'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min de leitura',
    reference:
      'Trabalho de Conclusão de Curso (Graduação em Direito) — Universidade Estadual de Santa Cruz (UESC). Orientadora: Profa. Samene Batista Pereira Santana.',
    content: [
      'A lavoura cacaueira sul-baiana atravessou profundas transformações históricas e econômicas, especialmente a partir da crise fitossanitária da vassoura-de-bruxa e dos programas governamentais de financiamento destinados à sua recuperação.',
      'Nesta pesquisa desenvolvida no âmbito do Departamento de Ciências Jurídicas da UESC, analisa-se o Programa de Recuperação da Lavoura Cacaueira Baiana com recorte empírico no Complexo Triunfo-Itumirim, no município de Una-BA.',
      'O estudo examina a função social do crédito rural, os entraves enfrentados pelos produtores na renegociação de dívidas agrícolas e os instrumentos jurídicos capazes de conciliar produtividade, dignidade no campo e sustentabilidade ambiental.'
    ]
  },
  {
    id: 'trabalhadores-saude-sob-pressao',
    category: 'Direito do Trabalho & Saúde',
    year: '2025',
    title: 'Discursos sobre Trabalhadores da Saúde: Direitos e Sobrecarga Laboral',
    excerpt:
      'Reflexão jurídica e audiovisual sobre a jornada intensa, gestão hospitalar e proteção dos profissionais da saúde no Brasil contemporâneo.',
    image:
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min de leitura',
    reference:
      'Publicado nos Anais do 31º Seminário de Iniciação Científica da UESC (2025). Autores: FIGUEIREDO, B. T.; LINS, G. R.; RIOS, L. F.; SILVA, A. M. S.; SANTANA, S. B. P.',
    content: [
      'Os profissionais da área da saúde vivenciam rotinas marcadas por alta tensão emocional, plantões prolongados e desafios estruturais que impactam tanto as instituições de saúde quanto os trabalhadores.',
      'A partir do diálogo interdisciplinar entre Direito, Filosofia e Audiovisual desenvolvido no grupo de pesquisa CINESTESIA (CNPq/UESC), o trabalho analisa como as condições laborais da saúde revelam a importância da conformidade jurídica e da proteção aos direitos fundamentais.',
      'Na prática consultiva e contenciosa, esse olhar contribui para orientar profissionais e organizações sobre adicionais legais, intervalos, prevenção ao burnout ocupacional e segurança jurídica nas relações de trabalho.'
    ]
  },
  {
    id: 'sermae-direitos-gestantes',
    category: 'Direitos da Mulher & Maternidade',
    year: '2024',
    title: 'SERMÃE: Direitos das Mulheres Gestantes e Mães no Trabalho e na Sociedade',
    excerpt:
      'Guia essencial sobre estabilidade gestacional, proteção à maternidade, boas práticas empresariais e direitos trabalhistas e assistenciais.',
    image:
      'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min de leitura',
    reference:
      'Curso de extensão ministrado através do Serviço de Referência dos Direitos da Mulher (SERMULHER - DCJUR/UESC). Autoras: FIGUEIREDO, B. T.; SILVA, C. S. S.; SETENTA, A. M.',
    content: [
      'O conhecimento claro sobre as garantias legais que protegem a gestação e o puerpério é essencial tanto para proteger mulheres contra dispensas arbitrárias quanto para orientar empresas no cumprimento adequado da legislação.',
      'A oficina e projeto de extensão SERMÃE nasceu com o propósito de traduzir a legislação brasileira de forma acessível, abordando a estabilidade provisória, licenças, intervalos para amamentação e adaptação de função.',
      'Além da esfera trabalhista, o projeto contempla orientações sobre alimentos gravídicos, direitos na saúde e canais de proteção contra a violência doméstica e obstétrica.'
    ]
  },
  {
    id: 'cidadania-digital-violencia-online',
    category: 'Direito Digital & Direitos Humanos',
    year: '2024',
    title: 'É Digital, mas é Legal? Como agir diante do Cyberbullying e Violência Online',
    excerpt:
      'Reconhecido em 1º lugar na UESC, este trabalho explica as responsabilidades civis e penais no ambiente virtual e como proteger seus direitos.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min de leitura',
    reference:
      'Premiado em 1º Lugar no 10º Simpósio de Ensino, Extensão, Inovação e Pesquisa da UESC e apresentado no XIII Encontro de Pesquisa Empírica em Direito (EPED).',
    content: [
      'A falsa sensação de anonimato nas redes sociais impulsionou práticas de difamação, perseguição virtual (stalking), golpes digitais e violação de imagem, atingindo cidadãos, jovens e empresas.',
      'Premiado em 1º lugar entre os trabalhos de extensão da UESC e apresentado no XIII EPED, o projeto demonstra a importância de aproximar o Direito da educação digital e da prevenção jurídica.',
      'Diante de uma violação online, preservar imediatamente as evidências com URLs, datas, capturas íntegras e ata notarial permite acionar medidas judiciais rápidas de remoção de conteúdo e reparação de danos.'
    ]
  }
];
