# Marco Eduar Serna López — Portafolio Profesional

Portafolio personal de **Marco Eduar Serna López**, Desarrollador Full Stack especializado en **Automatización de Procesos (RPA)** y **Sistemas en Tiempo Real**.

Diseñado para reclutadores técnicos, directores de ingeniería y clientes que requieren evaluar capacidades de arquitectura, código limpio y resultados de negocio en menos de 2 minutos.

---

## 🚀 Tecnologías del Portafolio

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/) con Turbopack
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) (tipado estricto)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/) + SVGs personalizados para marcas
- **Internacionalización**: Contexto bilingüe nativo (`Español` / `Inglés`) con persistencia en `localStorage`
- **Diseño**: Deep Dark Glassmorphism, accesibilidad WCAG AA, responsive mobile-first y optimización SEO con Open Graph

---

## 📁 Estructura del Proyecto

```text
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tokens de diseño, dark mode y glassmorphism
│   │   ├── layout.tsx           # Metadatos SEO, Open Graph y fuentes Geist
│   │   └── page.tsx             # Ensamblador principal de la aplicación
│   ├── components/
│   │   ├── Navbar.tsx           # Barra de navegación fija con selector ES/EN
│   │   ├── Hero.tsx             # Titular, métricas rápidas y CTAs
│   │   ├── About.tsx            # Pilares de especialización, educación e idiomas
│   │   ├── Projects.tsx         # Casos de estudio y proyectos con mockups vectoriales
│   │   ├── Experience.tsx       # Línea de tiempo profesional y responsabilidades
│   │   ├── Skills.tsx           # Matriz técnica en 4 cuadrantes
│   │   ├── Contact.tsx          # Envío de correo directo y copiado rápido
│   │   ├── Footer.tsx           # Créditos y navegación de retorno
│   │   └── Icons.tsx            # Iconos SVG de GitHub y LinkedIn
│   ├── context/
│   │   └── LanguageContext.tsx  # Estado global de idioma (ES / EN)
│   └── data/
│       └── portfolioData.ts     # ⭐️ Archivo central de datos (proyectos, bio, experiencia)
└── README.md
```

---

## 🛠️ Cómo Ejecutar Localmente

### 1. Prerrequisitos
- Node.js versión 18+ o 20+ LTS
- npm (o pnpm / yarn)

### 2. Instalación de dependencias
```bash
npm install
```

### 3. Servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000) (o el puerto asignado en consola).

### 4. Build para producción y comprobación
```bash
npm run build
npm run start
```

---

## ✏️ Cómo Editar y Personalizar la Información

Todo el contenido del portafolio se encuentra centralizado en:
```bash
src/data/portfolioData.ts
```

No necesitas modificar los componentes de React para actualizar tus datos:
1. **Agregar o editar proyectos**: Modifica el arreglo `projects`. Cada proyecto incluye campos bilingües (`es` y `en`), etiquetas, métricas e identificador de si es privado o público.
2. **Actualizar experiencia o educación**: Edita `experience`, `education` o `certifications`.
3. **Modificar habilidades**: Agrega o actualiza tecnologías en `skillGroups`.
4. **Cambiar datos de contacto**: Modifica el objeto `personal` con tu correo, LinkedIn, GitHub o ubicación.

---

## 🌐 Cómo Desplegar en Vercel (Recomendado)

### Opción 1: Vía GitHub + Vercel Dashboard (Más fácil)
1. Crea un nuevo repositorio en tu cuenta de GitHub (ej. `portfolio-marco-serna`).
2. Sube esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of modern portfolio"
   git branch -M main
   git remote add origin https://github.com/MarkSerna/<nombre-repo>.git
   git push -u origin main
   ```
3. Ingresa a [Vercel.com](https://vercel.com/) e inicia sesión con tu GitHub.
4. Haz clic en **"Add New..."** → **"Project"**.
5. Selecciona el repositorio recién creado.
6. Vercel detectará automáticamente Next.js. Haz clic en **Deploy**.
7. En menos de 60 segundos tu portafolio estará online con HTTPS y CDN global.

### Opción 2: Vía Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🔒 Privacidad y Casos de Estudio

Los proyectos desarrollados para empresas o clientes privados se presentan como **casos de estudio genéricos** enfocados en la arquitectura, la complejidad técnica y el valor aportado (*Problema → Solución → Resultado*), protegiendo en su totalidad nombres comerciales, credenciales, URLs internas y propiedad intelectual del cliente.

---

## 📬 Contacto

- **Nombre**: Marco Eduar Serna López
- **Correo**: [marcoesernal@gmail.com](mailto:marcoesernal@gmail.com)
- **LinkedIn**: [linkedin.com/in/marksernalopez](https://www.linkedin.com/in/marksernalopez)
- **GitHub**: [github.com/MarkSerna](https://github.com/MarkSerna)
