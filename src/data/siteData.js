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
} from 'lucide-react';

// ============================================================================
// DADOS REAIS — DRA. BEATRIZ TEIXEIRA FIGUEIREDO
// Instagram: @beatrizfigueiredoadv | Escritório: @fvadvogadosassociados (Desde 1990)
// UESC | Pós-graduanda PUC/RS | Currículo Lattes CNPq ID: 1920374097568395
// ============================================================================

export const PROFILE_INFO = {
  name: 'Dra. Beatriz Teixeira Figueiredo',
  shortName: 'Dra. Beatriz Figueiredo',
  role: 'Advogada • FV Advogados Associados',
  tagline: 'Ajudo empresas e trabalhadores a entenderem e protegerem seus direitos.',
  education: 'UESC | Pós-graduanda PUC/RS',
  instagramUrl: 'https://www.instagram.com/beatrizfigueiredoadv/',
  instagramHandle: '@beatrizfigueiredoadv',
  officeName: 'FV Advogados Associados',
  officeInstagramUrl: 'https://www.instagram.com/fvadvogadosassociados/',
  officeInstagramHandle: '@fvadvogadosassociados',
  officeSince: 'Desde 1990',
  officePhone: '(73) 3211-3550',
  whatsappNumber: '557332113550',
  city: 'Itabuna & Ilhéus — Bahia',
  lattesUrl: 'http://lattes.cnpq.br/1920374097568395',
  lattesId: '1920374097568395',
};

export const DEFAULT_LAWYER_PHOTOS = {
  hero: '/images/beatriz-figueiredo.jpg',
  about: '/images/beatriz-figueiredo.jpg',
  contact: '/images/beatriz-figueiredo.jpg',
  fvLogo: '/images/fv-logo.jpg',
};

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
  },
  {
    id: 'direito-publico-e-fazenda',
    title: 'Direito Público & Fazenda Pública',
    shortDesc:
      'Atuação estratégica perante o Poder Público, defesa de servidores e empresas, licitações, saúde pública e processos administrativos e judiciais.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    icon: Landmark,
    fullContent: [
      'A relação entre cidadãos, empresas, servidores e a Administração Pública frequentemente requer intervenção jurídica qualificada para assegurar o cumprimento da Constituição e das leis.',
      'A experiência prática adquirida no Gabinete da 1ª Vara da Fazenda Pública da Comarca de Itabuna (TJ/BA) e na 7ª Promotoria de Justiça de Ilhéus (MP/BA) proporciona visão detalhada do funcionamento do Judiciário e do Ministério Público.',
      'Atuamos em mandados de segurança, processos administrativos, demandas contra a Fazenda Pública e garantia do direito à saúde.'
    ],
    highlights: [
      'Demandas administrativas e judiciais perante a Fazenda Pública',
      'Direitos de servidores públicos e defesas administrativas',
      'Garantia do direito à saúde, medicamentos e tratamentos via judicial',
      'Mandados de segurança e tutela de garantias constitucionais'
    ]
  },
  {
    id: 'cidadania-e-direito-digital',
    title: 'Direito Digital & Proteção Online',
    shortDesc:
      'Proteção jurídica para pessoas e empresas no ambiente digital, remoção de conteúdo ilícito, combate a fraudes, exposição indevida e responsabilidade civil.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    icon: Laptop,
    fullContent: [
      'Fraudes eletrônicas, ataques à reputação de empresas e profissionais, vazamento de dados, perfis falsos e violência online exigem resposta jurídica imediata.',
      'Com projetos premiados em 1º lugar na UESC sobre o enfrentamento à violência online e cursos ministrados sobre Cidadania Digital ("É Digital, mas é Legal?"), oferecemos suporte técnico para preservação de provas digitais e responsabilização.',
      'Auxiliamos na elaboração de notificações extrajudiciais, atas notariais, remoção de conteúdos ofensivos e ações indenizatórias.'
    ],
    highlights: [
      'Proteção da reputação digital de empresas e profissionais',
      'Remoção de conteúdos ofensivos, perfis falsos e exposição indevida',
      'Orientação técnica para preservação de provas digitais (atas notariais e URLs)',
      'Ações indenizatórias por fraudes digitais, golpes e violação de imagem'
    ]
  }
];

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

export const DIFERENCIAIS = [
  {
    title: 'Tradição & Atualização',
    desc: 'Atuação integrada ao escritório FV Advogados Associados (desde 1990 em Itabuna) aliada à pós-graduação na PUC/RS e pesquisa na UESC.',
    icon: Scale
  },
  {
    title: 'Para Empresas e Trabalhadores',
    desc: 'Visão completa das relações jurídicas, auxiliando empregadores na prevenção de passivos e trabalhadores na defesa de seus direitos.',
    icon: Users
  },
  {
    title: 'Comunicação Clara e Direta',
    desc: 'Orientação jurídica sem juridiquês excessivo, para que você compreenda cada risco, direito, prazo e estratégia com total transparência.',
    icon: ShieldCheck
  },
  {
    title: 'Atendimento Presencial e Online',
    desc: 'Estrutura física em Itabuna - BA pelo escritório FV Advogados Associados e consultas digitais por videoconferência para todo o Brasil.',
    icon: Laptop
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Como funciona a consulta jurídica para empresas ou pessoas físicas?',
    a: 'Na consulta (presencial em Itabuna no escritório FV Advogados Associados ou online por videoconferência), ouvimos atentamente a demanda, analisamos os documentos e apresentamos um diagnóstico claro sobre seus direitos, riscos e a melhor estratégia preventiva, extrajudicial ou judicial.'
  },
  {
    q: 'O atendimento é voltado tanto para empresas quanto para trabalhadores?',
    a: 'Sim! Nossa missão é ajudar empresas e trabalhadores a entenderem seus direitos. Atuamos tanto na consultoria preventiva e defesa empresarial (redução de riscos e adequação legal) quanto na defesa de trabalhadores que tiveram seus direitos desrespeitados.'
  },
  {
    q: 'Onde fica localizado o escritório em Itabuna?',
    a: 'Atuamos no escritório FV Advogados Associados (@fvadvogadosassociados), referência em Itabuna - Bahia desde 1990. Você pode agendar atendimento presencial ou entrar em contato pelo telefone (73) 3211-3550 e WhatsApp.'
  },
  {
    q: 'Como funciona o atendimento online? Tem a mesma validade?',
    a: 'Sim! Como os processos judiciais hoje são 100% eletrônicos, realizamos consultas por chamada de vídeo ou WhatsApp, recebemos documentos digitalizados com total sigilo e colhemos assinaturas digitais com validade jurídica em todo o Brasil.'
  },
  {
    q: 'Produtores rurais podem revisar contratos de crédito rural?',
    a: 'Sim. A legislação do crédito rural prevê direitos importantes ao produtor, incluindo possibilidades de prorrogação e renegociação de dívidas em casos de frustração de safra, dificuldades de comercialização ou programas específicos da lavoura cacaueira.'
  }
];
