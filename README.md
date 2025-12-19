# Aleena - Product Page

A modern, responsive e-commerce product page built with Next.js 15, React 19, and TypeScript. This project showcases a luxury silk pillowcase product with full RTL (Right-to-Left) support for Arabic language.

## Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **RTL Support**: Complete Arabic language support with RTL layout
- **Product Gallery**: Interactive image gallery with video support
- **Atomic Design**: Component architecture following Atomic Design principles
- **Design Tokens**: Centralized design system with CSS custom properties
- **Accessibility**: Semantic HTML and ARIA attributes for screen readers

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS Modules + CSS Custom Properties
- **Font**: Satoshi (Local)
- **Analytics**: Vercel Analytics

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              ALEENA PROJECT                                 │
│                         E-Commerce Product Page                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐    ┌─────────────────────────────────────────────────┐    │
│  │    app/     │    │                    src/                          │    │
│  │  ─────────  │    │  ───────────────────────────────────────────────│    │
│  │  • layout   │    │                                                  │    │
│  │  • page     │    │  ┌─────────────────────────────────────────────┐│    │
│  │  • globals  │    │  │              components/                    ││    │
│  └─────────────┘    │  │  ─────────────────────────────────────────  ││    │
│                     │  │                                             ││    │
│  ┌─────────────┐    │  │  ┌───────────┐  ┌───────────┐  ┌─────────┐ ││    │
│  │   public/   │    │  │  │  atoms/   │  │molecules/ │  │organisms│ ││    │
│  │  ─────────  │    │  │  │ ───────── │  │ ───────── │  │─────────│ ││    │
│  │  • images   │    │  │  │ • Button  │  │ • Banner  │  │• Header │ ││    │
│  │  • videos   │    │  │  │ • Text    │  │   Item    │  │• Product│ ││    │
│  │  • icons    │    │  │  │ • Icon    │  │ • Mobile  │  │  Gallery│ ││    │
│  └─────────────┘    │  │  │ • Slider  │  │   Search  │  │• Product│ ││    │
│                     │  │  │ • Video   │  │   Banner  │  │  Details│ ││    │
│  ┌─────────────┐    │  │  │ • Image   │  └───────────┘  │• Product│ ││    │
│  │   hooks/    │    │  │  └───────────┘                 │  Info   │ ││    │
│  │  ─────────  │    │  │                                │• Related│ ││    │
│  │  • mobile   │    │  │  ┌───────────────────────────┐ │  Prods  │ ││    │
│  │             │    │  │  │       templates/          │ │• TopBan │ ││    │
│  └─────────────┘    │  │  │ ─────────────────────────  │ └─────────┘ ││    │
│                     │  │  │ • ProductPageTemplate     │             ││    │
│                     │  │  └───────────────────────────┘             ││    │
│                     │  └─────────────────────────────────────────────┘│    │
│                     │                                                  │    │
│                     │  ┌─────────────┐  ┌─────────────┐  ┌──────────┐ │    │
│                     │  │   assets/   │  │  contexts/  │  │services/ │ │    │
│                     │  │ ─────────── │  │ ─────────── │  │──────────│ │    │
│                     │  │ • fonts     │  │ • Language  │  │ • api/   │ │    │
│                     │  │ • icons     │  │   Context   │  │   product│ │    │
│                     │  │ • images    │  └─────────────┘  │   Service│ │    │
│                     │  │ • videos    │                   └──────────┘ │    │
│                     │  └─────────────┘                                │    │
│                     │                                                  │    │
│                     │  ┌─────────────┐  ┌─────────────────────────┐   │    │
│                     │  │   utils/    │  │      localization/      │   │    │
│                     │  │ ─────────── │  │ ─────────────────────── │   │    │
│                     │  │ • helpers   │  │ • en.ts (English)       │   │    │
│                     │  │   (cn,      │  │ • ar.ts (Arabic)        │   │    │
│                     │  │   hooks)    │  │ • index.ts              │   │    │
│                     │  └─────────────┘  └─────────────────────────┘   │    │
│                     └─────────────────────────────────────────────────┘    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  BRAND COLORS                                                               │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐               │
│  │  ████████  │ │  ░░░░░░░░  │ │  ▓▓▓▓▓▓▓▓  │ │  ▒▒▒▒▒▒▒▒  │               │
│  │  Primary   │ │  Secondary │ │   Accent   │ │  Product   │               │
│  │  #212121   │ │  #FFFFFF   │ │  #96ECA3   │ │  #C8B5A0   │               │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘               │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Directory Overview

| Directory           | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `app/`              | Next.js App Router pages, layouts, and global styles |
| `src/components/`   | React components organized by Atomic Design          |
| `src/assets/`       | Static assets (fonts, icons, images, videos)         |
| `src/contexts/`     | React context providers (Language/RTL)               |
| `src/localization/` | Translation files (EN/AR)                            |
| `src/services/`     | API service layer and data fetching                  |
| `src/utils/`        | Helper functions and custom hooks                    |
| `hooks/`            | Shared React hooks                                   |
| `public/`           | Public static files                                  |

## Component Architecture

This project follows the **Atomic Design** methodology:

- **Atoms**: Basic building blocks (Button, CustomText, Icon, Slider, ProductImage, CustomVideoPlayer)
- **Molecules**: Combinations of atoms (BannerItem, MobileSearchBanner)
- **Organisms**: Complex UI sections (Header, ProductDetails, ProductImageGallery, ProductInfoSection, RelatedProducts, TopBanner)
- **Templates**: Page layouts (ProductPageTemplate)

## Design System

Design tokens are defined in `app/globals.css` using CSS custom properties:

- **Colors**: Primary (#212121), Secondary (#ffffff), Accent (#96eca3)
- **Spacing**: 4px to 64px scale using rem units
- **Typography**: Satoshi font with 4 weight variants
- **Border Radius**: sm, md, lg, xl, full

## Internationalization

The app supports English (LTR) and Arabic (RTL):

```typescript
import { useLanguage } from "@/src/contexts/LanguageContext";

const { t, isRTL, setLanguage } = useLanguage();
```

## Documentation

Detailed documentation is available in the `__docs__/` directory:

- **Components**
  - [Atoms](__docs__/components/atoms/) - Button, CustomText, Icon, Slider, ProductImage, CustomVideoPlayer
  - [Molecules](__docs__/components/molecules/) - BannerItem, MobileSearchBanner
  - [Organisms](__docs__/components/organisms/) - Header, TopBanner, ProductImageGallery, ProductInfoSection, ProductDetails, RelatedProducts
  - [Templates](__docs__/components/templates/) - ProductPageTemplate
- **Utilities**
  - [Helpers](__docs__/utils/Helpers.md) - cn, checkMobileView, useClickOutside, useEscapeKey
  - [ProductService](__docs__/utils/ProductService.md) - API service layer
