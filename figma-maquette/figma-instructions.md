# Instructions détaillées pour Figma

## 🎯 Étape 1: Configuration du document

1. **Nouveau fichier Figma**
   - Nom : "Portfolio Jacques Moriba"
   - Créer 3 frames : Desktop (1920x1080), Tablette (768x1024), Mobile (375x812)

2. **Importer les Design Tokens**
   - Copier-coller les couleurs depuis `design-tokens.json`
   - Créer des styles dans le panel "Styles" (bouton "+" en bas à droite)

## 🎨 Étape 2: Création des styles

### Couleurs
- `primary/500` = #14b8a6
- `secondary/500` = #8b5cf6  
- `accent/500` = #ec4899
- `background/primary` = #0a0f1a
- `text/primary` = #ffffff

### Typographie
- **H1**: Geist, 60px, 800, #ffffff
- **H2**: Geist, 48px, 700, #ffffff
- **H3**: Geist, 36px, 600, #ffffff
- **H4**: Geist, 24px, 500, #ffffff
- **Body**: Geist, 16px, 400, #94a3b8

### Effets
- **Glassmorphism**: 
  - Background: rgba(255, 255, 255, 0.05)
  - Blur: 10px
  - Border: 1px solid rgba(255, 255, 255, 0.1)

## 🧩 Étape 3: Composants principaux

### Bouton Primary
```
Frame avec Auto Layout
- Padding: 16px 32px
- Background: primary/500
- Border radius: 8px
- Text: "Button", white, medium
- Hover: primary/600 (+10% darker)
```

### Carte Glassmorphism
```
Frame avec Auto Layout
- Background: rgba(255, 255, 255, 0.05)
- Blur: 10px
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border radius: 16px
- Padding: 24px
```

### Badge Certification
```
Frame avec Auto Layout
- Background: primary/500/20
- Border: 1px solid primary/500
- Border radius: 20px
- Padding: 6px 12px
- Text: primary/500, small
```

## 📱 Étape 4: Layout des sections

### Hero Section
```
- Largeur: 100%
- Hauteur: 100vh
- Background: gradient background
- Texte centré
- CTA button en bas
```

### Bento Grid (Tech Stack)
```
Grid 4x4 avec:
- Cases de tailles variables
- Glassmorphism effect
- Icônes + textes
- Hover states
```

### Timeline (Career)
```
- Ligne verticale centrale
- Points de connexion
- Cartes alternées gauche/droite
- Dates et descriptions
```

## 🎭 Étape 5: Animations & Interactions

### Smart Animations
- Hover sur boutons: scale 1.05
- Hover sur cartes: translateY -4px
- Scroll-triggered: fade in + translateY

### Prototypage
- Lier les frames mobile/tablette/desktop
- Ajouter des transitions fluides
- Tester les interactions principales

## 📐 Étape 6: Responsive

### Desktop (>1024px)
- Layout complet
- Grille 12 colonnes
- Espacements max

### Tablette (768-1024px)
- Réduire les espacements
- Adapter les grilles
- Simplifier certains éléments

### Mobile (<768px)
- Single column
- Textes plus petits
- Boutons plus larges
- Navigation simplifiée

## 🚀 Étape 7: Export & Documentation

### Assets à exporter
- Icônes en SVG
- Images en PNG @2x
- CSS variables
- Tokens JSON

### Documentation
- Screenshots de chaque section
- Notes d'implémentation
- Liens vers les composants
- Instructions pour les développeurs

---

## ⚡ Tips Figma

1. **Utiliser Auto Layout** partout pour le responsive
2. **Créer des variants** pour les états hover/disabled
3. **Nommer correctement** les calques (BEM convention)
4. **Utiliser des components** pour les éléments répétables
5. **Tester le prototype** avant l'export
6. **Commenter les décisions** importantes de design

## 🔗 Liens utiles

- [Figma Design Systems](https://www.figma.com/best-practices/guide-design-systems/)
- [Auto Layout documentation](https://help.figma.com/hc/en-us/articles/360040329373-Use-Auto-Layout)
- [Components guide](https://help.figma.com/hc/en-us/articles/360039848514-Create-and-use-components)
