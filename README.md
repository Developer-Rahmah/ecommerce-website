# Aleena E-Commerce Product Page

A professional Next.js 15 e-commerce product page built with atomic design principles, featuring bilingual support (English/Arabic) with RTL layout handling.

## Project Structure

\`\`\`
project/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & Tailwind config
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Main product page
├── src/
│   ├── components/              # Atomic Design Structure
│   │   ├── atoms/              # Basic building blocks
│   │   │   └── Slider/         # Custom slider with step indicators
│   │   ├── molecules/          # Composite components
│   │   ├── organisms/          # Complex sections
│   │   │   ├── Header/         # Main navigation header
│   │   │   └── ProductDetails/ # Accordion product details
│   │   └── templates/          # Page templates
│   ├── contexts/               # React contexts
│   │   └── LanguageContext.tsx # Language & RTL management
│   ├── localization/           # Translation files
│   │   ├── en.ts              # English translations
│   │   ├── ar.ts              # Arabic translations
│   │   └── index.ts           # Export aggregator
│   ├── theme/                  # Design system
│   │   ├── colors.ts          # Color palette
│   │   ├── spacing.ts         # Spacing & padding values
│   │   ├── typography.ts      # Font definitions
│   │   └── index.ts           # Theme aggregator
│   └── types/                  # TypeScript definitions
├── public/                     # Static assets
│   ├── icons/                 # SVG icons
│   └── *.jpg                  # Product images
└── README.md                   # This file
\`\`\`

## Design System

### Colors
- **Primary**: `#212121` (Black), `#FFFFFF` (White)
- **Neutral**: `#F2F2F2`, `#FAFAFA`, `#DEDEDE`, `#A0A0A0`
- **Accent**: `#96ECA3` (Green), `#ECA396` (Coral)

### Typography
- **Primary Font**: Geist Sans
- **Mono Font**: Geist Mono
- **Sizes**: 12px - 36px scale

### Spacing
- **Scale**: 4px, 8px, 16px, 24px, 32px, 48px, 64px

## Features

- ✅ Atomic Design architecture
- ✅ TypeScript for type safety
- ✅ Bilingual support (EN/AR)
- ✅ RTL layout handling
- ✅ Responsive design (mobile-first)
- ✅ Custom slider component with step indicators
- ✅ Accordion product details (horizontal layout)
- ✅ Image gallery with thumbnails
- ✅ Figma design implementation

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## Key Components

### Header
- Promotional bar with discount code
- Currency selector (SAR)
- Language switcher (EN/AR)
- Navigation menu (desktop & mobile)
- Search and cart icons

### Product Details
- Material Details (Stretch & Lining sliders)
- Cleaning Instructions (icon-based)
- Product Description
- Free Replacement & Return policy

### Slider
- Custom range slider with visual step indicators
- Green pill-shaped thumb
- Active state highlighting
- Snaps to predefined values

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Aleena Fashion
