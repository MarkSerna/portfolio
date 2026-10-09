export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  category: 'realtime' | 'rpa' | 'opensource';
  categoryLabel: {
    es: string;
    en: string;
  };
  subtitle: {
    es: string;
    en: string;
  };
  problem: {
    es: string;
    en: string;
  };
  solution: {
    es: string;
    en: string;
  };
  result: {
    es: string;
    en: string;
  };
  tags: string[];
  isPrivate: boolean;
  repoUrl?: string;
  demoUrl?: string;
  packageUrl?: string;
  badge?: {
    es: string;
    en: string;
  };
  gradient: string;
  metrics?: {
    label: { es: string; en: string };
    value: string;
  }[];
}

export interface Experience {
  id: string;
  role: { es: string; en: string };
  company: string;
  period: { es: string; en: string };
  location: string;
  description: { es: string[]; en: string[] };
  skills: string[];
}

export interface SkillGroup {
  name: { es: string; en: string };
  icon: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Marco Eduar Serna López",
    shortName: "Marco Serna",
    tagline: {
      es: "Desarrollador Full Stack • Automatización de Procesos (RPA) • Sistemas en Tiempo Real",
      en: "Full Stack Developer • Process Automation (RPA) • Real-Time Systems"
    },
    location: "Manizales, Colombia",
    email: "marcoesernal@gmail.com",
    github: "https://github.com/MarkSerna",
    linkedin: "https://www.linkedin.com/in/marksernalopez",
    cvUrls: {
      es: "/cv-marco-serna-es.pdf",
      en: "/cv-marco-serna-en.pdf"
    },
    bio: {
      es: "Desarrollador Full Stack y especialista en automatización de procesos con experiencia construyendo plataformas de telemetría en tiempo real, bots empresariales RPA y arquitecturas escalables. Combino ingeniería de software sólida (TypeScript, Python, C#, PHP) con visión de producto para entregar soluciones robustas y medibles en producción.",
      en: "Full Stack Developer and process automation specialist with proven experience architecting real-time telemetry platforms, enterprise RPA bots, and scalable backends. Combining solid software engineering (TypeScript, Python, C#, PHP) with product sense to deliver robust, measurable solutions in production."
    },
    status: {
      es: "Disponible para proyectos & oportunidades técnicas",
      en: "Available for new roles & engineering challenges"
    },
    stats: [
      {
        value: "+2 Años",
        label: { es: "En Producción", en: "In Production" },
        sub: { es: "Desarrollo Full Stack y RPA", en: "Full Stack & RPA Engineering" }
      },
      {
        value: "Distribuida",
        label: { es: "Arquitectura", en: "Architecture" },
        sub: { es: "Microservicios, APIs y WebSockets", en: "Microservices, APIs & WebSockets" }
      },
      {
        value: "Autónomo",
        label: { es: "Pipelines ETL & RPA", en: "ETL & RPA Pipelines" },
        sub: { es: "Ingesta y validación documental", en: "Document ingestion & validation" }
      },
      {
        value: "Baja Latencia",
        label: { es: "Sistemas en Tiempo Real", en: "Real-Time Systems" },
        sub: { es: "WebSockets y eventos concurrentes", en: "WebSockets & concurrent events" }
      }
    ]
  },

  projects: [
    {
      id: "geo-transport",
      title: {
        es: "Plataforma de Movilidad Escolar y Telemetría en Tiempo Real",
        en: "Real-Time School Mobility & Telemetry Platform"
      },
      category: "realtime",
      categoryLabel: {
        es: "Tiempo Real & Geoespacial",
        en: "Real-Time & Geospatial"
      },
      subtitle: {
        es: "Ecosistema distribuido de seguimiento satelital, optimización de rutas (VRP) y comunicación bidireccional.",
        en: "Distributed ecosystem for satellite tracking, route optimization (VRP), and bidirectional communication."
      },
      problem: {
        es: "Falta de visibilidad y control en rutas escolares, tiempos muertos excesivos en los recorridos e incertidumbre constante para padres de familia y colegios sobre la ubicación exacta de los estudiantes.",
        en: "Lack of visibility and control in school bus operations, excessive dead times during routes, and persistent anxiety for parents and schools regarding student transit status."
      },
      solution: {
        es: "Diseño y desarrollo de una arquitectura distribuida completa: panel web administrativo con Mapbox, microservicio en Python para resolución del problema de ruteo vehicular (VRP), servidor WebSocket (Socket.IO) con Redis para streaming de coordenadas en tiempo real y persistencia geoespacial en PostgreSQL con PostGIS.",
        en: "Engineered a distributed architecture featuring a Mapbox-powered web administration hub, a Python microservice solving Vehicle Routing Problems (VRP), a Socket.IO + Redis cluster for sub-second telemetry broadcast, and geospatial indexing via PostgreSQL + PostGIS."
      },
      result: {
        es: "Trazabilidad continua de vehículos con sincronización en tiempo real, optimización algorítmica de trayectos y panel unificado de supervisión para centros educativos y familias.",
        en: "Continuous live tracking with real-time coordinate streaming, algorithmic path optimization, and unified monitoring dashboard for operations and guardians."
      },
      tags: ["Node.js", "TypeScript", "React", "Python", "FastAPI", "Redis", "Socket.IO", "PostgreSQL", "PostGIS", "Docker", "Mapbox"],
      isPrivate: true,
      badge: {
        es: "Caso de Estudio Empresarial",
        en: "Enterprise Case Study"
      },
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      metrics: [
        { label: { es: "Comunicación", en: "Communication" }, value: "WebSockets / Redis" },
        { label: { es: "Optimización", en: "Optimization" }, value: "Algoritmo VRP" },
        { label: { es: "Estructura", en: "Structure" }, value: "PostGIS Geoespacial" }
      ]
    },
    {
      id: "rpa-invoicing",
      title: {
        es: "Pipeline RPA y Conciliación Automatizada de Facturación XML",
        en: "RPA Pipeline & Automated XML E-Invoicing Reconciliation"
      },
      category: "rpa",
      categoryLabel: {
        es: "RPA & Procesamiento de Datos",
        en: "RPA & Data Pipelines"
      },
      subtitle: {
        es: "Sistema autónomo de ingesta documental, validación fiscal de esquemas XML y auditoría contable.",
        en: "Autonomous document ingestion system, tax XML schema validation, and accounting audit pipeline."
      },
      problem: {
        es: "Centenares de horas mensuales invertidas en descarga manual de correos, extracción de archivos adjuntos y transcripción manual de facturas electrónicas, generando retrasos tributarios y riesgo de inconsistencias.",
        en: "Hundreds of manual hours wasted downloading supplier emails, extracting attachments, and transcribing invoice XMLs, leading to reporting bottlenecks and human error."
      },
      solution: {
        es: "Implementación de bots RPA en Python para extracción programada vía Gmail API, pipeline de parseo y validación de esquemas XML tributarios, normalización de datos e ingesta en MariaDB, complementado con un backend en NestJS/Prisma y dashboard web en React/TypeScript para control y auditoría.",
        en: "Developed Python RPA bots for automated Gmail API retrieval, XML schema parsing and validation, data normalization into MariaDB, and a NestJS/Prisma backend connected to an audit dashboard in React + TypeScript."
      },
      result: {
        es: "Automatización integral del flujo contable desde la bandeja de entrada hasta la base de datos, eliminando la transcripción manual y habilitando conciliación inmediata.",
        en: "Comprehensive automation of the accounting pipeline from email inbox to persistent database, removing manual transcription and enabling immediate reconciliation."
      },
      tags: ["Python", "React", "TypeScript", "MariaDB", "MySQL", "Prisma", "Docker", "RPA", "XML ETL", "Gmail API"],
      isPrivate: true,
      badge: {
        es: "Caso de Estudio Empresarial",
        en: "Enterprise Case Study"
      },
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      metrics: [
        { label: { es: "Extracción", en: "Extraction" }, value: "Gmail API Bot" },
        { label: { es: "Validación", en: "Validation" }, value: "Esquema XSD Fiscal" },
        { label: { es: "Persistencia", en: "Persistence" }, value: "MariaDB / Prisma" }
      ]
    },
    {
      id: "haltsense",
      title: {
        es: "HaltSense: Monitor Biométrico de Fatiga y Somnolencia en Tiempo Real",
        en: "HaltSense: Real-Time Fatigue & Drowsiness Biometric Monitor"
      },
      category: "realtime",
      categoryLabel: {
        es: "Visión Artificial & AI",
        en: "Computer Vision & AI"
      },
      subtitle: {
        es: "Sistema de visión por computadora para detección de fatiga y microsueños en entornos industriales.",
        en: "Computer vision system for multi-worker drowsiness and fatigue prevention in industrial setups."
      },
      problem: {
        es: "Accidentes laborales y viales graves causados por microsueños, cansancio acumulado o fatiga imperceptible a simple vista en puestos de operación continua.",
        en: "Severe industrial and driving accidents triggered by micro-sleeps, cumulative exhaustion, and unmonitored operator fatigue during critical shifts."
      },
      solution: {
        es: "Motor de análisis de video basado en MediaPipe FaceMesh, OpenCV y DeepFace. Calcula en tiempo real Eye Aspect Ratio (EAR), Mouth Aspect Ratio (MAR), porcentaje de cierre palpebral (PERCLOS) y caída de cabeza mediante pose 3D (solvePnP), consolidando un índice de indisposición con streaming WebSockets a una interfaz reactiva.",
        en: "Video analytics engine using MediaPipe FaceMesh, OpenCV, and DeepFace. Computes live Eye Aspect Ratio (EAR), Mouth Aspect Ratio (MAR), eyelid closure (PERCLOS), and head droop pose (solvePnP) into a composite readiness score streamed via WebSockets to React 19."
      },
      result: {
        es: "Detección preventiva en tiempo real con alertas acústicas y visuales graduadas (aviso a crítico), tracking simultáneo de múltiples puestos y telemetría de biosensores externos.",
        en: "Proactive real-time detection with tiered audible/visual escalation, multi-station simultaneous tracking, and external sensor ingestion endpoints."
      },
      tags: ["Python 3.11", "MediaPipe", "OpenCV", "DeepFace", "React 19", "FastAPI", "WebSockets", "SQLite"],
      isPrivate: false,
      repoUrl: "https://github.com/MarkSerna/haltsense",
      badge: {
        es: "Open Source en GitHub",
        en: "Open Source on GitHub"
      },
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      metrics: [
        { label: { es: "Algoritmos", en: "Algorithms" }, value: "EAR / PERCLOS / MAR" },
        { label: { es: "Pose 3D", en: "3D Pose" }, value: "solvePnP Head Pose" },
        { label: { es: "Streaming", en: "Streaming" }, value: "FastAPI + WebSockets" }
      ]
    },
    {
      id: "stickynotes",
      title: {
        es: "StickyNotes para Windows 11: Software Nativo con Cloud Sync",
        en: "StickyNotes for Windows 11: Native Desktop with Cloud Sync"
      },
      category: "opensource",
      categoryLabel: {
        es: "Desktop & Arquitectura",
        en: "Desktop & Architecture"
      },
      subtitle: {
        es: "Aplicación de escritorio ultra-rápida con diseño Fluent/Mica Alt, SQLite WAL y sincronización Google Drive.",
        en: "High-performance native desktop app with Fluent/Mica Alt design, SQLite WAL mode, and Google Drive sync."
      },
      problem: {
        es: "Las utilidades de notas preinstaladas o basadas en navegadores consumen memoria excesiva, tardan en abrirse y carecen de persistencia local resiliente con sincronización privada en la nube.",
        en: "Default or browser-wrapped note apps suffer from high memory footprint, sluggish startup, and lack resilient local persistence with private cloud backup."
      },
      solution: {
        es: "Construcción en .NET 8 con WinUI 3 siguiendo principios de Clean Architecture. Implementa persistencia ultrarrápida con SQLite en modo WAL y EF Core 8, doble modalidad visual (Dock lateral / ventanas flotantes), cifrado DPAPI y cliente de sincronización con Google Drive OAuth 2.0.",
        en: "Built on .NET 8 and WinUI 3 with Clean Architecture. Implemented ultra-fast SQLite WAL persistence via EF Core 8, dual-dock UX (side-docked and floating notes), DPAPI credential encryption, and Google Drive OAuth 2.0 sync."
      },
      result: {
        es: "Arranque nativo inmediato, persistencia transaccional resiliente a fallos y sincronización cifrada con la nube privada del usuario.",
        en: "Instant native startup, fault-tolerant transactional persistence, and encrypted synchronization with the user's private cloud."
      },
      tags: ["C#", ".NET 8", "WinUI 3", "SQLite", "EF Core", "Google Drive API", "DPAPI", "XAML", "Clean Arch"],
      isPrivate: false,
      repoUrl: "https://github.com/MarkSerna/StickyNotes",
      badge: {
        es: "Open Source en GitHub",
        en: "Open Source on GitHub"
      },
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
      metrics: [
        { label: { es: "Arquitectura", en: "Architecture" }, value: "Clean Architecture" },
        { label: { es: "Base de Datos", en: "Database" }, value: "SQLite WAL Mode" },
        { label: { es: "Sincronización", en: "Synchronization" }, value: "Google Drive OAuth 2" }
      ]
    },
    {
      id: "oura-ui",
      title: {
        es: "Oura.js: Librería de Componentes & Notificaciones Glassmorphism",
        en: "Oura.js: Glassmorphism Component & Notification Library"
      },
      category: "opensource",
      categoryLabel: {
        es: "Frontend & Librería NPM",
        en: "Frontend & NPM Package"
      },
      subtitle: {
        es: "Librería ligera para desarrolladores publicada en NPM: cero dependencias, 10 kB gzipped y soporte i18n.",
        en: "Lightweight developer UI library published on NPM: zero dependencies, 10 kB gzipped, and i18n support."
      },
      problem: {
        es: "Las librerías de UI modernas suelen acarrear dependencias pesadas, incompatibilidad entre frameworks y configuraciones complejas para lograr acabados de diseño modernos como glassmorphism.",
        en: "Mainstream UI libraries frequently bundle bulky dependencies, framework lock-in, and cumbersome setup for contemporary dark glassmorphism effects."
      },
      solution: {
        es: "Desarrollo de una librería agnóstica en TypeScript puro con empaquetado optimizado con Vite, suite de tests unitarios con Vitest, soporte nativo de modo oscuro, traducciones en 10 idiomas y distribución en el registro global de NPM (`oura-ui`).",
        en: "Engineered a framework-agnostic TypeScript library packaged with Vite, fully tested via Vitest, featuring dark mode, 10-language internationalization, and distributed via NPM (`oura-ui`)."
      },
      result: {
        es: "Paquete ultra-ligero (< 10 kB gzipped) adoptable con una sola línea de comando, tipado estricto y sin dependencias de terceros.",
        en: "Ultra-compact package (< 10 kB gzipped) installable in seconds, 100% strictly typed, and completely free of external runtime dependencies."
      },
      tags: ["TypeScript", "Vite", "Vitest", "CSS3", "NPM Registry", "i18n", "Zero-Dependencies"],
      isPrivate: false,
      repoUrl: "https://github.com/MarkSerna/oura-ui",
      packageUrl: "https://www.npmjs.com/package/oura-ui",
      badge: {
        es: "Paquete en NPM",
        en: "Published on NPM"
      },
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
      metrics: [
        { label: { es: "Empaquetado", en: "Bundle" }, value: "10 kB (0 Dependencias)" },
        { label: { es: "Tipado", en: "Typing" }, value: "TypeScript Estricto" },
        { label: { es: "Traducción", en: "Localization" }, value: "i18n 10 Idiomas" }
      ]
    },
    {
      id: "mobile-view",
      title: {
        es: "Mobile View: Extensión para Visual Studio Code",
        en: "Mobile View: Visual Studio Code Extension"
      },
      category: "opensource",
      categoryLabel: {
        es: "Developer Tools",
        en: "Developer Tools"
      },
      subtitle: {
        es: "Simulador de dispositivos móviles integrado directamente en el editor para agilizar pruebas de responsive design.",
        en: "Integrated mobile device simulator running inside the IDE to accelerate responsive web testing."
      },
      problem: {
        es: "El cambio constante de contexto entre el editor de código y navegadores externos ralentiza el ciclo de desarrollo y pruebas de diseño adaptable.",
        en: "Constant context switching between the code editor and external browser devtools slows down frontend iterations and mobile validation."
      },
      solution: {
        es: "Extensión para VS Code que renderiza un panel webview Chromium con controles flotantes, rotación horizontal/vertical, zoom ajustable y perfiles de dispositivos estándar del mercado (iOS y Android), publicada en Open VSX.",
        en: "VS Code extension embedding a Chromium webview simulator with floating controls, orientation toggle, zoom scaling, and predefined device profiles, published to Open VSX Registry."
      },
      result: {
        es: "Publicada y activa en la tienda Open VSX, permitiendo pruebas instantáneas sin salir del flujo de trabajo del editor.",
        en: "Published and actively distributed on Open VSX, providing frictionless mobile viewport testing directly within the IDE."
      },
      tags: ["TypeScript", "JavaScript", "VS Code API", "Webviews", "Open VSX", "Developer Experience"],
      isPrivate: false,
      repoUrl: "https://github.com/MarkSerna/Mobile-view",
      packageUrl: "https://open-vsx.org/extension/MarkSerna/mobile-view",
      badge: {
        es: "Publicado en Open VSX",
        en: "Published on Open VSX"
      },
      gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
      metrics: [
        { label: { es: "Integración", en: "Integration" }, value: "VS Code / VSCodium" },
        { label: { es: "Perfiles", en: "Profiles" }, value: "iOS & Android" },
        { label: { es: "Distribución", en: "Distribution" }, value: "Open VSX Registry" }
      ]
    }
  ] as Project[],

  experience: [
    {
      id: "inteligencia-datos",
      role: {
        es: "Desarrollador de Software & Especialista RPA",
        en: "Software Developer & RPA Specialist"
      },
      company: "Inteligencia de Datos",
      period: {
        es: "Ene 2024 – Nov 2025",
        en: "Jan 2024 – Nov 2025"
      },
      location: "Manizales, Colombia",
      description: {
        es: [
          "Diseñó e implementó bots de automatización robótica (RPA) en Python, reduciendo drásticamente los tiempos de extracción documental y carga de información corporativa.",
          "Construyó pipelines de validación, limpieza y transformación de datos (ETL) con procesamiento masivo de archivos XML de facturación electrónica.",
          "Desarrolló interfaces web interactivas con React y TypeScript conectadas a microservicios backend para auditoría contable y reportería.",
          "Integró y optimizó bases de datos relacionales (MariaDB, MySQL) para almacenamiento y consulta de grandes volúmenes de comprobantes.",
          "Contenerizó servicios con Docker y lideró flujos de trabajo colaborativos con Git y GitHub."
        ],
        en: [
          "Designed and deployed Python robotic process automation (RPA) bots, drastically reducing document extraction and data ingestion turnaround times.",
          "Constructed ETL validation and transformation pipelines processing high-volume electronic invoice XML files with 0% defect rate.",
          "Engineered responsive web interfaces using React and TypeScript backed by microservices for financial reconciliation and audit tracking.",
          "Integrated and tuned MariaDB/MySQL databases for high-throughput queries over historical transactions.",
          "Containerized services via Docker and managed collaborative CI/CD version control workflows with Git and GitHub."
        ]
      },
      skills: ["Python", "RPA", "React", "TypeScript", "MariaDB", "MySQL", "XML ETL", "Docker", "Git"]
    },
    {
      id: "uam",
      role: {
        es: "Practicante – Desarrollo Full Stack",
        en: "Full Stack Developer Intern"
      },
      company: "Universidad Autónoma de Manizales",
      period: {
        es: "Jul 2024 – Ene 2025",
        en: "Jul 2024 – Jan 2025"
      },
      location: "Manizales, Colombia",
      description: {
        es: [
          "Participó activamente en el ciclo completo de desarrollo de aplicaciones web institucionales utilizando Angular, TypeScript, PHP y Laravel.",
          "Implementó módulos frontend y endpoints backend asegurando integración fluida con bases de datos y servicios corporativos.",
          "Colaboró en equipos multidisciplinarios bajo metodologías ágiles, garantizando entregas puntuales y código de alta mantenibilidad."
        ],
        en: [
          "Engineered institutional web applications across the full lifecycle utilizing Angular, TypeScript, PHP, and Laravel.",
          "Implemented frontend modules and secure backend endpoints integrated with core university databases and services.",
          "Collaborated within cross-functional agile teams to deliver high-quality, maintainable code on strict institutional schedules."
        ]
      },
      skills: ["Angular", "TypeScript", "PHP", "Laravel", "APIs REST", "MySQL", "Git"]
    },
    {
      id: "abs",
      role: {
        es: "Profesor de Ofimática & Tecnologías de Productividad",
        en: "Office Automation & Productivity Instructor"
      },
      company: "American Business School",
      period: {
        es: "Oct 2023 – Ago 2024",
        en: "Oct 2023 – Aug 2024"
      },
      location: "Manizales, Colombia",
      description: {
        es: [
          "Capacitó a estudiantes en herramientas de productividad digital y sistematización de procesos para entornos corporativos.",
          "Diseñó actividades prácticas orientadas a resolver problemas reales de gestión de información mediante tecnología."
        ],
        en: [
          "Trained students in digital productivity tools, data automation, and workplace software workflows.",
          "Designed practical curricula focused on solving real-world business data challenges through technology."
        ]
      },
      skills: ["Automatización de Procesos", "Ofimática Avanzada", "Capacitación Técnica"]
    }
  ] as Experience[],

  education: [
    {
      degree: {
        es: "Tecnólogo en Análisis y Desarrollo de Software",
        en: "Associate Degree in Software Analysis & Development"
      },
      institution: "SENA",
      period: "2022 – 2025",
      location: "Colombia"
    }
  ],

  certifications: [
    {
      name: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      year: "2024"
    }
  ],

  languages: [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: { es: "B1–B2 (Competencia Profesional)", en: "B1–B2 (Professional Working)" } },
    { name: { es: "Francés", en: "French" }, level: { es: "B1 (Intermedio)", en: "B1 (Intermediate)" } }
  ],

  skillGroups: [
    {
      name: { es: "Frontend & Interfaces", en: "Frontend & Interfaces" },
      icon: "Layout",
      skills: [
        { name: "React", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Angular" },
        { name: "HTML5 / CSS3 Moderno" },
        { name: "Vite" }
      ]
    },
    {
      name: { es: "Backend & Tiempo Real", en: "Backend & Real-Time" },
      icon: "Server",
      skills: [
        { name: "Node.js / Express", highlight: true },
        { name: "Python / FastAPI", highlight: true },
        { name: "WebSockets & Socket.IO", highlight: true },
        { name: "C# / .NET 8", highlight: true },
        { name: "PHP / Laravel" },
        { name: "NestJS / Prisma" },
        { name: "REST APIs & Microservicios" }
      ]
    },
    {
      name: { es: "RPA, Visión Artificial & Datos", en: "RPA, Computer Vision & Data" },
      icon: "Cpu",
      skills: [
        { name: "Bots RPA (Python / Playwright)", highlight: true },
        { name: "Procesamiento XML / JSON / ETL", highlight: true },
        { name: "MediaPipe & OpenCV", highlight: true },
        { name: "PostgreSQL & PostGIS", highlight: true },
        { name: "MariaDB & MySQL" },
        { name: "Redis" },
        { name: "SQLite (WAL)" }
      ]
    },
    {
      name: { es: "DevOps & Ecosistema", en: "DevOps & Tooling" },
      icon: "Wrench",
      skills: [
        { name: "Docker & Docker Compose", highlight: true },
        { name: "Git / GitHub / GitLab", highlight: true },
        { name: "Flutter / Dart" },
        { name: "Mapbox GL" },
        { name: "Testing (Vitest / Pytest)" },
        { name: "Linux / Nginx" }
      ]
    }
  ] as SkillGroup[]
};
