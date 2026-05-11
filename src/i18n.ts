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
      education: 'Education',
      contact: 'Contact',
      toggleLang: 'Español',
      toggleLangAria: 'Switch to Spanish',
    },
    hero: {
      greeting: "Hello, I'm",
      roles: ['Data Analyst', 'BI Developer', 'Python Developer', 'AI & LLM Engineer'],
      subtitleHtml:
        "I build investing tools — from async Python automation for the Steam Community Market to portfolio analytics dashboards. Mathematics student, trained at <strong>42 Málaga</strong>, currently pursuing a Master's in Big Data &amp; AI.",
      ctaProjects: 'View Projects',
      ctaCv: 'Download CV',
      ctaGh: 'GitHub',
    },
    about: {
      heading: 'About',
      paragraphsHtml: [
        "I'm a data professional with an unusual combination: a mathematical foundation from my Mathematics degree, the systems-level rigor of <strong>42 Málaga</strong> (where you write a Unix shell from scratch in C and ship real-time multiplayer in raw networking primitives), and a Master's in <strong>Big Data &amp; AI</strong> covering ML, RAG with generative AI, Databricks/PySpark, and end-to-end Microsoft Fabric.",
        "My flagship project is a <strong>portfolio analytics &amp; trading automation system for the Steam Community Market</strong> — treating digital game items as a tradable asset class. It combines async Python (<code>asyncio</code> + <code>aiohttp</code>) with a rotating-proxy network for sub-second order placement, a Power Query / Excel BI layer that tracks realized P&amp;L and rolling ROI, and a scheduler that runs unattended trade rotations at off-peak hours. I forked and extended <code>steampy</code> to make this possible.",
        "On the BI side I work day-to-day with Power BI (DAX, Power Query M, semantic modeling), Microsoft Fabric, and Excel. My ML/DL focus has been deep learning for graph-structured problems — my Master's Thesis is a Spatio-Temporal Graph Neural Network (GCN/GAT + LSTM) predicting how flight delays cascade through the US airport network across 70M+ records.",
      ],
      quickFactsTitle: 'Quick facts',
      location: 'Location',
      locationValue: 'Málaga, Spain',
      languages: 'Languages',
      languagesValue: 'Spanish (native), English (C1)',
      studying: 'Currently studying',
      studyingValue: "Master's in Big Data & AI",
      openTo: 'Open to roles',
      openToValue: 'Data Analyst · BI Developer · Python Developer',
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
      education: 'Formación',
      contact: 'Contacto',
      toggleLang: 'English',
      toggleLangAria: 'Cambiar a inglés',
    },
    hero: {
      greeting: 'Hola, soy',
      roles: ['Analista de Datos', 'Desarrollador BI', 'Desarrollador Python', 'Ingeniero de IA y LLMs'],
      subtitleHtml:
        'Construyo herramientas de inversión — desde automatización asíncrona en Python para el Steam Community Market hasta dashboards de análisis de cartera. Estudiante de Matemáticas, formado en <strong>42 Málaga</strong>, cursando un Máster en Big Data e IA.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      ctaGh: 'GitHub',
    },
    about: {
      heading: 'Sobre mí',
      paragraphsHtml: [
        'Soy un profesional de datos con una combinación poco habitual: una base matemática del Grado de Matemáticas, el rigor a nivel de sistemas de <strong>42 Málaga</strong> (donde se escribe una shell de Unix desde cero en C y se construye un multijugador en tiempo real usando primitivas de red), y un Máster en <strong>Big Data e IA</strong> que cubre ML, RAG con IA generativa, Databricks/PySpark y Microsoft Fabric de punta a punta.',
        'Mi proyecto bandera es un <strong>sistema de análisis de cartera y automatización de trading sobre el Steam Community Market</strong> — tratando los items digitales como una clase de activo negociable. Combina Python asíncrono (<code>asyncio</code> + <code>aiohttp</code>) con una red de proxies rotatorios para colocar órdenes en menos de un segundo, una capa BI en Power Query / Excel que sigue el P&amp;L realizado y el ROI móvil, y un planificador que ejecuta las rotaciones de trading desatendidas en horas valle. Para hacerlo posible bifurqué y extendí <code>steampy</code>.',
        'En la parte BI trabajo a diario con Power BI (DAX, Power Query M, modelado semántico), Microsoft Fabric y Excel. Mi foco en ML/DL ha sido el aprendizaje profundo sobre datos en forma de grafo — mi Trabajo Fin de Máster es una Red Neuronal de Grafos Espacio-Temporal (GCN/GAT + LSTM) que predice cómo se propagan los retrasos a través de la red de aeropuertos de EE. UU. sobre más de 70M de registros.',
      ],
      quickFactsTitle: 'Datos rápidos',
      location: 'Ubicación',
      locationValue: 'Málaga, España',
      languages: 'Idiomas',
      languagesValue: 'Español (nativo), Inglés (C1)',
      studying: 'Cursando actualmente',
      studyingValue: 'Máster en Big Data e IA',
      openTo: 'Abierto a roles',
      openToValue: 'Analista de Datos · Desarrollador BI · Desarrollador Python',
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
