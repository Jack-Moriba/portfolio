# Maquette Figma - E-Commerce Website

## 📋 Informations du Projet

**Nom**: E-Commerce Website  
**Catégorie**: Online Shopping  
**Technologies**: React, Node.js, MongoDB  
**Année**: 2023  
**Statut**: Standard  

---

## 🎨 Concept & Design System

### Thème Principal
- **Couleurs**: Orange (#f97316) + Gris foncé (#1f2937) + Blanc
- **Style**: Moderne, épuré, e-commerce professionnel
- **Inspiration**: Plateformes e-commerce populaires avec touche africaine

### Typographie
- **Titres**: Inter, 700 weight
- **Texte**: Inter, 400 weight
- **Prix**: Inter, 800 weight

### Icônes
- Heroicons, Feather icons
- Icônes de shopping et de produits

---

## 📱 Pages & Écrans

### 1. Page d'Accueil / Landing
```
Frame: 1920x1080px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
│  [🛍️ ShopAfrik] [Categories] [Deals] [Cart(3)] [Account] │
├─────────────────────────────────────────────┤
│                                             │
│           Hero Section                      │ 500px
│  ┌─────────────────────────────────────────┐ │
│  │        🛍️ SHOPAFRIK                    │ │
│  │   "Le Shopping Africain Moderne"         │ │
│  │                                         │ │
│  │  Découvrez des produits uniques         │ │
│  │  faits par des artisans locaux          │ │
│  │                                         │ │
│  │  [Parcourir les Produits] [Vendre]       │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │          Featured Products              │ │ 400px
│  │                                         │ │
│  │  [Product 1] [Product 2] [Product 3]    │ │
│  │  [Product 4] [Product 5] [Product 6]    │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Éléments:
- Hero background: Dégradé orange
- Product showcase: Grid layout
- Shopping cart indicator
- Search bar prominent
- Special offers banner
```

### 2. Page Catalogue / Produits
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Shop Header                        │ 100px
│     "Catalogue des Produits"                │
├─────────────────────────────────────────────┤
│  Sidebar │        Products Grid             │
│  250px   │           1670px                 │
│ ┌───────┐│ ┌─────────────────────────────────┐ │
│ │Filters││ │ ┌─────┐ ┌─────┐ ┌─────┐     │ │
│ │       ││ │ │Prod │ │Prod │ │Prod │     │ │
│ │Category││ │ │ 1   │ │ 2   │ │ 3   │     │ │
│ │[All]   ││ │ │[Img]│ │[Img]│ │[Img]│     │ │
│ │[Cloth] ││ │ │Name │ │Name │ │Name │     │ │
│ │[Art]   ││ │ │Price│ │Price│ │Price│     │ │
│ │[Food]  ││ │ │⭐4.5│ │⭐4.8│ │⭐4.2│     │ │
│ │[Tech]  ││ │ └─────┘ └─────┘ └─────┘     │ │
│ │       ││ │                             │ │
│ │Price  ││ │ ┌─────┐ ┌─────┐ ┌─────┐     │ │
│ │[Min]   ││ │ │Prod │ │Prod │ │Prod │     │ │
│ │[Max]   ││ │ │ 4   │ │ 5   │ │ 6   │     │ │
│ │       ││ │ │[Img]│ │[Img]│ │[Img]│     │ │
│ │Rating ││ │ │Name │ │Name │ │Name │     │ │
│ │⭐4+    ││ │ │Price│ │Price│ │Price│     │ │
│ │⭐3+    ││ │ │⭐4.7│ │⭐4.9│ │⭐4.1│     │ │
│ │⭐2+    ││ │ └─────┘ └─────┘ └─────┘     │ │
│ │       ││ │                             │ │
│ │[Apply]││ │ [Load More Products...]       │ │
│ └───────┘│ └─────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Product Grid Features:
- Responsive grid layout
- Product images with hover zoom
- Price display with currency
- Star ratings
- Quick add to cart
- Wishlist button
- Filter sidebar
- Search functionality
```

### 3. Page Détail Produit
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Product       │ │    Product Info      │ │ 800px
│  │   Images        │ │                     │ │
│  │                 │ │ ┌─────────────────┐ │ │
│  │ [Main Image]    │ │ │ Artisanal Bag    │ │ │
│  │ 400x400         │ │ │                 │ │ │
│  │                 │ │ │ ⭐⭐⭐⭐⭐ 4.8/5  │ │ │
│  │ [Thumb1][Thumb2]│ │ │ (127 reviews)   │ │ │
│  │ [Thumb3][Thumb4]│ │ └─────────────────┘ │ │
│  └─────────────────┘ │                     │ │
│                     │ ┌─────────────────┐ │ │
│  ┌─────────────────┐ │ │ Price: 25,000   │ │ │
│  │   Quick Actions  │ │ │ GNF             │ │ │
│  │                 │ │ │                 │ │ │
│  │ [❤️ Wishlist]   │ │ │ Quantity: [ - 1 + ] │ │ │
│  │ [🔗 Share]      │ │ │                 │ │ │
│  │ [📞 Contact]    │ │ │ [🛒 Add to Cart]  │ │ │
│  └─────────────────┘ │ └─────────────────┘ │ │
│                     │                     │ │
│  ┌─────────────────┐ │ ┌─────────────────┐ │ │
│  │   Description   │ │ │   Details       │ │ │
│  │                 │ │ │                 │ │ │
│  │ Beautiful hand- │ │ │ Material: Leather│ │ │
│  │ crafted bag...  │ │ │ Size: 30x20x10cm │ │ │
│  │                 │ │ │ Weight: 500g     │ │ │
│  │ [Read more]     │ │ │ Color: Brown     │ │ │
│  └─────────────────┘ │ │ Origin: Guinea   │ │ │
│                     │ └─────────────────┘ │ │
│                     └─────────────────────┘ │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Reviews Section               │ │ 200px
│  │                                         │ │
│  │ ⭐⭐⭐⭐⭐ "Excellent quality!" - Marie K. │ │
│  │ ⭐⭐⭐⭐⭐ "Fast delivery!" - Paul T.     │ │
│  │                                         │ │
│  │ [Write a Review] [See All Reviews]      │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

Product Details Features:
- Image gallery with zoom
- Product information tabs
- Customer reviews
- Related products
- Stock availability
- Shipping information
```

### 4. Panier d'Achat
```
Frame: 1920x1000px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Cart Header                        │ 80px
│     "Votre Panier (3 articles)"             │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │           Cart Items                    │ │ 500px
│  │                                         │ │
│  │ ┌─────────────────────────────────────┐ │ │
│  │ │ [Image] Artisanal Bag        [❌]   │ │ │
│  │ │         25,000 GNF                  │ │ │
│  │ │         Quantity: [ - 2 + ]         │ │ │
│  │ │         Size: Medium                │ │ │
│  │ │         Color: Brown                │ │ │
│  │ └─────────────────────────────────────┘ │ │
│  │                                         │ │
│  │ ┌─────────────────────────────────────┐ │ │
│  │ │ [Image] Traditional Fabric    [❌]   │ │ │
│  │ │         15,000 GNF                  │ │ │
│  │ │         Quantity: [ - 1 + ]         │ │ │
│  │ │         Pattern: Geometric           │ │ │
│  │ └─────────────────────────────────────┘ │ │
│  │                                         │ │
│  │ ┌─────────────────────────────────────┐ │ │
│  │ │ [Image] Handmade Jewelry     [❌]   │ │ │
│  │ │         35,000 GNF                  │ │ │
│  │ │         Quantity: [ - 1 + ]         │ │ │
│  │ │         Material: Silver             │ │ │
│  │ └─────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Cart Summary  │ │    Checkout Actions  │ │ 300px
│  │                 │ │                     │ │
│  │ Subtotal: 75,000│ │ 🚚 Shipping: Free   │ │ │
│  │ Tax: 7,500      │ │                     │ │ │
│  │                 │ │ 💳 Promo Code:      │ │ │
│  │ Total: 82,500   │ │ [SAVE20]            │ │ │
│  │ GNF             │ │                     │ │ │
│  │                 │ │ [🛒 Checkout]       │ │ │
│  │ [💾 Save for Later]│ │ [🔄 Continue Shopping] │ │ │
│  └─────────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────┘

Cart Features:
- Item management
- Quantity adjustment
- Promo code application
- Shipping calculator
- Save for later
- Guest checkout option
```

### 5. Checkout / Paiement
```
Frame: 1920x1200px

┌─────────────────────────────────────────────┐
│                   Navbar                    │ 80px
├─────────────────────────────────────────────┤
│          Checkout Header                    │ 80px
│     "Finaliser votre Commande"              │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐ ┌─────────────────────┐ │
│  │   Customer Info │ │    Order Summary    │ │ 600px
│  │                 │ │                     │ │
│  │ 📧 Email:       │ │ ┌─────────────────┐ │ │
│  │ [email@example] │ │ │ Artisanal Bag    │ │ │
│  │                 │ │ │ 2 x 25,000 GNF   │ │ │
│  │ 📱 Phone:       │ │ └─────────────────┘ │ │
│  │ [+224 XXX XXX]  │ │                     │ │
│  │                 │ │ ┌─────────────────┐ │ │
│  │ 🏠 Address:     │ │ │ Traditional Fabric│ │ │
│  │ [Street, City]  │ │ │ 1 x 15,000 GNF   │ │ │
│  │                 │ │ └─────────────────┘ │ │
│  │ 📍 Country:     │ │                     │ │
│  │ [Guinea]        │ │ ┌─────────────────┐ │ │
│  │                 │ │ │ Handmade Jewelry │ │ │
│  │ [Save Address]  │ │ │ 1 x 35,000 GNF   │ │ │
│  └─────────────────┘ │ └─────────────────┘ │ │
│                     │                     │ │
│  ┌─────────────────┐ │ Subtotal: 75,000 GNF │ │
│  │   Payment       │ │ Shipping: 0 GNF     │ │
│  │                 │ │ Tax: 7,500 GNF      │ │ │
│  │ 💳 Card:        │ │                     │ │
│  │ [•••• •••• ••••]│ │ Total: 82,500 GNF   │ │
│  │                 │ │                     │ │
│  │ 📱 Mobile Money:│ │ [🎯 Apply Promo]    │ │ │
│  │ [Orange Money]  │ │                     │ │
│  │                 │ │ [✅ Place Order]    │ │ │
│  │ 💵 Cash on      │ │                     │ │ │
│  │ Delivery:       │ │ 🔒 Secure Payment   │ │ │
│  │ [Available]     │ │                     │ │ │
│  └─────────────────┘ └─────────────────────┘ │
└─────────────────────────────────────────────┘

Checkout Features:
- Multi-step process
- Address validation
- Payment method selection
- Order summary
- Promo code application
- Security indicators
```

---

## 🎨 Composants Spécifiques

### Product Card Component
```
Type: Component
Auto Layout: Vertical
Padding: 16px
Gap: 8px

Background: white
Border-radius: 12px
Box-shadow: subtle
Width: 280px
Height: 340px

Content:
- Product image: 280x200px
- Product name: H4, 16px, 2 lines max
- Price: H3, 20px, orange, bold
- Rating: 5 stars, 14px
- Quick actions: Wishlist, Quick view

States:
- Default: Shadow subtle
- Hover: Shadow lift, scale 1.02
- Sale: Red badge corner
- New: Green badge corner
```

### Shopping Cart Component
```
Type: Component
Auto Layout: Horizontal
Padding: 12px 16px
Gap: 12px

Background: glassmorphism
Border-radius: 8px
Min-height: 60px

Content:
- Product thumbnail: 40x40px
- Product name: 14px, truncate
- Quantity: Selector
- Price: 16px, bold
- Remove button: X icon

States:
- Normal: Transparent background
- Hover: Light gray background
- Removing: Fade out animation
```

### Search Component
```
Type: Component
Auto Layout: Horizontal
Padding: 12px 16px
Gap: 8px

Background: white
Border: 1px solid gray
Border-radius: 8px
Width: 100%

Content:
- Search icon: 20x20px
- Input field: Flexible
- Clear button: X icon

States:
- Default: Gray border
- Focus: Orange border, shadow
- Loading: Spinner icon
```

---

## 📱 Responsive Design

### Tablette (768px)
- Product grid: 3 columns
- Sidebar: Collapsible
- Checkout: Single column
- Cart: Simplified layout

### Mobile (375px)
- Single column layout
- Bottom navigation
- Slide-out filters
- Touch-optimized buttons
- Swipeable product gallery
```

---

## 🎭 Animations & Interactions

### Product Interactions
- Image zoom on hover
- Add to cart: Scale + bounce
- Wishlist: Heart animation
- Quick view: Modal slide up

### Shopping Cart
- Add item: Slide in animation
- Remove item: Fade out
- Quantity change: Count animation
- Total update: Number roll

### Checkout Process
- Step indicators: Progress fill
- Form validation: Shake on error
- Payment loading: Spinner
- Success: Confetti animation
```

---

## 🔧 Technical Specifications

### Figma Structure
```
ecommerce-figma/
├── 📱 Pages/
│   ├── 01-Home.fig
│   ├── 02-Catalog.fig
│   ├── 03-Product-Detail.fig
│   ├── 04-Cart.fig
│   └── 05-Checkout.fig
├── 🧩 Components/
│   ├── Product-Card.fig
│   ├── Shopping-Cart.fig
│   ├── Search.fig
│   └── Payment-Form.fig
├── 🎨 Styles/
│   ├── Colors.style (orange, gray, white)
│   ├── Typography.style
│   └── Effects.style
└── 📐 Assets/
    ├── Product Images/
    ├── Category Icons/
    └── Payment Icons/
```

### Export Settings
- Images: PNG @2x
- Icons: SVG
- Product photos: Optimized JPEG
- CSS: E-commerce theme variables

---

## 🚀 Implementation Notes

### Key Features
- **Product catalog**: Advanced filtering and search
- **Shopping cart**: Persistent cart across sessions
- **Checkout process**: Multi-step with validation
- **Payment integration**: Multiple payment methods
- **User accounts**: Order history and tracking
- **Reviews system**: Customer feedback

### Development Stack
- **Frontend**: React 18, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Payments**: Stripe + Mobile Money APIs
- **Deployment**: AWS + CloudFront

### E-commerce Features
- Inventory management
- Order processing
- Shipping calculation
- Tax calculation
- Discount codes
- Wishlist functionality
- Product recommendations

---

*Cette maquette complète servira de référence pour le développement de la plateforme e-commerce, spécialisée dans les produits artisanaux africains.*
