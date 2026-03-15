
"use client";

export default function HagoraPressLandingPage() {
  const catalog = [
    {
      title: "O Último Êxodo",
      genre: "Teologia",
      description:
        "Uma jornada profunda sobre redenção, exílio e esperança à luz das Escrituras.",
    },
    {
      title: "Um Alfaiate no Jardim",
      genre: "Ficção cristã",
      description:
        "Uma narrativa sensível sobre chamado, restauração e propósito eterno.",
    },
    {
      title: "Cartas a um Jovem Pastor",
      genre: "Ministério",
      description:
        "Conselhos pastorais, maturidade espiritual e sabedoria prática para uma geração em formação.",
    },
    {
      title: "A Fé que Move Montanhas",
      genre: "Devocional",
      description:
        "Reflexões que fortalecem a perseverança e reacendem a confiança em Deus.",
    },
    {
      title: "Sementes de Eternidade",
      genre: "Biografias",
      description:
        "Histórias reais de fé, obediência e impacto que atravessam gerações.",
    },
  ];

  const services = [
    {
      name: "Pacote Essencial",
      price: "A partir de R$ 2.490",
      description: "Para quem deseja publicar com base sólida e apresentação profissional.",
      items: [
        "Revisão ortográfica e gramatical",
        "Projeto de capa",
        "Diagramação profissional",
        "Preparação para impressão ou digital",
      ],
    },
    {
      name: "Pacote Legado",
      price: "A partir de R$ 6.990",
      highlight: true,
      description: "A experiência editorial completa para transformar manuscritos em obras memoráveis.",
      items: [
        "Avaliação editorial e teológica",
        "Mentoria de posicionamento da obra",
        "Capa premium + identidade visual",
        "Diagramação avançada",
        "Estratégia de lançamento",
        "Preparação Amazon + Hotmart",
      ],
    },
    {
      name: "Ghostwriting + Mentoria",
      price: "Sob consulta",
      description: "Para autores com mensagem clara, mas que precisam de apoio para estruturar ou escrever.",
      items: [
        "Mentoria literária",
        "Estruturação do conteúdo",
        "Ghostwriting parcial ou total",
        "Direção editorial personalizada",
      ],
    },
    {
      name: "Lançamento Estratégico",
      price: "A partir de R$ 1.990",
      description: "Leve sua mensagem ao mercado com mais presença, consistência e alcance real.",
      items: [
        "Planejamento de pré-venda",
        "Página de lançamento",
        "Amazon + Hotmart",
        "Assets promocionais",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Pr. Marcos Silva",
      role: "Autor de O Último Êxodo",
      quote:
        "Eu tinha medo de perder minha voz. A Hágora não só preservou — ela a elevou. Meu livro já impactou milhares de vidas.",
    },
    {
      name: "Ana Beatriz Costa",
      role: "Autora de Cartas para o Secreto",
      quote:
        "O cuidado editorial, a estética e o respeito à mensagem me mostraram que era possível publicar com excelência e verdade.",
    },
    {
      name: "Lucas Fernandes",
      role: "Autor de A Fé que Move Montanhas",
      quote:
        "O que era apenas um manuscrito se tornou uma obra com identidade, força e alcance real no digital e no físico.",
    },
  ];

  const faqs = [
    {
      q: "Quanto custa publicar um livro?",
      a: "Os projetos variam conforme escopo, formato, tiragem e estratégia. A Hágora oferece caminhos como Essencial, Legado e soluções personalizadas.",
    },
    {
      q: "Vocês revisam doutrina e coerência teológica?",
      a: "Sim. A avaliação teológica e editorial é um dos diferenciais da Hágora para manter profundidade, fidelidade e clareza na mensagem cristã.",
    },
    {
      q: "Meu livro pode ser publicado na Amazon?",
      a: "Sim. Dependendo do projeto, a obra pode ser preparada para Amazon, Hotmart e outros canais estratégicos de distribuição.",
    },
    {
      q: "Quanto tempo leva para publicar?",
      a: "Em média, projetos bem organizados podem ser concluídos em menos de 6 meses, dependendo da complexidade e da etapa do manuscrito.",
    },
    {
      q: "Posso publicar mesmo sem ser pastor ou líder?",
      a: "Sim. A Hágora Press existe para autores com mensagem edificante, sólida e relevante — não apenas para líderes ministeriais.",
    },
  ];


function enviarProjetoWhatsApp(event?: React.FormEvent) {
  event?.preventDefault();

  const nome = (document.getElementById("nome") as HTMLInputElement)?.value.trim() || "";
  const email = (document.getElementById("email") as HTMLInputElement)?.value.trim() || "";
  const whatsapp = (document.getElementById("whatsapp") as HTMLInputElement)?.value.trim() || "";
  const titulo = (document.getElementById("titulo") as HTMLInputElement)?.value.trim() || "";
  const genero = (document.getElementById("genero") as HTMLInputElement)?.value.trim() || "";
  const mensagem = (document.getElementById("mensagem") as HTMLTextAreaElement)?.value.trim() || "";

  const texto = `Olá! Quero enviar meu projeto para avaliação gratuita.

*Nome:* ${nome}
*E-mail:* ${email}
*WhatsApp:* ${whatsapp}
*Título provisório do livro:* ${titulo}
*Gênero:* ${genero}
*Mensagem breve sobre a obra:* ${mensagem}`;

  const numero = "556235847141";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}



function enviarGuiaWhatsApp(event?: React.FormEvent) {
  event?.preventDefault();

  const nome = (document.getElementById("lead-nome") as HTMLInputElement)?.value.trim() || "";
  const email = (document.getElementById("lead-email") as HTMLInputElement)?.value.trim() || "";

  const texto = `Olá! Quero receber o guia gratuito da Hágora Press.

*Nome:* ${nome}
*E-mail:* ${email}
*Interesse:* Guia “7 Erros que Matam Livros Cristãos antes mesmo de serem publicados”`;

  const numero = "556235847141";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-slate-900 selection:bg-amber-200">
      <div className="bg-[#0b2341] text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center font-medium tracking-wide">
          +70 obras publicadas • Autores em 12 países • Qualidade que edifica gerações
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08172b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-amber-200/30 bg-white shadow-lg shadow-amber-950/10">
              <img
                src="/hagora-logo.jpeg"
                alt="Hágora Press"
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div>
              <p className="font-serif text-xl font-bold tracking-wide text-white">Hágora Press</p>
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200">Excelência em literatura cristã</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex">
            <a href="#inicio" className="transition hover:text-amber-300">Início</a>
            <a href="#catalogo" className="transition hover:text-amber-300">Catálogo</a>
            <a href="#sobre" className="transition hover:text-amber-300">Sobre Nós</a>
            <a href="#blog" className="transition hover:text-amber-300">Blog</a>
            <a href="#contato" className="transition hover:text-amber-300">Contato</a>
          </nav>

          <a
            href="#catalogo"
            className="rounded-full border border-amber-300/30 bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-700/20 transition hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Ver Catálogo
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#183153_0%,#0a1a2f_45%,#071220_100%)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,119,6,0.14),transparent_35%,rgba(255,255,255,0.05)_60%,transparent)]" />
        <div className="absolute inset-y-0 left-1/2 hidden w-[520px] -translate-x-1/2 opacity-[0.10] md:block">
          <img
            src="/hagora-logo."
            alt="Marca Hágora ao fundo"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-4 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 backdrop-blur">
                Editora cristã 100% evangélica
              </span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                14 autores publicaram este mês
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Onde a Profundidade da Fé Encontra a <span className="text-amber-300">Excelência Literária</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Sua mensagem é eterna. Seu livro merece ser também. Na Hágora Press transformamos manuscritos em legados com rigor teológico, design de alto padrão e estratégia real de alcance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-4 text-base font-semibold text-slate-950 shadow-2xl shadow-amber-700/20 transition hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Quero Publicar Minha Obra →
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Conhecer o Catálogo
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["Avaliação inicial", "Gratuita e estratégica"],
                ["Padrão visual", "Premium e memorável"],
                ["Distribuição", "Amazon, Hotmart e mais"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur"
                >
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-amber-400/20 blur-3xl lg:block" />
            <div className="absolute -right-4 bottom-10 hidden h-36 w-36 rounded-full bg-blue-300/10 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <div className="overflow-hidden rounded-[1.7rem] bg-[#efe7d8]">
                <div className="relative aspect-[4/5]">
                  <img
                    src="/inicio.png"
                    alt="Marca Hágora Press"
                    className="absolute inset-0 h-full w-full object-contain p-10 opacity-90"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0,transparent_35%,rgba(12,24,42,0.1)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08172b] via-[#08172b]/70 to-transparent p-7">
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-amber-200">Excelência em literatura cristã</p>
                    <p className="mt-3 max-w-md font-serif text-2xl font-semibold text-white">
                      Manuscritos com alma merecem produção editorial à altura da mensagem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/70">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3 lg:px-8">
          {[
            ["+70", "livros publicados"],
            ["4,98/5", "em avaliações de autores"],
            ["Presença", "Amazon, Submarino, Hotmart e livrarias físicas"],
          ].map(([value, label]) => (
            <div key={value} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-3xl font-bold text-[#0b2341]">{value}</div>
              <div className="mt-2 text-sm font-medium text-slate-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">Por que existimos</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b2341] sm:text-5xl">
            A Verdade não só deve ser falada — ela deve ser vestida de beleza e profissionalismo.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Muitas vozes têm mensagens poderosas, mas poucas chegam ao leitor com a qualidade que a mensagem do Reino merece. O mercado independente sacrifica revisão teológica, design ou estratégia de venda. Na Hágora Press, unimos profundidade espiritual, acabamento premium e visão editorial para formar obras que realmente permanecem.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Dor", "Mensagens valiosas perdem força por falta de estrutura editorial sólida."],
            ["Solução", "Acompanhamento estratégico desde a essência da obra até a distribuição."],
            ["Dor", "Capas e diagramações amadoras enfraquecem a percepção do conteúdo."],
            ["Solução", "Design premium que honra a mensagem e posiciona o autor com excelência."],
          ].map(([label, text], index) => (
            <div
              key={`${label}-${index}`}
              className={`rounded-3xl border p-6 shadow-sm ${
                label === "Dor"
                  ? "border-rose-200 bg-rose-50"
                  : "border-emerald-200 bg-emerald-50"
              }`}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">{label}</p>
              <p className="mt-3 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f0e6d6] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">Nossos pilares</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b2341] sm:text-5xl">
              Três fundamentos que sustentam obras memoráveis.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Rigor Editorial",
                text: "Leitura técnica, revisão profunda e discernimento teológico para proteger a essência da mensagem.",
              },
              {
                title: "Estética Premium",
                text: "Direção visual refinada, identidade literária forte e acabamento digno de obras que permanecem.",
              },
              {
                title: "Estratégia de Alcance",
                text: "Planejamento de distribuição, posicionamento e lançamento para ampliar a voz do autor com intencionalidade.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="mb-5 inline-flex rounded-2xl bg-[#0b2341] px-4 py-2 text-sm font-semibold text-amber-200">
                  Excelência
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0b2341]">{pillar.title}</h3>
                <p className="mt-4 leading-8 text-slate-700">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">Processo</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b2341] sm:text-5xl">
            Do manuscrito bruto ao livro que impacta nações em menos de 6 meses.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {[
            "Envio do projeto",
            "Avaliação teológica e editorial gratuita",
            "Mentoria + desenvolvimento",
            "Design & produção",
            "Lançamento + marketing contínuo",
          ].map((step, index) => (
            <div key={step} className="relative rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-lg font-bold text-slate-950">
                {index + 1}
              </div>
              <p className="font-semibold text-slate-900">{step}</p>
              {index < 4 && (
                <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-amber-400 lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="catalogo" className="bg-[#08172b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Portfólio em destaque</p>
              <h2 className="mt-4 font-serif text-3xl font-bold sm:text-5xl">
                Catálogo com obras que unem beleza, profundidade e relevância.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Teologia", "Devocionais", "Infantil", "Ficção cristã", "Biografias"].map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {catalog.map((book, index) => (
              <div
                key={book.title}
                className={`rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur ${
                  index === 1 ? "xl:-translate-y-4" : ""
                } ${index === 2 ? "xl:-translate-y-8" : ""}`}
              >
                <div className="rounded-[1.5rem] bg-gradient-to-b from-amber-200 to-amber-500 p-[1px]">
                  <div className="flex aspect-[3/4] items-end rounded-[1.45rem] bg-[linear-gradient(180deg,#1b3356_0%,#0a1627_100%)] p-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-200">{book.genre}</p>
                      <h3 className="mt-2 font-serif text-2xl font-bold text-white">{book.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{book.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contato"
              className="inline-flex rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Ver todos os 70+ títulos →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">Depoimentos</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b2341] sm:text-5xl">
            O que autores dizem depois de viver a experiência Hágora.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b2341] text-lg font-bold text-amber-300">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f4ec] py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">Soluções completas</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b2341] sm:text-5xl">
              Serviços editoriais pensados para diferentes fases da sua obra.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.name}
                className={`rounded-[2rem] border p-7 shadow-sm ${
                  service.highlight
                    ? "border-amber-300 bg-[#0b2341] text-white shadow-xl"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold">{service.name}</h3>
                    <p className={`mt-2 text-sm ${service.highlight ? "text-amber-200" : "text-amber-700"}`}>
                      {service.price}
                    </p>
                  </div>
                  {service.highlight && (
                    <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-950">
                      Mais completo
                    </span>
                  )}
                </div>
                <p className={`mt-4 leading-7 ${service.highlight ? "text-slate-200" : "text-slate-600"}`}>
                  {service.description}
                </p>
                <ul className={`mt-6 space-y-3 text-sm ${service.highlight ? "text-slate-100" : "text-slate-700"}`}>
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${service.highlight ? "bg-amber-300" : "bg-amber-500"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-8">
        <div className="rounded-[2.2rem] border border-amber-200 bg-[linear-gradient(135deg,#fff7df_0%,#f4e5b2_100%)] p-10 shadow-lg">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-900">Lead magnet</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b2341] sm:text-5xl">
              Baixe GRÁTIS o guia “7 Erros que Matam Livros Cristãos antes mesmo de serem publicados”.
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Capture clareza, evite erros caros e entenda o que separa manuscritos comuns de obras com legado.
            </p>
          </div>
<form onSubmit={enviarGuiaWhatsApp} className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
  <input
    id="lead-nome"
    placeholder="Seu nome"
    className="rounded-2xl border border-white/70 bg-white px-5 py-4 outline-none ring-0 placeholder:text-slate-400"
  />
  <input
    id="lead-email"
    placeholder="Seu e-mail"
    className="rounded-2xl border border-white/70 bg-white px-5 py-4 outline-none ring-0 placeholder:text-slate-400"
  />
  <button
    type="submit"
    className="rounded-2xl bg-[#0b2341] px-5 py-4 font-semibold text-white transition hover:bg-[#112c50]"
  >
    Quero o guia agora
  </button>
</form>
        </div>
      </section>

      <section id="sobre" className="bg-[#0b2341] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(145deg,#f2eadb_0%,#e7dbc1_100%)] p-8">
              <img
                src="/livro.png"
                alt="Identidade visual Hágora"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Sobre a Hágora Press</p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-5xl">
              Uma editora para mensagens que precisam permanecer.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              A Hágora Press nasceu para servir autores cristãos com seriedade, sensibilidade estética e compromisso com a verdade. Nosso objetivo é transformar conteúdos valiosos em livros que honrem a mensagem, fortaleçam a fé e alcancem pessoas com excelência real.
            </p>
            <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-white/5 p-6 text-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Declaração de fé</p>
              <p className="mt-3 leading-8">
                Cremos na centralidade das Escrituras, na beleza da verdade revelada em Cristo e na responsabilidade de comunicar o Evangelho com fidelidade, profundidade e amor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">Perguntas frequentes</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b2341] sm:text-5xl">
            Respostas para as dúvidas mais comuns antes de publicar.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 marker:hidden">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-2xl text-amber-700 transition group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 max-w-4xl leading-8 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-[linear-gradient(180deg,#f2e8d6_0%,#f8f4ec_100%)] py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">Chamada final</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#0b2341] sm:text-5xl">
              Sua mensagem merece ser eterna. Vamos escrever essa história juntos?
            </h2>
            <p className="mt-5 text-lg text-slate-700">
              Avaliação gratuita em até 48h • Confidencialidade total • Sem compromisso
            </p>
          </div>

          <div className="mx-auto mt-10 rounded-[2rem] border border-white/70 bg-white p-8 shadow-lg sm:p-10">
            <form onSubmit={enviarProjetoWhatsApp}>
  <div className="grid gap-4 md:grid-cols-2">
    <input
      id="nome"
      placeholder="Nome"
      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none placeholder:text-slate-400"
    />
    <input
      id="email"
      placeholder="E-mail"
      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none placeholder:text-slate-400"
    />
    <input
      id="whatsapp"
      placeholder="WhatsApp"
      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none placeholder:text-slate-400"
    />
    <input
      id="titulo"
      placeholder="Título provisório do livro"
      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none placeholder:text-slate-400"
    />
    <input
      id="genero"
      placeholder="Gênero"
      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none placeholder:text-slate-400 md:col-span-2"
    />
    <textarea
      id="mensagem"
      placeholder="Mensagem breve sobre sua obra"
      rows={5}
      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none placeholder:text-slate-400 md:col-span-2"
    />
  </div>

  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <p className="text-sm leading-7 text-slate-500">
      Ao enviar, você demonstra interesse em receber uma avaliação editorial inicial da sua obra.
    </p>

    <button
      type="submit"
      className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-400"
    >
      Enviar meu projeto para avaliação gratuita
    </button>
  </div>
</form>
          </div>
        </div>
      </section>

      <footer className="bg-[#08172b] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-2xl bg-white p-1">
                <img src="/hagora-logo.jpeg" alt="Hágora Press" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold">Hágora Press</p>
                <p className="text-sm text-amber-200">Excelência em literatura cristã</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Produção editorial cristã com profundidade, beleza e estratégia para obras que edificam gerações.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Links rápidos</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><a href="#inicio" className="hover:text-white">Início</a></li>
              <li><a href="#catalogo" className="hover:text-white">Catálogo</a></li>
              <li><a href="#sobre" className="hover:text-white">Sobre nós</a></li>
              <li><a href="#contato" className="hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Redes & políticas</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Instagram</li>
              <li>YouTube</li>
              <li>WhatsApp Business</li>
              <li>Política de Privacidade</li>
              <li>LGPD</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Selo</p>
            <div className="mt-4 inline-flex rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-sm text-amber-100">
              Editora cristã certificada
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-300">
              © 2026 Hágora Press. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
