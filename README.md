# ⚡ Personal Portfolio - Elgün Ezmemmedov

A modern, high-performance personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. Features a two-column interactive layout, dark/light theme switching, smooth section scroll indicator tracking, and dynamic cursor backlight effects.

[![Deploy on GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen)](https://github.com/bbaymistery/my_portfolio)
[![Built with React](https://img.shields.io/badge/Built%20With-React%20%2B%20Vite-blue)](https://react.dev/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Style-Tailwind%20CSS%20v4-38bdf8)](https://tailwindcss.com/)

---

## 🌟 Key Features

- **🌗 Dark / Light Mode Toggle**: Seamless theme switching with saved dark mode preference as default.
- **📱 Responsive Two-Column Layout**:
  - **Fixed Sidebar**: Profile portrait, title, bio, navigation links with active line indicators, theme toggle, and social icons.
  - **Scrollable Main Content**: Sections for **About**, **Experience**, **Skills**, **Education & Certifications**, and **Contact**.
- **✨ Ambient Mouse Spotlight**: Radial spotlight cursor effect for enhanced visual depth.
- **💼 Interactive Work Experience**: Detailed timeline with tech chips, company links, and expandable experience items.
- **⚡ Categorized Technical Skills**: Filterable skill categories (Programming, Databases, DevOps & Tools).
- **📬 Direct Contact Channels**: Instant links to Email, WhatsApp (`+994 50 633 01 35`), LinkedIn, and GitHub.
- **📊 Modular Architecture**: All portfolio data is centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js) for effortless updates.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism CSS System
- **Icons**: Lucide React + Inline SVG Brand Icons
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/bbaymistery/my_portfolio.git
cd my_portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
# or
npm start
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled static assets will be output in the `dist/` directory ready for deployment.

---

## 🌐 GitHub Pages Deployment

To deploy this repository to **GitHub Pages**:

1. Install `gh-pages` helper (optional):
   ```bash
   npm install -D gh-pages
   ```
2. Add deploy script in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run deployment:
   ```bash
   npm run deploy
   ```

---
