# Dra. Beatriz Teixeira Figueiredo — Advocacia & Consultoria Jurídica

Site institucional desenvolvido em **React + Vite + Tailwind CSS** para a advogada **Dra. Beatriz Teixeira Figueiredo** ([@beatrizfigueiredoadv](https://www.instagram.com/beatrizfigueiredoadv/)).

## Perfil Profissional
- **Atuação:** Advogada integrante do escritório **FV Advogados Associados** ([@fvadvogadosassociados](https://www.instagram.com/fvadvogadosassociados/) — Desde 1990 em Itabuna - BA).
- **Formação:** Graduada em Direito pela **UESC** (Universidade Estadual de Santa Cruz) e **Pós-graduanda pela PUC/RS**.
- **Foco:** Assessoria jurídica estratégica para **empresas e trabalhadores**, Direito Cível, Direito das Famílias e Direitos da Mulher, Direito Agrário e Crédito Rural, e Direito Público.
- **Currículo Lattes (CNPq):** [http://lattes.cnpq.br/1920374097568395](http://lattes.cnpq.br/1920374097568395)

## Estrutura do Projeto

```text
├── public/
│   └── images/
│       ├── beatriz-figueiredo.jpg       # Foto profissional da Dra. Beatriz (@beatrizfigueiredoadv)
│       ├── beatrizfigueiredoadv_og.jpg  # Miniatura original do Instagram
│       └── fv-logo.jpg                  # Logo do escritório FV Advogados Associados
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                   # Navegação single-page enxuta
│   │   ├── HeroSection.jsx              # Seção principal com foto, selo giratório e credenciais
│   │   ├── AreasSection.jsx             # Áreas de atuação + modal de detalhes
│   │   ├── DiferenciaisSection.jsx      # Diferenciais do atendimento
│   │   ├── CtaBanner.jsx                # Banner de agendamento
│   │   ├── AboutSection.jsx             # Sobre a especialista + FV Advogados + abas do Lattes
│   │   ├── ArticlesSection.jsx          # Produção científica e artigos
│   │   ├── FaqSection.jsx               # Dúvidas frequentes (Accordion)
│   │   ├── ContactSection.jsx           # Formulário de agendamento e contato direto
│   │   ├── Footer.jsx                   # Rodapé institucional
│   │   └── PhotoCustomizerModal.jsx     # Modal para testar fotos personalizadas no navegador
│   ├── data/
│   │   └── siteData.js                  # Dados estruturados da profissional e do escritório
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Como executar localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```
