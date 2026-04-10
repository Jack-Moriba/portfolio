# Maquette Figma - HOLY Ecosystem

## 📋 Informations du Projet

**Nom**: HOLY Ecosystem  
**Catégorie**: Faith-Based Digital Platform  
**Technologies**: Django, PostgreSQL, React Native  
**Année**: 2024  
**Statut**: Featured ⭐  

---

## 🎨 Concept & Design System

### Thème Principal
- **Couleurs**: Violet (#8b5cf6) + Doré (#f59e0b) + Blanc
- **Style**: Spirituel, moderne, accueillant
- **Inspiration**: Communauté chrétienne, technologie au service de la foi

### Typographie
- **Titres**: Geist, 700 weight
- **Texte**: Inter, 400 weight
- **Script**: Great Vibes (pour citations bibliques)

### Icônes
- Font Awesome (religious icons)
- Icônes personnalisées pour les activités spirituelles

---

## 📱 Pages & Écrans

### 1. Page d'Accueil / Landing
```
Frame: 1920x1080px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
│  [Croix] [Ministères] [Événements] [Don] [Connexion] │
├─────────────────────────────────────────────┤
│                                             │
│           Hero Section                      │ 600px
│  ┌─────────────────────────────────────────┐ │
│  │        HOLY ECOSYSTEM                   │ │
│  │   "La Communauté Chrétienne 2.0"        │ │
│  │                                         │ │
│  │  "Car là où deux ou trois sont           │ │
│  │   assemblés en mon nom,                 │ │
│  │   je suis au milieu d'eux."             │ │
│  │              Matthieu 18:20              │ │
│  │                                         │ │
│  │  [Rejoindre la Communauté] [Explorer]   │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │          Activités Principales           │ │ 400px
│  │                                         │ │
│  │  [Études Bibliques] [Prières] [Culte]   │ │
│  │  [Actions Sociales] [Jeunesse] [Enfants]│ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Éléments:
- Hero background: Dégradé violet + doré
- Citation biblique en script
- CTA buttons: Primary (violet) + Secondary (doré)
- Activity cards: Glassmorphism avec icônes religieuses
- Animations: Fade-in avec effet lumineux
```

### 2. Page Ministères
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Ministères Header                  │ 120px
│     "Nos Ministères et Services"            │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │Enseignem│ │Louange  │ │Jeunesse │ │ 300px
│  │ent      │ │         │ │         │ │
│  │         │ │         │ │         │ │
│  │[Bible]  │ │[Music]  │ │[Young]  │ │
│  │Études   │ │Culte    │ │Activités│ │
│  │bibliques│ │Adoration│ │jeunes   │ │
│  │[Rejoindre]│ │[Participer]│ │[S'inscrire]│ │
│  └─────────┘ └─────────┘ └─────────┘       │
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │Enfants  │ │Actions  │ │Interces │ │ 300px
│  │         │ │Sociales │ │sion     │ │
│  │         │ │         │ │         │ │
│  │[Child]  │ │[Heart]  │ │[Prayer] │ │
│  │École du │ │Aide aux │ │Chaîne de│ │
│  │dimanche │ │nécessite│ │prière   │ │
│  │[Inscrire]│ │[Aider]  │ │[Prier]  │ │
│  └─────────┘ └─────────┘ └─────────┘       │
└─────────────────────────────────────────────┘

Ministry Card:
- Background: Glassmorphism violet
- Icon: 64x64px, doré
- Title: H3, 24px
- Description: 2-3 lines
- Button: Primary violet
- Hover: Scale 1.05, glow doré
```

### 3. Application Mobile (React Native)
```
Frame: 375x812px (iPhone)

┌─────────────────────┐
│     Mobile App       │
│  ┌─────────────────┐ │
│  │   Top Bar       │ │ 60px
│  │ [☰] HOLY [🔔]  │ │
│  └─────────────────┘ │
│  ┌─────────────────┐ │
│  │   Daily Verse   │ │ 200px
│  │                 │ │
│  │ "Le Seigneur est │ │
│  │  mon berger..." │ │
│  │    Psaume 23    │ │
│  │                 │ │
│  │   [Partager]    │ │
│  └─────────────────┘ │
│  ┌─────────────────┐ │
│  │  Quick Actions  │ │ 300px
│  │                 │ │
│  │ [📖 Lecture]    │ │
│  │ [🙏 Prière]      │ │
│  │ [🎵 Louange]     │ │
│  │ [👥 Communauté]  │ │
│  │ [📅 Événements]   │ │
│  │ [💵 Dons]        │ │
│  └─────────────────┘ │
│  ┌─────────────────┐ │
│  │   Community     │ │ 252px
│  │                 │ │
│  │ 🔴 Live - Culte │ │
│  │ du dimanche     │ │
│  │                 │ │
│  │ [Rejoindre]      │ │
│  └─────────────────┘ │
│  └─────────────────┘ │
│    Bottom Nav       │ 80px
│ [🏠][📖][🙏][👥][👤] │
└─────────────────────┘

Mobile Features:
- Daily verse with sharing
- Quick action buttons
- Live streaming integration
- Community feed
- Bottom navigation
- Push notifications
```

### 4. Page Événements
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Événements Header                  │ 120px
│     "Événements de la Communauté"           │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Calendar      │ │    Upcoming Events  │ │ 600px
│  │                 │ │                     │ │
│  │   [Month View]  │ │ ┌─────────────────┐ │ │
│  │   Sun Mon Tue   │ │ │Culte du Dimanche│ │ │
│  │     1   2   3   │ │ │Dim 10 Déc, 10h  │ │
│  │     4   5   6   │ │ │[Réserver Place] │ │ │
│  │     7   8   9   │ │ └─────────────────┘ │ │
│  │    10  11  12   │ │                     │ │
│  │                 │ │ ┌─────────────────┐ │ │
│  │  [Today Events] │ │ │Étude Biblique   │ │ │
│  │                 │ │ │Mar 12 Déc, 18h  │ │ │
│  └─────────────────┘ │ │[Participer]      │ │ │
│                     │ └─────────────────┘ │ │
│                     │                     │ │
│                     │ ┌─────────────────┐ │ │
│                     │ │Action Sociale   │ │ │
│                     │ │Sam 15 Déc, 14h  │ │ │
│                     │ │[Bénévolat]      │ │ │
│                     │ └─────────────────┘ │ │
│                     └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Past Events                   │ │ 300px
│  │                                         │ │
│  │ Gallery with photos from past events    │ │
│  │ [Voir Galerie Complète]                 │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Event Features:
- Interactive calendar
- Event registration
- Photo galleries
- Live streaming links
- Reminder notifications
```

### 5. Page Dons & Soutien
```
Frame: 1920x1000px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Giving Header                      │ 120px
│     "Soutenir l'Œuvre de Dieu"             │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Donation      │ │    Impact Report    │ │ 600px
│  │                 │ │                     │ │
│  │ Montant: [1000] │ │ Cette année:        │ │
│  │ GNF             │ │ • 150 vies touchées │ │
│  │                 │ │ • 30 projets soutenus│ │
│  │ [Don Unique]    │ │ • 5 églises aidées  │ │
│  │ [Don Mensuel]   │ │                     │ │
│  │                 │ │ [Voir Rapport Complet]│ │
│  │ Méthodes:       │ │                     │ │
│  │ • Mobile Money  │ │ ┌─────────────────┐ │ │
│  │ • Carte Bancaire│ │ │ Témoignages     │ │ │
│  │ • Virement      │ │ │                 │ │ │
│  │                 │ │ │ "Votre soutien a │ │ │
│  └─────────────────┘ │ │  changé ma vie" │ │ │
│                     │ │  - Marie K.      │ │ │
│                     │ └─────────────────┘ │ │
│                     └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Projects to Fund              │ │ 200px
│  │                                         │ │
│  │ [Église Construction] [Bibliothèque]    │ │
│  │ [Aide aux Orphelins] [Missions]         │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Giving Features:
- Multiple payment methods
- Recurring donations
- Impact tracking
- Transparent reporting
- Project-specific giving
```

---

## 🎨 Composants Spécifiques

### Ministry Card Component
```
Type: Component
Auto Layout: Vertical
Padding: 24px
Gap: 16px

Background: linear-gradient(135deg, violet/500/10, gold/500/10)
Border: 1px solid violet/500/30
Border Radius: 16px
Width: 300px
Height: 280px

Content:
- Icon: 64x64px, gold
- Title: H3, 24px, 600 weight, violet
- Description: Body, 14px, 3 lines max
- Button: Primary violet with gold hover

States:
- Default: opacity=1
- Hover: scale=1.05, shadow=gold-glow
- Active: border=violet/500
```

### Bible Verse Component
```
Type: Component
Auto Layout: Vertical
Padding: 32px
Gap: 16px

Background: glassmorphism
Border-radius: 16px

Content:
- Verse text: Script font, 24px, gold
- Reference: Body, 16px, violet
- Share button: Ghost button

Animation: Fade in + subtle glow
```

### Live Streaming Component
```
Type: Component
Auto Layout: Vertical
Width: 100%
Max-width: 800px

Content:
- Live indicator: Red dot + "LIVE"
- Video player placeholder
- Chat sidebar
- Participant count
- Interaction buttons

States:
- Live: Red border, pulse animation
- Offline: Gray border
```

---

## 📱 Responsive Design

### Tablette (768px)
- Navigation: Hamburger menu
- Ministries: 2 colonnes
- Events: Calendar stackée
- Donations: Simplified form

### Mobile (375px)
- Single column layout
- Full-width ministry cards
- Swipeable calendar
- Mobile-optimized donation form
- Bottom navigation for app

---

## 🎭 Animations & Interactions

### Spiritual Animations
- Cross fade-in: 1s ease-in
- Light ray effects: Subtle animation
- Pulse for live indicators: 2s infinite
- Floating elements: Gentle movement

### Page Transitions
- Hero: Fade in + scale
- Ministry cards: Stagger slide up
- Calendar: Smooth transitions
- Donation form: Slide in right

### Micro-interactions
- Prayer requests: Heart animation
- Bible verses: Highlight on hover
- Live chat: Message slide in
- Donation buttons: Scale + glow

---

## 🔧 Technical Specifications

### Figma Structure
```
holy-ecosystem-figma/
├── 📱 Pages/
│   ├── 01-Home.fig
│   ├── 02-Ministries.fig
│   ├── 03-Mobile-App.fig
│   ├── 04-Events.fig
│   └── 05-Giving.fig
├── 🧩 Components/
│   ├── Ministry-Card.fig
│   ├── Bible-Verse.fig
│   ├── Live-Streaming.fig
│   └── Donation-Form.fig
├── 🎨 Styles/
│   ├── Colors.style (violet, gold, white)
│   ├── Typography.style
│   └── Effects.style
└── 📐 Assets/
    ├── Religious Icons/
    ├── Cross Illustrations/
    └── Background Patterns/
```

### Export Settings
- Images: PNG @2x with transparency
- Icons: SVG for scalability
- Mobile screens: Device frames
- CSS: Religious-themed variables

---

## 🚀 Implementation Notes

### Key Features
- **Multi-platform**: Web + React Native
- **Live streaming**: Worship services
- **Community features**: Prayer requests, testimonials
- **Donation system**: Multiple payment methods
- **Event management**: Calendar + registration
- **Spiritual content**: Daily verses, studies

### Development Stack
- **Frontend**: Django Templates + Bootstrap
- **Backend**: Django + PostgreSQL
- **Mobile**: React Native
- **Streaming**: WebRTC + Socket.io
- **Payments**: Mobile Money APIs
- **Deployment**: Heroku + AWS

### Security & Privacy
- User authentication
- Payment security
- Data encryption
- GDPR compliance
- Safe browsing for all ages

---

*Cette maquette complète servira de référence pour le développement de l'écosystème HOLY, une plateforme numérique au service des communautés chrétiennes.*
