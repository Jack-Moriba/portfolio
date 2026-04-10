# Maquette Figma - Bible Quiz Web App

## 📋 Informations du Projet

**Nom**: Bible Quiz Web App  
**Catégorie**: Educational Platform  
**Technologies**: HTML, CSS, JavaScript, Django, MySQL  
**Année**: 2023  
**Statut**: Standard  

---

## 🎨 Concept & Design System

### Thème Principal
- **Couleurs**: Bleu ciel (#3b82f6) + Vert (#10b981) + Or (#f59e0b)
- **Style**: Éducatif, ludique, spirituel
- **Inspiration**: Quiz modernes + design biblique

### Typographie
- **Titres**: Poppins, 700 weight
- **Texte**: Inter, 400 weight
- **Questions**: Georgia, serif

### Icônes
- Font Awesome (education, book, cross)
- Icônes de quiz et achievements

---

## 📱 Pages & Écrans

### 1. Page d'Accueil / Landing
```
Frame: 1920x1080px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
│  [📖 Bible Quiz] [Catégories] [Classement] [Connexion] │
├─────────────────────────────────────────────┤
│                                             │
│           Hero Section                      │ 600px
│  ┌─────────────────────────────────────────┐ │
│  │        📖 BIBLE QUIZ                    │ │
│  │   "Testez vos Connaissances Bibliques"   │ │
│  │                                         │ │
│  │  "Car la Parole de Dieu est vivante     │ │
│  │   et efficace..." Hébreux 4:12           │ │
│  │                                         │ │
│  │  [Commencer le Quiz] [Créer un Compte]   │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │          Statistiques                   │ │ 200px
│  │                                         │ │
│  │  [1,250+] Questions  [15+] Catégories   │ │
│  │  [5,000+] Joueurs    [3] Niveaux        │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Éléments:
- Hero background: Dégradé bleu vers vert
- Icônes de livre et de quiz
- CTA buttons: Primary (bleu) + Secondary (vert)
- Stats: Animated counters
- Gamification elements
```

### 2. Page Sélection de Catégorie
```
Frame: 1920x1000px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Categories Header                  │ 120px
│     "Choisissez une Catégorie"              │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │Ancien   │ │Nouveau  │ │Psaumes  │ │ 300px
│  │Testament│ │Testament│ │         │ │
│  │         │ │         │ │         │ │
│  │[📜]     │ │[✝️]     │ │[🎵]     │ │
│  │50 questions│ │60 questions│ │40 questions│ │
│  │Facile    │ │Moyen    │ │Difficile│ │
│  │[Jouer]   │ │[Jouer]  │ │[Jouer]  │ │
│  └─────────┘ └─────────┘ └─────────┘       │
│                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │Proverbes│ │Évangiles│ │Vie de   │ │ 300px
│  │         │ │         │ │Jésus    │ │
│  │         │ │         │ │         │ │
│  │[🦉]     │ │[📖]     │ │[👑]     │ │
│  │30 questions│ │45 questions│ │35 questions│ │
│  │Moyen     │ │Facile   │ │Expert   │ │
│  │[Jouer]   │ │[Jouer]  │ │[Jouer]  │ │
│  └─────────┘ └─────────┘ └─────────┘       │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Mode Aléatoire                 │ │ 200px
│  │                                         │ │
│  │  [🎲] Quiz Surprise - Questions de      │ │
│  │       toutes les catégories             │ │
│  │                                         │ │
│  │         [Lancer le Défi]                │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Category Card:
- Background: Gradient selon difficulté
- Icon: 64x64px, thématique
- Question count: Badge
- Difficulty: Color coding
- Play button: Full width
- Hover: Scale 1.05 + shadow
```

### 3. Page de Quiz (Interface de Jeu)
```
Frame: 1920x1080px

┌─────────────────────────────────────────────┐
│              Quiz Header                    │ 80px
│  [⏸️ Pause]  Question 5/15  [❌ Quitter]    │
│  └─────────────────────────────────────────┘ │
│              Timer: 00:45                   │ 60px
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Question Card                 │ │ 400px
│  │                                         │ │
│  │  Catégorie: Ancien Testament             │ │
│  │  Difficulté: Moyen                      │ │
│  │                                         │ │
│  │  "Qui a construit l'arche de Noé?"      │ │
│  │                                         │ │
│  │  Référence: Genèse 6:14                 │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Answer Options                │ │ 300px
│  │                                         │ │
│  │  ┌─────────────┐ ┌─────────────────────┐ │ │
│  │  │     A       │ │         B           │ │ │
│  │  │   Moïse     │ │       Abraham       │ │ │
│  │  └─────────────┘ └─────────────────────┘ │ │
│  │                                         │ │
│  │  ┌─────────────┐ ┌─────────────────────┐ │ │
│  │  │     C       │ │         D           │ │ │
│  │  │    Noé      │ │      Jacob          │ │ │
│  │  └─────────────┘ └─────────────────────┘ │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Progress Bar                  │ │ 80px
│  │  ████████████░░░░░  33%                  │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Help Options                  │ │ 100px
│  │                                         │ │
│  │  [💡 50/50] [⏱️ +30s] [🔄 Skip Question] │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Quiz Features:
- Timer countdown
- Progress tracking
- Multiple choice answers
- Help options (lifelines)
- Reference verses
- Points system
```

### 4. Page Résultats
```
Frame: 1920x1000px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Results Header                     │ 120px
│     "Félicitations! Quiz Terminé"           │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Score Final   │ │    Performance      │ │ 400px
│  │                 │ │                     │ │
│  │      🏆         │ │ ┌─────────────────┐ │ │
│  │     12/15       │ │ │   Accuracy      │ │ │
│  │     80%         │ │ │      80%        │ │ │
│  │                 │ │ └─────────────────┘ │ │
│  │   Excellent!    │ │ ┌─────────────────┐ │ │
│  │                 │ │ │   Time Bonus    │ │ │
│  │  ⭐⭐⭐⭐         │ │ │     +250        │ │ │
│  └─────────────────┘ │ └─────────────────┘ │ │
│                     │                     │ │
│                     │ ┌─────────────────┐ │ │
│                     │ │ Total Points    │ │ │
│                     │ │     1,450       │ │ │
│                     │ └─────────────────┘ │ │
│                     └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Detailed Results              │ │ 300px
│  │                                         │ │
│  │ ✅ Correct: 12 questions                │ │
│  │ ❌ Incorrect: 3 questions               │ │
│  │ ⏱️ Average time: 25s/question           │ │
│  │ 📚 Best category: Nouveau Testament     │ │
│  │                                         │ │
│  │ [Review Answers] [Share Results]        │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Next Actions                  │ │ 100px
│  │                                         │ │
│  │  [Play Again] [New Category] [Leaderboard] │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Results Features:
- Score visualization
- Performance metrics
- Detailed breakdown
- Social sharing
- Achievement badges
```

### 5. Page Classement / Leaderboard
```
Frame: 1920x1000px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Leaderboard Header                 │ 120px
│     "Classement Mondial"                    │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Filters       │ │    Top Players      │ │ 600px
│  │                 │ │                     │ │
│  │ Time: [This Week│ │ ┌─────────────────┐ │ │
│  │ │This Month|All]│ │ │ 🥇 Marie K.     │ │ │
│  │                 │ │ │  15,250 points  │ │ │
│  │ Category: [All  │ │ │  France         │ │ │
│  │ │OT|NT|Psalms]  │ │ └─────────────────┘ │ │
│  │                 │ │                     │ │
│  │ Difficulty: [All│ │ ┌─────────────────┐ │ │
│  │ │Easy|Medium|Hard]│ │ │ 🥈 John D.      │ │ │
│  └─────────────────┘ │ │  14,800 points  │ │ │
│                     │ │  USA            │ │ │
│                     │ └─────────────────┘ │ │
│                     │                     │ │
│                     │ ┌─────────────────┐ │ │
│                     │ │ 🥉 Sarah L.     │ │ │
│                     │ │  13,900 points  │ │ │
│                     │ │  Canada         │ │ │
│                     │ └─────────────────┘ │ │
│                     │                     │ │
│                     │ ┌─────────────────┐ │ │
│                     │ │ 4. You          │ │ │
│                     │ │  12,450 points  │ │ │
│                     │ │  Guinea         │ │ │
│                     │ └─────────────────┘ │ │
│                     └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Your Statistics               │ │ 200px
│  │                                         │ │
│  │ Global Rank: #127                       │ │
│  │ Country Rank: #3 (Guinea)               │ │
│  │ Total Games: 45                         │ │
│  │ Best Streak: 12 wins                    │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Leaderboard Features:
- Global and country rankings
- Filtering options
- Player profiles
- Achievement badges
- Statistics tracking
```

---

## 🎨 Composants Spécifiques

### Question Card Component
```
Type: Component
Auto Layout: Vertical
Padding: 32px
Gap: 20px

Background: glassmorphism
Border-radius: 16px
Max-width: 800px

Content:
- Category badge: Small, colored
- Question text: Georgia, 24px
- Reference: Italic, 16px
- Timer: Circular progress

States:
- Normal: Blue border
- Warning: Orange border (<30s)
- Critical: Red border (<10s)
```

### Answer Option Component
```
Type: Component
Auto Layout: Horizontal
Padding: 16px
Gap: 12px

Background: glassmorphism
Border: 2px solid transparent
Border-radius: 12px
Min-height: 60px

Content:
- Letter label: A, B, C, D
- Answer text: 18px
- Selection indicator

States:
- Default: Transparent border
- Hover: Blue border, scale 1.02
- Selected: Blue background
- Correct: Green border + checkmark
- Incorrect: Red border + X mark
```

### Achievement Badge Component
```
Type: Component
Auto Layout: Vertical
Width: 80px
Height: 80px

Content:
- Icon: 32x32px, gold
- Title: Small, bold
- Description: X-small

Variants:
- Bronze: #cd7f32
- Silver: #c0c0c0
- Gold: #ffd700
- Platinum: #e5e4e2
```

---

## 📱 Responsive Design

### Tablette (768px)
- Categories: 2 colonnes
- Quiz: Simplified layout
- Results: Stacked sections
- Leaderboard: Compact view

### Mobile (375px)
- Single column layout
- Touch-friendly answers
- Swipeable categories
- Full-width results
- Scrollable leaderboard

---

## 🎭 Animations & Interactions

### Quiz Animations
- Question slide in: 0.3s ease-out
- Answer selection: Scale + color transition
- Correct answer: Green pulse
- Incorrect answer: Red shake
- Timer countdown: Circular progress

### Gamification
- Points animation: Count up effect
- Badge unlock: Scale + sparkle
- Achievement popup: Bounce in
- Leaderboard update: Slide transition

### Page Transitions
- Category selection: Fade out/in
- Quiz start: Zoom in effect
- Results reveal: Stagger animation
- Share modal: Slide up

---

## 🔧 Technical Specifications

### Figma Structure
```
bible-quiz-figma/
├── 📱 Pages/
│   ├── 01-Home.fig
│   ├── 02-Categories.fig
│   ├── 03-Quiz-Interface.fig
│   ├── 04-Results.fig
│   └── 05-Leaderboard.fig
├── 🧩 Components/
│   ├── Question-Card.fig
│   ├── Answer-Option.fig
│   ├── Achievement-Badge.fig
│   └── Timer-Component.fig
├── 🎨 Styles/
│   ├── Colors.style (blue, green, gold)
│   ├── Typography.style
│   └── Effects.style
└── 📐 Assets/
    ├── Quiz Icons/
    ├── Achievement Illustrations/
    └── Background Patterns/
```

### Export Settings
- Images: PNG @2x
- Icons: SVG
- Quiz screens: Device frames
- CSS: Educational theme variables

---

## 🚀 Implementation Notes

### Key Features
- **Multi-category quiz**: OT, NT, Psalms, etc.
- **Difficulty levels**: Easy, Medium, Hard, Expert
- **Timer system**: Countdown with bonuses
- **Help options**: 50/50, extra time, skip
- **Leaderboard**: Global and country rankings
- **Achievements**: Unlockable badges
- **Social features**: Share results

### Development Stack
- **Frontend**: HTML5, CSS3, JavaScript ES6
- **Backend**: Django with Django REST Framework
- **Database**: MySQL with optimized queries
- **Authentication**: Django user system
- **Real-time**: WebSocket for live rankings

### Educational Features
- Learning mode with explanations
- Verse references for all questions
- Progress tracking
- Personalized recommendations
- Study guides

---

*Cette maquette complète servira de référence pour le développement de l'application Bible Quiz, une plateforme éducative interactive pour l'apprentissage biblique.*
