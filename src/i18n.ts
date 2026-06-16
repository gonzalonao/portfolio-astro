// Single source of truth for UI strings.
// Components and pages import `t` and `getLang(Astro.url)` to render the right locale.

export type Lang = 'en' | 'es';

export function getLang(url: URL): Lang {
  return url.pathname === '/es' || url.pathname.startsWith('/es/') ? 'es' : 'en';
}

/**
 * Returns the URL of the same page in the other language. Used by the language
 * toggle in the navbar. Falls back to the locale root if the route does not
 * have an obvious mirror (e.g. /projects/<slug> -> /es/projects/<slug>).
 */
export function altLangPath(pathname: string, target: Lang): string {
  const isEs = pathname === '/es' || pathname.startsWith('/es/');
  if (target === 'es') {
    if (isEs) return pathname;
    return pathname === '/' ? '/es/' : `/es${pathname}`;
  }
  if (!isEs) return pathname;
  const stripped = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  return stripped;
}

export const t = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      writing: 'Writing',
      education: 'Education',
      contact: 'Contact',
      toggleLang: 'Español',
      toggleLangAria: 'Switch to Spanish',
    },
    hero: {
      greeting: "Hello, I'm",
      roles: ['Data Analyst', 'BI Developer', 'Python Developer', 'AI & LLM Engineer'],
      subtitleHtml:
        "I build <strong>data &amp; AI systems</strong> in Python — cloud pipelines, ML and LLM applications, and automation. Backed by a Mathematics degree, systems training at <strong>42 Málaga</strong>, a Master's in <strong>Big Data &amp; AI</strong>, and Microsoft PL-300 certification.",
      ctaProjects: 'View Projects',
      ctaCv: 'Download CV',
      ctaGh: 'GitHub',
    },
    about: {
      heading: 'About',
      paragraphsHtml: [
        "I'm a developer working across <strong>data engineering, AI/ML and Python</strong>, with an unusual foundation: a Mathematics degree in progress, the systems-level rigor of <strong>42 Málaga</strong> (where you write a Unix shell from scratch in C), and a Master's in <strong>Big Data &amp; AI</strong>. I'm also a Microsoft <strong>PL-300</strong>–certified Power BI analyst — the analytics layer that turns the data I move and model into decisions.",
        "My deepest work is in <strong>machine learning and deep learning</strong>. My Master's Thesis is a Spatio-Temporal Graph Neural Network (GCN/GAT + LSTM) predicting how flight delays cascade through the US airport network across 70M+ records. Alongside it I build RAG and generative-AI systems and train models with scikit-learn and PyTorch.",
        "On the engineering side I design cloud data pipelines on <strong>Azure Data Factory, Microsoft Fabric and Databricks/PySpark</strong> with Medallion (Bronze/Silver/Gold) architecture, and I learn by building: I forked and extended <code>steampy</code> to power an async-Python trading and portfolio-analytics system over the Steam Community Market (<code>asyncio</code> + <code>aiohttp</code>), and built <strong>MálagaHelper</strong>, an LLM city assistant hardened against prompt injection. The thread across all of it: turning messy data into decisions people can act on.",
      ],
      quickFactsTitle: 'Quick facts',
      location: 'Location',
      locationValue: 'Málaga, Spain',
      languages: 'Languages',
      languagesValue: 'Spanish (native), English (C1)',
      studying: 'Currently studying',
      studyingValue: "Master's in Big Data & AI",
      openTo: 'Open to roles',
      openToValue: 'AI / ML Engineer · Python Developer · Data Analyst',
    },
    skills: {
      heading: 'What I work with',
      groups: [
        { title: 'BI & Visualization', color: 'teal', skills: ['Power BI (Advanced)', 'DAX', 'Power Query (M)', 'Microsoft Fabric', 'Excel'] },
        { title: 'Data Engineering', color: 'blue', skills: ['Azure Data Factory', 'Databricks', 'PySpark', 'Medallion Architecture', 'Pentaho PDI', 'Celonis'] },
        { title: 'AI / LLM / Deep Learning', color: 'purple', skills: ['RAG', 'LangChain', 'OpenAI API', 'HuggingFace', 'PyTorch', 'PyTorch Geometric', 'scikit-learn', 'GNNs (GCN, GAT)', 'LSTM'] },
        { title: 'Programming & Trading Infra', color: 'orange', skills: ['Python', 'pandas', 'asyncio', 'aiohttp', 'Selenium', 'BeautifulSoup', 'Rotating proxies', 'numpy', 'SQL', 'JavaScript', 'C'] },
        { title: 'Cloud', color: 'green', skills: ['Azure Data Factory', 'Blob Storage', 'SQL Azure', 'Cosmos DB', 'Azure AD', 'Microsoft Fabric'] },
      ],
    },
    featured: {
      heading: 'Selected Work',
      viewAll: 'View all projects →',
    },
    cta: {
      heading: "Let's build something",
      body: 'Currently seeking opportunities in Data Analytics, Business Intelligence, and Python Development. Open to roles in Málaga, Madrid, Barcelona, or remote.',
      email: 'Email',
      linkedin: 'LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Astro, MDX, and Tailwind.',
    },
    project: {
      breadcrumbProjects: 'Projects',
      statusCompleted: 'Completed',
      statusInProgress: 'In progress',
      github: 'GitHub',
      liveDemo: 'Live Demo',
      tableOfContents: 'On this page',
      prev: 'Previous',
      next: 'Next',
      backToProjects: '← Back to all projects',
    },
    projectsPage: {
      title: 'Projects',
      intro: 'A selection of recent case studies — from investing automation to graph-based ML and end-to-end BI pipelines.',
    },
    writingPage: {
      title: 'Writing',
      intro: 'Technical deep-dives and engineering notes from my projects — the design decisions, trade-offs, and measurements behind the work.',
      empty: 'No articles yet — check back soon.',
    },
    article: {
      breadcrumbWriting: 'Writing',
      tableOfContents: 'On this page',
      backToWriting: '← Back to all writing',
      prev: 'Previous',
      next: 'Next',
      relatedProject: 'Related project',
      readTime: 'min read',
    },
    education: {
      title: 'Education',
      intro: 'A blend of formal mathematics, peer-to-peer systems engineering at 42, and an industry-flavored Master\'s in Big Data & AI.',
      timelineHeading: 'Timeline',
      certsHeading: 'Certifications',
    },
    contact: {
      title: "Let's talk",
      body: 'Currently seeking opportunities in Data Analytics, Business Intelligence, and Python Development. Open to roles in Málaga, Madrid, Barcelona, or remote.',
      languagesLabel: 'Languages',
      languagesValue: 'Spanish (native), English (C1)',
      locationLabel: 'Location',
      locationValue: 'Málaga, Spain',
    },
    notFound: {
      heading: 'This page wandered off.',
      body: "The link you followed might be broken, or the page may have moved. Let's get you back.",
      cta: 'Back to Home',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      writing: 'Artículos',
      education: 'Formación',
      contact: 'Contacto',
      toggleLang: 'English',
      toggleLangAria: 'Cambiar a inglés',
    },
    hero: {
      greeting: 'Hola, soy',
      roles: ['Analista de Datos', 'Desarrollador BI', 'Desarrollador Python', 'Ingeniero de IA y LLMs'],
      subtitleHtml:
        'Construyo <strong>sistemas de datos e IA</strong> en Python — pipelines en la nube, aplicaciones de ML y LLMs, y automatización. Con base en un Grado de Matemáticas, formación de sistemas en <strong>42 Málaga</strong>, un Máster en <strong>Big Data e IA</strong> y la certificación Microsoft PL-300.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      ctaGh: 'GitHub',
    },
    about: {
      heading: 'Sobre mí',
      paragraphsHtml: [
        'Soy desarrollador en el cruce entre <strong>ingeniería de datos, IA/ML y Python</strong>, con una base poco habitual: un Grado de Matemáticas en curso, el rigor a nivel de sistemas de <strong>42 Málaga</strong> (donde se escribe una shell de Unix desde cero en C) y un Máster en <strong>Big Data e IA</strong>. También soy analista de Power BI certificado en Microsoft <strong>PL-300</strong> — la capa analítica que convierte en decisiones los datos que muevo y modelo.',
        'Mi trabajo más profundo está en <strong>machine learning y deep learning</strong>. Mi Trabajo Fin de Máster es una Red Neuronal de Grafos Espacio-Temporal (GCN/GAT + LSTM) que predice cómo se propagan los retrasos a través de la red de aeropuertos de EE. UU. sobre más de 70M de registros. Junto a ello construyo sistemas RAG e IA generativa y entreno modelos con scikit-learn y PyTorch.',
        'En la parte de ingeniería diseño pipelines de datos en la nube sobre <strong>Azure Data Factory, Microsoft Fabric y Databricks/PySpark</strong> con arquitectura Medallion (Bronce/Plata/Oro), y aprendo construyendo: bifurqué y extendí <code>steampy</code> para impulsar un sistema de trading y análisis de cartera en Python asíncrono sobre el Steam Community Market (<code>asyncio</code> + <code>aiohttp</code>), y desarrollé <strong>MálagaHelper</strong>, un asistente urbano basado en LLM endurecido frente a la inyección de prompts. El hilo común: convertir datos desordenados en decisiones accionables.',
      ],
      quickFactsTitle: 'Datos rápidos',
      location: 'Ubicación',
      locationValue: 'Málaga, España',
      languages: 'Idiomas',
      languagesValue: 'Español (nativo), Inglés (C1)',
      studying: 'Cursando actualmente',
      studyingValue: 'Máster en Big Data e IA',
      openTo: 'Abierto a roles',
      openToValue: 'Ingeniero de IA / ML · Desarrollador Python · Analista de Datos',
    },
    skills: {
      heading: 'Con qué trabajo',
      groups: [
        { title: 'BI y Visualización', color: 'teal', skills: ['Power BI (Avanzado)', 'DAX', 'Power Query (M)', 'Microsoft Fabric', 'Excel'] },
        { title: 'Ingeniería de Datos', color: 'blue', skills: ['Azure Data Factory', 'Databricks', 'PySpark', 'Arquitectura Medallion', 'Pentaho PDI', 'Celonis'] },
        { title: 'IA / LLM / Deep Learning', color: 'purple', skills: ['RAG', 'LangChain', 'OpenAI API', 'HuggingFace', 'PyTorch', 'PyTorch Geometric', 'scikit-learn', 'GNNs (GCN, GAT)', 'LSTM'] },
        { title: 'Programación e Infra de Trading', color: 'orange', skills: ['Python', 'pandas', 'asyncio', 'aiohttp', 'Selenium', 'BeautifulSoup', 'Proxies rotatorios', 'numpy', 'SQL', 'JavaScript', 'C'] },
        { title: 'Cloud', color: 'green', skills: ['Azure Data Factory', 'Blob Storage', 'SQL Azure', 'Cosmos DB', 'Azure AD', 'Microsoft Fabric'] },
      ],
    },
    featured: {
      heading: 'Trabajo destacado',
      viewAll: 'Ver todos los proyectos →',
    },
    cta: {
      heading: 'Construyamos algo juntos',
      body: 'Actualmente busco oportunidades en Analítica de Datos, Business Intelligence y Desarrollo Python. Abierto a roles en Málaga, Madrid, Barcelona o remoto.',
      email: 'Email',
      linkedin: 'LinkedIn',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      builtWith: 'Hecho con Astro, MDX y Tailwind.',
    },
    project: {
      breadcrumbProjects: 'Proyectos',
      statusCompleted: 'Completado',
      statusInProgress: 'En curso',
      github: 'GitHub',
      liveDemo: 'Demo en vivo',
      tableOfContents: 'En esta página',
      prev: 'Anterior',
      next: 'Siguiente',
      backToProjects: '← Volver a todos los proyectos',
    },
    projectsPage: {
      title: 'Proyectos',
      intro: 'Una selección de casos de estudio recientes — desde automatización de inversión hasta ML con grafos y pipelines BI de punta a punta.',
    },
    writingPage: {
      title: 'Artículos',
      intro: 'Análisis técnicos en profundidad y notas de ingeniería de mis proyectos — las decisiones de diseño, los compromisos y las mediciones detrás del trabajo.',
      empty: 'Aún no hay artículos — vuelve pronto.',
    },
    article: {
      breadcrumbWriting: 'Artículos',
      tableOfContents: 'En esta página',
      backToWriting: '← Volver a todos los artículos',
      prev: 'Anterior',
      next: 'Siguiente',
      relatedProject: 'Proyecto relacionado',
      readTime: 'min de lectura',
    },
    education: {
      title: 'Formación',
      intro: 'Una mezcla de matemáticas formales, ingeniería de sistemas estilo peer-to-peer en 42 y un Máster en Big Data e IA con sabor a industria.',
      timelineHeading: 'Cronología',
      certsHeading: 'Certificaciones',
    },
    contact: {
      title: 'Hablemos',
      body: 'Actualmente busco oportunidades en Analítica de Datos, Business Intelligence y Desarrollo Python. Abierto a roles en Málaga, Madrid, Barcelona o remoto.',
      languagesLabel: 'Idiomas',
      languagesValue: 'Español (nativo), Inglés (C1)',
      locationLabel: 'Ubicación',
      locationValue: 'Málaga, España',
    },
    notFound: {
      heading: 'Esta página se ha perdido.',
      body: 'El enlace que seguiste puede estar roto o la página puede haberse movido. Te llevamos de vuelta.',
      cta: 'Volver al inicio',
    },
  },
} as const;
