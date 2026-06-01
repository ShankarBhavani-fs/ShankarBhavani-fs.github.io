# Bhavani Shankar - Portfolio Website

[![Deploy to GitHub Pages](https://github.com/ShankarBhavani-fs/ShankarBhavani-fs.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ShankarBhavani-fs/ShankarBhavani-fs.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-Portfolio-orange)](https://shankarbhavani-fs.github.io)

A modern, interactive portfolio website showcasing my experience, skills, projects, and achievements as an AI Software Engineer and MSCS student at the University of Illinois Chicago.

## 🌐 Live Demo

Visit the live portfolio: [https://shankarbhavani-fs.github.io](https://shankarbhavani-fs.github.io)

## ✨ Features

### 🎨 Design & UX
- **Responsive Design** - Seamless experience across all devices
- **Smooth Animations** - AOS (Animate On Scroll) integration
- **Interactive Modals** - Full-screen modals for detailed views
- **Auto-playing Summary** - Engaging typing animation on landing
- **Glassmorphism UI** - Modern frosted glass effects

### 🔧 Core Components
- **Dynamic Header** - Sticky navigation with active section highlighting
- **Profile Image Modal** - Clickable profile picture with full-screen view
- **Skills Showcase** - Organized by category with custom icons and colors
  - Programming Languages
  - Web & API Development
  - AI & Machine Learning
  - Cloud & DevOps
  - Database & Tools
  - Automation & Platforms
  - Leadership & Soft Skills
- **Experience Timeline** - Interactive cards with detailed achievement modals
- **Education Timeline** - Academic journey with coursework and achievements
- **Projects Gallery** - Featured projects with live demos and GitHub links
- **Achievements & Certifications** - Categorized achievements with modal view
- **AI Chatbot (Coming Soon)** - PersonaRAG AI assistant integration

### 📊 Analytics & SEO
- **Umami Analytics** - Privacy-focused, GDPR-compliant visitor tracking
- **Custom Analytics Dashboard** - In-app local stats with link to full Umami dashboard
- **Real-time Telemetry** - Page views, sessions, geographic data, and user behavior
- **Structured Data (JSON-LD)** - Rich Google Search results
- **Google Site Verification** - Enhanced search visibility
- **Meta Tags Optimization** - Social media sharing optimized

### 🎯 Interactive Elements
- **Contact Form** - EmailJS integration for direct messaging
- **Resume Download** - One-click resume access
- **Social Links** - LinkedIn, GitHub, Medium, Handshake, LeetCode
- **Scroll to Top** - Smooth navigation enhancement

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Component-based UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server

### Styling & Animation
- **CSS3** - Custom styling with modern features
- **AOS** - Scroll-triggered animations
- **React Icons** - Comprehensive icon library
- **@lottiefiles/dotlottie-react** - Lottie animations

### Integrations
- **EmailJS** - Contact form email delivery
- **Umami Analytics** - Privacy-focused web analytics
  - Website ID: `0699e5ce-2d64-411e-ad89-e719dd214aba`
  - Public Dashboard: [View Analytics](https://cloud.umami.is/share/VPtO3EYGz0yxNP7s/Personal)
- **GitHub Pages** - Hosting and deployment

### Development Tools
- **ESLint** - Code quality enforcement
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── icon-bs.jpeg           # Favicon
├── src/
│   ├── assets/
│   │   └── newhs-bs.jpeg      # Profile image
│   ├── Components/
│   │   ├── Header.tsx/css     # Navigation header
│   │   ├── Summary.tsx/css    # Landing section
│   │   ├── Skills.tsx/css     # Skills showcase
│   │   ├── Education.tsx/css  # Academic timeline
│   │   ├── Experience.tsx/css # Work experience
│   │   ├── Projects.tsx/css   # Projects gallery
│   │   ├── Achievements.tsx/css # Certifications
│   │   ├── Footer.tsx/css     # Contact & social
│   │   ├── ChatBot.tsx/css    # AI assistant (WIP)
│   │   └── AnalyticsModal.tsx # Analytics dashboard
│   ├── data/
│   │   ├── data.json          # Content data
│   │   └── Bhavani-Shankar_2026_Grad-FS.pdf
│   ├── hooks/
│   │   └── useAnalytics.ts    # Analytics tracking
│   ├── App.tsx                # Main app component
│   └── main.tsx               # Entry point
├── index.html                 # Root HTML with SEO
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShankarBhavani-fs/ShankarBhavani-fs.github.io.git
   cd ShankarBhavani-fs.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

The portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Workflow
1. Push changes to `develop` branch
2. GitHub Actions workflow triggers
3. Build process runs with Vite
4. Artifacts deployed to `gh-pages` branch
5. Live site updates at [shankarbhavani-fs.github.io](https://shankarbhavani-fs.github.io)

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to hosting provider
```

## 🎨 Customization

### Update Content
Edit `src/data/data.json` to modify:
- Certifications
- Achievements
- Project details

### Update Personal Info
- Profile image: Replace `src/assets/newhs-bs.jpeg`
- Resume: Replace `src/data/Bhavani-Shankar_2026_Grad-FS.pdf`
- Favicon: Replace `public/icon-bs.jpeg`

### Update Meta Tags
Edit `index.html` for:
- Site title
- Meta descriptions
- JSON-LD structured data
- Google verification

## 📊 Analytics

The portfolio uses **Umami Analytics** - a privacy-focused, open-source analytics platform that doesn't use cookies and is GDPR-compliant.

### Features
- **Browser-Specific Tracking** - Local session and page view counts stored in localStorage
- **Real-time Analytics** - Live visitor data, page views, and geographic information
- **Privacy-Focused** - No cookies, no personal data collection, fully GDPR compliant
- **Public Dashboard** - [View live analytics](https://cloud.umami.is/share/VPtO3EYGz0yxNP7s/Personal)

### Analytics Modal
Click the **Analytics** button in the footer to view:
- Your browser-specific session count
- Your total page views
- Link to the full Umami Analytics dashboard

### Implementation Details
- **Script**: Loaded from `https://cloud.umami.is/script.js`
- **Website ID**: `0699e5ce-2d64-411e-ad89-e719dd214aba`
- **Hook**: `useAnalytics()` in `src/hooks/useAnalytics.ts`
- **Modal**: `AnalyticsModal` component for displaying stats

### Tracked Metrics
- Page views
- Unique visitors
- Session duration
- Referrer sources
- Geographic locations
- Device types
- Browser information

## 🔮 Future Enhancements

- [ ] **PersonaRAG AI Chatbot** - Interactive AI assistant using RAG
- [ ] **Blog Section** - Technical articles and tutorials
- [ ] **Dark/Light Mode Toggle** - Theme customization
- [ ] **Testimonials Section** - Recommendations and endorsements
- [ ] **Multi-language Support** - i18n integration

## 🤝 Connect With Me

- **LinkedIn**: [shankar-bhavani](https://www.linkedin.com/in/shankar-bhavani)
- **GitHub**: [ExperimenterX](https://github.com/ExperimenterX)
- **Medium**: [@shankar-bhavani](https://medium.com/@shankar-bhavani)
- **LeetCode**: [shankar-bhavani](https://leetcode.com/u/shankar-bhavani/)
- **Portfolio**: [shankarbhavani-fs.github.io](https://shankarbhavani-fs.github.io)

## 📄 License

© 2026 Bhavani Shankar. All rights reserved.

---

**Built with ❤️ using React, TypeScript, and Vite**