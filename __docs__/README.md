# Aleena E-commerce Product Page

A pixel-perfect product detail page built with Next.js, React, and Tailwind CSS.

## Project Structure

```
├── __docs__/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   └── utils/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── atoms/
│   │   ├── organisms/
│   │   └── templates/
│   ├── contexts/
│   ├── localization/
│   ├── services/
│   └── styles/
└── public/
```

## Getting Started

```bash
npm install
npm run dev
```

## Design Tokens

All design tokens are defined in `app/globals.css`:

- Colors: `--color-primary`, `--color-secondary`, etc.
- Spacing: `--spacing-xs` through `--spacing-6xl`
- Font sizes: `--font-size-xs` through `--font-size-4xl`
- Border radius: `--radius-sm` through `--radius-full`

## Atomic Design Pattern

This project follows the Atomic Design methodology:

- **Atoms**: Basic UI elements (Button, Icon, CustomText, etc.)
- **Molecules**: Combinations of atoms (not yet implemented)
- **Organisms**: Complex components (Header, ProductDetails, etc.)
- **Templates**: Page layouts (ProductPageTemplate)
