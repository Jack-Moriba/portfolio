# Maquette Figma - Church Platform

## 📋 Informations du Projet

**Nom**: Church Platform  
**Catégorie**: Community Management  
**Technologies**: Next.js, PostgreSQL, Full-Stack Architecture  
**Année**: 2024  
**Statut**: Featured ⭐  

---

## 🎨 Concept & Design System

### Thème Principal
- **Couleurs**: Bleu royal (#1e40af) + Blanc pur + Doré (#fbbf24)
- **Style**: Communautaire, moderne, accueillant
- **Inspiration**: Gestion d'église moderne avec technologie

### Typographie
- **Titres**: Merriweather, 700 weight
- **Texte**: Open Sans, 400 weight
- **Script**: Allura (pour citations spirituelles)

### Icônes
- Font Awesome (church, community, events)
- Icônes personnalisées pour les activités ecclésiales

---

## 📱 Pages & Écrans

### 1. Tableau de Bord Principal
```
Frame: 1920x1080px

┌─────────────────────────────────────────────┐
│              Admin Header                   │ 60px
│  [⛪ Eglise Name] [Dashboard] [Settings] [Profile] [Logout] │
├─────────────────────────────────────────────┤
│  Sidebar │        Main Content              │
│  250px   │           1670px                 │
│ ┌───────┐│ ┌─────────────────────────────────┐ │
│ │ Menu  ││ │     Welcome, Pastor!           │ │ 200px
│ │       ││ │    Statistiques du Mois        │ │
│ │[Dashboard]│ │                             │ │
│ │[Members]│ │ ┌─────┐ ┌─────┐ ┌─────┐     │ │
│ │[Events] │ │ │Memb│ │Even│ │Don │ │ │
│ │[Groups] │ │ │res │ │ts  │ │s   │ │ │
│ │[Giving] │ │ │250 │ │ 12 │ │5.2M│ │ │
│ │[Media]  │ │ │+15 │ │ +3 │ │+12%│ │ │
│ │[Reports]│ │ └─────┘ └─────┘ └─────┘     │ │
│ │[Settings]│ │                             │ │
│ │       ││ │      Actions Rapides          │ │
│ │       ││ │                             │ │
│ │       ││ │ [Nouveau Membre] [Nouvel     │ │
│ │       ││ │  Événement] [Message Urgent]  │ │
│ └───────┘│ └─────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Dashboard Features:
- Real-time statistics
- Quick action buttons
- Recent activities feed
- Upcoming events
- Member birthdays
- Giving overview
```

### 2. Gestion des Membres
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│              Admin Header                   │ 60px
├─────────────────────────────────────────────┤
│          Members Header                     │ 100px
│     "Gestion des Membres - 250 Total"       │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Search &      │ │    Members List      │ │ 800px
│  │   Filters       │ │                     │ │
│  │                 │ │ ┌─────────────────┐ │ │
│  │ 🔍 Search: [Name│ │ │ 👤 Marie Konaté  │ │ │
│  │  or Email]      │ │ │ • • • • • • • •  │ │
│  │                 │ │ │ marie@email.com  │ │ │
│  │ Filters:         │ │ │ Member since 2020│ │ │
│  │ [All] [Active]  │ │ │ [View] [Edit]    │ │ │
│  │ [New] [Leaders] │ │ └─────────────────┘ │ │
│  │ [Volunteers]    │ │                     │ │
│  │                 │ │ ┌─────────────────┐ │ │
│  │ [➕ Add Member]  │ │ │ 👤 Paul Traoré  │ │ │
│  └─────────────────┘ │ │ • • • • • • • •  │ │ │
│                     │ │ paul@email.com   │ │ │
│  ┌─────────────────┐ │ │ Member since 2021│ │ │
│  │   Quick Stats   │ │ │ [View] [Edit]    │ │ │
│  │                 │ │ └─────────────────┘ │ │
│  │ Total: 250      │ │                     │ │
│  │ Active: 230     │ │ [Load More...]     │ │
│  │ New: 12         │ │                     │ │
│  │ Leaders: 8      │ │ Pagination: [1][2][3]│ │
│  └─────────────────┘ └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Member Actions                 │ │ 200px
│  │                                         │ │
│  │ [📧 Email All] [📱 SMS All] [📊 Export] │ │
│  │ [🎂 Birthday Cards] [📋 Directory]     │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Member Management:
- Advanced search and filtering
- Member profiles with photos
- Contact information management
- Membership status tracking
- Bulk communication tools
- Directory export
```

### 3. Gestion des Événements
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│              Admin Header                   │ 60px
├─────────────────────────────────────────────┤
│          Events Header                      │ 100px
│     "Gestion des Événements"                │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Calendar      │ │    Event Details    │ │ 800px
│  │                 │ │                     │ │
│  │   [Month View]  │ │ ┌─────────────────┐ │ │
│  │   Sun Mon Tue   │ │ │ 🎵 Worship Night│ │ │
│  │     1   2   3   │ │ │ Friday, Dec 15   │ │ │
│  │     4   5   6   │ │ │ 7:00 PM - 9:00 PM│ │ │
│  │     7   8   9   │ │ │ Main Sanctuary   │ │ │
│  │    10  11  12   │ │ │ Expected: 150    │ │ │
│  │                 │ │ │ Registered: 120  │ │ │
│  │  📍 Today Events │ │ │                 │ │ │
│  │  • 10:00 AM -   │ │ │ Description:      │ │ │
│  │    Prayer Meeting│ │ │ Special worship   │ │ │
│  │  • 6:00 PM -    │ │ │ service with guest│ │ │
│  │    Youth Group   │ │ │ speaker...        │ │ │
│  └─────────────────┘ │ │                 │ │ │
│                     │ │ [Edit] [Cancel]   │ │ │
│  ┌─────────────────┐ │ │ [Send Reminder]   │ │ │
│  │   Upcoming      │ │ └─────────────────┘ │ │
│  │   Events        │ │                     │ │
│  │                 │ │ ┌─────────────────┐ │ │
│  │ • Dec 15 -      │ │ │ 🎅 Christmas    │ │ │
│  │   Worship Night │ │ │ Celebration     │ │ │
│  │ • Dec 20 -      │ │ │ Dec 20, 6:00 PM  │ │ │
│  │   Christmas     │ │ │ Expected: 300    │ │ │
│  │   Celebration   │ │ │ Registered: 250  │ │ │
│  │ • Dec 24 -      │ │ └─────────────────┘ │ │
│  │   Christmas Eve │ │                     │ │
│  │   Service       │ │ [➕ Create Event]   │ │
│  └─────────────────┘ └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Event Management              │ │ 200px
│  │                                         │ │
│  │ [📅 Schedule] [👥 Registration] [📊 Reports] │ │
│  │ [🎤 Resources] [📱 Notifications] [📸 Gallery] │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Event Features:
- Interactive calendar
- Event registration system
- Attendance tracking
- Resource management
- Automated reminders
- Photo galleries
```

### 4. Gestion des Dons (Giving)
```
Frame: 1920x1000px

┌─────────────────────────────────────────────┐
│              Admin Header                   │ 60px
├─────────────────────────────────────────────┤
│          Giving Header                      │ 100px
│     "Gestion des Dons et Offrandes"         │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Giving Stats  │ │    Recent Donations  │ │ 600px
│  │                 │ │                     │ │
│  │ This Month:     │ │ ┌─────────────────┐ │ │
│  │ 📊 5,200,000 GNF│ │ │ Marie K.        │ │ │
│  │ 📈 +15% vs last │ │ │ 500,000 GNF     │ │ │
│  │ month           │ │ │ General Offering│ │ │
│  │                 │ │ │ 2 hours ago     │ │ │
│  │ This Year:      │ │ └─────────────────┘ │ │
│  │ 🎯 45,000,000 GNF│ │                     │ │
│  │ 📈 +22% vs last │ │ ┌─────────────────┐ │ │
│  │ year            │ │ │ John T.         │ │ │
│  │                 │ │ │ 200,000 GNF     │ │ │
│  │ Goal Progress:  │ │ │ Building Fund   │ │ │
│  │ ████████████░░  │ │ │ 5 hours ago     │ │ │
│  │ 80% of 56M      │ │ └─────────────────┘ │ │
│  └─────────────────┘ │                     │ │
│                     │ [View All Donations] │ │
│  ┌─────────────────┐ │                     │ │
│  │   Fund Types    │ │ ┌─────────────────┐ │ │
│  │                 │ │ │ Sarah L.        │ │ │
│  │ • General: 60%  │ │ │ 100,000 GNF     │ │ │
│  │ • Building: 25% │ │ │ Missions        │ │ │
│  │ • Missions: 10% │ │ │ Yesterday       │ │ │
│  │ • Emergency: 5% │ │ └─────────────────┘ │ │
│  └─────────────────┘ └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Giving Management             │ │ 200px
│  │                                         │ │
│  │ [📊 Reports] [📧 Receipts] [🎯 Goals]   │ │
│  │ [💳 Payment Methods] [📱 Mobile Money]  │ │
│  │ [🏦 Bank Reconciliation] [📈 Analytics] │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Giving Features:
- Real-time donation tracking
- Multiple fund categories
- Goal setting and progress
- Automated receipts
- Payment method management
- Financial reporting
```

### 5. Portail Membre (Mobile First)
```
Frame: 375x812px (Mobile View)

┌─────────────────────┐
│   Member Portal     │
│  ┌─────────────────┐ │
│  │   Top Bar       │ │ 60px
│  │ [☰] ⛪ Church [👤] │ │
│  └─────────────────┘ │
│  ┌─────────────────┐ │
│  │   Welcome       │ │ 120px
│  │                 │ │
│  │  Bonjour Marie! │ │
│  │                 │ │
│  │  📅 Next Event: │ │
│  │  Worship Night  │ │
│  │  Tomorrow 7PM   │ │
│  │                 │ │
│  │  [Register Now] │ │
│  └─────────────────┘ │
│  ┌─────────────────┐ │
│  │  Quick Actions  │ │ 300px
│  │                 │ │
│  │ [💵 Give Now]   │ │
│  │ [📅 Events]     │ │
│  │ [👥 Groups]     │ │
│  │ [📖 Sermons]    │ │
│  │ [🙏 Prayer]     │ │
│  │ [📞 Directory]  │ │
│  └─────────────────┘ │
│  ┌─────────────────┐ │
│  │  Recent Updates │ │ 200px
│  │                 │ │
│  │ 📧 New sermon   │ │
│  │    available    │ │
│  │                 │ │
│  │ 🎵 Worship team │ │
│  │    practice     │ │
│  │    moved to 6PM │ │
│  └─────────────────┘ │
│  └─────────────────┘ │
│    Bottom Nav       │ 80px
│ [🏠][📅][💵][👥][👤] │
└─────────────────────┘

Member Portal Features:
- Personalized welcome
- Upcoming events
- Quick action buttons
- Recent updates
- Mobile giving
- Group participation
```

---

## 🎨 Composants Spécifiques

### Member Card Component
```
Type: Component
Auto Layout: Horizontal
Padding: 16px
Gap: 12px

Background: glassmorphism
Border-radius: 12px
Min-height: 80px

Content:
- Avatar: 48x48px, circular
- Name: H4, 18px, 600 weight
- Email: Body, 14px, text/secondary
- Status: Active/New/Leader badge
- Action buttons: View/Edit

States:
- Default: Blue border
- Hover: Scale 1.02, shadow
- Selected: Blue background
```

### Event Card Component
```
Type: Component
Auto Layout: Vertical
Padding: 20px
Gap: 12px

Background: gradient blue/white
Border-radius: 16px
Width: 300px

Content:
- Event type icon: 32x32px
- Title: H4, 20px
- Date/Time: Body, 16px
- Location: Body, 14px
- Registration: Badge
- Action buttons: Register/Edit

States:
- Upcoming: Blue accent
- Today: Orange accent
- Past: Gray opacity
```

### Donation Summary Component
```
Type: Component
Auto Layout: Vertical
Padding: 24px
Gap: 16px

Background: glassmorphism with gold accents
Border-radius: 16px

Content:
- Total amount: H2, 32px, gold
- Period: Body, 16px
- Progress bar: Visual indicator
- Comparison: vs last period
- Trend indicator: Up/Down arrow

Animation: Count up effect on load
```

---

## 📱 Responsive Design

### Tablette (768px)
- Dashboard: Collapsible sidebar
- Members: 2-column layout
- Events: Simplified calendar
- Giving: Compact stats

### Mobile (375px)
- Single column layout
- Bottom navigation
- Swipeable cards
- Touch-optimized buttons
- Full-width forms
```

---

## 🎭 Animations & Interactions

### Dashboard Animations
- Stats cards: Fade in + count up
- Charts: Animated drawing
- Notifications: Slide in from top
- Quick actions: Scale on hover

### Member Management
- Search: Real-time filtering
- Cards: Stagger load animation
- Status changes: Color transition
- Bulk actions: Select animation

### Event Management
- Calendar: Smooth month transitions
- Event creation: Modal slide up
- Registration: Success animation
- Reminders: Pulse notification

---

## 🔧 Technical Specifications

### Figma Structure
```
church-platform-figma/
├── 📱 Pages/
│   ├── 01-Dashboard.fig
│   ├── 02-Members.fig
│   ├── 03-Events.fig
│   ├── 04-Giving.fig
│   └── 05-Member-Portal.fig
├── 🧩 Components/
│   ├── Member-Card.fig
│   ├── Event-Card.fig
│   ├── Donation-Summary.fig
│   └── Navigation.fig
├── 🎨 Styles/
│   ├── Colors.style (blue, gold, white)
│   ├── Typography.style
│   └── Effects.style
└── 📐 Assets/
    ├── Church Icons/
    ├── Member Avatars/
    └── Event Illustrations/
```

### Export Settings
- Images: PNG @2x
- Icons: SVG
- Mobile screens: Device frames
- CSS: Church theme variables

---

## 🚀 Implementation Notes

### Key Features
- **Member management**: Complete CRM system
- **Event scheduling**: Calendar with registration
- **Financial tracking**: Multi-fund giving system
- **Communication**: Email, SMS, push notifications
- **Mobile portal**: Member-facing app
- **Reporting**: Comprehensive analytics

### Development Stack
- **Frontend**: Next.js 14, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma
- **Authentication**: NextAuth.js
- **Payments**: Stripe + Mobile Money
- **Real-time**: Socket.io for notifications

### Security Features
- Role-based access control
- Data encryption
- Secure payment processing
- GDPR compliance
- Audit logging

---

*Cette maquette complète servira de référence pour le développement de la Church Platform, une solution de gestion complète pour les églises modernes.*
