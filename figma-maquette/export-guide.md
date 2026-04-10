# Guide d'Export - Portfolio Jacques Moriba

## 📦 Assets à Exporter

### Icônes et Logos
```
Format: SVG
Taille: 24x24px, 32x32px, 48x48px
Compression: Optimisé pour web

Liste des icônes:
- React, Next.js, Node.js, Python
- Django, PostgreSQL, MongoDB
- Docker, Git, Linux, Figma
- Cisco, Email, WhatsApp
- GitHub, LinkedIn, Behance
- Instagram, Facebook, Pinterest
```

### Images et Photos
```
Format: PNG @2x (Retina)
Compression: 80% qualité
Tailles:
- Photo profil: 300x300px
- Project thumbnails: 600x400px
- Hero background: 1920x1080px
- Certification badges: 200x200px
```

### Illustrations et Avatars
```
Format: SVG
Taille: Variable
- Avatar Marie: 64x64px
- Avatar Pasteur: 64x64px  
- Avatar Aissatou: 64x64px
- Background patterns: SVG repeatable
```

## 🎨 Styles CSS à Exporter

### Variables CSS
```css
:root {
  /* Colors */
  --primary-500: #14b8a6;
  --secondary-500: #8b5cf6;
  --accent-500: #ec4899;
  --bg-primary: #0a0f1a;
  --bg-secondary: #141b2d;
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  
  /* Typography */
  --font-primary: 'Geist', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  
  /* Effects */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: blur(10px);
}
```

### Components CSS
```css
/* Glassmorphism Card */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 24px;
}

/* Primary Button */
.btn-primary {
  background: var(--primary-500);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--primary-600);
  transform: scale(1.05);
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.bento-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(20, 184, 166, 0.3);
}
```

## 📐 Layout Specifications

### Breakpoints
```css
/* Mobile */
@media (max-width: 767px) {
  .container { padding: 0 16px; }
  .bento-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 48px; }
}

/* Tablette */
@media (min-width: 768px) and (max-width: 1023px) {
  .container { padding: 0 24px; }
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-title { font-size: 54px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { padding: 0 32px; }
  .bento-grid { grid-template-columns: repeat(4, 1fr); }
  .hero-title { font-size: 60px; }
}
```

## 🎯 Implementation Guide

### Structure HTML
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jacques Moriba - Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <!-- Navigation content -->
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <h1 class="hero-title">THEA Jacques Moriba</h1>
    <p class="hero-subtitle">Software Engineering Student</p>
    <div class="hero-cta">
      <button class="btn-primary">View Work</button>
      <button class="btn-secondary">Contact Me</button>
    </div>
  </section>

  <!-- Other sections... -->
</body>
</html>
```

### JavaScript Interactions
```javascript
// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
```

## 🚀 Checklist de Déploiement

### Avant Export
- [ ] Tous les composants sont créés en Auto Layout
- [ ] Les variants hover/disabled sont définis
- [ ] Les styles sont nommés correctement
- [ ] Le prototype est testé
- [ ] Les assets sont optimisés

### Export Figma
- [ ] Sélectionner tous les frames
- [ ] Format: PNG @2x pour les images
- [ ] Format: SVG pour les icônes
- [ ] Inclure les styles CSS
- [ ] Exporter les tokens JSON

### Implémentation
- [ ] Créer la structure HTML
- [ ] Intégrer les CSS variables
- [ ] Ajouter les animations JavaScript
- [ ] Tester sur tous les devices
- [ ] Optimiser les performances

## 📊 Performance Guidelines

### Images
- Compresser les PNG: TinyPNG
- Utiliser WebP quand possible
- Lazy loading pour les images below fold

### CSS
- Minifier le CSS
- Utiliser CSS Grid/Flexbox
- Éviter les !important
- Optimiser les animations

### JavaScript
- Code splitting
- Lazy loading des composants
- Optimiser les intersections observers
- Minifier le code

## 🔧 Outils Recommandés

### Design
- **Figma**: Design et prototype
- **Font Awesome**: Icônes supplémentaires
- **Google Fonts**: Typographie alternative

### Développement
- **Vite**: Build tool rapide
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animations React
- **React Icons**: Icônes React

### Optimisation
- **Lighthouse**: Performance audit
- **GTmetrix**: Speed test
- **WebPageTest**: Detailed analysis

---

## 📝 Notes Finales

1. **Consistance**: Maintenir la cohérence visuelle sur toutes les pages
2. **Accessibilité**: Ajouter les attributs ARIA et alt text
3. **SEO**: Optimiser les meta tags et structure sémantique
4. **Testing**: Tester sur Chrome, Firefox, Safari, mobile
5. **Maintenance**: Documenter les décisions de design

## 🎉 Prochaines Étapes

1. Créer le fichier Figma avec toutes les spécifications
2. Prototyper les interactions principales
3. Exporter les assets et styles
4. Implémenter en React/Next.js
5. Déployer et optimiser

---

*Ce guide complet vous permettra de créer une maquette Figma professionnelle et de l'implémenter efficacement dans votre portfolio.*
