# Maquette Figma - NOUS Platform

## 📋 Informations du Projet

**Nom**: NOUS Platform  
**Catégorie**: Digital Services Platform  
**Technologies**: Next.js, PostgreSQL, Drizzle ORM  
**Année**: 2024  
**Statut**: Featured ⭐  

---

## 🎨 Concept & Design System

### Thème Principal
- **Couleurs**: Turquoise (#14b8a6) + Blanc
- **Style**: Moderne, épuré, professionnel
- **Inspiration**: Services numériques adaptés au contexte guinéen

### Typographie
- **Titres**: Geist, 700 weight
- **Texte**: Inter, 400 weight
- **Code**: JetBrains Mono

### Icônes
- Heroicons, Lucide icons
- Icônes personnalisées pour les services guinéens

---

## 📱 Pages & Écrans

### 1. Page d'Accueil / Landing
```
Frame: 1920x1080px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
│  [Logo] [Services] [Solutions] [Tarifs] [CTA] │
├─────────────────────────────────────────────┤
│                                             │
│           Hero Section                      │ 600px
│  ┌─────────────────────────────────────────┐ │
│  │        NOUS PLATFORM                   │ │
│  │   "Le Numérique au Service de Tous"     │ │
│  │                                         │ │
│  │  [Découvrir les Services] [Démo Gratuite]│ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │          Services Principaux            │ │ 400px
│  │                                         │ │
│  │  [E-Gouvernement] [E-Santé] [E-Éducation]│ │
│  │  [E-Commerce] [E-Agriculture] [E-Finance]│ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Éléments:
- Hero background: Dégradé turquoise
- CTA buttons: Primary + Secondary
- Service cards: Glassmorphism avec icônes
- Animations: Scroll-triggered fade-in
```

### 2. Page Services
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Services Header                    │ 120px
│     "Nos Services Numériques"               │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │E-Gouvern│ │E-Santé  │ │E-Éducat │ │ 300px
│  │ement    │ │         │ │ion      │ │
│  │         │ │         │ │         │ │
│  │[Icone]  │ │[Icone]  │ │[Icone]  │ │
│  │Titre    │ │Titre    │ │Titre    │ │
│  │Description│ │Description│ │Description│ │
│  │[En savoir+]│ │[En savoir+]│ │[En savoir+]│ │
│  └─────────┘ └─────────┘ └─────────┘       │
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │E-Commerce│ │E-Agriculture│ │E-Finance│ │ 300px
│  │         │ │             │ │         │ │
│  │[Icone]  │ │[Icone]      │ │[Icone]  │ │
│  │Titre    │ │Titre        │ │Titre    │ │
│  │Description│ │Description  │ │Description│ │
│  │[En savoir+]│ │[En savoir+] │ │[En savoir+]│ │
│  └─────────┘ └─────────┘ └─────────┘       │
└─────────────────────────────────────────────┘

Service Card:
- Background: Glassmorphism
- Icon: 64x64px, turquoise
- Title: H3, 24px
- Description: 2-3 lines max
- Button: Ghost button
- Hover: Scale 1.05, glow effect
```

### 3. Tableau de Bord Utilisateur
```
Frame: 1920x1080px

┌─────────────────────────────────────────────┐
│              User Dashboard                 │
│  [Logo] [Tableau de Bord] [Profil] [Déconnexion] │
├─────────────────────────────────────────────┤
│  Sidebar │        Main Content              │
│  250px   │           1670px                 │
│ ┌───────┐│ ┌─────────────────────────────────┐ │
│ │ Menu  ││ │        Bienvenue Jacques!      │ │
│ │       ││ │    Statistiques du Mois        │ │
│ │[Dashboard]│ │                             │ │
│ │[Services]│ │ ┌─────┐ ┌─────┐ ┌─────┐     │ │
│ │[Historique]│ │ │Users│ │Orders│ │Revenue│ │ │
│ │[Factures]│ │ │ 150 │ │ 89  │ │ 2.5M │ │ │
│ │[Settings]│ │ └─────┘ └─────┘ └─────┘     │ │
│ │       ││ │                             │ │
│ │       ││ │      Actions Rapides          │ │
│ │       ││ │                             │ │
│ │       ││ │ [Nouveau Service] [Support]   │ │
│ └───────┘│ └─────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Dashboard Elements:
- Sidebar: Navigation verticale, glassmorphism
- Stats Cards: Nombres avec icônes
- Quick Actions: Primary buttons
- Charts: Graphiques interactifs
```

### 4. Page Service Détail (E-Santé)
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Service Header                     │ 200px
│  ┌─────────────┐    E-Santé                 │
│  │ [Icone]     │    "La Santé à Portée de   │
│  │ 64x64       │     Clic"                  │
│  └─────────────┘                             │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Features      │ │    Screenshots      │ │ 600px
│  │                 │ │                     │ │
│  │ • Rendez-vous   │ │ [Dashboard Preview] │ │
│  │ • Dossiers méd. │ │ [Mobile App View]   │ │
│  │ • Téléconsult.  │ │ [Video Call UI]     │ │
│  │ • Pharmacies    │ │ [Prescription View] │ │
│  │ • Urgences      │ │                     │ │
│  │                 │ │ [Essayer Démo]       │ │
│  │ [Commencer]     │ │                     │ │
│  └─────────────────┘ └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Témoignages                   │ │ 300px
│  │                                         │ │
│  │ "Excellent service, m'a fait économiser │ │
│  │  beaucoup de temps!" - Dr. Konaté       │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Service Detail Elements:
- Hero section avec icône et description
- Features: Liste avec icônes check
- Screenshots: Mockups des interfaces
- Testimonials: Citation avec auteur
- CTA: Primary button
```

### 5. Page Tarifs
```
Frame: 1920x1000px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Pricing Header                     │ 120px
│     "Des Tarifs Adaptés à vos Besoins"      │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│  │   Start     │ │ Professional │ │ Business│ │ 350px
│  │             │ │             │ │         │ │
│  │ Gratuit     │ │ 25.000 GNF  │ │ 75.000  │ │
│  │ /mois       │ │ /mois       │ │ GNF/mois│ │
│  │             │ │             │ │         │ │
│  │ ✓ 3 services│ │ ✓ 10 services│ │ ✓ Tous │ │
│  │ ✓ 100 users │ │ ✓ 500 users │ │ ✓ Illim │ │
│  │ ✓ Support   │ │ ✓ Support   │ │ ✓ Premium│ │
│  │             │ │             │ │         │ │
│  │ [Commencer] │ │ [Essayer]   │ │ [Contact]│ │
│  └─────────────┘ └─────────────┘ └─────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           FAQ Section                   │ │ 300px
│  │                                         │ │
│  │ Questions fréquentes avec réponses      │ │
│  │ accordéon interactif                    │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Pricing Cards:
- 3 colonnes avec dégradé de couleur
- Features list avec checkmarks
- CTA buttons adaptés
- Popular badge sur Professional
```

---

## 🎨 Composants Spécifiques

### Service Card Component
```
Type: Component
Auto Layout: Vertical
Padding: 24px
Gap: 16px

Background: glassmorphism
Border Radius: 16px
Width: 300px
Height: 250px

Content:
- Icon: 64x64px, primary/500
- Title: H3, 24px, 600 weight
- Description: Body, 14px, 3 lines max
- Button: Ghost button, "En savoir plus"

States:
- Default: opacity=1
- Hover: scale=1.05, shadow=glow
- Active: border=primary/500
```

### Stat Card Component
```
Type: Component
Auto Layout: Vertical
Padding: 20px
Gap: 8px

Background: gradient primary/500 to primary/600
Border Radius: 12px
Width: 200px
Height: 120px

Content:
- Number: H2, 36px, white, bold
- Label: Body, 14px, white/80
- Icon: 24x24px, white/60

Hover: translateY -2px
```

### Navigation Component
```
Type: Component
Auto Layout: Horizontal
Height: 80px
Padding: 0 32px

Background: glassmorphism
Border-bottom: 1px solid glass/border

Content:
- Logo: 40x40px
- Nav items: Horizontal, 16px gap
- CTA Button: Primary

States:
- Nav item hover: text=primary/500
- CTA hover: scale=1.05
```

---

## 📱 Responsive Design

### Tablette (768px)
- Navigation: Hamburger menu
- Services: 2 colonnes
- Dashboard: Sidebar collapsible
- Pricing: Cards stackées

### Mobile (375px)
- Single column layout
- Full-width cards
- Bottom navigation
- Simplified dashboard

---

## 🎭 Animations & Interactions

### Page Transitions
- Fade in: 0.5s ease-out
- Slide up: 0.3s ease-out
- Stagger: 0.1s between elements

### Micro-interactions
- Button hover: Scale 1.05 + shadow
- Card hover: TranslateY -4px + glow
- Form inputs: Focus state with border color
- Loading states: Skeleton screens

### Scroll Animations
- Hero text: Fade in + translateY
- Service cards: Stagger fade in
- Stats: Count up animation
- Testimonials: Slide in from sides

---

## 🔧 Technical Specifications

### Figma Structure
```
nous-platform-figma/
├── 📱 Pages/
│   ├── 01-Home.fig
│   ├── 02-Services.fig
│   ├── 03-Dashboard.fig
│   ├── 04-Service-Detail.fig
│   └── 05-Pricing.fig
├── 🧩 Components/
│   ├── Service-Card.fig
│   ├── Stat-Card.fig
│   ├── Navigation.fig
│   └── Button.fig
├── 🎨 Styles/
│   ├── Colors.style
│   ├── Typography.style
│   └── Effects.style
└── 📐 Assets/
    ├── Icons/
    ├── Images/
    └── Illustrations/
```

### Export Settings
- Images: PNG @2x
- Icons: SVG
- CSS: Variables + Components
- Prototype: Interactive flows

---

## 🚀 Implementation Notes

### Key Features
- **Multi-services**: E-Gouvernement, E-Santé, E-Éducation
- **User Dashboard**: Statistics and quick actions
- **Responsive Design**: Works on all devices
- **Modern UI**: Glassmorphism + gradients
- **Accessibility**: WCAG 2.1 AA compliant

### Development Stack
- **Frontend**: Next.js 14, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Drizzle ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

### Performance
- Lazy loading for images
- Code splitting
- Optimized components
- SEO friendly

---

*Cette maquette complète servira de référence pour le développement de la plateforme NOUS Platform, adaptée spécifiquement au contexte guinéen.*
