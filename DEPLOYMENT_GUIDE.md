# Guide de Déploiement & Maintenance

## 🚀 Déploiement sur Vercel (Recommandé)

### Étape 1: Préparation
```bash
# Vérifier le build local
npm run build

# Tester en local
npm run preview
```

### Étape 2: Connexion à Vercel
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Lier le projet
vercel link
```

### Étape 3: Déploiement
```bash
# Déploiement de production
vercel --prod

# Ou via git push (recommandé)
git add .
git commit -m "Portfolio ready for production"
git push origin main
```

### Configuration Vercel (vercel.json)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 🔧 Déploiement sur Netlify

### Option 1: Drag & Drop
1. Build le projet: `npm run build`
2. Glisser-déposer le dossier `dist/` sur Netlify

### Option 2: Git Integration
1. Connecter GitHub à Netlify
2. Sélectionner le repository
3. Configurer:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Configuration Netlify (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

---

## 📋 Checklist Pré-Déploiement

### Code & Build
- [ ] `npm run build` réussit sans erreurs
- [ ] `npm run lint` passe sans warnings critiques
- [ ] Tous les imports sont résolus
- [ ] Pas de `console.log` en production
- [ ] Variables d'environnement configurées

### Contenu
- [ ] Textes révisés et sans fautes
- [ ] Images optimisées (WebP quand possible)
- [ ] Liens fonctionnels (tester tous les liens)
- [ ] Informations de contact à jour
- [ ] Projets avec descriptions complètes

### Performance
- [ ] Lighthouse score > 90
- [ ] Images lazy-loadées
- [ ] Pas de render-blocking resources
- [ ] Fonts préchargées
- [ ] Bundle size < 500KB (initial)

### SEO
- [ ] Meta tags configurés
- [ ] Sitemap.xml créé
- [ ] Robots.txt configuré
- [ ] Structured data (JSON-LD) ajouté
- [ ] Favicon et Open Graph images

### Accessibilité
- [ ] Navigation clavier fonctionnelle
- [ ] Contraste des couleurs suffisant
- [ ] Alt text sur toutes les images
- [ ] ARIA labels sur éléments interactifs
- [ ] Reduced motion support

---

## 🔄 Workflow de Maintenance

### Hebdomadaire
```bash
# Mise à jour des dépendances
npm audit
npm update

# Vérifier les performances
npm run build
# Analyser le bundle
npx vite-bundle-visualizer
```

### Mensuel
- [ ] Review analytics et comportement utilisateurs
- [ ] Vérifier les liens externes (pas de 404)
- [ ] Mettre à jour les projets récents
- [ ] Optimiser les nouvelles images
- [ ] Backup de la base de données (si applicable)

### Trimestriel
- [ ] Audit de sécurité complet
- [ ] Mise à jour majeure des dépendances
- [ ] Review et mise à jour du contenu
- [ ] Test sur nouveaux navigateurs/devices
- [ ] Analyse concurrentielle SEO

---

## 📊 Monitoring & Analytics

### Outils de Monitoring
```bash
# Google Analytics 4
# - Configurer dans index.html
# - Track events personnalisés

# Vercel Analytics (si déployé sur Vercel)
# - Automatiquement intégré

# Sentry (Error Tracking)
npm install @sentry/react @sentry/tracing
```

### Sentry Configuration
```typescript
// main.tsx
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: import.meta.env.MODE,
});
```

### KPIs à Suivre
| Métrique | Outil | Fréquence |
|----------|-------|-----------|
| Uptime | Vercel/Netlify | Temps réel |
| Performance | Lighthouse | Hebdomadaire |
| Erreurs | Sentry | Temps réel |
| Traffic | Google Analytics | Quotidien |
| SEO Ranking | Search Console | Mensuel |

---

## 🛠️ Troubleshooting

### Erreurs de Build Courantes

#### 1. "Cannot find module"
```bash
# Solution
rm -rf node_modules
rm package-lock.json
npm install
```

#### 2. "Out of memory"
```bash
# Solution
export NODE_OPTIONS=--max-old-space-size=4096
npm run build
```

#### 3. "Type error"
```bash
# Vérifier les types
npx tsc --noEmit

# Ou ignorer temporairement (pas recommandé)
// @ts-ignore
```

### Problèmes de Performance

#### Bundle trop gros
```bash
# Analyser le bundle
npx vite-bundle-visualizer

# Solutions:
# 1. Lazy loading
const HeavyComponent = lazy(() => import('./HeavyComponent'));

# 2. Dynamic imports
import('./heavy-library').then(module => {
  module.doSomething();
});

# 3. Tree shaking
# Vérifier que les imports sont corrects
```

#### Images lentes
```typescript
// Utiliser des formats modernes
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.png" alt="Description" loading="lazy" />
</picture>

# Optimiser avec Sharp
npm install sharp
```

---

## 🚀 CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linter
      run: npm run lint
      
    - name: Type check
      run: npx tsc --noEmit
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: vercel/action-deploy@v1
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 🔒 Sécurité

### Headers de Sécurité
```javascript
// vite.config.ts
export default defineConfig({
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.example.com;"
    }
  }
});
```

### Dépendances à Jour
```bash
# Vérifier les vulnérabilités
npm audit

# Fix automatique
npm audit fix

# Mise à jour des packages
npm update

# Mise à jour majeure (avec prudence)
npx npm-check-updates -u
npm install
```

---

## 📦 Backup & Recovery

### Backup du Code
```bash
# Git est le backup principal
# Mais pour double sécurité:

# Créer une archive
tar -czf portfolio-backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.git' \
  .

# Ou utiliser GitHub releases
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

### Recovery
```bash
# Si besoin de rollback
git log --oneline
git revert <commit-hash>
# ou
git reset --hard <commit-hash>
git push --force
```

---

## 🎯 Performance Budget

| Resource | Budget | Action si dépassé |
|----------|--------|-------------------|
| JS Bundle | 300KB | Code splitting |
| CSS | 50KB | Purge unused styles |
| Images | 500KB | Compression WebP |
| Fonts | 100KB | Subsetting |
| Total | 1MB | Optimisation agressive |

---

## 📞 Support & Contact

En cas de problème:
1. Vérifier les logs Vercel/Netlify
2. Consulter ce guide troubleshooting
3. Review les erreurs Sentry
4. Contacter le support de la plateforme

---

**[⬆ Retour au README](README_PORTFOLIO.md)**
