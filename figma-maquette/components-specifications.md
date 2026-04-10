# Spécifications des Composants Figma

## 🎯 Boutons

### Primary Button
```
Type: Component
Auto Layout: Horizontal
Padding: 16px 32px
Gap: 8px

States:
- Default: background=primary/500, text=white
- Hover: background=primary/600, scale=1.05
- Disabled: opacity=0.5, cursor=not-allowed

Text: "Button Text"
Font: Geist, Medium, 16px
Border Radius: 8px
Shadow: md
```

### Secondary Button
```
Type: Component
Auto Layout: Horizontal
Padding: 16px 32px
Gap: 8px

States:
- Default: background=transparent, border=primary/500, text=primary/500
- Hover: background=primary/500/10, border=primary/600, text=primary/600

Text: "Button Text"
Font: Geist, Medium, 16px
Border: 1px solid
Border Radius: 8px
```

### Ghost Button
```
Type: Component
Auto Layout: Horizontal
Padding: 12px 24px
Gap: 6px

States:
- Default: background=transparent, text=text/secondary
- Hover: background=glass/background, text=text/primary

Text: "Button Text"
Font: Geist, Regular, 14px
Border Radius: 6px
```

## 🃏 Cartes

### Glassmorphism Card
```
Type: Component
Auto Layout: Vertical
Padding: 24px
Gap: 16px

Background: rgba(255, 255, 255, 0.05)
Blur: 10px
Border: 1px solid rgba(255, 255, 255, 0.1)
Border Radius: 16px
Shadow: lg

Content Structure:
- Icon (24x24)
- Title (H4)
- Description (Body)
- Optional: Footer with buttons/tags
```

### Bento Grid Card
```
Type: Component
Auto Layout: Vertical
Padding: 20px
Gap: 12px

Background: glass/background
Border: glass/border
Border Radius: 12px

Variants:
- Small: 200x200px
- Medium: 200x400px  
- Large: 400x400px
- Wide: 600x200px

Content:
- Icon (32x32)
- Title (H5)
- Progress bar (optional)
- Skills tags (optional)
```

### Certification Card
```
Type: Component
Auto Layout: Vertical
Padding: 24px
Gap: 16px

Background: linear-gradient(135deg, primary/500/10, secondary/500/10)
Border: 1px solid primary/500/30
Border Radius: 16px

Content:
- Logo (Cisco, 48x48)
- Title (H4)
- Issuer (Body)
- Date (Small, primary/500)
- Description (Body)
- Skills (Tags)
- Verified badge
```

### Testimonial Card
```
Type: Component
Auto Layout: Vertical
Padding: 24px
Gap: 16px

Background: glass/background
Border: glass/border
Border Radius: 16px

Content:
- Avatar (64x64, SVG component)
- Name (H5)
- Role (Body, text/secondary)
- Rating (5 stars, primary/500)
- Quote (Body, italic)
- Project tag
```

## 🏷️ Badges & Tags

### Skill Tag
```
Type: Component
Auto Layout: Horizontal
Padding: 6px 12px
Gap: 4px

Background: primary/500/10
Border: 1px solid primary/500/30
Border Radius: 20px

Text: Skill Name
Font: Geist, Medium, 12px
Color: primary/500
```

### Status Badge
```
Type: Component
Auto Layout: Horizontal
Padding: 4px 8px
Gap: 4px

Variants:
- Success: background=success/500/20, text=success/500
- Warning: background=warning/500/20, text=warning/500
- Error: background=error/500/20, text=error/500

Text: Status
Font: Geist, Medium, 10px, UPPERCASE
Border Radius: 4px
```

## 👤 Avatars

### Avatar SVG
```
Type: Component
Size: 64x64px
Border Radius: 50%

Variants:
- Marie: Blue gradient
- Pasteur: Green gradient  
- Aissatou: Purple gradient

States:
- Default: scale=1
- Hover: scale=1.1, shadow=glow
```

### Company Logo
```
Type: Component
Auto Layout: Center
Size: 48x48px

Background: white
Border Radius: 8px
Padding: 8px

Content: Company icon (24x24)
```

## 📊 Timeline

### Timeline Item
```
Type: Component
Auto Layout: Vertical
Gap: 8px

Structure:
- Date (Small, primary/500)
- Title (H4)
- Company (Body, text/secondary)
- Description (Body)
- Skills (Tags array)

Connector:
- Line: 2px, primary/500
- Dot: 8px, primary/500, shadow=glow
```

## 📱 Navigation

### Nav Item
```
Type: Component
Auto Layout: Horizontal
Padding: 8px 16px
Gap: 8px

States:
- Default: text=text/secondary
- Active: text=primary/500
- Hover: text=text/primary

Text: Nav Item
Font: Geist, Medium, 14px
```

### Mobile Menu Button
```
Type: Component
Size: 48x48px
Background: transparent
Border: none

Icon: Menu/Close (24x24)
States:
- Default: text/text/secondary
- Hover: text/text/primary
```

## 📞 Contact Elements

### Contact Link
```
Type: Component
Auto Layout: Horizontal
Padding: 12px 16px
Gap: 12px

Background: glass/background
Border: glass/border
Border Radius: 8px

Content:
- Icon (20x20)
- Text (Body)
- Arrow icon (16x16)

States:
- Default: opacity=1
- Hover: opacity=0.8, translateX=4px
```

### Social Link
```
Type: Component
Auto Layout: Horizontal
Padding: 16px 0
Gap: 8px

Border-bottom: 1px solid glass/border

Content:
- Platform name (Body)
- Arrow icon (16x16)

States:
- Default: text/text/secondary
- Hover: text=primary/500, arrow translateX=4px
```

## 🎨 Effects

### Glow Effect
```
Type: Effect
Inner Shadow: 0 0 20px primary/500/30
Apply to: Buttons, Cards on hover
```

### Glass Morphism
```
Type: Effect
Background Blur: 10px
Background: rgba(255, 255, 255, 0.05)
Border: 1px solid rgba(255, 255, 255, 0.1)
```

### Gradient Overlay
```
Type: Effect
Background: linear-gradient(135deg, primary/500/20, secondary/500/20)
Blend Mode: Overlay
```

---

## 🔄 Component Relationships

```
Hero Section
├── Primary Button
├── Glassmorphism Card
└── Avatar SVG

Tech Stack Section
├── Bento Grid Card (multiple)
├── Skill Tag (multiple)
└── Progress Bar

Certifications Section
├── Certification Card (3x)
├── Status Badge
└── Company Logo

Testimonials Section
├── Testimonial Card (3x)
├── Avatar SVG
└── Rating Component

Contact Section
├── Contact Link (Email, WhatsApp)
├── Social Link (multiple)
└── Primary Button
```

## 📐 Responsive Rules

### Desktop (>1024px)
- Full grid layouts
- Large cards (400px+)
- Side-by-side content

### Tablette (768-1024px)
- 2-column layouts
- Medium cards (300px)
- Stacked content

### Mobile (<768px)
- Single column
- Full-width cards
- Compact navigation
